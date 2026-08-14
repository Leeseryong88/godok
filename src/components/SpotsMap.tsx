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
  chinaMapSrc,
  cityMapSrc,
  getMapViewForCity,
  projectChinaCities,
  projectPins,
} from "@/lib/attractions/mapView";
import type { Locale } from "@/lib/i18n/locales";
import type { Messages } from "@/lib/i18n/messages";

const CHINA_LABEL_SIDE: Record<string, string> = {
  深圳: "is-below",
  广州: "is-left",
  上海: "is-right",
  苏州: "is-left",
  杭州: "is-below",
  南京: "is-above",
  北京: "is-left",
  天津: "is-right",
  成都: "is-left",
  重庆: "is-right",
  武汉: "is-above",
  青岛: "is-right",
  大连: "is-right",
  厦门: "is-right",
};

type Props = {
  locale: Locale;
  t: Messages;
  cityZh: string;
  cityLabel: string;
  guide: CityGuide | undefined;
  loading: boolean;
  disabled: boolean;
  visible: boolean;
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
  visible,
  onCityChange,
  onOpenAmap,
  onModalOpenChange,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const pickerTitleId = useId();
  const requiredPick = !cityZh;

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

  const chinaPins = useMemo(() => projectChinaCities(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (!cityZh) setPickerOpen(true);
  }, [visible, cityZh]);

  useEffect(() => {
    onModalOpenChange?.(visible && (Boolean(selectedId) || pickerOpen));
  }, [selectedId, pickerOpen, visible, onModalOpenChange]);

  useEffect(() => {
    if (!selectedId && !pickerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (pickerOpen && !requiredPick) {
        setPickerOpen(false);
        return;
      }
      if (selectedId) setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId, pickerOpen, requiredPick]);

  function openSpot(id: string) {
    setSelectedId(id);
  }

  function closeSpot() {
    setSelectedId(null);
  }

  function openPicker() {
    closeSpot();
    setPickerOpen(true);
  }

  function pickCity(nextCity: string) {
    onCityChange(nextCity);
    closeSpot();
    setPickerOpen(false);
  }

  const heading = cityZh
    ? t.spotsTitle.replace("{city}", cityLabel)
    : t.spotsPickCity;
  const paragraphs = selected
    ? getSpotParagraphs(cityZh, selected.id, locale)
    : [];

  const picker =
    mounted && pickerOpen
      ? createPortal(
          <div
            className="modal-root"
            role="presentation"
            onMouseDown={(e) => {
              if (
                e.target === e.currentTarget &&
                !requiredPick &&
                !loading
              ) {
                setPickerOpen(false);
              }
            }}
          >
            <div
              className="modal city-picker-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={pickerTitleId}
            >
              <div className="modal-head">
                <div>
                  <p className="modal-kicker">{t.tabSpots}</p>
                  <p className="modal-query" id={pickerTitleId}>
                    {t.spotsPickCity}
                  </p>
                </div>
                {requiredPick ? null : (
                  <button
                    type="button"
                    className="modal-close"
                    onClick={() => setPickerOpen(false)}
                    aria-label={t.close}
                  >
                    ✕
                  </button>
                )}
              </div>
              <p className="modal-desc">{t.spotsPickCityDesc}</p>
              <div className="china-map" aria-label={t.cityTabsAria}>
                <img
                  className="china-map-image"
                  src={chinaMapSrc()}
                  alt=""
                  draggable={false}
                />
                {chinaPins.map((pin) => {
                  if (!pin.inView) return null;
                  const label = t.cities[pin.id] || pin.id;
                  const active = cityZh === pin.id;
                  const side = CHINA_LABEL_SIDE[pin.id] || "";
                  return (
                    <button
                      key={pin.id}
                      type="button"
                      className={`china-map-city${active ? " is-active" : ""}${
                        side ? ` ${side}` : ""
                      }`}
                      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                      disabled={loading}
                      onClick={() => pickCity(pin.id)}
                    >
                      <span className="china-map-dot" aria-hidden="true" />
                      <span className="china-map-name">{label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="city-picker-list" role="list" aria-label={t.cityTabsAria}>
                {SPOTS_CITY_TABS.map((opt) => {
                  const label = t.cities[opt.city] || opt.city;
                  const active = cityZh === opt.city;
                  return (
                    <button
                      key={opt.city}
                      type="button"
                      role="listitem"
                      className={`city-tab${active ? " is-active" : ""}`}
                      disabled={loading}
                      onClick={() => pickCity(opt.city)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

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
      <div className="spots-head">
        <div className="spots-head-row">
          <h2 className="spots-title">{heading}</h2>
          {cityZh ? (
            <button
              type="button"
              className="spots-change-city"
              disabled={loading}
              onClick={openPicker}
            >
              {t.spotsChangeCity}
            </button>
          ) : null}
        </div>
        <p className="spots-desc">{t.spotsDesc}</p>
      </div>

      {cityZh ? (
        <>
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
        </>
      ) : null}
      {picker}
      {modal}
    </section>
  );
}
