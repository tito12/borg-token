export type CurrencyInfo = {
  price: number;
  change24h: number;
};

export type CurrencyCode = "usd" | "chf" | "eur" | "gbp";

export type ExchangeRates = {
  [key in CurrencyCode]: CurrencyInfo;
};

export type Period = "day" | "month" | "year" | "all";

export type HistoricalPrice = {
  timestamp: string;
  price: number;
};

export type BorgStats = Record<string, number>;

export type PieChartData = {
  name: React.ReactNode;
  y: number;
  color: string;
};

export type AreaChartData = [number, number][];
