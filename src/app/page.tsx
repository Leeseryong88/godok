"use client";

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { resolveCityForGaode } from "@/lib/cityAliases";
import { CITIES } from "@/lib/cities";
import { openInGaodeApp } from "@/lib/gaode";
import { loadSavedCity, saveCity } from "@/lib/history";
import { PLACE_TYPES } from "@/lib/placeTypes";

type TranslateResponse = {
  keyword: string;
};

function normalizeSavedCity(saved: string): string {
  const raw = saved.trim();
  if (!raw) return "";
  const zh = resolveCityForGaode(raw);
  if (CITIES.some((c) => c.value === zh)) return zh;
  if (CITIES.some((c) => c.value === raw)) return raw;
  return "";
}

export default function HomePage() {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [pendingQuery, setPendingQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [customType, setCustomType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const [ready, setReady] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const customRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  useEffect(() => {
    setCity(normalizeSavedCity(loadSavedCity("")));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCity(city);
  }, [city, ready]);

  useEffect(() => {
    if (!modalOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: globalThis.KeyboardEvent) => {
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
    setFormError("");
    setModalOpen(true);
  }

  function closeModal() {
    if (loading) return;
    setModalOpen(false);
    setPendingQuery("");
    setCustomType("");
  }

  function tryOpenSearch() {
    if (loading) return;
    const trimmed = query.trim();
    if (!trimmed) {
      setFormError("검색어를 입력해 주세요.");
      inputRef.current?.focus();
      return;
    }
    inputRef.current?.blur();
    openModal(trimmed);
  }

  function onSearchSubmit(e: FormEvent) {
    e.preventDefault();
    tryOpenSearch();
  }

  function onCityChange(value: string) {
    setCity(value);
    setFormError("");
    // 도시 고른 뒤 바로 검색어 입력 가능하도록
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function onQueryKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    e.preventDefault();
    tryOpenSearch();
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

      setModalOpen(false);
      setPendingQuery("");
      setCustomType("");
      openInGaodeApp(data.keyword, city || undefined);
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

  const cityLabel =
    CITIES.find((c) => c.value === city)?.short ||
    CITIES.find((c) => c.value === city)?.label ||
    "";

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

        <form
          className="search"
          onSubmit={onSearchSubmit}
          aria-label="장소 검색"
          noValidate
        >
          <div className="search-box">
            <label className="city-wrap">
              <span className="sr-only">도시</span>
              <select
                className="city-select"
                value={city}
                onChange={(e) => onCityChange(e.target.value)}
                disabled={loading}
                aria-label="도시 선택"
              >
                {CITIES.map((c) => (
                  <option key={c.value || "all"} value={c.value}>
                    {c.short}
                  </option>
                ))}
              </select>
            </label>
            <span className="search-divider" aria-hidden="true" />
            <input
              ref={inputRef}
              className="field"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (formError) setFormError("");
              }}
              onKeyDown={onQueryKeyDown}
              placeholder="장소 검색"
              maxLength={80}
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
          {formError ? (
            <p className="error form-error" role="alert">
              {formError}
            </p>
          ) : null}
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
                  {cityLabel ? ` · ${cityLabel}` : ""}
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
              {city
                ? `${cityLabel}에서 유형에 맞춰 검색해요`
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
