import type { Locale } from "@/lib/i18n/locales";

export type Attraction = {
  id: string;
  /** Amap 검색용 중국어 키워드 */
  keyword: string;
  /** 표시 이름 (로케일별) */
  labels: Record<Locale, string>;
};

export type CityGuide = {
  /** 고덕 city 값 (중국어) */
  city: string;
  attractions: Attraction[];
};
