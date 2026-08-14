"use client";

import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { getCityGuide, getAttractionLabel } from "@/lib/attractions";
import { getCityArticleCopy } from "@/lib/cityPages/copy";
import { getCityVisit } from "@/lib/cityPages/visit";
import type { CityArticle } from "@/lib/cityPages/types";
import { CITY_MAP_SLUG } from "@/lib/attractions/mapView";
import { getMessages } from "@/lib/i18n/messages";

type Props = {
  article: CityArticle;
  related: { slug: string; cityZh: string }[];
};

export function CityArticleView({ article, related }: Props) {
  const guide = getCityGuide(article.cityZh);

  return (
    <LegalShell>
      {(legal, locale) => {
        const copy = getCityArticleCopy(article, locale);
        const visit = getCityVisit(article.slug, locale);
        const t = getMessages(locale);
        const cityLabel = t.cities[article.cityZh] || article.cityZh;
        return (
          <article className="city-article">
            <p className="city-article-kicker">{cityLabel}</p>
            <h1 className="legal-title">{copy.title}</h1>
            <p className="city-article-lede">{copy.lede}</p>

            <div className="legal-body">
              {copy.intro.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>

            <h2 className="city-article-h2">{copy.historyTitle}</h2>
            <div className="legal-body">
              {copy.history.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>

            {visit ? (
              <>
                <h2 className="city-article-h2">{visit.visitTitle}</h2>
                <section className="city-article-visit">
                  <h3 className="city-article-h3">{visit.transportTitle}</h3>
                  <div className="legal-body">
                    <p>{visit.transport}</p>
                  </div>
                  <h3 className="city-article-h3">{visit.ticketsTitle}</h3>
                  <div className="legal-body">
                    <p>{visit.tickets}</p>
                  </div>
                  <h3 className="city-article-h3">{visit.seasonTitle}</h3>
                  <div className="legal-body">
                    <p>{visit.season}</p>
                  </div>
                </section>
              </>
            ) : null}

            <h2 className="city-article-h2">{copy.spotsTitle}</h2>
            {(guide?.attractions ?? []).map((spot) => {
              const spotCopy = copy.spots[spot.id];
              if (!spotCopy) return null;
              return (
                <section
                  key={spot.id}
                  id={spot.id}
                  className="city-article-spot"
                >
                  <h3 className="city-article-h3">{spotCopy.heading}</h3>
                  <p className="city-article-zh" lang="zh-CN">
                    {spot.keyword}
                    <span aria-hidden="true"> · </span>
                    {getAttractionLabel(spot, locale)}
                  </p>
                  <div className="legal-body">
                    {spotCopy.body.map((para) => (
                      <p key={para.slice(0, 32)}>{para}</p>
                    ))}
                  </div>
                </section>
              );
            })}

            <div className="legal-body city-article-closing">
              {copy.closing.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>

            <nav className="city-article-nav" aria-label={legal.navCities}>
              <p className="city-article-nav-title">{legal.navCities}</p>
              <div className="city-article-nav-list">
                {related.map((item) => {
                  const label = t.cities[item.cityZh] || item.cityZh;
                  const current = item.slug === article.slug;
                  return current ? (
                    <span key={item.slug} className="is-current">
                      {label}
                    </span>
                  ) : (
                    <Link key={item.slug} href={`/cities/${item.slug}`}>
                      {label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <p className="legal-inline-links">
              <Link href="/">{legal.backHome}</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/cities">{legal.navCities}</Link>
              {CITY_MAP_SLUG[article.cityZh] ? (
                <>
                  <span aria-hidden="true"> · </span>
                  <Link href="/?tab=spots">{t.tabSpots}</Link>
                </>
              ) : null}
            </p>
          </article>
        );
      }}
    </LegalShell>
  );
}
