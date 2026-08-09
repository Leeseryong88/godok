const APP_NAME = "godok";

/** 웹 검색 URI (callnative=1 포함, 공유/폴백용) */
export function buildGaodeSearchUrl(keyword: string, city?: string): string {
  const params = new URLSearchParams({
    keyword,
    view: "list",
    callnative: "1",
    src: APP_NAME,
  });
  if (city) params.set("city", city);
  return `https://uri.amap.com/search?${params.toString()}`;
}

function isMobileUA(ua: string): { ios: boolean; android: boolean } {
  return {
    ios: /iPhone|iPad|iPod/i.test(ua),
    android: /Android/i.test(ua),
  };
}

/** iOS: 공식 poi 검색 스킴 */
export function buildIosGaodeAppUrl(keyword: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    name: keyword,
    dev: "0",
  });
  return `iosamap://poi?${params.toString()}`;
}

/**
 * Android Chrome 등에서 앱 패키지를 지정해 고덕 앱을 직접 실행.
 * 미설치 시 browser_fallback_url(웹)로 이동.
 */
export function buildAndroidGaodeIntentUrl(
  keyword: string,
  fallbackWebUrl: string
): string {
  const query = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keyword,
    dev: "0",
  }).toString();

  return (
    `intent://poi?${query}` +
    `#Intent;scheme=androidamap;package=com.autonavi.minimap;` +
    `S.browser_fallback_url=${encodeURIComponent(fallbackWebUrl)};end`
  );
}

/** Android 구형/기타 브라우저용 스킴 */
export function buildAndroidGaodeAppUrl(keyword: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keyword,
    dev: "0",
  });
  return `androidamap://poi?${params.toString()}`;
}

/**
 * 모바일: 설치된 고덕 앱을 우선 실행.
 * 데스크톱/앱 미설치: 웹 URI로 폴백.
 */
export function openInGaodeApp(keyword: string, city?: string): void {
  const trimmed = keyword.trim();
  if (!trimmed) return;

  const webUrl = buildGaodeSearchUrl(trimmed, city);
  if (typeof window === "undefined") return;

  const { ios, android } = isMobileUA(navigator.userAgent || "");

  // PC는 웹으로
  if (!ios && !android) {
    window.open(webUrl, "_blank", "noopener,noreferrer");
    return;
  }

  if (android) {
    // Intent URL이 Chrome/삼성 인터넷에서 앱 실행에 가장 안정적
    window.location.href = buildAndroidGaodeIntentUrl(trimmed, webUrl);
    return;
  }

  // iOS: 커스텀 스킴 → 실패 시 웹 폴백
  const appUrl = buildIosGaodeAppUrl(trimmed);
  const started = Date.now();
  let cancelled = false;

  const onHide = () => {
    cancelled = true;
    cleanup();
  };

  const cleanup = () => {
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pagehide", onHide);
    window.removeEventListener("blur", onHide);
  };

  const onVisibility = () => {
    if (document.visibilityState === "hidden") onHide();
  };

  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", onHide);
  window.addEventListener("blur", onHide);

  window.location.href = appUrl;

  window.setTimeout(() => {
    cleanup();
    // 앱이 뜨면 보통 숨겨지므로, 그대로면 미설치/차단 → 웹
    if (!cancelled && document.visibilityState === "visible" && Date.now() - started < 2800) {
      window.location.href = webUrl;
    }
  }, 1800);
}
