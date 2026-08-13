export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuideLocaleContent = {
  title: string;
  lead: string;
  /** 예: 2박3일 첫 방문 · 가족 여행 */
  bestFor: string;
  sections: GuideSection[];
  tipsHeading: string;
  tips: string[];
  spotsHeading: string;
  openInAmap: string;
  /** attraction id → 짧은 설명(교통·시간대 포함) */
  spotNotes: Record<string, string>;
};

export type CityArticle = {
  slug: string;
  cityZh: string;
  /** 예상 읽기 시간(분) */
  readingMinutes: number;
  /** YYYY-MM-DD */
  updatedAt: string;
  ko: GuideLocaleContent;
  en: GuideLocaleContent;
};
