import type { Locale } from "@/lib/i18n/locales";

/** ko/en 필수, 나머지 없으면 en 폴백 */
export function L(
  ko: string,
  en: string,
  es?: string,
  hi?: string,
  ar?: string
): Record<Locale, string> {
  return {
    ko,
    en,
    es: es || en,
    hi: hi || en,
    ar: ar || en,
  };
}
