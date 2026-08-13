"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { getLegalCopy, type LegalCopy } from "@/lib/i18n/legal";
import {
  applyDocumentLocale,
  DEFAULT_LOCALE,
  loadLocale,
  saveLocale,
  type Locale,
} from "@/lib/i18n/locales";

type Props = {
  children: (t: LegalCopy, locale: Locale) => ReactNode;
};

export function LegalShell({ children }: Props) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);
  const t = getLegalCopy(locale);

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
    <main className="page legal-page">
      <LanguageSwitcher
        locale={locale}
        label={locale === "ko" ? "언어" : "Language"}
        onChange={setLocale}
      />

      <div className="backdrop" aria-hidden="true" />

      <div className="legal-shell">
        <Link href="/" className="legal-back">
          ← {t.backHome}
        </Link>
        {children(t, locale)}
        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
