import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "About",
  description: "About Amap Search, an unofficial helper for the Amap app.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <LegalShell title={(t) => t.aboutTitle}>
      {(t, locale) => (
        <>
          {t.aboutBody.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <p className="legal-inline-links">
            <Link href="/guides">
              {locale === "ko" ? "도시별 여행 가이드 보기" : "Browse city guides"}
            </Link>
            <span aria-hidden="true"> · </span>
            <Link href="/contact">{t.navContact}</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/privacy">{t.navPrivacy}</Link>
          </p>
        </>
      )}
    </LegalShell>
  );
}
