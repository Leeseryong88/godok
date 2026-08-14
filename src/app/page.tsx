"use client";

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { HomeCityGuides } from "@/components/HomeCityGuides";
import { SpotsMap } from "@/components/SpotsMap";
import {
  getCityGuide,
  resolveSpotsCity,
  type Attraction,
} from "@/lib/attractions";
import { getSpotMeta } from "@/lib/attractions/meta";
import { resolveCityForGaode } from "@/lib/cityAliases";
import { CITIES } from "@/lib/cities";
import {
  detectPlatform,
  DevicePlatform,
  GAODE_INSTALL,
  openGaodeInstallPage,
  openInGaodeApp,
} from "@/lib/gaode";
import {
  loadSavedCity,
  loadSpotsCityCookie,
  saveCity,
  saveSpotsCityCookie,
} from "@/lib/history";
import {
  applyDocumentLocale,
  DEFAULT_LOCALE,
  loadLocale,
  saveLocale,
  type Locale,
} from "@/lib/i18n/locales";
import { getMessages } from "@/lib/i18n/messages";
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
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [tab, setTab] = useState<"search" | "spots">("search");
  const [spotsCity, setSpotsCity] = useState("");
  const [spotModalOpen, setSpotModalOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchTabId = useId();
  const spotsTabId = useId();
  const searchPanelId = useId();
  const spotsPanelId = useId();
  const customRef = useRef<HTMLInputElement>(null);
  const modalDialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const installTitleId = useId();
  const isDesktop = platform === "desktop";
  const overlayOpen = modalOpen || installOpen || spotModalOpen;
  const t = useMemo(() => getMessages(locale), [locale]);

  function dismissKeyboard() {
    inputRef.current?.blur();
    customRef.current?.blur();
    const active = document.activeElement;
    if (active instanceof HTMLElement) active.blur();
  }

  useEffect(() => {
    const next = loadLocale(DEFAULT_LOCALE);
    setLocale(next);
    applyDocumentLocale(next);
    setCity(normalizeSavedCity(loadSavedCity("")));
    setSpotsCity(resolveSpotsCity(loadSpotsCityCookie()));
    setPlatform(detectPlatform(navigator.userAgent || ""));
    if (new URLSearchParams(window.location.search).get("tab") === "spots") {
      setTab("spots");
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCity(city);
  }, [city, ready]);

  useEffect(() => {
    if (!ready || !spotsCity) return;
    saveSpotsCityCookie(spotsCity);
  }, [spotsCity, ready]);

  useEffect(() => {
    if (!ready) return;
    saveLocale(locale);
    applyDocumentLocale(locale);
  }, [locale, ready]);

  useEffect(() => {
    if (!overlayOpen) return;

    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevWidth = document.body.style.width;
    const scrollY = window.scrollY;

    // iOS: 배경 스크롤·입력창이 모달 위로 뜨는 것 방지
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    dismissKeyboard();

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Escape" || loading) return;
      if (installOpen) setInstallOpen(false);
      else if (modalOpen) closeModal();
    };
    window.addEventListener("keydown", onKey);

    // 입력칸이 아닌 다이얼로그에 포커스 → 키보드가 다시 안 올라옴
    const focusTimer = window.setTimeout(() => {
      dismissKeyboard();
      modalDialogRef.current?.focus({ preventScroll: true });
    }, 80);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.width = prevWidth;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKey);
    };
  }, [overlayOpen, modalOpen, installOpen, loading]);

  function onLocaleChange(next: Locale) {
    setLocale(next);
    setFormError("");
    setError("");
  }

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
      setFormError(t.desktopOnly);
      return;
    }

    const trimmed = query.trim();
    if (!trimmed) {
      setFormError(t.emptyQuery);
      inputRef.current?.focus();
      return;
    }
    dismissKeyboard();
    // 키보드가 내려간 뒤 모달을 열어 입력창이 모달을 가리지 않게 함
    window.setTimeout(() => openModal(trimmed), 60);
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
      setError(t.desktopOnly);
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
      if (!res.ok) throw new Error(data.error || t.searchFailed);

      setModalOpen(false);
      setPendingQuery("");
      setCustomType("");

      const result = await openInGaodeApp(data.keyword, city || undefined);
      if (result === "not_installed" || result === "desktop") {
        setInstallOpen(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.searchFailed);
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

  async function openAttraction(guideCity: string, attraction: Attraction) {
    if (loading) return;

    if (isDesktop) {
      setFormError(t.desktopOnly);
      return;
    }

    setFormError("");
    setError("");
    setLoading(true);
    setCity(guideCity);
    saveCity(guideCity);
    dismissKeyboard();

    try {
      track("attraction_open", {
        city: guideCity,
        id: attraction.id,
        keyword: attraction.keyword,
      });
      const meta = getSpotMeta(guideCity, attraction.id);
      const result = await openInGaodeApp(
        attraction.keyword,
        guideCity,
        meta ? { lat: meta.lat, lng: meta.lng } : undefined
      );
      if (result === "not_installed" || result === "desktop") {
        setInstallOpen(true);
      }
    } finally {
      setLoading(false);
    }
  }

  const cityLabel = t.cities[city] || "";
  const spotsCityLabel = t.cities[spotsCity] || spotsCity;
  const activeGuide = getCityGuide(spotsCity);

  const installHref =
    platform === "ios" ? GAODE_INSTALL.ios : GAODE_INSTALL.androidWeb;

  return (
    <main className={`page home-page${overlayOpen ? " is-overlay-open" : ""}`}>
      <LanguageSwitcher
        locale={locale}
        label={t.language}
        onChange={onLocaleChange}
      />

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

      <div
        className="shell"
        aria-hidden={overlayOpen || undefined}
        inert={overlayOpen || undefined}
      >
        <header className="hero">
          <h1 className="brand">
            {t.brand}
            <em>{t.brandSub}</em>
          </h1>
        </header>

        {isDesktop && ready ? (
          <p className="device-banner" role="status">
            {t.desktopBanner}
          </p>
        ) : null}

        <p className="home-quick-links">
          <Link href="/cities">
            {locale === "ko" ? "도시 안내" : "City guides"}
          </Link>
          <span aria-hidden="true"> · </span>
          <Link href="/about">
            {locale === "ko" ? "소개" : "About"}
          </Link>
          <span aria-hidden="true"> · </span>
          <Link href="/privacy">
            {locale === "ko" ? "개인정보" : "Privacy"}
          </Link>
          <span aria-hidden="true"> · </span>
          <Link href="/contact">
            {locale === "ko" ? "문의" : "Contact"}
          </Link>
        </p>

        <div className="tabs" role="tablist" aria-label={t.brand}>
          <button
            type="button"
            id={searchTabId}
            role="tab"
            className={`tab${tab === "search" ? " is-active" : ""}`}
            aria-selected={tab === "search"}
            aria-controls={searchPanelId}
            tabIndex={tab === "search" ? 0 : -1}
            onClick={() => {
              setTab("search");
              setFormError("");
            }}
          >
            {t.tabSearch}
          </button>
          <button
            type="button"
            id={spotsTabId}
            role="tab"
            className={`tab${tab === "spots" ? " is-active" : ""}`}
            aria-selected={tab === "spots"}
            aria-controls={spotsPanelId}
            tabIndex={tab === "spots" ? 0 : -1}
            onClick={() => {
              dismissKeyboard();
              setTab("spots");
              setFormError("");
            }}
          >
            {t.tabSpots}
          </button>
        </div>

        <div
          id={searchPanelId}
          role="tabpanel"
          aria-labelledby={searchTabId}
          hidden={tab !== "search"}
          className="tab-panel"
        >
          <form
            className="search"
            onSubmit={onSearchSubmit}
            aria-label={t.searchAria}
            noValidate
          >
            <div className={`search-box${isDesktop ? " is-disabled" : ""}`}>
              <label className="city-wrap">
                <span className="sr-only">{t.cityAria}</span>
                <select
                  className="city-select"
                  value={city}
                  onChange={(e) => onCityChange(e.target.value)}
                  disabled={loading || isDesktop}
                  aria-label={t.cityAria}
                >
                  {CITIES.map((c) => (
                    <option key={c.value || "all"} value={c.value}>
                      {t.cities[c.value] || c.short}
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
                placeholder={t.placeholder}
                maxLength={80}
                disabled={loading || isDesktop}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                enterKeyHint="search"
                inputMode="search"
                aria-label={t.queryAria}
              />
            </div>
            {formError && tab === "search" ? (
              <p className="error form-error" role="alert">
                {formError}
              </p>
            ) : null}
          </form>
        </div>

        <div
          id={spotsPanelId}
          role="tabpanel"
          aria-labelledby={spotsTabId}
          hidden={tab !== "spots"}
          className="tab-panel"
        >
          {formError && tab === "spots" ? (
            <p className="error form-error spots-error" role="alert">
              {formError}
            </p>
          ) : null}

          <SpotsMap
            locale={locale}
            t={t}
            cityZh={spotsCity}
            cityLabel={spotsCityLabel}
            guide={activeGuide}
            loading={loading}
            disabled={isDesktop}
            visible={tab === "spots"}
            onCityChange={(nextCity) => {
              const next = resolveSpotsCity(nextCity);
              if (!next) return;
              setSpotsCity(next);
              saveSpotsCityCookie(next);
              setFormError("");
            }}
            onOpenAmap={(guideCity, spot) => {
              void openAttraction(guideCity, spot);
            }}
            onModalOpenChange={setSpotModalOpen}
          />
        </div>

        <HomeCityGuides locale={locale} />

        <SiteFooter locale={locale} />
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
            ref={modalDialogRef}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
          >
            <div className="modal-head">
              <div>
                <p className="modal-kicker">
                  {t.queryKicker}
                  {cityLabel ? ` · ${cityLabel}` : ""}
                </p>
                <p className="modal-query">{pendingQuery}</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
                disabled={loading}
                aria-label={t.close}
              >
                ✕
              </button>
            </div>

            <h2 id={titleId} className="modal-title">
              {t.placeTypeTitle}
            </h2>
            <p className="modal-desc">
              {city
                ? t.placeTypeDescCity.replace("{city}", cityLabel)
                : t.placeTypeDesc}
            </p>

            <div className="type-grid" role="list">
              {PLACE_TYPES.map((pt) => (
                <button
                  key={pt.id}
                  type="button"
                  className="type-btn"
                  role="listitem"
                  disabled={loading}
                  onClick={() => onPickType(pt.id)}
                >
                  {t.placeTypes[pt.id] || pt.label}
                </button>
              ))}
            </div>

            <form className="custom-type" onSubmit={onCustomSubmit}>
              <label className="custom-label" htmlFor="custom-type">
                {t.customLabel}
              </label>
              <div className="custom-row">
                <input
                  id="custom-type"
                  ref={customRef}
                  className="custom-field"
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value)}
                  placeholder={t.customPlaceholder}
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
                    t.find
                  )}
                </button>
              </div>
            </form>

            {loading ? (
              <p className="modal-status" aria-live="polite">
                {t.openingApp}
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
                <p className="modal-kicker">{t.installKicker}</p>
                <h2 id={installTitleId} className="modal-title install-title">
                  {t.installTitle}
                </h2>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setInstallOpen(false)}
                aria-label={t.close}
              >
                ✕
              </button>
            </div>

            <p className="modal-desc install-desc">{t.installDesc}</p>

            <div className="install-actions">
              <button
                type="button"
                className="install-primary"
                onClick={onInstallClick}
              >
                {t.installPrimary}
              </button>
              <a
                className="install-secondary"
                href={installHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.installSecondary}
              </a>
              <button
                type="button"
                className="install-dismiss"
                onClick={() => setInstallOpen(false)}
              >
                {t.dismiss}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
