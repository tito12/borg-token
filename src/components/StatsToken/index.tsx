import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chartConfiguration, dataStats } from "./config";
import { BorgStats, PieChartData } from "../../config/types";
import { percentage, formatNumber } from "../../utils";
import Label from "./Label";
import {
  Grid,
  Card,
  Item,
  ItemAreaValues,
  Icon,
  TextLabel,
  TextValue,
  TextValueInfo,
  ChartArea,
} from "./index.styled";

interface StatsTokenProps {
  data: BorgStats | undefined;
}

export default function StatsToken({ data }: StatsTokenProps) {
  if (!data) return;

  const dataChart: PieChartData[] = dataStats.map((item) => ({
    name: Label(item.label, item.color),
    y: data?.[item.attribute + "Percentage"],
    color: item.color,
  }));

  return (
    <Grid>
      <Card>
        {dataStats.map((item) => {
          return (
            <Item key={item.attribute}>
              <Icon src={"icons/" + item.icon} alt={`${item.title}-icon`} />
              <ItemAreaValues>
                <TextLabel>{item.title}</TextLabel>
                <div>
                  <TextValue>
                    {data?.[item.attribute + "Tokens"] &&
                      formatNumber(data[item.attribute + "Tokens"])}
                  </TextValue>
                  {item.showPercentage && (
                    <TextValueInfo>
                      (
                      <b>
                        {data?.[item.attribute + "Percentage"] &&
                          percentage(data[item.attribute + "Percentage"])}
                      </b>
                      % of Circulating supply)
                    </TextValueInfo>
                  )}
                </div>
              </ItemAreaValues>
            </Item>
          );
        })}
      </Card>
      <ChartArea>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartConfiguration(dataChart)}
          containerProps={{
            style: { height: "auto", width: "100%" },
          }}
        />
      </ChartArea>
    </Grid>
  );
}
