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

export function loadSavedCity(fallback = "上海"): string {
  if (typeof window === "undefined") return fallback;
  return localStorage.getItem(CITY_KEY) ?? fallback;
}

export function saveCity(city: string): void {
  localStorage.setItem(CITY_KEY, city);
}
