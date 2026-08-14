import type { Locale } from "@/lib/i18n/locales";
import type { CityArticle, CityArticleCopy } from "./types";

export function getCityArticleCopy(
  article: CityArticle,
  locale: Locale | string
): CityArticleCopy {
  return locale === "ko" ? article.ko : article.en;
}
