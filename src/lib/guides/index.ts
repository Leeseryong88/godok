import { BEIJING_ARTICLE } from "./content/beijing";
import { CHENGDU_ARTICLE } from "./content/chengdu";
import { CHONGQING_ARTICLE } from "./content/chongqing";
import { DALIAN_ARTICLE } from "./content/dalian";
import { GUANGZHOU_ARTICLE } from "./content/guangzhou";
import { HANGZHOU_ARTICLE } from "./content/hangzhou";
import { HARBIN_ARTICLE } from "./content/harbin";
import { KUNMING_ARTICLE } from "./content/kunming";
import { NANJING_ARTICLE } from "./content/nanjing";
import { QINGDAO_ARTICLE } from "./content/qingdao";
import { SHANGHAI_ARTICLE } from "./content/shanghai";
import { SHENZHEN_ARTICLE } from "./content/shenzhen";
import { SUZHOU_ARTICLE } from "./content/suzhou";
import { TIANJIN_ARTICLE } from "./content/tianjin";
import { WUHAN_ARTICLE } from "./content/wuhan";
import { XIAMEN_ARTICLE } from "./content/xiamen";
import { XIAN_ARTICLE } from "./content/xian";
import type { CityArticle, GuideLocaleContent } from "./types";
import type { Locale } from "@/lib/i18n/locales";

export type { CityArticle, GuideLocaleContent };

export const CITY_ARTICLES: CityArticle[] = [
  SHANGHAI_ARTICLE,
  BEIJING_ARTICLE,
  GUANGZHOU_ARTICLE,
  SHENZHEN_ARTICLE,
  CHENGDU_ARTICLE,
  HANGZHOU_ARTICLE,
  CHONGQING_ARTICLE,
  XIAN_ARTICLE,
  NANJING_ARTICLE,
  WUHAN_ARTICLE,
  SUZHOU_ARTICLE,
  TIANJIN_ARTICLE,
  QINGDAO_ARTICLE,
  XIAMEN_ARTICLE,
  KUNMING_ARTICLE,
  DALIAN_ARTICLE,
  HARBIN_ARTICLE,
];

export function getArticleBySlug(slug: string): CityArticle | undefined {
  return CITY_ARTICLES.find((a) => a.slug === slug);
}

export function getArticleContent(
  article: CityArticle,
  locale: Locale | string
): GuideLocaleContent {
  return locale === "ko" ? article.ko : article.en;
}

export function getAllGuideSlugs(): string[] {
  return CITY_ARTICLES.map((a) => a.slug);
}
