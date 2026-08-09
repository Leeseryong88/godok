export const LOCALES = ["en", "es", "hi", "ar", "ko"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ko";

export const LOCALE_META: Record<
  Locale,
  { label: string; native: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", native: "English", dir: "ltr" },
  es: { label: "Spanish", native: "Español", dir: "ltr" },
  hi: { label: "Hindi", native: "हिन्दी", dir: "ltr" },
  ar: { label: "Arabic", native: "العربية", dir: "rtl" },
  ko: { label: "Korean", native: "한국어", dir: "ltr" },
};

const LOCALE_KEY = "godok.locale.v1";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function loadLocale(fallback: Locale = DEFAULT_LOCALE): Locale {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(LOCALE_KEY)?.trim() || "";
    return isLocale(raw) ? raw : fallback;
  } catch {
    return fallback;
  }
}

export function saveLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // ignore quota / private mode
  }
}

export function applyDocumentLocale(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.dir = LOCALE_META[locale].dir;
}
