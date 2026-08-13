"use client";

import Link from "next/link";
import { GuideShell } from "@/components/GuideShell";
import { getCityGuide } from "@/lib/attractions";
import { CITY_ARTICLES, getArticleContent } from "@/lib/guides";
import { getGuidesUi } from "@/lib/guides/ui";
import { getMessages } from "@/lib/i18n/messages";

export function GuidesIndex() {
  return (
    <GuideShell>
      {(locale) => {
        const ui = getGuidesUi(locale);
        const cities = getMessages(locale).cities;

        return (
          <article className="guide-article">
            <header className="guide-header">
              <h1 className="guide-title">{ui.indexTitle}</h1>
              <p className="guide-lead">{ui.indexLead}</p>
            </header>

            <nav className="guide-city-pick" aria-label={ui.cityPick}>
              <p className="guide-toc-label">{ui.cityPick}</p>
              <div className="guide-toc-scroll">
                {CITY_ARTICLES.map((article) => {
                  const cityLabel = cities[article.cityZh] || article.cityZh;
                  return (
                    <a
                      key={article.slug}
                      href={`#guide-card-${article.slug}`}
                      className="guide-toc-link"
                    >
                      {cityLabel}
                    </a>
                  );
                })}
              </div>
            </nav>

            <ul className="guide-card-list">
              {CITY_ARTICLES.map((article) => {
                const content = getArticleContent(article, locale);
                const cityLabel = cities[article.cityZh] || article.cityZh;
                const spotCount =
                  getCityGuide(article.cityZh)?.attractions.length || 0;

                return (
                  <li key={article.slug} id={`guide-card-${article.slug}`}>
                    <Link
                      href={`/guides/${article.slug}`}
                      className="guide-card"
                    >
                      <div className="guide-card-top">
                        <span className="guide-card-city">{cityLabel}</span>
                        <span className="guide-card-meta">
                          {article.readingMinutes} {ui.minutes}
                          {spotCount
                            ? ` · ${spotCount} ${ui.spotsCount}`
                            : ""}
                        </span>
                      </div>
                      <h2 className="guide-card-title">{content.title}</h2>
                      <p className="guide-card-bestfor">
                        <span className="guide-card-bestfor-label">
                          {ui.bestForLabel}
                        </span>
                        {content.bestFor}
                      </p>
                      <span className="guide-card-cta">
                        {ui.readGuide}
                        <span aria-hidden="true"> →</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      }}
    </GuideShell>
  );
}
