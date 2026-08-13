import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Amap Search.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell title={(t) => t.privacyTitle}>
      {(t) => (
        <>
          <p className="legal-updated">{t.privacyUpdated}</p>
          {t.privacyBody.map((para) => (
            <p key={para.slice(0, 32)} className="legal-block">
              {para}
            </p>
          ))}
          <p className="legal-inline-links">
            <Link href="/contact">{t.navContact}</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/about">{t.navAbout}</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/guides">{t.navGuides}</Link>
          </p>
        </>
      )}
    </LegalShell>
  );
}
