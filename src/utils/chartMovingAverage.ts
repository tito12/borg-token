import { AreaChartData } from "../config/types";

export function chartMovingAverage(
  data: AreaChartData,
  windowSize: number,
): AreaChartData {
  let result: AreaChartData = [];

  for (let i = 0; i < data?.length - windowSize + 1; i++) {
    let window = data?.slice(i, i + windowSize);
    let sum = window.reduce((acc, point) => acc + point[1], 0);
    let average = sum / windowSize;
    result.push([window[windowSize - 1][0], average]);
  }

  return result;
}
