const API_BORG_BASE_URL =
  "https://borg-api-techchallenge.swissborg-stage.com/api/";

const getUrl = (slug: string) => {
  return `${API_BORG_BASE_URL}${slug}`;
};

export const API_BORG_ENDPOINTS = {
  historical_price: {
    day: getUrl("historical-price/day"),
    month: getUrl("historical-price/month"),
    year: getUrl("historical-price/year"),
    all: getUrl("historical-price/all"),
  },
  price: getUrl("price"),
  borg_stats: getUrl("borg-stats"),
  burn_transactions: getUrl("burn-transactions"),
};
