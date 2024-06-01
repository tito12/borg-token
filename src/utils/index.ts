import { theme } from "../config/theme";

export function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

export function priceColor(value: number): string {
  return value > 0 ? theme.colors.success : theme.colors.failure;
}

export function percentage(value: number): string {
  return (value * 100).toFixed(2);
}
