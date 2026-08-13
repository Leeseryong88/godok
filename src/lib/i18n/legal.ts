import type { Locale } from "./locales";
import { DEFAULT_LOCALE } from "./locales";

export type LegalCopy = {
  backHome: string;
  navAbout: string;
  navGuides: string;
  navPrivacy: string;
  navContact: string;
  aboutTitle: string;
  aboutBody: string[];
  privacyTitle: string;
  privacyUpdated: string;
  privacyBody: string[];
  contactTitle: string;
  contactBody: string[];
  contactEmailLabel: string;
  contactGithubLabel: string;
  footerNote: string;
};

const KO: LegalCopy = {
  backHome: "홈으로",
  navAbout: "소개",
  navGuides: "여행 가이드",
  navPrivacy: "개인정보처리방침",
  navContact: "문의",
  aboutTitle: "서비스 소개",
  aboutBody: [
    "Amap Search는 중국 여행 중 장소를 쉽게 찾아 AutoNavi의 Amap(高德地图) 앱에서 바로 열 수 있도록 돕는 비공식 웹 도구입니다.",
    "검색어를 입력하면 장소 유형을 고른 뒤, 중국어 검색 키워드로 변환하여 Amap 앱 검색을 실행합니다. 인기 명소 탭에서는 도시별 주요 관광지를 바로 열 수 있습니다.",
    "상하이·베이징 등 주요 도시의 여행 가이드도 제공합니다. 동선·교통·명소 팁을 읽다가 Amap으로 바로 열 수 있습니다.",
    "이 서비스는 AutoNavi·Alibaba·Amap의 공식 제품이 아니며, 제휴·승인 관계가 없습니다. 지도 데이터와 검색 결과는 Amap 앱에서 제공됩니다.",
    "다국어 인터페이스를 지원하며, 선택한 언어와 도시는 브라우저에 저장되어 다음 방문 시에도 유지됩니다.",
  ],
  privacyTitle: "개인정보처리방침",
  privacyUpdated: "최종 업데이트: 2026년 8월 13일",
  privacyBody: [
    "Amap Search(이하 “서비스”)는 이용자의 개인정보를 최소화하여 처리합니다. 본 방침은 서비스 이용 시 어떤 정보가 어떻게 다루어지는지 설명합니다.",
    "1. 수집·저장하는 정보\n• 브라우저 localStorage: 선택한 도시, 언어 설정\n• 검색어·장소 유형: 번역 API 호출을 위해 서버로 전송되며, 광고·마케팅 목적으로 판매하지 않습니다.\n• 서비스는 회원 가입을 받지 않으며, 이름·전화번호 등 계정 정보를 수집하지 않습니다.",
    "2. 자동 수집·분석\n• Vercel Analytics: 페이지뷰 등 익명화된 이용 통계\n• 향후 Google AdSense 등 광고를 게재할 경우, Google이 쿠키·광고 ID를 사용할 수 있습니다. AdSense 도입 시 본 방침을 갱신합니다.",
    "3. 제3자 서비스\n• Google Gemini API: 검색어의 중국어 키워드 변환\n• AutoNavi Amap 앱: 사용자가 앱을 실행할 때 해당 앱의 정책이 적용됩니다.\n• 쿠팡 파트너스: 제휴 링크 클릭 시 쿠팡의 정책·쿠키가 적용될 수 있으며, 일정 수수료가 발생할 수 있습니다.",
    "4. 쿠키\n필수 기능(언어·도시 기억)과 분석·(향후) 광고 목적의 쿠키/유사 기술이 사용될 수 있습니다. 브라우저 설정에서 쿠키를 제한할 수 있으나 일부 기능이 제한될 수 있습니다.",
    "5. 보관 및 보안\nlocalStorage 데이터는 이용자 기기에 저장됩니다. 서버로 전송되는 검색 관련 데이터는 서비스 제공(번역) 목적 범위에서 처리되며, 합리적인 보안 조치를 위해 노력합니다.",
    "6. 아동의 개인정보\n만 14세 미만을 대상으로 하지 않으며, 고의로 아동의 개인정보를 수집하지 않습니다.",
    "7. 문의\n개인정보 관련 문의는 문의 페이지의 연락 수단으로 요청해 주세요. 방침이 변경되면 이 페이지에 게시합니다.",
  ],
  contactTitle: "문의",
  contactBody: [
    "서비스 이용, 오류 제보, 개인정보 관련 요청은 아래 방법으로 연락해 주세요.",
    "광고·제휴·콘텐츠 협업 문의도 동일 채널로 보내주시면 됩니다.",
  ],
  contactEmailLabel: "이메일",
  contactGithubLabel: "GitHub Issues",
  footerNote: "Amap / AutoNavi 비공식 서비스",
};

const EN: LegalCopy = {
  backHome: "Home",
  navAbout: "About",
  navGuides: "Travel guides",
  navPrivacy: "Privacy Policy",
  navContact: "Contact",
  aboutTitle: "About",
  aboutBody: [
    "Amap Search is an unofficial web tool that helps travelers find places in China and open them directly in AutoNavi’s Amap app.",
    "Enter a query, pick a place type, and we convert it into a Chinese keyword for Amap search. The Popular spots tab opens major attractions by city.",
    "We also publish city travel guides for Shanghai, Beijing, and more — with routes, transit tips, and one-tap Amap links.",
    "This service is not an official AutoNavi, Alibaba, or Amap product and has no partnership or endorsement. Map data and search results are provided inside the Amap app.",
    "The interface supports multiple languages. Your language and city choices are saved in the browser for later visits.",
  ],
  privacyTitle: "Privacy Policy",
  privacyUpdated: "Last updated: August 13, 2026",
  privacyBody: [
    "Amap Search (“the Service”) processes as little personal data as possible. This policy explains what information is handled when you use the Service.",
    "1. Information we store or process\n• Browser localStorage: selected city and language\n• Search queries and place types: sent to our server for translation; not sold for marketing\n• No user accounts; we do not collect names or phone numbers for sign-up",
    "2. Analytics and ads\n• Vercel Analytics for anonymized page-view statistics\n• If Google AdSense or similar ads are added later, Google may use cookies or ad IDs. We will update this policy when ads go live.",
    "3. Third parties\n• Google Gemini API for Chinese keyword conversion\n• AutoNavi Amap app: its own policies apply when the app opens\n• Coupang Partners: affiliate clicks may involve Coupang cookies and commissions",
    "4. Cookies\nEssential storage (language/city) and analytics/(future) advertising technologies may be used. You can limit cookies in your browser, which may affect some features.",
    "5. Retention and security\nlocalStorage data stays on your device. Search-related data sent to the server is processed to provide translation. We take reasonable steps to protect data in transit and at rest where applicable.",
    "6. Children\nThe Service is not directed at children under 14, and we do not knowingly collect their personal information.",
    "7. Contact\nFor privacy requests, use the Contact page. Policy changes will be posted on this page.",
  ],
  contactTitle: "Contact",
  contactBody: [
    "For support, bug reports, or privacy requests, reach us using the options below.",
    "Partnership or content inquiries can use the same channels.",
  ],
  contactEmailLabel: "Email",
  contactGithubLabel: "GitHub Issues",
  footerNote: "Unofficial helper for Amap / AutoNavi",
};

const COPY: Record<Locale, LegalCopy> = {
  ko: KO,
  en: EN,
  es: EN,
  hi: EN,
  ar: EN,
};

export function getLegalCopy(locale: Locale | string): LegalCopy {
  if (locale in COPY) return COPY[locale as Locale];
  return COPY[DEFAULT_LOCALE];
}
