"use client";

import { useMemo, useState } from "react";
import {
  getAttractionLabel,
  SPOTS_CITY_TABS,
  type Attraction,
  type CityGuide,
} from "@/lib/attractions";
import { getSpotBlurb, getSpotMeta } from "@/lib/attractions/meta";
import { projectPins } from "@/lib/attractions/project";
import type { Locale } from "@/lib/i18n/locales";
import type { Messages } from "@/lib/i18n/messages";

type Props = {
  locale: Locale;
  t: Messages;
  cityZh: string;
  cityLabel: string;
  guide: CityGuide | undefined;
  loading: boolean;
  disabled: boolean;
  onCityChange: (cityZh: string) => void;
  onOpenAmap: (cityZh: string, attraction: Attraction) => void;
};

export function SpotsMap({
  locale,
  t,
  cityZh,
  cityLabel,
  guide,
  loading,
  disabled,
  onCityChange,
  onOpenAmap,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const attractions = guide?.attractions ?? [];
  const selected =
    attractions.find((spot) => spot.id === selectedId) || null;

  const pins = useMemo(() => {
    const points = attractions
      .map((spot) => {
        const meta = getSpotMeta(cityZh, spot.id);
        if (!meta) return null;
        return { id: spot.id, lat: meta.lat, lng: meta.lng };
      })
      .filter((p): p is { id: string; lat: number; lng: number } => Boolean(p));
    return projectPins(points);
  }, [attractions, cityZh]);

  const pinById = useMemo(() => {
    return new Map(pins.map((p) => [p.id, p]));
  }, [pins]);

  function selectSpot(id: string) {
    setSelectedId((prev) => (prev === id ? prev : id));
  }

  const heading = t.spotsTitle.replace("{city}", cityLabel);
  const blurb = selected
    ? getSpotBlurb(cityZh, selected.id, locale)
    : "";

  return (
    <section className="spots" aria-label={heading}>
      <div
        className="city-tabs"
        role="tablist"
        aria-label={t.cityTabsAria}
      >
        {SPOTS_CITY_TABS.map((opt) => {
          const label = t.cities[opt.city] || opt.city;
          const active = cityZh === opt.city;
          return (
            <button
              key={opt.city}
              type="button"
              role="tab"
              className={`city-tab${active ? " is-active" : ""}`}
              aria-selected={active}
              disabled={loading}
              onClick={() => {
                onCityChange(opt.city);
                setSelectedId(null);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="spots-head">
        <h2 className="spots-title">{heading}</h2>
        <p className="spots-desc">{t.spotsDesc}</p>
      </div>

      <div className="spot-map-card">
        <div
          className="spot-map"
          role="application"
          aria-label={t.spotsMapAria}
          onClick={() => setSelectedId(null)}
        >
          <svg
            className="spot-map-art"
            viewBox="0 0 320 240"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path d="M12 70 C70 40, 110 95, 168 78 S250 38, 308 88" />
            <path d="M8 150 C78 118, 130 168, 188 150 S268 118, 314 168" />
            <path d="M40 210 C120 178, 170 228, 260 200" />
            <circle cx="168" cy="78" r="3.2" />
            <circle cx="188" cy="150" r="2.4" />
          </svg>

          {attractions.map((spot, index) => {
            const pos = pinById.get(spot.id);
            if (!pos) return null;
            const active = selectedId === spot.id;
            const name = getAttractionLabel(spot, locale);
            return (
              <button
                key={spot.id}
                type="button"
                className={`map-pin${active ? " is-active" : ""}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                disabled={loading}
                aria-pressed={active}
                aria-label={name}
                onClick={(e) => {
                  e.stopPropagation();
                  selectSpot(spot.id);
                }}
              >
                <span className="map-pin-mark" aria-hidden="true">
                  <svg viewBox="0 0 32 40" className="map-pin-svg">
                    <path d="M16 1.6c-7.2 0-13 5.8-13 13 0 9.4 13 23.2 13 23.2S29 24 29 14.6c0-7.2-5.8-13-13-13z" />
                    <circle cx="16" cy="14.2" r="5.2" />
                  </svg>
                  <span className="map-pin-num">{index + 1}</span>
                </span>
                {active ? (
                  <span className="map-pin-label">{name}</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="spot-legend" role="list">
        {attractions.map((spot, index) => {
          const active = selectedId === spot.id;
          return (
            <button
              key={spot.id}
              type="button"
              role="listitem"
              className={`spot-legend-item${active ? " is-active" : ""}`}
              disabled={loading}
              onClick={() => selectSpot(spot.id)}
            >
              <span className="spot-legend-num" aria-hidden="true">
                {index + 1}
              </span>
              <span className="spot-legend-name">
                {getAttractionLabel(spot, locale)}
              </span>
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="spot-sheet" role="region" aria-label={t.spotDetail}>
          <div className="spot-sheet-head">
            <div>
              <p className="spot-sheet-kicker">{cityLabel}</p>
              <h3 className="spot-sheet-title">
                {getAttractionLabel(selected, locale)}
              </h3>
              <p className="spot-sheet-zh" lang="zh-CN">
                {selected.keyword}
              </p>
            </div>
            <button
              type="button"
              className="spot-sheet-close"
              onClick={() => setSelectedId(null)}
              aria-label={t.close}
            >
              ✕
            </button>
          </div>
          {blurb ? <p className="spot-sheet-blurb">{blurb}</p> : null}
          <button
            type="button"
            className="spot-sheet-open"
            disabled={disabled || loading}
            onClick={() => onOpenAmap(cityZh, selected)}
          >
            {loading ? t.openingApp : t.openInAmap}
          </button>
        </div>
      ) : (
        <p className="spot-sheet-placeholder">{t.spotsHint}</p>
      )}
    </section>
  );
}
