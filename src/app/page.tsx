"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CITIES } from "@/lib/cities";
import { buildGaodeSearchUrl } from "@/lib/gaode";

type TranslateSource = "local" | "passthrough" | "gemini";

type TranslateResponse = {
  keyword: string;
  source: TranslateSource;
};

const SOURCE_LABEL: Record<TranslateSource, string> = {
  local: "즉시 변환",
  passthrough: "중국어 그대로",
  gemini: "AI 번역",
};

const SUGGESTIONS = [
  { q: "임시정부", city: "上海" },
  { q: "Starbucks", city: "上海" },
  { q: "천안문", city: "北京" },
  { q: "外滩", city: "上海" },
  { q: "화장실", city: "" },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("上海");
  const [keyword, setKeyword] = useState("");
  const [source, setSource] = useState<TranslateSource | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const cityRowRef = useRef<HTMLDivElement>(null);

  const gaodeUrl = useMemo(() => {
    if (!keyword.trim()) return "";
    return buildGaodeSearchUrl(keyword.trim(), city || undefined);
  }, [keyword, city]);

  useEffect(() => {
    // 모바일에서는 자동 포커스로 키보드가 바로 떠 화면이 밀리므로 넓은 화면만 포커스
    const wide = window.matchMedia("(min-width: 641px)").matches;
    if (wide) inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!keyword || !resultRef.current) return;
    resultRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [keyword]);

  useEffect(() => {
    const row = cityRowRef.current;
    if (!row) return;
    const active = row.querySelector<HTMLButtonElement>(
      '[data-active="true"]'
    );
    active?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [city]);

  async function translate(nextQuery = query): Promise<string | null> {
    const trimmed = nextQuery.trim();
    if (!trimmed) return null;

    setError("");
    setLoading(true);
    setKeyword("");
    setSource(null);
    setCopied(false);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });
      const data = (await res.json()) as TranslateResponse & { error?: string };
      if (!res.ok) throw new Error(data.error || "번역 실패");

      setKeyword(data.keyword);
      setSource(data.source);
      return data.keyword;
    } catch (err) {
      setError(err instanceof Error ? err.message : "번역 실패");
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    inputRef.current?.blur();
    await translate();
  }

  async function onSuggest(item: (typeof SUGGESTIONS)[number]) {
    setQuery(item.q);
    if (item.city) setCity(item.city);
    inputRef.current?.blur();
    await translate(item.q);
  }

  async function translateAndOpen() {
    inputRef.current?.blur();
    const result = await translate();
    if (!result) return;
    const url = buildGaodeSearchUrl(result, city || undefined);
    window.location.href = url;
  }

  async function copyLink() {
    if (!gaodeUrl) return;
    try {
      await navigator.clipboard.writeText(gaodeUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setError("링크 복사에 실패했습니다.");
    }
  }

  return (
    <main className={`page${keyword ? " has-result" : ""}`}>
      <div className="stage">
        <h1 className="brand">
          고덕검색
          <span>高德搜索</span>
        </h1>
        <p className="lead">
          한국어·영어·일본어로 입력하면 검색용 중국어로 바꿔 高德地图를
          엽니다.
        </p>

        <section className="panel" aria-label="검색">
          <p className="label">도시</p>
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

          <form className="search-block" onSubmit={onSubmit}>
            <label className="label" htmlFor="query">
              어디로 갈까요?
            </label>
            <div className="search-shell">
              <input
                id="query"
                ref={inputRef}
                className="field"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="예: 임시정부, Starbucks"
                maxLength={80}
                required
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                enterKeyHint="search"
                inputMode="search"
              />
              <button
                type="submit"
                className="primary"
                disabled={loading || !query.trim()}
              >
                {loading ? (
                  <span className="loading-dot">변환 중</span>
                ) : (
                  "변환하기"
                )}
              </button>
            </div>
            <div className="meta-row">
              <button
                type="button"
                className="secondary"
                disabled={loading || !query.trim()}
                onClick={translateAndOpen}
              >
                변환 후 바로 열기
              </button>
              <span aria-live="polite">{query.trim().length}/80</span>
            </div>
          </form>

          <div className="suggestions" aria-label="빠른 검색">
            {SUGGESTIONS.map((item) => (
              <button
                key={item.q}
                type="button"
                className="suggest"
                disabled={loading}
                onClick={() => onSuggest(item)}
              >
                {item.q}
              </button>
            ))}
          </div>

          {error ? (
            <div className="error" role="alert">
              {error}
            </div>
          ) : null}

          {keyword ? (
            <div className="result" ref={resultRef}>
              <div className="result-head">
                <span className="result-label">고덕 검색어</span>
                {source ? (
                  <span className="source">{SOURCE_LABEL[source]}</span>
                ) : null}
              </div>
              <input
                className="field keyword-field"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                aria-label="중국어 검색어 수정"
                enterKeyHint="done"
              />
              <p className="hint">
                틀리면 위에서 고친 뒤 고덕지도를 여세요.
              </p>
              <div className="actions">
                <a
                  className="primary"
                  href={gaodeUrl}
                  rel="noopener noreferrer"
                >
                  고덕지도에서 보기
                </a>
                <button type="button" className="secondary" onClick={copyLink}>
                  {copied ? "복사됨" : "링크 복사"}
                </button>
              </div>
            </div>
          ) : null}
        </section>
      </div>

      {keyword ? (
        <div className="sticky-cta">
          <a className="primary" href={gaodeUrl} rel="noopener noreferrer">
            고덕지도 열기
          </a>
          <button type="button" className="secondary" onClick={copyLink}>
            {copied ? "복사됨" : "링크 복사"}
          </button>
        </div>
      ) : null}
    </main>
  );
}
