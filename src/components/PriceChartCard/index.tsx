import React, { useMemo } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import { Loader } from "../Loader"; // TODO
import { chartConfiguration } from "./config";
import {
  Period,
  HistoricalPrice,
  ExchangeRates,
  CurrencyCode,
  AreaChartData,
} from "../../config/types";
import { chartMovingAverage } from "../../utils/chartMovingAverage";
import { priceColor } from "../../utils";
import IconFiat from "../../images/icon-fiat.svg";
import IconCirceArrowRight from "../../images/icon-circle-arrow-right.svg";
import IconBorgCrypto from "../../images/icon-borg-crypto.svg";
import {
  Card,
  CardTextPrice,
  CardTextChange,
  CardHeader,
  CardHeaderChange,
  CardCurrencies,
  CardCurrenciesArrow,
  CardCurrenciesItem,
  ChartArea,
  ButtonsArea,
  Button,
} from "./index.styled";

interface PriceChartCardProps {
  data: HistoricalPrice[];
  dataPrice: ExchangeRates | undefined;
  currency: CurrencyCode;
  selectedPeriod: Period;
  setSelectedPeriod: (selected: Period) => void;
}

const periods: { title: string; value: Period }[] = [
  {
    title: "1D",
    value: "day",
  },
  {
    title: "1M",
    value: "month",
  },
  {
    title: "1Y",
    value: "year",
  },
  {
    title: "ALL",
    value: "all",
  },
];

export default function PriceChartCard({
  data,
  dataPrice,
  currency,
  selectedPeriod,
  setSelectedPeriod,
}: PriceChartCardProps) {
  const handleSelectPeriod = async (selected: Period) => {
    setSelectedPeriod(selected);
  };

  const dataOptions = useMemo(() => {
    const dataTransformed: AreaChartData = data?.map((item) => [
      new Date(item.timestamp).getTime(),
      item.price,
    ]);
    const dataSmoothed = chartMovingAverage(dataTransformed, 10);
    const values = dataSmoothed.map((point) => point[1]) ?? [];
    const min = Math.min(...values);
    const max = Math.max(...values);

    return {
      series: [
        {
          type: "areaspline",
          data: dataSmoothed,
        },
      ],
      ...chartConfiguration(min, max),
    };
  }, [data]);

  return (
    <Card>
      <CardHeader>
        <CardCurrencies>
          <CardCurrenciesItem
            src={IconFiat}
            alt={currency + "-exchange-icon"}
          />
          <CardCurrenciesArrow
            src={IconCirceArrowRight}
            alt={"borg-exchange-icon"}
          />
          <CardCurrenciesItem src={IconBorgCrypto} alt={"borg-exchange-icon"} />
        </CardCurrencies>
        <div>
          <>
            <CardTextPrice>
              {`${currency.toUpperCase()} ${dataPrice?.[currency]?.price.toFixed(3)}`}
            </CardTextPrice>
            <CardHeaderChange>
              <CardTextChange
                style={{
                  color:
                    dataPrice && priceColor(dataPrice?.[currency]?.change24h),
                }}
              >
                {`${dataPrice?.[currency]?.change24h}% 24 Hours`}
              </CardTextChange>
            </CardHeaderChange>
          </>
        </div>
      </CardHeader>
      <ChartArea>
        <HighchartsReact
          highcharts={Highcharts}
          options={dataOptions}
          containerProps={{ style: { height: "100%", width: "100%" } }}
        />
      </ChartArea>
      <ButtonsArea>
        {periods.map((period) => {
          return (
            <Button
              key={period.value}
              onClick={() => handleSelectPeriod(period.value)}
              selected={selectedPeriod === period.value}
            >
              {period.title}
            </Button>
          );
        })}
      </ButtonsArea>
    </Card>
  );
}
