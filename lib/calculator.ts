/** Условные коэффициенты только для демо-расчёта в портфолио, не коммерческое предложение */

export type RepairType = "cosmetic" | "newbuild" | "capital" | "design";
export type ObjectType = "apartment" | "house" | "commercial";
export type MaterialLevel = "standard" | "comfort" | "premium";

const PRICES: Record<
  RepairType,
  { base: number; apartment: number; house: number; commercial: number }
> = {
  cosmetic: { base: 8500, apartment: 1, house: 1.15, commercial: 1.25 },
  newbuild: { base: 11200, apartment: 1, house: 1.12, commercial: 1.2 },
  capital: { base: 14500, apartment: 1, house: 1.18, commercial: 1.3 },
  design: { base: 28000, apartment: 1, house: 1.22, commercial: 1.35 },
};

const LEVEL_MULT: Record<MaterialLevel, number> = {
  standard: 1,
  comfort: 1.25,
  premium: 1.55,
};

export function calculateEstimate(
  area: number,
  type: RepairType,
  object: ObjectType,
  level: MaterialLevel,
): { from: number; to: number } {
  const cfg = PRICES[type];
  const perSqm = cfg.base * cfg[object] * LEVEL_MULT[level];
  const from = area * perSqm;
  return { from, to: from * 1.1 };
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value));
}
