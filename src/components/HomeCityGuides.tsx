import Link from "next/link";
import { CITY_ARTICLES } from "@/lib/cityPages";
import { getCityArticleCopy } from "@/lib/cityPages/copy";
import { getMessages } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
};

export function HomeCityGuides({ locale }: Props) {
  const t = getMessages(locale);
  const titleId = "home-cities-title";

  return (
    <section className="home-cities" aria-labelledby={titleId}>
      <h2 id={titleId} className="home-cities-title">
        {t.homeCitiesTitle}
      </h2>
      <p className="home-cities-lede">{t.homeCitiesLede}</p>
      <ul className="home-cities-list">
        {CITY_ARTICLES.map((article) => {
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
      <p className="home-cities-all">
        <Link href="/cities">{t.homeCitiesAll}</Link>
      </p>
    </section>
  );
}
