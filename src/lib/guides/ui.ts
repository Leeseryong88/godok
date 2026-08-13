import type { Locale } from "@/lib/i18n/locales";

export type GuidesUiCopy = {
  indexTitle: string;
  indexLead: string;
  readGuide: string;
  backGuides: string;
  backHome: string;
  minutes: string;
  navGuides: string;
  bestForLabel: string;
  updatedLabel: string;
  howToUseHeading: string;
  howToUseBody: string;
  disclaimer: string;
  onThisPage: string;
  jumpSpots: string;
  spotsCount: string;
  cityPick: string;
};

const UI: Record<"ko" | "en", GuidesUiCopy> = {
  ko: {
    indexTitle: "도시별 여행 가이드",
    indexLead:
      "동선·지하철·먹거리·피해야 할 실수를 짧게 정리했어요. 글 안 명소는 Amap으로 바로 열 수 있습니다.",
    readGuide: "가이드 보기",
    backGuides: "가이드 목록",
    backHome: "홈으로",
    minutes: "분 읽기",
    navGuides: "여행 가이드",
    bestForLabel: "추천",
    updatedLabel: "업데이트",
    howToUseHeading: "Amap으로 여는 법",
    howToUseBody:
      "명소 카드의 ‘Amap에서 열기’를 누르면 그 도시의 중국어 검색어로 앱이 실행됩니다. 영업시간·예약·요금은 방문 전 공식 안내를 다시 확인하세요.",
    disclaimer:
      "Amap Search는 AutoNavi 비공식 가이드입니다. 교통·입장 정보는 바뀔 수 있으니 현장·공식 기준으로 일정을 확정하세요.",
    onThisPage: "바로가기",
    jumpSpots: "명소·Amap",
    spotsCount: "곳",
    cityPick: "도시 고르기",
  },
  en: {
    indexTitle: "City travel guides",
    indexLead:
      "Routes, metro, food, and common mistakes—plus one-tap Amap links for each highlight.",
    readGuide: "Open guide",
    backGuides: "All guides",
    backHome: "Home",
    minutes: "min",
    navGuides: "Guides",
    bestForLabel: "Best for",
    updatedLabel: "Updated",
    howToUseHeading: "Open spots in Amap",
    howToUseBody:
      "Tap “Open in Amap” on a spot card to launch the app with that city’s Chinese keyword. Confirm hours, tickets, and prices before you go.",
    disclaimer:
      "Amap Search is an unofficial AutoNavi helper. Transit and admission details change; finalize plans with on-site or official sources.",
    onThisPage: "On this page",
    jumpSpots: "Spots · Amap",
    spotsCount: "spots",
    cityPick: "Jump to a city",
  },
};

export function getGuidesUi(locale: Locale | string): GuidesUiCopy {
  return locale === "ko" ? UI.ko : UI.en;
}
