"use client";

import { useEffect, useState } from "react";
import { GuideOpenButton } from "@/components/GuideOpenButton";
import { GuideShell } from "@/components/GuideShell";
import { RelatedGuides } from "@/components/RelatedGuides";
import { getAttractionLabel, getCityGuide } from "@/lib/attractions";
import { getArticleBySlug, getArticleContent } from "@/lib/guides";
import { getGuidesUi } from "@/lib/guides/ui";
import { getMessages } from "@/lib/i18n/messages";

type Props = {
  slug: string;
};

function JumpSpotsButton({ label }: { label: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("guide-spots");
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(Boolean(entry?.isIntersecting)),
      { rootMargin: "-20% 0px -35% 0px", threshold: 0.05 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#guide-spots"
      className={`guide-jump-spots${hidden ? " is-hidden" : ""}`}
    >
      {label}
    </a>
  );
}

export function GuideArticleView({ slug }: Props) {
  return (
    <GuideShell>
      {(locale) => {
        const article = getArticleBySlug(slug);
        if (!article) return null;

        const content = getArticleContent(article, locale);
        const ui = getGuidesUi(locale);
        const cities = getMessages(locale).cities;
        const cityLabel = cities[article.cityZh] || article.cityZh;
        const spots = getCityGuide(article.cityZh)?.attractions || [];

        const toc = [
          ...content.sections.map((section, i) => ({
            id: `guide-sec-${i}`,
            label: section.heading,
          })),
          { id: "guide-tips", label: content.tipsHeading },
          { id: "guide-spots", label: ui.jumpSpots },
        ];

        return (
          <article className="guide-article">
            <header className="guide-header">
              <div className="guide-meta">
                <span className="guide-meta-chip is-city">{cityLabel}</span>
                <span className="guide-meta-chip">
                  {article.readingMinutes} {ui.minutes}
                </span>
                <span className="guide-meta-chip is-muted">
                  {ui.updatedLabel} {article.updatedAt}
                </span>
              </div>
              <h1 className="guide-title">{content.title}</h1>
              <p className="guide-lead">{content.lead}</p>
              <p className="guide-best-for">
                <span className="guide-best-for-label">{ui.bestForLabel}</span>
                {content.bestFor}
              </p>
            </header>

            <nav className="guide-toc" aria-label={ui.onThisPage}>
              <p className="guide-toc-label">{ui.onThisPage}</p>
              <div className="guide-toc-scroll">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="guide-toc-link">
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {content.sections.map((section, i) => (
              <section
                key={section.heading}
                id={`guide-sec-${i}`}
                className="guide-section"
              >
                <h2 className="guide-h2">
                  <span className="guide-h2-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="guide-p">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section id="guide-tips" className="guide-section">
              <h2 className="guide-h2">{content.tipsHeading}</h2>
              <ol className="guide-tips">
                {content.tips.map((tip, i) => (
                  <li key={tip.slice(0, 32)}>
                    <span className="guide-tip-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className="guide-tip-text">{tip}</span>
                  </li>
                ))}
              </ol>
            </section>

            <aside className="guide-callout" aria-label={ui.howToUseHeading}>
              <h2 className="guide-callout-title">{ui.howToUseHeading}</h2>
              <p className="guide-callout-body">{ui.howToUseBody}</p>
            </aside>

            <section id="guide-spots" className="guide-section guide-section-spots">
              <div className="guide-section-head">
                <h2 className="guide-h2">{content.spotsHeading}</h2>
                {spots.length > 0 ? (
                  <span className="guide-section-count">
                    {spots.length} {ui.spotsCount}
                  </span>
                ) : null}
              </div>
              <div className="guide-spots">
                {spots.map((spot, i) => {
                  const note =
                    content.spotNotes[spot.id] ||
                    getAttractionLabel(spot, locale);
                  return (
                    <div key={spot.id} className="guide-spot">
                      <div className="guide-spot-text">
                        <h3 className="guide-spot-name">
                          <span className="guide-spot-index" aria-hidden="true">
                            {i + 1}
                          </span>
                          <span className="guide-spot-title-wrap">
                            {getAttractionLabel(spot, locale)}
                            <span className="guide-spot-zh" lang="zh-CN">
                              {spot.keyword}
                            </span>
                          </span>
                        </h3>
                        <p className="guide-spot-note">{note}</p>
                      </div>
                      <GuideOpenButton
                        keyword={spot.keyword}
                        cityZh={article.cityZh}
                        attractionId={spot.id}
                        label={content.openInAmap}
                      />
                    </div>
                  );
                })}
              </div>
            </section>

            <p className="guide-disclaimer">{ui.disclaimer}</p>

            <RelatedGuides currentSlug={slug} locale={locale} />

            <JumpSpotsButton label={ui.jumpSpots} />
          </article>
        );
      }}
    </GuideShell>
  );
}
