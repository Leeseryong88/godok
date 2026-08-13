import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Amap Search support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalShell title={(t) => t.contactTitle}>
      {(t, locale) => (
        <>
          {t.contactBody.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}

          <ul className="legal-contact-list">
            {SITE.contactEmail ? (
              <li>
                <span className="legal-contact-label">{t.contactEmailLabel}</span>
                <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
              </li>
            ) : null}
            <li>
              <span className="legal-contact-label">{t.contactGithubLabel}</span>
              <a
                href={SITE.githubIssues}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.githubIssues}
              </a>
            </li>
          </ul>

          <p className="legal-inline-links">
            <Link href="/guides">
              {locale === "ko" ? "여행 가이드" : "Travel guides"}
            </Link>
            <span aria-hidden="true"> · </span>
            <Link href="/about">{t.navAbout}</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/privacy">{t.navPrivacy}</Link>
          </p>
        </>
      )}
    </LegalShell>
  );
}
