import type { CityArticle } from "./types";
import { BEIJING_ARTICLE } from "./beijing";
import { CHENGDU_ARTICLE } from "./chengdu";
import { CHONGQING_ARTICLE } from "./chongqing";
import { DALIAN_ARTICLE } from "./dalian";
import { GUANGZHOU_ARTICLE } from "./guangzhou";
import { HANGZHOU_ARTICLE } from "./hangzhou";
import { HARBIN_ARTICLE } from "./harbin";
import { KUNMING_ARTICLE } from "./kunming";
import { NANJING_ARTICLE } from "./nanjing";
import { QINGDAO_ARTICLE } from "./qingdao";
import { SHANGHAI_ARTICLE } from "./shanghai";
import { SHENZHEN_ARTICLE } from "./shenzhen";
import { SUZHOU_ARTICLE } from "./suzhou";
import { TIANJIN_ARTICLE } from "./tianjin";
import { WUHAN_ARTICLE } from "./wuhan";
import { XIAMEN_ARTICLE } from "./xiamen";
import { XIAN_ARTICLE } from "./xian";

export type { CityArticle } from "./types";

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

export function getCityArticle(slug: string): CityArticle | undefined {
  return CITY_ARTICLES.find((article) => article.slug === slug);
}

export function getCityArticleByCityZh(cityZh: string): CityArticle | undefined {
  return CITY_ARTICLES.find((article) => article.cityZh === cityZh.trim());
}

export function listCityArticleLinks(): { slug: string; cityZh: string }[] {
  return CITY_ARTICLES.map((article) => ({
    slug: article.slug,
    cityZh: article.cityZh,
  }));
}
