import { getCityMeta } from "./cities";

const APP_NAME = "godok";

function resolveCityParams(city?: string): {
  name?: string;
  adcode?: string;
  /** URI city 파라미터: adcode 우선 */
  cityParam?: string;
} {
  const raw = city?.trim();
  if (!raw) return {};
  const meta = getCityMeta(raw);
  if (meta) {
    return {
      name: meta.name,
      adcode: meta.adcode,
      cityParam: meta.adcode || meta.name,
    };
  }
  return { name: raw, cityParam: raw };
}

/** 웹 검색 URI — city는 adcode가 가장 확실 */
export function buildGaodeSearchUrl(keyword: string, city?: string): string {
  const { cityParam } = resolveCityParams(city);
  const params = new URLSearchParams({
    keyword: keyword.trim(),
    view: "list",
    callnative: "1",
    src: APP_NAME,
  });
  if (cityParam) params.set("city", cityParam);
  return `https://uri.amap.com/search?${params.toString()}`;
}

/**
 * 최신 고덕 앱 검색 스킴 (city 파라미터 지원)
 * amapuri://search?keywords=...&city=310000
 */
export function buildAmapUriSearchUrl(keyword: string, city?: string): string {
  const { cityParam } = resolveCityParams(city);
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keyword.trim(),
  });
  if (cityParam) params.set("city", cityParam);
  return `amapuri://search?${params.toString()}`;
}

function isMobileUA(ua: string): { ios: boolean; android: boolean } {
  return {
    ios: /iPhone|iPad|iPod/i.test(ua),
    android: /Android/i.test(ua),
  };
}

/** 구형 poi 스킴용: 도시명을 키워드 앞에 명시 */
function keywordWithCity(keyword: string, cityName?: string): string {
  const k = keyword.trim();
  const c = cityName?.trim();
  if (!c) return k;
  if (k.includes(c)) return k;
  return `${c}${k}`;
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

function buildAndroidAmapUriIntent(
  keyword: string,
  fallbackWebUrl: string,
  city?: string
): string {
  const { cityParam } = resolveCityParams(city);
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keyword.trim(),
  });
  if (cityParam) params.set("city", cityParam);

  return (
    `intent://search?${params.toString()}` +
    `#Intent;scheme=amapuri;package=com.autonavi.minimap;` +
    `S.browser_fallback_url=${encodeURIComponent(fallbackWebUrl)};end`
  );
}

/** 구형 Android poi 스킴 (city 미지원 → 키워드에 도시 포함) */
function buildAndroidPoiUrl(keyword: string, cityName?: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keywordWithCity(keyword, cityName),
    dev: "0",
  });
  return `androidamap://poi?${params.toString()}`;
}

/** 구형 iOS poi 스킴 */
function buildIosPoiUrl(keyword: string, cityName?: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    name: keywordWithCity(keyword, cityName),
    dev: "0",
  });
  return `iosamap://poi?${params.toString()}`;
}

/**
 * 모바일: 앱 우선 실행 + 도시 범위 반영.
 * 1) amapuri://search?city=adcode (도시 지정 가능)
 * 2) 구형 poi 스킴 (키워드에 도시명 포함)
 * 3) 웹 URI (city=adcode)
 */
export function openInGaodeApp(keyword: string, city?: string): void {
  const trimmed = keyword.trim();
  if (!trimmed) return;

  const { name: cityName } = resolveCityParams(city);
  const webUrl = buildGaodeSearchUrl(trimmed, city);
  const amapUri = buildAmapUriSearchUrl(trimmed, city);

  if (typeof window === "undefined") return;

  const { ios, android } = isMobileUA(navigator.userAgent || "");

  if (!ios && !android) {
    window.open(webUrl, "_blank", "noopener,noreferrer");
    return;
  }

  if (android) {
    // Intent: amapuri search + city(adcode)
    window.location.href = buildAndroidAmapUriIntent(trimmed, webUrl, city);

    // Intent를 무시하는 환경 대비 구형 스킴 보조
    window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        openByAnchor(buildAndroidPoiUrl(trimmed, cityName));
      }
    }, 500);
    return;
  }

  // iOS: amapuri(도시 지원) → iosamap → 웹
  const legacyIos = buildIosPoiUrl(trimmed, cityName);
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

  openByAnchor(amapUri);
  window.setTimeout(() => {
    if (!cancelled) window.location.href = amapUri;
  }, 40);

  window.setTimeout(() => {
    if (!cancelled && document.visibilityState === "visible") {
      openByAnchor(legacyIos);
      window.location.href = legacyIos;
    }
  }, 700);

  window.setTimeout(() => {
    cleanup();
    if (
      !cancelled &&
      document.visibilityState === "visible" &&
      Date.now() - started < 3200
    ) {
      window.location.href = webUrl;
    }
  }, 2200);
}
