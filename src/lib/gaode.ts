import { getCityMeta } from "./cities";

const APP_NAME = "godok";

/** Amap(AutoNavi) 앱 설치 링크 — 웹 지도 검색 아님 */
export const GAODE_INSTALL = {
  /** App Store: Amap Global */
  ios: "https://apps.apple.com/app/amap-global/id461703208",
  androidMarket: "market://details?id=com.autonavi.minimap",
  androidWeb: "https://mobile.amap.com/",
} as const;

export type DevicePlatform = "ios" | "android" | "desktop";

export type GaodeOpenResult = "opened" | "not_installed" | "desktop";

function resolveCityName(city?: string): string | undefined {
  const raw = city?.trim();
  if (!raw) return undefined;
  const meta = getCityMeta(raw);
  return meta?.name || raw;
}

export function detectPlatform(ua = ""): DevicePlatform {
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

/**
 * URLSearchParams는 공백을 + 로 넣어 일부 앱 스킴에서 깨짐.
 * 공식 문서 형식에 맞게 %20 인코딩 사용.
 */
function buildQuery(params: Record<string, string>): string {
  return Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

/** poi 스킴용: 도시명을 키워드에 포함해 검색 범위 유도 */
function keywordWithCity(keyword: string, cityName?: string): string {
  const k = keyword.trim().replace(/\s+/g, " ");
  const c = cityName?.trim();
  if (!c) return k;
  if (k.includes(c)) return k;
  // 공백 없이 붙이면 중국어 검색에 더 잘 맞는 경우가 많음
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

/**
 * 공식 Android POI 검색
 * androidamap://poi?sourceApplication=...&keywords=...&dev=0
 * @see https://developer.amap.com/api/amap-mobile/guide/android/search
 */
export function buildAndroidPoiUrl(keyword: string, cityName?: string): string {
  return `androidamap://poi?${buildQuery({
    sourceApplication: APP_NAME,
    keywords: keywordWithCity(keyword, cityName),
    dev: "0",
  })}`;
}

/**
 * 공식 iOS POI 검색
 * iosamap://poi?sourceApplication=...&name=...&dev=0
 * @see https://developer.amap.com/api/amap-mobile/guide/ios/search
 */
export function buildIosPoiUrl(keyword: string, cityName?: string): string {
  return `iosamap://poi?${buildQuery({
    sourceApplication: APP_NAME,
    name: keywordWithCity(keyword, cityName),
    dev: "0",
  })}`;
}

function buildAndroidPoiIntent(keyword: string, cityName?: string): string {
  const path = `poi?${buildQuery({
    sourceApplication: APP_NAME,
    keywords: keywordWithCity(keyword, cityName),
    dev: "0",
  })}`;
  const fallback = GAODE_INSTALL.androidWeb;
  return (
    `intent://${path}` +
    `#Intent;scheme=androidamap;package=com.autonavi.minimap;` +
    `S.browser_fallback_url=${encodeURIComponent(fallback)};end`
  );
}

export function openGaodeInstallPage(platform: DevicePlatform): void {
  if (platform === "ios") {
    window.location.href = GAODE_INSTALL.ios;
    return;
  }
  if (platform === "android") {
    window.location.href = GAODE_INSTALL.androidMarket;
    window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.href = GAODE_INSTALL.androidWeb;
      }
    }, 800);
  }
}

/**
 * 모바일에서만 공식 Amap POI 스킴으로 검색.
 * (amapuri://search 는 미지원/불안정 → 앱이 열리기만 하고 검색이 멈추는 원인)
 */
function sanitizeKeyword(keyword: string): string {
  return keyword
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[“”"']/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

export function openInGaodeApp(
  keyword: string,
  city?: string
): Promise<GaodeOpenResult> {
  const trimmed = sanitizeKeyword(keyword);
  if (!trimmed) return Promise.resolve("not_installed");

  if (typeof window === "undefined") {
    return Promise.resolve("desktop");
  }

  const platform = detectPlatform(navigator.userAgent || "");
  if (platform === "desktop") {
    return Promise.resolve("desktop");
  }

  const cityName = resolveCityName(city);
  const androidUrl = buildAndroidPoiUrl(trimmed, cityName);
  const iosUrl = buildIosPoiUrl(trimmed, cityName);

  return new Promise((resolve) => {
    let settled = false;
    const started = Date.now();

    const finish = (result: GaodeOpenResult) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(result);
    };

    const onHide = () => finish("opened");

    const onVisibility = () => {
      if (document.visibilityState === "hidden") onHide();
    };

    const cleanup = () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onHide);
      window.removeEventListener("blur", onHide);
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onHide);
    window.addEventListener("blur", onHide);

    if (platform === "android") {
      // Intent → 구형 스킴 한 번만 보조 (여러 스킴 연타는 로딩 고착 유발)
      window.location.href = buildAndroidPoiIntent(trimmed, cityName);
      window.setTimeout(() => {
        if (!settled && document.visibilityState === "visible") {
          openByAnchor(androidUrl);
        }
      }, 600);
    } else {
      openByAnchor(iosUrl);
      window.setTimeout(() => {
        if (!settled && document.visibilityState === "visible") {
          window.location.href = iosUrl;
        }
      }, 80);
    }

    window.setTimeout(() => {
      if (
        !settled &&
        document.visibilityState === "visible" &&
        Date.now() - started < 2800
      ) {
        finish("not_installed");
      }
    }, 2200);
  });
}
