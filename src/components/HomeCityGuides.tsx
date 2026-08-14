"use client";

import { useState } from "react";
import Link from "next/link";
import { CITY_ARTICLES } from "@/lib/cityPages";
import { getCityArticleCopy } from "@/lib/cityPages/copy";
import { getMessages } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/locales";
import type { CityArticle } from "@/lib/cityPages/types";

type Props = {
  locale: Locale;
};

const PREVIEW_SLUGS = ["shanghai", "beijing"] as const;
const PREVIEW_SET = new Set<string>(PREVIEW_SLUGS);

export function HomeCityGuides({ locale }: Props) {
  const t = getMessages(locale);
  const titleId = "home-cities-title";
  const [expanded, setExpanded] = useState(false);

  const preview = PREVIEW_SLUGS.map((slug) =>
    CITY_ARTICLES.find((article) => article.slug === slug)
  ).filter((article): article is CityArticle => Boolean(article));
  const extra = CITY_ARTICLES.filter((article) => !PREVIEW_SET.has(article.slug));
  const visible = expanded ? [...preview, ...extra] : preview;

  return (
    <section className="home-cities" aria-labelledby={titleId}>
      <h2 id={titleId} className="home-cities-title">
        {t.homeCitiesTitle}
      </h2>
      <p className="home-cities-lede">{t.homeCitiesLede}</p>
      <ul className="home-cities-list">
        {visible.map((article) => {
          const copy = getCityArticleCopy(article, locale);
          const name = t.cities[article.cityZh] || article.cityZh;
          return (
            <li key={article.slug}>
              <Link
                href={`/cities/${article.slug}`}
                className="home-city-card"
              >
                <span className="home-city-name">{name}</span>
                <span className="home-city-excerpt">{copy.lede}</span>
                <span className="home-city-more">{t.homeCitiesRead}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      {extra.length > 0 ? (
        <p className="home-cities-all">
          <button
            type="button"
            className="home-cities-toggle"
            aria-expanded={expanded}
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? t.homeCitiesLess : t.homeCitiesMore}
          </button>
        </p>
      ) : null}
    </section>
  );
}
