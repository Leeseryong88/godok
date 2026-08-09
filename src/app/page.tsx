"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CITIES } from "@/lib/cities";
import { buildGaodeSearchUrl, openInGaodeApp } from "@/lib/gaode";
import {
  clearHistory,
  loadHistory,
  loadSavedCity,
  saveCity,
  saveHistoryItem,
  type SearchHistoryItem,
} from "@/lib/history";
import { POPULAR } from "@/lib/suggestions";

type TranslateSource = "local" | "passthrough" | "gemini";

type TranslateResponse = {
  keyword: string;
  source: TranslateSource;
};

const SOURCE_LABEL: Record<TranslateSource, string> = {
  local: "바로 변환됨",
  passthrough: "중국어 그대로",
  gemini: "AI 번역",
};

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("上海");
  const [keyword, setKeyword] = useState("");
  const [original, setOriginal] = useState("");
  const [source, setSource] = useState<TranslateSource | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);
  const [ready, setReady] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const cityRowRef = useRef<HTMLDivElement>(null);

  const gaodeUrl = useMemo(() => {
    if (!keyword.trim()) return "";
    return buildGaodeSearchUrl(keyword.trim(), city || undefined);
  }, [keyword, city]);

  const cityLabel =
    CITIES.find((c) => c.value === city)?.short ??
    CITIES.find((c) => c.value === city)?.label ??
    "전체";

  useEffect(() => {
    setCity(loadSavedCity("上海"));
    setHistory(loadHistory());
    setReady(true);

    const wide = window.matchMedia("(min-width: 720px)").matches;
    if (wide) inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCity(city);
  }, [city, ready]);

  useEffect(() => {
    if (!keyword || !resultRef.current) return;
    resultRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [keyword]);

  useEffect(() => {
    const row = cityRowRef.current;
    if (!row) return;
    const active = row.querySelector<HTMLButtonElement>('[data-active="true"]');
    active?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [city, ready]);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 1600);
  }

  async function translate(nextQuery = query): Promise<string | null> {
    const trimmed = nextQuery.trim();
    if (!trimmed) return null;

    setError("");
    setLoading(true);
    setKeyword("");
    setSource(null);
    setOriginal(trimmed);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });
      const data = (await res.json()) as TranslateResponse & { error?: string };
      if (!res.ok) throw new Error(data.error || "번역에 실패했습니다.");

      setKeyword(data.keyword);
      setSource(data.source);
      setHistory(
        saveHistoryItem({
          query: trimmed,
          keyword: data.keyword,
          city,
        })
      );
      return data.keyword;
    } catch (err) {
      setError(err instanceof Error ? err.message : "번역에 실패했습니다.");
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function onPreview(e: FormEvent) {
    e.preventDefault();
    inputRef.current?.blur();
    await translate();
  }

  async function onOpenDirect() {
    inputRef.current?.blur();
    const result = await translate();
    if (!result) return;
    openInGaodeApp(result, city || undefined);
  }

  function openGaode() {
    if (!keyword.trim()) return;
    openInGaodeApp(keyword.trim(), city || undefined);
  }

  async function copyLink() {
    if (!gaodeUrl) return;
    try {
      await navigator.clipboard.writeText(gaodeUrl);
      showToast("링크를 복사했어요");
    } catch {
      setError("링크 복사에 실패했습니다.");
    }
  }

  async function usePopular(item: (typeof POPULAR)[number]) {
    setQuery(item.q);
    if (item.city !== undefined) setCity(item.city);
    inputRef.current?.blur();
    await translate(item.q);
  }

  async function useHistory(item: SearchHistoryItem) {
    setQuery(item.query);
    setCity(item.city);
    setKeyword(item.keyword);
    setOriginal(item.query);
    setSource("local");
    setError("");
  }

  function onClearHistory() {
    clearHistory();
    setHistory([]);
    showToast("최근 검색을 지웠어요");
  }

  return (
    <main className={`page${keyword ? " has-result" : ""}`}>
      <div className="backdrop" aria-hidden="true">
        <svg
          className="backdrop-map"
          viewBox="0 0 720 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M80 180 C160 140, 220 210, 300 190 S460 120, 540 170 S680 260, 640 340" />
          <path d="M120 420 C200 380, 280 450, 360 430 S520 360, 600 410 S700 520, 620 580" />
          <path d="M60 640 C180 600, 260 700, 380 680 S560 600, 680 670" />
          <circle cx="540" cy="170" r="6" />
          <circle cx="360" cy="430" r="5" />
        </svg>
      </div>

      <div className="shell">
        <header className="hero">
          <div className="hero-copy">
            <p className="brand-mark">
              <i />
              China Map Companion
            </p>
            <h1 className="brand">
              고덕검색
              <em>高德搜索</em>
            </h1>
            <p className="lead">
              중국어를 몰라도 괜찮아요. 내 언어로 검색하면 高德地图에서 바로
              찾을 수 있게 바꿔 드립니다.
            </p>
            <div className="steps" aria-hidden="true">
              <span className="step">
                <b>1</b> 도시 선택
              </span>
              <span className="step">
                <b>2</b> 장소 입력
              </span>
              <span className="step">
                <b>3</b> 고덕 앱 열기
              </span>
            </div>
          </div>
        </header>

        <section className="dock" aria-label="장소 검색">
          <p className="section-label">지금 있는 도시</p>
          <div className="city-wrap">
            <div
              className="city-row"
              ref={cityRowRef}
              role="listbox"
              aria-label="도시 선택"
            >
              {CITIES.map((c) => (
                <button
                  key={c.value || "all"}
                  type="button"
                  className="city-chip"
                  role="option"
                  aria-selected={city === c.value}
                  data-active={city === c.value}
                  onClick={() => setCity(c.value)}
                >
                  <span className="short">{c.short}</span>
                  <span className="full">{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          <form className="search-form" onSubmit={onPreview}>
            <p className="section-label">어디로 갈까요?</p>
            <div className="search-box">
              <input
                id="query"
                ref={inputRef}
                className="field"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="예: 임시정부, Starbucks, 화장실"
                maxLength={80}
                required
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                enterKeyHint="go"
                inputMode="search"
                aria-label="장소 검색어"
              />
              <div className="cta-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={loading || !query.trim()}
                  onClick={onOpenDirect}
                >
                  {loading ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      준비 중
                    </>
                  ) : (
                    "고덕에서 열기"
                  )}
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={loading || !query.trim()}
                >
                  중국어 확인
                </button>
              </div>
            </div>
            <div className="meta">
              <span>
                {cityLabel} · 한국어·영어·일본어 가능
              </span>
              <span aria-live="polite">{query.trim().length}/80</span>
            </div>
          </form>

          <div className="rail">
            <div className="rail-head">
              <p className="section-label" style={{ margin: 0 }}>
                자주 찾는 곳
              </p>
            </div>
            <div className="chips" aria-label="인기 검색">
              {POPULAR.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="chip"
                  disabled={loading}
                  onClick={() => usePopular(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {history.length > 0 ? (
            <div className="rail">
              <div className="rail-head">
                <p className="section-label" style={{ margin: 0 }}>
                  최근 검색
                </p>
                <button type="button" onClick={onClearHistory}>
                  지우기
                </button>
              </div>
              <div className="chips" aria-label="최근 검색">
                {history.map((item) => (
                  <button
                    key={`${item.at}-${item.query}`}
                    type="button"
                    className="chip chip-soft"
                    disabled={loading}
                    onClick={() => useHistory(item)}
                  >
                    {item.query}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {error ? (
            <div className="error" role="alert">
              {error}
            </div>
          ) : null}

          {keyword ? (
            <div className="result" ref={resultRef}>
              <div className="result-kicker">
                <span className="section-label" style={{ margin: 0 }}>
                  고덕 검색어 준비됨
                </span>
                {source ? (
                  <span className="badge">{SOURCE_LABEL[source]}</span>
                ) : null}
              </div>

              <div className="transform">
                <div>
                  입력 <strong>{original || query}</strong>
                </div>
                <div className="arrow">↓ 중국어 검색어</div>
              </div>

              <input
                className="field field-ghost"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                aria-label="중국어 검색어 수정"
                enterKeyHint="done"
              />
              <p className="hint">
                앱이 있으면 高德地图 앱으로, 없으면 웹으로 열어요. 검색어가
                어색하면 위에서 고친 뒤 다시 열어보세요.
              </p>

              <div className="actions-desktop">
                <button type="button" className="btn btn-primary" onClick={openGaode}>
                  고덕 앱으로 열기
                </button>
                <button type="button" className="btn btn-ghost" onClick={copyLink}>
                  링크 복사
                </button>
              </div>
            </div>
          ) : null}
        </section>

        <p className="footer-note">
          Google 지도 대신 중국에서 쓰는 高德地图로 연결해 주는 검색 도우미입니다.
          API 키는 서버에서만 사용합니다.
        </p>
      </div>

      {keyword ? (
        <div className="sticky-cta">
          <button type="button" className="btn btn-primary" onClick={openGaode}>
            고덕 앱으로 열기
          </button>
          <button type="button" className="btn btn-secondary" onClick={copyLink}>
            링크 복사
          </button>
        </div>
      ) : null}

      {toast ? (
        <div className="toast" role="status">
          {toast}
        </div>
      ) : null}
    </main>
  );
}
