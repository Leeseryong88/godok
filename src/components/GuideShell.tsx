"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { getGuidesUi } from "@/lib/guides/ui";
import {
  applyDocumentLocale,
  DEFAULT_LOCALE,
  loadLocale,
  saveLocale,
  type Locale,
} from "@/lib/i18n/locales";

type Props = {
  children: (locale: Locale) => ReactNode;
};

export function GuideShell({ children }: Props) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);
  const ui = getGuidesUi(locale);

  useEffect(() => {
    const next = loadLocale(DEFAULT_LOCALE);
    setLocale(next);
    applyDocumentLocale(next);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveLocale(locale);
    applyDocumentLocale(locale);
  }, [locale, ready]);

  return (
    <main className="page guide-page">
      <LanguageSwitcher
        locale={locale}
        label={locale === "ko" ? "언어" : "Language"}
        onChange={setLocale}
      />
      <div className="backdrop" aria-hidden="true" />
      <div className="guide-shell">
        <div className="guide-topnav">
          <Link href="/" className="guide-link">
            ← {ui.backHome}
          </Link>
          <Link href="/guides" className="guide-link">
            {ui.backGuides}
          </Link>
        </div>
        {children(locale)}
        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
