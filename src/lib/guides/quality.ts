import type { CityArticle, GuideLocaleContent } from "./types";

/** AdSense·SEO용 가이드 품질 기준 */
export const GUIDE_QUALITY = {
  minLeadChars: 140,
  minSections: 4,
  minParagraphsPerSection: 2,
  minTips: 5,
  minSpotNoteChars: 48,
  /** 섹션에 다루길 권장하는 주제(검수용 메모) */
  themes: [
    "arrival-lodging",
    "day-plan",
    "transit-payment",
    "food-pitfalls",
  ] as const,
} as const;

export type GuideQualityIssue = {
  slug: string;
  locale: "ko" | "en";
  issues: string[];
};

export function auditLocaleContent(
  slug: string,
  locale: "ko" | "en",
  content: GuideLocaleContent,
  expectedSpotIds: string[]
): GuideQualityIssue | null {
  const issues: string[] = [];

  if (content.lead.trim().length < GUIDE_QUALITY.minLeadChars) {
    issues.push(`lead < ${GUIDE_QUALITY.minLeadChars} chars`);
  }
  if (content.sections.length < GUIDE_QUALITY.minSections) {
    issues.push(`sections < ${GUIDE_QUALITY.minSections}`);
  }
  content.sections.forEach((s, i) => {
    if (s.paragraphs.length < GUIDE_QUALITY.minParagraphsPerSection) {
      issues.push(`section[${i}] paragraphs < 2`);
    }
  });
  if (content.tips.length < GUIDE_QUALITY.minTips) {
    issues.push(`tips < ${GUIDE_QUALITY.minTips}`);
  }
  if (!content.bestFor?.trim()) {
    issues.push("missing bestFor");
  }
  for (const id of expectedSpotIds) {
    const note = content.spotNotes[id]?.trim() || "";
    if (!note) issues.push(`missing spotNotes.${id}`);
    else if (note.length < GUIDE_QUALITY.minSpotNoteChars) {
      issues.push(`spotNotes.${id} too short`);
    }
  }

  return issues.length ? { slug, locale, issues } : null;
}

export function auditArticle(
  article: CityArticle,
  expectedSpotIds: string[]
): GuideQualityIssue[] {
  return [article.ko, article.en]
    .map((content, i) =>
      auditLocaleContent(
        article.slug,
        i === 0 ? "ko" : "en",
        content,
        expectedSpotIds
      )
    )
    .filter((x): x is GuideQualityIssue => Boolean(x));
}
