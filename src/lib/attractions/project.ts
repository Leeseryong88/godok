export type MapPoint = {
  id: string;
  lat: number;
  lng: number;
};

export type ProjectedPin = {
  id: string;
  x: number;
  y: number;
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/**
 * 도심 무리를 넓게 펼치고, 외곽 명소는 가장자리에 붙입니다.
 * 관광지도처럼 한눈에 핀을 고를 수 있게 하기 위함입니다.
 */
export function projectPins(points: MapPoint[]): ProjectedPin[] {
  if (!points.length) return [];

  const lats = points.map((p) => p.lat);
  const lngs = points.map((p) => p.lng);
  const midLat = median(lats);
  const midLng = median(lngs);

  const near = points.filter(
    (p) => Math.abs(p.lat - midLat) < 0.18 && Math.abs(p.lng - midLng) < 0.22
  );
  const frame = near.length >= 3 ? near : points;

  let minLat = Math.min(...frame.map((p) => p.lat));
  let maxLat = Math.max(...frame.map((p) => p.lat));
  let minLng = Math.min(...frame.map((p) => p.lng));
  let maxLng = Math.max(...frame.map((p) => p.lng));

  const latPad = Math.max((maxLat - minLat) * 0.18, 0.012);
  const lngPad = Math.max((maxLng - minLng) * 0.18, 0.012);
  minLat -= latPad;
  maxLat += latPad;
  minLng -= lngPad;
  maxLng += lngPad;

  const latSpan = maxLat - minLat || 0.04;
  const lngSpan = maxLng - minLng || 0.04;

  const raw = points.map((p) => ({
    id: p.id,
    x: clamp(((p.lng - minLng) / lngSpan) * 100, 6, 94),
    y: clamp((1 - (p.lat - minLat) / latSpan) * 100, 8, 90),
  }));

  return separatePins(raw);
}

function separatePins(pins: ProjectedPin[]): ProjectedPin[] {
  const next = pins.map((p) => ({ ...p }));
  const minDist = 7.2;

  for (let pass = 0; pass < 8; pass += 1) {
    for (let i = 0; i < next.length; i += 1) {
      for (let j = i + 1; j < next.length; j += 1) {
        const dx = next[j].x - next[i].x;
        const dy = next[j].y - next[i].y;
        const dist = Math.hypot(dx, dy) || 0.01;
        if (dist >= minDist) continue;
        const push = (minDist - dist) / 2;
        const nx = dx / dist;
        const ny = dy / dist;
        next[i].x = clamp(next[i].x - nx * push, 6, 94);
        next[i].y = clamp(next[i].y - ny * push, 8, 90);
        next[j].x = clamp(next[j].x + nx * push, 6, 94);
        next[j].y = clamp(next[j].y + ny * push, 8, 90);
      }
    }
  }

  return next;
}
