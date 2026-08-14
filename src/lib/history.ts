export type SearchHistoryItem = {
  query: string;
  keyword: string;
  city: string;
  at: number;
};

const KEY = "godok.history.v1";
const CITY_KEY = "godok.city.v1";
const MAX = 8;

export function loadHistory(): SearchHistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SearchHistoryItem[];
    return Array.isArray(parsed) ? parsed.slice(0, MAX) : [];
  } catch {
    return [];
  }
}

export function saveHistoryItem(item: Omit<SearchHistoryItem, "at">): SearchHistoryItem[] {
  const next: SearchHistoryItem = { ...item, at: Date.now() };
  const prev = loadHistory().filter(
    (h) => !(h.query === next.query && h.city === next.city)
  );
  const list = [next, ...prev].slice(0, MAX);
  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
}

export function clearHistory(): void {
  localStorage.removeItem(KEY);
}

export function loadSavedCity(fallback = ""): string {
  if (typeof window === "undefined") return fallback;
  const saved = localStorage.getItem(CITY_KEY);
  return saved ?? fallback;
}

export function saveCity(city: string): void {
  const value = city.trim();
  if (!value) {
    localStorage.removeItem(CITY_KEY);
    return;
  }
  localStorage.setItem(CITY_KEY, value);
}

const SPOTS_CITY_COOKIE = "godok.spotsCity";
const SPOTS_CITY_MAX_AGE = 60 * 60 * 24 * 365;

export function loadSpotsCityCookie(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(
    /(?:^|;\s*)godok\.spotsCity=([^;]*)/
  );
  if (!match?.[1]) return "";
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return "";
  }
}

export function saveSpotsCityCookie(city: string): void {
  if (typeof document === "undefined") return;
  const value = city.trim();
  if (!value) {
    document.cookie = `${SPOTS_CITY_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
    return;
  }
  document.cookie = `${SPOTS_CITY_COOKIE}=${encodeURIComponent(value)}; Max-Age=${SPOTS_CITY_MAX_AGE}; Path=/; SameSite=Lax`;
}
