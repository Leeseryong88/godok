import { getCityArticleByCityZh } from "@/lib/cityPages";
import { getCityArticleCopy } from "@/lib/cityPages/copy";
import type { Locale } from "@/lib/i18n/locales";
import { getSpotMeta } from "./meta";

export function getSpotAbout(
  cityZh: string,
  attractionId: string,
  locale: Locale | string
): string[] {
  const article = getCityArticleByCityZh(cityZh);
  if (!article) return [];
  const copy = getCityArticleCopy(article, locale);
  return copy.spots[attractionId]?.body ?? [];
}

export function getSpotHowTo(
  cityZh: string,
  attractionId: string,
  locale: Locale | string
): string[] {
  const meta = getSpotMeta(cityZh, attractionId);
  if (!meta) return [];
  const paras = locale === "ko" ? meta.ko : meta.en;
  const about = getSpotAbout(cityZh, attractionId, locale);
  if (about.length && paras.length > 1) return paras.slice(-1);
  return paras;
}
