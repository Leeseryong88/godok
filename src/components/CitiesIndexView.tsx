"use client";

import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { getMessages } from "@/lib/i18n/messages";

type Props = {
  cities: { slug: string; cityZh: string }[];
};

export function CitiesIndexView({ cities }: Props) {
  return (
    <LegalShell>
      {(legal, locale) => {
        const t = getMessages(locale);
        const title =
          locale === "ko" ? "도시 관광지 안내" : "City sight guides";
        const lede =
          locale === "ko"
            ? "중국 주요 도시의 관광지가 어떤 역사를 가졌고, 지금 어떤 모습인지를 도시별로 정리했습니다. 글을 읽은 뒤 명소 지도에서 같은 장소를 열 수 있습니다."
            : "Read the history and character of major sights in each Chinese city, then open the same places on the spot map.";
        return (
          <article className="city-article">
            <h1 className="legal-title">{title}</h1>
            <p className="city-article-lede">{lede}</p>
            <ul className="city-index-list">
              {cities.map((item) => (
                <li key={item.slug}>
                  <Link href={`/cities/${item.slug}`}>
                    {t.cities[item.cityZh] || item.cityZh}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="legal-inline-links">
              <Link href="/">{legal.backHome}</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/about">{legal.navAbout}</Link>
            </p>
          </article>
        );
      }}
    </LegalShell>
  );
}
