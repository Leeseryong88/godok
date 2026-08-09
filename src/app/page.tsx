"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { openInGaodeApp } from "@/lib/gaode";

type TranslateResponse = {
  keyword: string;
};

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 720px)").matches;
    if (wide) inputRef.current?.focus();
  }, []);

  async function onSearch(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || loading) return;

    setError("");
    setLoading(true);
    inputRef.current?.blur();

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });
      const data = (await res.json()) as TranslateResponse & { error?: string };
      if (!res.ok) throw new Error(data.error || "검색에 실패했습니다.");

      openInGaodeApp(data.keyword);
    } catch (err) {
      setError(err instanceof Error ? err.message : "검색에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
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
          <h1 className="brand">
            고덕검색
            <em>高德搜索</em>
          </h1>
        </header>

        <form className="search" onSubmit={onSearch} aria-label="장소 검색">
          <div className={`search-box${loading ? " is-loading" : ""}`}>
            <input
              ref={inputRef}
              className="field"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="장소 검색"
              maxLength={80}
              required
              disabled={loading}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              enterKeyHint="search"
              inputMode="search"
              aria-label="장소 검색어"
            />
            {loading ? <span className="spinner" aria-hidden="true" /> : null}
          </div>

          {error ? (
            <p className="error" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
