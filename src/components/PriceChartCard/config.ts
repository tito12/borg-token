import Tooltip from "./Tooltip";
import { renderToStaticMarkup } from "react-dom/server";
import { theme } from "../../config/theme";

export const chartConfiguration = (min: number, max: number) => {
  return {
    title: "",
    credits: { enabled: false },
    chart: {
      type: "areaspline",
      backgroundColor: "rgba(25, 30, 41, 0.5)",
      margin: [15, -5, 15, -5],
      style: {
        fontSize: "1.4rem",
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        y: 5,
        style: {
          color: "#FFF",
          fontSize: "0.9rem",
        },
      },
      minPadding: 0,
      maxPadding: 0,
    },
    yAxis: {
      max: max,
      min: min,
      tickAmount: 5,
      tickInterval: 0.05,
      opposite: true,
      labels: {
        x: -32,
        style: {
          color: "#FFF",
          fontSize: "1.1rem",
          fontWeight: "600",
        },
      },
      gridLineColor: "rgba(255,255,255,0.2)",
      gridLineWidth: 0.5,
    },
    legend: { enabled: false },
    tooltip: {
      useHTML: true,
      formatter(this: Highcharts.TooltipFormatterContextObject) {
        return renderToStaticMarkup(Tooltip(this.point.y, this.point.category));
      },
      backgroundColor: "rgb(25, 30, 41)",
      style: { color: "#fff" },
    },
    plotOptions: {
      areaspline: {
        animation: false,
        marker: {
          enabled: false,
        },
        color: theme.colors.primary,
        lineWidth: 1,
        fillColor: {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, "transparent"],
            [1, "rgba(1, 195, 141, 0.35)"],
          ],
        },
      },
    },
  };
};
