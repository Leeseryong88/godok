import { getCityMeta } from "./cities";

const APP_NAME = "godok";

/** 고덕지도 설치 링크 (웹 지도 검색 아님) */
export const GAODE_INSTALL = {
  ios: "https://apps.apple.com/app/id461703208",
  /** Play/스토어 앱이 있으면 열림 */
  androidMarket: "market://details?id=com.autonavi.minimap",
  /** 스토어 스킴이 막힌 환경용 공식 다운로드 */
  androidWeb: "https://mobile.amap.com/",
} as const;

export type DevicePlatform = "ios" | "android" | "desktop";

export type GaodeOpenResult = "opened" | "not_installed" | "desktop";

function resolveCityParams(city?: string): {
  name?: string;
  adcode?: string;
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

export function detectPlatform(ua = ""): DevicePlatform {
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

/**
 * 최신 고덕 앱 검색 스킴 (city = adcode 우선)
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

function buildAndroidAmapUriIntent(keyword: string, city?: string): string {
  const { cityParam } = resolveCityParams(city);
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keyword.trim(),
  });
  if (cityParam) params.set("city", cityParam);

  // 미설치 시 웹 지도가 아니라 설치 페이지로
  const fallback = GAODE_INSTALL.androidWeb;

  return (
    `intent://search?${params.toString()}` +
    `#Intent;scheme=amapuri;package=com.autonavi.minimap;` +
    `S.browser_fallback_url=${encodeURIComponent(fallback)};end`
  );
}

function buildAndroidPoiUrl(keyword: string, cityName?: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    keywords: keywordWithCity(keyword, cityName),
    dev: "0",
  });
  return `androidamap://poi?${params.toString()}`;
}

function buildIosPoiUrl(keyword: string, cityName?: string): string {
  const params = new URLSearchParams({
    sourceApplication: APP_NAME,
    name: keywordWithCity(keyword, cityName),
    dev: "0",
  });
  return `iosamap://poi?${params.toString()}`;
}

export function openGaodeInstallPage(platform: DevicePlatform): void {
  if (platform === "ios") {
    window.location.href = GAODE_INSTALL.ios;
    return;
  }
  if (platform === "android") {
    // market:// 우선, 실패 시 공식 다운로드는 안내 모달에서 HTTPS로
    window.location.href = GAODE_INSTALL.androidMarket;
    window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.href = GAODE_INSTALL.androidWeb;
      }
    }, 800);
  }
}

/**
 * 모바일에서만 고덕 앱 스킴으로 검색.
 * 웹 지도(uri.amap.com)로는 연결하지 않음.
 * 페이지가 계속 보이면 미설치로 판단.
 */
export function openInGaodeApp(
  keyword: string,
  city?: string
): Promise<GaodeOpenResult> {
  const trimmed = keyword.trim();
  if (!trimmed) return Promise.resolve("not_installed");

  if (typeof window === "undefined") {
    return Promise.resolve("desktop");
  }

  const platform = detectPlatform(navigator.userAgent || "");
  if (platform === "desktop") {
    return Promise.resolve("desktop");
  }

  const { name: cityName } = resolveCityParams(city);
  const amapUri = buildAmapUriSearchUrl(trimmed, city);

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
      window.location.href = buildAndroidAmapUriIntent(trimmed, city);
      window.setTimeout(() => {
        if (!settled && document.visibilityState === "visible") {
          openByAnchor(buildAndroidPoiUrl(trimmed, cityName));
        }
      }, 450);
    } else {
      const legacyIos = buildIosPoiUrl(trimmed, cityName);
      openByAnchor(amapUri);
      window.setTimeout(() => {
        if (!settled) window.location.href = amapUri;
      }, 40);
      window.setTimeout(() => {
        if (!settled && document.visibilityState === "visible") {
          openByAnchor(legacyIos);
        }
      }, 650);
    }

    // 앱이 안 열리면 설치 안내
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
