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

/** 앱 스킴에 city 파라미터가 없어 키워드 앞에 도시를 붙임 */
function keywordWithCity(keyword: string, city?: string): string {
  const k = keyword.trim();
  const c = city?.trim();
  if (!c) return k;
  if (k.includes(c)) return k;
  return `${c} ${k}`;
}

/** iOS: 공식 poi 검색 스킴 */
export function buildIosGaodeAppUrl(keyword: string, city?: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    name: keywordWithCity(keyword, city),
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
  fallbackWebUrl: string,
  city?: string
): string {
  const query = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keywordWithCity(keyword, city),
    dev: "0",
  }).toString();

  return (
    `intent://poi?${query}` +
    `#Intent;scheme=androidamap;package=com.autonavi.minimap;` +
    `S.browser_fallback_url=${encodeURIComponent(fallbackWebUrl)};end`
  );
}

/**
 * 모바일: 설치된 고덕 앱을 우선 실행.
 * city가 있으면 웹 URI의 city 파라미터 + 앱 키워드에 도시 반영.
 */
export function openInGaodeApp(keyword: string, city?: string): void {
  const trimmed = keyword.trim();
  if (!trimmed) return;

  const cityZh = city?.trim() || undefined;
  const webUrl = buildGaodeSearchUrl(trimmed, cityZh);
  if (typeof window === "undefined") return;

  const { ios, android } = isMobileUA(navigator.userAgent || "");

  // PC
  if (!ios && !android) {
    window.open(webUrl, "_blank", "noopener,noreferrer");
    return;
  }

  // 도시가 있으면 공식 웹 URI(city + callnative)로 앱 호출이 범위 지정에 더 안정적
  if (cityZh) {
    window.location.href = webUrl;
    return;
  }

  if (android) {
    window.location.href = buildAndroidGaodeIntentUrl(trimmed, webUrl, cityZh);
    return;
  }

  // iOS: 커스텀 스킴 → 실패 시 city 포함 웹 폴백
  const appUrl = buildIosGaodeAppUrl(trimmed, cityZh);
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
    if (
      !cancelled &&
      document.visibilityState === "visible" &&
      Date.now() - started < 2800
    ) {
      window.location.href = webUrl;
    }
  }, 1800);
}
