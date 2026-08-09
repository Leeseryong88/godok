const APP_NAME = "godok";

/** 웹 검색 URI (공유/폴백용, callnative는 보조) */
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

function openByAnchor(url: string): void {
  const a = document.createElement("a");
  a.href = url;
  a.rel = "noreferrer";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
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
 * Android: Intent로 고덕 앱 패키지를 직접 실행.
 * 미설치 시에만 browser_fallback_url(웹)로 이동.
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

/** Android 구형 브라우저용 직접 스킴 */
export function buildAndroidGaodeAppUrl(keyword: string, city?: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keywordWithCity(keyword, city),
    dev: "0",
  });
  return `androidamap://poi?${params.toString()}`;
}

/**
 * 모바일: 설치된 고덕 앱을 항상 우선 실행.
 * 도시가 있어도 웹이 아닌 앱 스킴을 먼저 사용하고, 실패 시에만 웹으로 폴백.
 */
export function openInGaodeApp(keyword: string, city?: string): void {
  const trimmed = keyword.trim();
  if (!trimmed) return;

  const cityZh = city?.trim() || undefined;
  const webUrl = buildGaodeSearchUrl(trimmed, cityZh);
  if (typeof window === "undefined") return;

  const { ios, android } = isMobileUA(navigator.userAgent || "");

  // PC는 웹
  if (!ios && !android) {
    window.open(webUrl, "_blank", "noopener,noreferrer");
    return;
  }

  if (android) {
    // Chrome/삼성인터넷: Intent로 앱 패키지를 직접 실행 (미설치 시 웹 폴백)
    window.location.href = buildAndroidGaodeIntentUrl(trimmed, webUrl, cityZh);
    return;
  }

  // iOS: iosamap 스킴 우선 → 안 열리면 웹 폴백
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

  openByAnchor(appUrl);
  // 일부 Safari에서 location도 함께
  window.setTimeout(() => {
    if (!cancelled) window.location.href = appUrl;
  }, 50);

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
