"use client";

import {
  FormEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { resolveCityForGaode } from "@/lib/cityAliases";
import { openInGaodeApp } from "@/lib/gaode";
import { loadSavedCity, saveCity } from "@/lib/history";
import { PLACE_TYPES } from "@/lib/placeTypes";

type TranslateResponse = {
  keyword: string;
};

export default function HomePage() {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [pendingQuery, setPendingQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [customType, setCustomType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const customRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  useEffect(() => {
    setCity(loadSavedCity(""));
    setReady(true);

    const wide = window.matchMedia("(min-width: 720px)").matches;
    if (wide) inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCity(city);
  }, [city, ready]);

  useEffect(() => {
    if (!modalOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) closeModal();
    };
    window.addEventListener("keydown", onKey);

    window.setTimeout(() => customRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen, loading]);

  function openModal(trimmed: string) {
    setPendingQuery(trimmed);
    setCustomType("");
    setError("");
    setModalOpen(true);
  }

  function closeModal() {
    if (loading) return;
    setModalOpen(false);
    setPendingQuery("");
    setCustomType("");
  }

  function onSearchSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || loading) return;
    inputRef.current?.blur();
    openModal(trimmed);
  }

  async function runSearch(opts: {
    placeTypeId?: string;
    placeTypeCustom?: string;
  }) {
    const trimmed = pendingQuery.trim();
    if (!trimmed || loading) return;

    setError("");
    setLoading(true);
    saveCity(city);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: trimmed,
          placeTypeId: opts.placeTypeId,
          placeTypeCustom: opts.placeTypeCustom,
        }),
      });
      const data = (await res.json()) as TranslateResponse & { error?: string };
      if (!res.ok) throw new Error(data.error || "검색에 실패했습니다.");

      const cityZh = resolveCityForGaode(city);
      setModalOpen(false);
      setPendingQuery("");
      setCustomType("");
      openInGaodeApp(data.keyword, cityZh || undefined);
    } catch (err) {
      setError(err instanceof Error ? err.message : "검색에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }

  function onPickType(typeId: string) {
    void runSearch({ placeTypeId: typeId });
  }

  function onCustomSubmit(e: FormEvent) {
    e.preventDefault();
    const custom = customType.trim();
    if (!custom) return;
    void runSearch({ placeTypeCustom: custom });
  }

  const cityZhPreview = resolveCityForGaode(city);

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

        <form className="search" onSubmit={onSearchSubmit} aria-label="장소 검색">
          <div className="search-box">
            <input
              className="field city-field"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="도시"
              maxLength={40}
              disabled={loading}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              enterKeyHint="next"
              aria-label="도시"
              list="city-suggestions"
            />
            <datalist id="city-suggestions">
              <option value="상하이" />
              <option value="베이징" />
              <option value="광저우" />
              <option value="선전" />
              <option value="청두" />
              <option value="항저우" />
              <option value="시안" />
              <option value="난징" />
              <option value="上海" />
              <option value="北京" />
            </datalist>
            <span className="search-divider" aria-hidden="true" />
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
          </div>
        </form>
      </div>

      {modalOpen ? (
        <div
          className="modal-root"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !loading) closeModal();
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="modal-head">
              <div>
                <p className="modal-kicker">
                  검색어
                  {cityZhPreview ? ` · ${city.trim() || cityZhPreview}` : ""}
                </p>
                <p className="modal-query">{pendingQuery}</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
                disabled={loading}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <h2 id={titleId} className="modal-title">
              어떤 장소인가요?
            </h2>
            <p className="modal-desc">
              {cityZhPreview
                ? `${cityZhPreview}에서 유형에 맞춰 검색해요`
                : "유형을 고르면 더 정확하게 찾아요"}
            </p>

            <div className="type-grid" role="list">
              {PLACE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="type-btn"
                  role="listitem"
                  disabled={loading}
                  onClick={() => onPickType(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <form className="custom-type" onSubmit={onCustomSubmit}>
              <label className="custom-label" htmlFor="custom-type">
                직접 입력
              </label>
              <div className="custom-row">
                <input
                  id="custom-type"
                  ref={customRef}
                  className="custom-field"
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value)}
                  placeholder="예: 병원, 공원, 박물관"
                  maxLength={40}
                  disabled={loading}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="custom-submit"
                  disabled={loading || !customType.trim()}
                >
                  {loading ? (
                    <span className="spinner light" aria-hidden="true" />
                  ) : (
                    "찾기"
                  )}
                </button>
              </div>
            </form>

            {loading ? (
              <p className="modal-status" aria-live="polite">
                고덕 검색어 준비 중…
              </p>
            ) : null}

            {error ? (
              <p className="error modal-error" role="alert">
                {error}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}
