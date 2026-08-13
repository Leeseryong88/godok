import { SHANGHAI_GUIDE } from "./shanghai";
import type { Attraction, CityGuide } from "./types";

export type { Attraction, CityGuide };

/** 도시별 가이드 — 이후 베이징 등 추가 */
export const CITY_GUIDES: CityGuide[] = [SHANGHAI_GUIDE];

export function getCityGuide(cityZh: string): CityGuide | undefined {
  return CITY_GUIDES.find((g) => g.city === cityZh.trim());
}

export function getAttractionLabel(
  attraction: Attraction,
  locale: string
): string {
  const labels = attraction.labels as Record<string, string>;
  return labels[locale] || labels.en || attraction.keyword;
}
