import { renderToStaticMarkup } from "react-dom/server";
import { PieChartData } from "../../config/types";

export const dataStats = [
  {
    title: "Remaining circulating supply",
    attribute: "circulatingSupply",
    label: "Circulating Supply",
    icon: "swissborg.svg",
    color: "rgba(204, 243, 232, 1)",
  },
  {
    title: "BORG Staked",
    attribute: "stakedBorg",
    label: "Staked",
    showPercentage: true,
    icon: "borg.svg",
    color: "rgba(19, 229, 191, 1)",
  },
  {
    title: "BORG in Yield",
    attribute: "borgInYield",
    label: "In Yield",
    showPercentage: true,
    icon: "borg.svg",
    color: "rgba(173, 149, 255, 1)",
  },
  {
    title: "Circulating supply burned",
    attribute: "borgBurned",
    label: "Burned",
    icon: "burned.svg",
    color: "rgba(54, 64, 83, 1)",
  },
  {
    title: "BORG in buyback pool",
    attribute: "borgInBubackPool",
    label: "In buyback pool",
    icon: "buyback.svg",
    color: "rgba(122, 188, 255, 1)",
  },
];

export const chartConfiguration = (dataChart: PieChartData[]) => {
  return {
    title: "",
    credits: {
      enabled: false,
    },
    chart: {
      type: "pie",
      height: "70%",
      margin: [0, 0, 10, 0],
    },
    plotOptions: {
      series: {
        animation: false,
        borderWidth: 0,
        enableMouseTracking: false,
      },
      pie: {
        slicedOffset: 0,
        innerSize: "65%",
        borderRadius: 0,
        startAngle: 50,
        shadow: {
          color: "rgba(0, 0, 0, 0.6)",
          offsetX: -1.5,
          opacity: 1.03,
        },
      },
    },
    series: [
      {
        data: dataChart,
        dataLabels: {
          style: { fontWeight: "normal" },
          useHTML: true,
          connectorWidth: 0,
          distance: 5,
          formatter(this: Highcharts.PointLabelObject) {
            return renderToStaticMarkup(this.key);
          },
        },
      },
    ],
  };
};
