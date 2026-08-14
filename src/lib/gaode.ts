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

export type GaodeLocation = {
  lat: number;
  lng: number;
};

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

function isValidLocation(loc?: GaodeLocation): loc is GaodeLocation {
  return Boolean(
    loc &&
      Number.isFinite(loc.lat) &&
      Number.isFinite(loc.lng) &&
      loc.lat >= -85 &&
      loc.lat <= 85 &&
      loc.lng >= -180 &&
      loc.lng <= 180
  );
}

function formatCoord(n: number): string {
  return n.toFixed(6);
}

function viewMapParams(name: string, lat: number, lng: number) {
  return {
    sourceApplication: APP_NAME,
    poiname: name,
    lat: formatCoord(lat),
    lon: formatCoord(lng),
    // 1 = WGS84 → 앱이 GCJ-02로 맞춤. 0이면 GPS 좌표가 수백 미터 어긋남
    dev: "1",
  };
}

/**
 * 좌표로 지도 핀을 연다. 이름 검색은 내 주변 동명 장소를 잡을 수 있음.
 * androidamap://viewMap?sourceApplication=...&poiname=...&lat=...&lon=...&dev=1
 * @see https://developer.amap.com/api/amap-mobile/guide/android/marker
 */
export function buildAndroidViewMapUrl(
  name: string,
  lat: number,
  lng: number
): string {
  return `androidamap://viewMap?${buildQuery(viewMapParams(name, lat, lng))}`;
}

/**
 * iosamap://viewMap?sourceApplication=...&poiname=...&lat=...&lon=...&dev=1
 * @see https://developer.amap.com/api/amap-mobile/guide/ios/marker
 */
export function buildIosViewMapUrl(
  name: string,
  lat: number,
  lng: number
): string {
  return `iosamap://viewMap?${buildQuery(viewMapParams(name, lat, lng))}`;
}

function buildAndroidIntent(
  path: string
): string {
  const fallback = GAODE_INSTALL.androidWeb;
  return (
    `intent://${path}` +
    `#Intent;scheme=androidamap;package=com.autonavi.minimap;` +
    `S.browser_fallback_url=${encodeURIComponent(fallback)};end`
  );
}

function buildAndroidPoiIntent(keyword: string, cityName?: string): string {
  return buildAndroidIntent(
    `poi?${buildQuery({
      sourceApplication: APP_NAME,
      keywords: keywordWithCity(keyword, cityName),
      dev: "0",
    })}`
  );
}

function buildAndroidViewMapIntent(
  name: string,
  lat: number,
  lng: number
): string {
  return buildAndroidIntent(
    `viewMap?${buildQuery(viewMapParams(name, lat, lng))}`
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
 * 모바일에서 Amap을 연다.
 * 좌표가 있으면 viewMap(해당 위치), 없으면 도시명을 붙인 POI 검색.
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
  city?: string,
  location?: GaodeLocation
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
  const pinName = keywordWithCity(trimmed, cityName);
  const pin = isValidLocation(location) ? location : undefined;
  const androidUrl = pin
    ? buildAndroidViewMapUrl(pinName, pin.lat, pin.lng)
    : buildAndroidPoiUrl(trimmed, cityName);
  const iosUrl = pin
    ? buildIosViewMapUrl(pinName, pin.lat, pin.lng)
    : buildIosPoiUrl(trimmed, cityName);
  const androidIntent = pin
    ? buildAndroidViewMapIntent(pinName, pin.lat, pin.lng)
    : buildAndroidPoiIntent(trimmed, cityName);

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
      window.location.href = androidIntent;
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
