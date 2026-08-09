"use client";

import { useEffect, useRef } from "react";
import { COUPANG_BANNER } from "@/lib/affiliate";

declare global {
  interface Window {
    PartnersCoupang?: {
      G: new (config: Record<string, unknown>) => void;
    };
  }
}

function loadCoupangScript(src: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.PartnersCoupang?.G) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${src}"]`
  );

  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.PartnersCoupang?.G) {
        resolve();
        return;
      }
      const onLoad = () => resolve();
      const onError = () => reject(new Error("Coupang script failed"));
      existing.addEventListener("load", onLoad, { once: true });
      existing.addEventListener("error", onError, { once: true });

      const started = Date.now();
      const timer = window.setInterval(() => {
        if (window.PartnersCoupang?.G) {
          window.clearInterval(timer);
          resolve();
        } else if (Date.now() - started > 8000) {
          window.clearInterval(timer);
          reject(new Error("Coupang script timeout"));
        }
      }, 40);
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Coupang script failed"));
    document.body.appendChild(script);
  });
}

type Props = {
  disclosure: string;
};

export function CoupangDynamicBanner({ disclosure }: Props) {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    let cancelled = false;

    void (async () => {
      try {
        await loadCoupangScript(COUPANG_BANNER.scriptSrc);
        if (cancelled || !slotRef.current || !window.PartnersCoupang?.G) return;

        const el = slotRef.current;
        el.innerHTML = "";

        const width = String(
          Math.min(
            COUPANG_BANNER.width,
            Math.max(280, window.innerWidth - 40)
          )
        );

        // 스크립트를 슬롯 안에서 실행해야 iframe이 배너 영역에 붙음
        const runner = document.createElement("script");
        runner.textContent = `new PartnersCoupang.G(${JSON.stringify({
          id: COUPANG_BANNER.id,
          trackingCode: COUPANG_BANNER.trackingCode,
          subId: null,
          template: COUPANG_BANNER.template,
          width,
          height: String(COUPANG_BANNER.height),
        })});`;
        el.appendChild(runner);
      } catch {
        // 광고 로드 실패 시 UI는 조용히 비움
      }
    })();

    return () => {
      cancelled = true;
      if (slotRef.current) slotRef.current.innerHTML = "";
    };
  }, []);

  return (
    <aside className="coupang-banner" aria-label="Coupang Partners">
      <div ref={slotRef} className="coupang-banner-slot" />
      <p className="coupang-banner-disclosure">{disclosure}</p>
    </aside>
  );
}
