"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  LOCALES,
  LOCALE_META,
  type Locale,
} from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
  label: string;
  onChange: (locale: Locale) => void;
};

export function LanguageSwitcher({ locale, label, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointer = (e: MouseEvent | TouchEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lang-switch" ref={rootRef}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-code">{locale.toUpperCase()}</span>
        <span className="lang-caret" aria-hidden="true" />
      </button>

      {open ? (
        <ul
          id={listId}
          className="lang-menu"
          role="listbox"
          aria-label={label}
        >
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const selected = code === locale;
            return (
              <li key={code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`lang-option${selected ? " is-selected" : ""}`}
                  onClick={() => {
                    onChange(code);
                    setOpen(false);
                  }}
                >
                  <span className="lang-option-native">{meta.native}</span>
                  <span className="lang-option-code">{code.toUpperCase()}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
