import { SHANGHAI_GUIDE } from "./shanghai";
import type { Attraction, CityGuide } from "./types";

export type { Attraction, CityGuide };

/** 도시별 가이드 — 데이터가 있는 도시만 목록에 포함 */
export const CITY_GUIDES: CityGuide[] = [SHANGHAI_GUIDE];

/**
 * 인기 명소 탭의 도시 세부 탭.
 * enabled=false 는 추후 확장용(선택 불가).
 */
export const SPOTS_CITY_TABS: { city: string; enabled: boolean }[] = [
  { city: "上海", enabled: true },
  { city: "北京", enabled: false },
  { city: "广州", enabled: false },
  { city: "深圳", enabled: false },
  { city: "成都", enabled: false },
  { city: "杭州", enabled: false },
];

export const DEFAULT_SPOTS_CITY = "上海";

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
