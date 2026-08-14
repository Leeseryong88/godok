"use client";

import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export type LegalPageKind = "about" | "privacy" | "contact";

type Props = {
  kind: LegalPageKind;
};

export function LegalPage({ kind }: Props) {
  return (
    <LegalShell>
      {(t) => {
        if (kind === "about") {
          return (
            <>
              <h1 className="legal-title">{t.aboutTitle}</h1>
              <div className="legal-body">
                {t.aboutBody.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
                <p className="legal-inline-links">
                  <Link href="/">{t.backHome}</Link>
                  <span aria-hidden="true"> · </span>
                  <Link href="/cities">{t.navCities}</Link>
                  <span aria-hidden="true"> · </span>
                  <Link href="/contact">{t.navContact}</Link>
                  <span aria-hidden="true"> · </span>
                  <Link href="/privacy">{t.navPrivacy}</Link>
                </p>
              </div>
            </>
          );
        }

        if (kind === "privacy") {
          return (
            <>
              <h1 className="legal-title">{t.privacyTitle}</h1>
              <div className="legal-body">
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
                  <Link href="/">{t.backHome}</Link>
                </p>
              </div>
            </>
          );
        }

        return (
          <>
            <h1 className="legal-title">{t.contactTitle}</h1>
            <div className="legal-body">
              {t.contactBody.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}

              <ul className="legal-contact-list">
                {SITE.contactEmail ? (
                  <li>
                    <span className="legal-contact-label">
                      {t.contactEmailLabel}
                    </span>
                    <a href={`mailto:${SITE.contactEmail}`}>
                      {SITE.contactEmail}
                    </a>
                  </li>
                ) : null}
                <li>
                  <span className="legal-contact-label">
                    {t.contactGithubLabel}
                  </span>
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
                <Link href="/">{t.backHome}</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/about">{t.navAbout}</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/privacy">{t.navPrivacy}</Link>
              </p>
            </div>
          </>
        );
      }}
    </LegalShell>
  );
}
