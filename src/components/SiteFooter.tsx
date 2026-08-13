"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLegalCopy } from "@/lib/i18n/legal";
import {
  DEFAULT_LOCALE,
  loadLocale,
  type Locale,
} from "@/lib/i18n/locales";

type Props = {
  locale?: Locale;
};

export function SiteFooter({ locale: localeProp }: Props) {
  const [locale, setLocale] = useState<Locale>(localeProp || DEFAULT_LOCALE);

  useEffect(() => {
    if (localeProp) {
      setLocale(localeProp);
      return;
    }
    setLocale(loadLocale(DEFAULT_LOCALE));
  }, [localeProp]);

  const t = getLegalCopy(locale);

  return (
    <footer className="site-footer">
      <nav className="site-footer-nav" aria-label="Site">
        <Link href="/">{t.backHome}</Link>
        <Link href="/guides">{t.navGuides}</Link>
        <Link href="/about">{t.navAbout}</Link>
        <Link href="/privacy">{t.navPrivacy}</Link>
        <Link href="/contact">{t.navContact}</Link>
      </nav>
      <p className="site-footer-note">{t.footerNote}</p>
    </footer>
  );
}
