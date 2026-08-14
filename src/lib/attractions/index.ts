import { BEIJING_GUIDE } from "./beijing";
import { CHENGDU_GUIDE } from "./chengdu";
import { CHONGQING_GUIDE } from "./chongqing";
import { DALIAN_GUIDE } from "./dalian";
import { GUANGZHOU_GUIDE } from "./guangzhou";
import { HANGZHOU_GUIDE } from "./hangzhou";
import { HARBIN_GUIDE } from "./harbin";
import { KUNMING_GUIDE } from "./kunming";
import { NANJING_GUIDE } from "./nanjing";
import { QINGDAO_GUIDE } from "./qingdao";
import { SHANGHAI_GUIDE } from "./shanghai";
import { SHENZHEN_GUIDE } from "./shenzhen";
import { SUZHOU_GUIDE } from "./suzhou";
import { TIANJIN_GUIDE } from "./tianjin";
import { WUHAN_GUIDE } from "./wuhan";
import { XIAMEN_GUIDE } from "./xiamen";
import { XIAN_GUIDE } from "./xian";
import type { Attraction, CityGuide } from "./types";

export type { Attraction, CityGuide };
export { getSpotBlurb, getSpotMeta } from "./meta";
export { cityMapSrc, getMapViewForCity } from "./mapView";

/** 앱에 등록된 도시별 명소 */
export const CITY_GUIDES: CityGuide[] = [
  SHANGHAI_GUIDE,
  BEIJING_GUIDE,
  GUANGZHOU_GUIDE,
  SHENZHEN_GUIDE,
  CHENGDU_GUIDE,
  HANGZHOU_GUIDE,
  CHONGQING_GUIDE,
  XIAN_GUIDE,
  NANJING_GUIDE,
  WUHAN_GUIDE,
  SUZHOU_GUIDE,
  TIANJIN_GUIDE,
  QINGDAO_GUIDE,
  XIAMEN_GUIDE,
  KUNMING_GUIDE,
  DALIAN_GUIDE,
  HARBIN_GUIDE,
];

/** 명소 지도 탭 도시 목록 */
export const SPOTS_CITY_TABS: { city: string; enabled: boolean }[] =
  CITY_GUIDES.map((g) => ({ city: g.city, enabled: true }));

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
