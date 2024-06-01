import React, { useEffect, useState, useRef } from "react";
import type { HeadFC, PageProps, GetServerDataReturn } from "gatsby";
import PriceChartCard from "../components/PriceChartCard";
import Container from "../components/Container";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import StatsToken from "../components/StatsToken";
import { API_BORG_ENDPOINTS } from "../services/borg";
import { fetchData } from "../utils/fetchData";
import {
  Period,
  HistoricalPrice,
  BorgStats,
  ExchangeRates,
} from "../config/types";
import {
  Hero,
  HeroTitle,
  HeroText,
  HeroChart,
  Stats,
  StatsTitle,
} from "./index.styled";

type ServerDataProps = {
  dataChart?: HistoricalPrice[];
  dataPrice?: ExchangeRates;
  dataBorgStats?: BorgStats;
  error?: string;
};

const IndexPage: React.FC<PageProps> = ({
  serverData,
}: {
  serverData: ServerDataProps;
}) => {
  const { dataChart, dataPrice, dataBorgStats, error } = serverData;
  const firstRender = useRef(true);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("day");
  const [dataChartState, setDataChart] = useState<HistoricalPrice[]>(
    dataChart ?? [],
  );

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    (async () => {
      const { data } = await fetchData<HistoricalPrice[]>(
        API_BORG_ENDPOINTS.historical_price?.[selectedPeriod],
      );
      setDataChart(data);
    })();
  }, [selectedPeriod]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <Hero>
        <Container>
          <HeroTitle>BORG Token Metrics</HeroTitle>
          <HeroText>
            Deep-dive into the statistics of BORG and the mechanics of the full
            SwissBorg Ecosystem.
          </HeroText>
          <HeroChart>
            <PriceChartCard
              data={dataChartState}
              dataPrice={dataPrice}
              currency="usd"
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          </HeroChart>
        </Container>
      </Hero>
      <Stats>
        <Container>
          <StatsTitle>Breakdown of BORG’s circulating supply</StatsTitle>
          <StatsToken data={dataBorgStats} />
        </Container>
      </Stats>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <SEO
    title="Metrics - BORG token as technology from future"
    description="With SwissBorg, you have the opportunity not only to be a user but to become a real contributor by holding BORG tokens and benefiting from the growth of the ecosystem."
    image="/meta-preview-image.png"
  />
);

export async function getServerData(): GetServerDataReturn<ServerDataProps> {
  try {
    const [dataChart, dataPrice, dataBorgStats] = await Promise.all([
      fetch(API_BORG_ENDPOINTS.historical_price.day).then((res) => res.json()),
      fetch(API_BORG_ENDPOINTS.price).then((res) => res.json()),
      fetch(API_BORG_ENDPOINTS.borg_stats).then((res) => res.json()),
      fetch(API_BORG_ENDPOINTS.burn_transactions).then((res) => res.json()),
    ]);

    return {
      props: { dataChart, dataPrice, dataBorgStats },
    };
  } catch (error) {
    return {
      props: { error: "Error...sorry, something went wrong" },
    };
  }
}

export default IndexPage;
