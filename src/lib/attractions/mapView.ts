import { SPOT_META } from "./meta";

export const MAP_SIZE = { width: 800, height: 500 } as const;

export const CITY_MAP_SLUG: Record<string, string> = {
  上海: "shanghai",
  北京: "beijing",
  广州: "guangzhou",
  深圳: "shenzhen",
  成都: "chengdu",
  杭州: "hangzhou",
  重庆: "chongqing",
  西安: "xian",
  南京: "nanjing",
  武汉: "wuhan",
  苏州: "suzhou",
  天津: "tianjin",
  青岛: "qingdao",
  厦门: "xiamen",
  昆明: "kunming",
  大连: "dalian",
  哈尔滨: "harbin",
};

export type MapView = {
  slug: string;
  centerLat: number;
  centerLng: number;
  zoom: number;
  width: number;
  height: number;
};

export type MapPoint = {
  id: string;
  lat: number;
  lng: number;
};

export type ProjectedPin = {
  id: string;
  x: number;
  y: number;
  /** 현재 지도 화면 밖이면 핀을 그리지 않음 */
  inView: boolean;
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/** Web Mercator pixel X at a zoom level (tile size 256). */
export function mercatorX(lng: number, zoom: number): number {
  const scale = 256 * 2 ** zoom;
  return ((lng + 180) / 360) * scale;
}

/** Web Mercator pixel Y at a zoom level (tile size 256). */
export function mercatorY(lat: number, zoom: number): number {
  const scale = 256 * 2 ** zoom;
  const clamped = clamp(lat, -85.051128, 85.051128);
  const sin = Math.sin((clamped * Math.PI) / 180);
  const y = 0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI);
  return y * scale;
}

function coreCluster(points: { lat: number; lng: number }[]) {
  const midLat = median(points.map((p) => p.lat));
  const midLng = median(points.map((p) => p.lng));
  const need = Math.min(6, points.length);

  for (const radius of [0.07, 0.09, 0.12, 0.16, 0.22]) {
    const near = points.filter(
      (p) => Math.hypot(p.lat - midLat, p.lng - midLng) <= radius
    );
    if (near.length >= need) return near;
  }
  return points;
}

function paddedBox(points: { lat: number; lng: number }[]) {
  let minLat = Math.min(...points.map((p) => p.lat));
  let maxLat = Math.max(...points.map((p) => p.lat));
  let minLng = Math.min(...points.map((p) => p.lng));
  let maxLng = Math.max(...points.map((p) => p.lng));
  const latPad = Math.max((maxLat - minLat) * 0.22, 0.016);
  const lngPad = Math.max((maxLng - minLng) * 0.22, 0.016);
  return {
    minLat: minLat - latPad,
    maxLat: maxLat + latPad,
    minLng: minLng - lngPad,
    maxLng: maxLng + lngPad,
  };
}

function zoomFits(
  box: ReturnType<typeof paddedBox>,
  zoom: number,
  width: number,
  height: number
) {
  const w = Math.abs(mercatorX(box.maxLng, zoom) - mercatorX(box.minLng, zoom));
  const h = Math.abs(mercatorY(box.minLat, zoom) - mercatorY(box.maxLat, zoom));
  return w <= width * 0.88 && h <= height * 0.88;
}

function pickZoom(box: ReturnType<typeof paddedBox>, width: number, height: number) {
  for (let z = 15; z >= 11; z -= 1) {
    if (zoomFits(box, z, width, height)) return z;
  }
  return 11;
}

function inViewAt(
  point: { lat: number; lng: number },
  centerLat: number,
  centerLng: number,
  zoom: number,
  width: number,
  height: number
) {
  const left = mercatorX(centerLng, zoom) - width / 2;
  const top = mercatorY(centerLat, zoom) - height / 2;
  const x = ((mercatorX(point.lng, zoom) - left) / width) * 100;
  const y = ((mercatorY(point.lat, zoom) - top) / height) * 100;
  return x >= 6 && x <= 94 && y >= 10 && y <= 92;
}

export function computeMapView(
  slug: string,
  points: { lat: number; lng: number }[]
): MapView {
  const { width, height } = MAP_SIZE;
  const core = coreCluster(points);
  const midLat = median(core.map((p) => p.lat));
  const midLng = median(core.map((p) => p.lng));
  const frame = points.filter(
    (p) =>
      core.includes(p) || Math.hypot(p.lat - midLat, p.lng - midLng) <= 0.16
  );

  const box = paddedBox(frame);
  let zoom = pickZoom(box, width, height);
  const centerLat = (box.minLat + box.maxLat) / 2;
  const centerLng = (box.minLng + box.maxLng) / 2;

  if (zoom > 11) {
    const gained = points.filter(
      (p) =>
        !frame.includes(p) &&
        Math.hypot(p.lat - centerLat, p.lng - centerLng) <= 0.22 &&
        inViewAt(p, centerLat, centerLng, zoom - 1, width, height)
    );
    if (gained.length >= 1) zoom -= 1;
  }

  return { slug, centerLat, centerLng, zoom, width, height };
}

export function getMapViewForCity(cityZh: string): MapView | null {
  const slug = CITY_MAP_SLUG[cityZh];
  const meta = SPOT_META[cityZh];
  if (!slug || !meta) return null;
  return computeMapView(
    slug,
    Object.values(meta).map((m) => ({ lat: m.lat, lng: m.lng }))
  );
}

export function cityMapSrc(cityZh: string): string | null {
  const slug = CITY_MAP_SLUG[cityZh];
  return slug ? `/maps/${slug}.png?v=3` : null;
}

export function projectPins(points: MapPoint[], view: MapView): ProjectedPin[] {
  const cx = mercatorX(view.centerLng, view.zoom);
  const cy = mercatorY(view.centerLat, view.zoom);
  const left = cx - view.width / 2;
  const top = cy - view.height / 2;
  return points.map((p) => {
    const rawX = ((mercatorX(p.lng, view.zoom) - left) / view.width) * 100;
    const rawY = ((mercatorY(p.lat, view.zoom) - top) / view.height) * 100;
    const inView = rawX >= 4 && rawX <= 96 && rawY >= 8 && rawY <= 94;
    return {
      id: p.id,
      x: rawX,
      y: rawY,
      inView,
    };
  });
}
