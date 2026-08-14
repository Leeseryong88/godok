"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  getAttractionLabel,
  SPOTS_CITY_TABS,
  type Attraction,
  type CityGuide,
} from "@/lib/attractions";
import { getSpotMeta, getSpotParagraphs } from "@/lib/attractions/meta";
import {
  cityMapSrc,
  getMapViewForCity,
  projectPins,
} from "@/lib/attractions/mapView";
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
  onModalOpenChange?: (open: boolean) => void;
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
  onModalOpenChange,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  const attractions = guide?.attractions ?? [];
  const selected =
    attractions.find((spot) => spot.id === selectedId) || null;

  const mapSrc = cityMapSrc(cityZh);
  const pins = useMemo(() => {
    const view = getMapViewForCity(cityZh);
    if (!view) return [];
    const points = attractions
      .map((spot) => {
        const meta = getSpotMeta(cityZh, spot.id);
        if (!meta) return null;
        return { id: spot.id, lat: meta.lat, lng: meta.lng };
      })
      .filter((p): p is { id: string; lat: number; lng: number } => Boolean(p));
    return projectPins(points, view);
  }, [attractions, cityZh]);

  const pinById = useMemo(() => {
    return new Map(pins.map((p) => [p.id, p]));
  }, [pins]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onModalOpenChange?.(Boolean(selectedId));
  }, [selectedId, onModalOpenChange]);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  function openSpot(id: string) {
    setSelectedId(id);
  }

  function closeSpot() {
    setSelectedId(null);
  }

  const heading = t.spotsTitle.replace("{city}", cityLabel);
  const paragraphs = selected
    ? getSpotParagraphs(cityZh, selected.id, locale)
    : [];

  const modal =
    mounted && selected
      ? createPortal(
          <div
            className="modal-root"
            role="presentation"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget && !loading) closeSpot();
            }}
          >
            <div
              className="modal spot-detail-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <div className="modal-head">
                <div>
                  <p className="modal-kicker">{cityLabel}</p>
                  <p className="modal-query" id={titleId}>
                    {getAttractionLabel(selected, locale)}
                  </p>
                  <p className="spot-detail-zh" lang="zh-CN">
                    {selected.keyword}
                  </p>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={closeSpot}
                  aria-label={t.close}
                >
                  ✕
                </button>
              </div>

              <div className="spot-detail-body">
                {paragraphs.map((para) => (
                  <p key={para.slice(0, 28)}>{para}</p>
                ))}
              </div>

              <button
                type="button"
                className="spot-detail-open"
                disabled={disabled || loading}
                onClick={() => onOpenAmap(cityZh, selected)}
              >
                {loading ? t.openingApp : t.openInAmap}
              </button>
            </div>
          </div>,
          document.body
        )
      : null;

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
                closeSpot();
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
        >
          {mapSrc ? (
            <img
              className="spot-map-image"
              src={mapSrc}
              alt=""
              draggable={false}
            />
          ) : null}

          {attractions.map((spot, index) => {
            const pos = pinById.get(spot.id);
            if (!pos || !pos.inView) return null;
            const active = selectedId === spot.id;
            const name = getAttractionLabel(spot, locale);
            const labelBelow = pos.y < 22;
            return (
              <button
                key={spot.id}
                type="button"
                className={`map-pin${active ? " is-active" : ""}${
                  labelBelow ? " is-label-below" : ""
                }`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                disabled={loading}
                aria-pressed={active}
                aria-label={name}
                onClick={() => openSpot(spot.id)}
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
          <p className="spot-map-credit">© OpenStreetMap © CARTO</p>
        </div>
      </div>

      <div className="spot-legend" role="list">
        {attractions.map((spot, index) => {
          const active = selectedId === spot.id;
          const outbound = pinById.get(spot.id)?.inView === false;
          return (
            <button
              key={spot.id}
              type="button"
              role="listitem"
              className={`spot-legend-item${active ? " is-active" : ""}${
                outbound ? " is-outbound" : ""
              }`}
              disabled={loading}
              onClick={() => openSpot(spot.id)}
            >
              <span className="spot-legend-num" aria-hidden="true">
                {index + 1}
              </span>
              <span className="spot-legend-name">
                {getAttractionLabel(spot, locale)}
              </span>
              {outbound ? (
                <span className="spot-legend-far">{t.spotsFar}</span>
              ) : null}
            </button>
          );
        })}
      </div>

      <p className="spot-sheet-placeholder">{t.spotsHint}</p>
      {modal}
    </section>
  );
}
