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
import {
  detectPlatform,
  DevicePlatform,
  GAODE_INSTALL,
  openGaodeInstallPage,
  openInGaodeApp,
} from "@/lib/gaode";
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
  const [installOpen, setInstallOpen] = useState(false);
  const [customType, setCustomType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const [ready, setReady] = useState(false);
  const [platform, setPlatform] = useState<DevicePlatform>("desktop");

  const inputRef = useRef<HTMLInputElement>(null);
  const customRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const installTitleId = useId();
  const isDesktop = platform === "desktop";

  useEffect(() => {
    setCity(normalizeSavedCity(loadSavedCity("")));
    setPlatform(detectPlatform(navigator.userAgent || ""));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCity(city);
  }, [city, ready]);

  useEffect(() => {
    if (!modalOpen && !installOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Escape" || loading) return;
      if (installOpen) setInstallOpen(false);
      else if (modalOpen) closeModal();
    };
    window.addEventListener("keydown", onKey);

    if (modalOpen && !installOpen) {
      window.setTimeout(() => customRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen, installOpen, loading]);

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

    if (isDesktop) {
      setFormError("모바일에서만 고덕지도 앱으로 검색할 수 있어요.");
      return;
    }

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
    if (!isDesktop) {
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
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

    if (isDesktop) {
      setError("모바일에서만 고덕지도 앱으로 검색할 수 있어요.");
      return;
    }

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
          city: city || undefined,
        }),
      });
      const data = (await res.json()) as TranslateResponse & { error?: string };
      if (!res.ok) throw new Error(data.error || "검색에 실패했습니다.");

      setModalOpen(false);
      setPendingQuery("");
      setCustomType("");

      const result = await openInGaodeApp(data.keyword, city || undefined);
      if (result === "not_installed" || result === "desktop") {
        setInstallOpen(true);
      }
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

  function onInstallClick() {
    openGaodeInstallPage(platform === "desktop" ? "android" : platform);
  }

  const cityLabel =
    CITIES.find((c) => c.value === city)?.short ||
    CITIES.find((c) => c.value === city)?.label ||
    "";

  const installHref =
    platform === "ios" ? GAODE_INSTALL.ios : GAODE_INSTALL.androidWeb;

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

        {isDesktop && ready ? (
          <p className="device-banner" role="status">
            이 서비스는 모바일에서만 사용할 수 있어요. 휴대폰 브라우저로
            열어 高德地图 앱으로 검색하세요.
          </p>
        ) : null}

        <form
          className="search"
          onSubmit={onSearchSubmit}
          aria-label="장소 검색"
          noValidate
        >
          <div className={`search-box${isDesktop ? " is-disabled" : ""}`}>
            <label className="city-wrap">
              <span className="sr-only">도시</span>
              <select
                className="city-select"
                value={city}
                onChange={(e) => onCityChange(e.target.value)}
                disabled={loading || isDesktop}
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
              disabled={loading || isDesktop}
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
          ) : !isDesktop ? (
            <p className="search-hint">高德地图 앱이 설치되어 있어야 해요</p>
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
                고덕 앱으로 여는 중…
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

      {installOpen ? (
        <div
          className="modal-root"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setInstallOpen(false);
          }}
        >
          <div
            className="modal install-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={installTitleId}
          >
            <div className="modal-head">
              <div>
                <p className="modal-kicker">高德地图</p>
                <h2 id={installTitleId} className="modal-title install-title">
                  고덕지도를 설치해 주세요
                </h2>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setInstallOpen(false)}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <p className="modal-desc install-desc">
              앱이 없거나 열리지 않았어요. 설치한 뒤 다시 검색하면 바로
              고덕지도에서 결과를 볼 수 있어요.
            </p>

            <div className="install-actions">
              <button
                type="button"
                className="install-primary"
                onClick={onInstallClick}
              >
                고덕지도 설치하기
              </button>
              <a
                className="install-secondary"
                href={installHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                다운로드 페이지 열기
              </a>
              <button
                type="button"
                className="install-dismiss"
                onClick={() => setInstallOpen(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
