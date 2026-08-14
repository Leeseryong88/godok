export type SpotArticle = {
  heading: string;
  body: string[];
};

export type CityArticleCopy = {
  title: string;
  lede: string;
  intro: string[];
  historyTitle: string;
  history: string[];
  spotsTitle: string;
  spots: Record<string, SpotArticle>;
  closing: string[];
};

export type CityArticle = {
  slug: string;
  cityZh: string;
  ko: CityArticleCopy;
  en: CityArticleCopy;
};
