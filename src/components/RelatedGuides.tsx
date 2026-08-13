"use client";

import Link from "next/link";
import { CITY_ARTICLES, getArticleContent } from "@/lib/guides";
import { getGuidesUi } from "@/lib/guides/ui";
import { getMessages } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  currentSlug: string;
  locale: Locale;
};

export function RelatedGuides({ currentSlug, locale }: Props) {
  const ui = getGuidesUi(locale);
  const cities = getMessages(locale).cities;
  const idx = CITY_ARTICLES.findIndex((a) => a.slug === currentSlug);
  if (idx < 0) return null;

  const prev = CITY_ARTICLES[idx - 1];
  const next = CITY_ARTICLES[idx + 1];
  const others = CITY_ARTICLES.filter((a) => a.slug !== currentSlug).slice(
    0,
    4
  );

  return (
    <nav className="related-guides" aria-label={ui.navGuides}>
      <div className="related-guides-pager">
        {prev ? (
          <Link
            href={`/guides/${prev.slug}`}
            className="related-guides-page-link"
          >
            ← {cities[prev.cityZh] || prev.cityZh}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/guides" className="related-guides-page-link is-center">
          {ui.backGuides}
        </Link>
        {next ? (
          <Link
            href={`/guides/${next.slug}`}
            className="related-guides-page-link is-end"
          >
            {cities[next.cityZh] || next.cityZh} →
          </Link>
        ) : (
          <span />
        )}
      </div>

      <h2 className="related-guides-title">
        {locale === "ko" ? "다른 도시 가이드" : "More city guides"}
      </h2>
      <ul className="related-guides-list">
        {others.map((article) => {
          const title = getArticleContent(article, locale).title;
          return (
            <li key={article.slug}>
              <Link href={`/guides/${article.slug}`}>
                <span className="related-guides-city">
                  {cities[article.cityZh] || article.cityZh}
                </span>
                <span className="related-guides-name">{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
