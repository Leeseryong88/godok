"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import {
  detectPlatform,
  openGaodeInstallPage,
  openInGaodeApp,
} from "@/lib/gaode";

type Props = {
  keyword: string;
  cityZh: string;
  label: string;
  attractionId: string;
};

export function GuideOpenButton({
  keyword,
  cityZh,
  label,
  attractionId,
}: Props) {
  const [busy, setBusy] = useState(false);

  async function onClick() {
    if (busy) return;
    const platform = detectPlatform(
      typeof navigator !== "undefined" ? navigator.userAgent : ""
    );
    if (platform === "desktop") {
      window.alert(
        "모바일에서 Amap 앱으로 열 수 있어요. 휴대폰 브라우저에서 다시 시도해 주세요."
      );
      return;
    }

    setBusy(true);
    try {
      track("guide_spot_open", { city: cityZh, id: attractionId });
      const result = await openInGaodeApp(keyword, cityZh);
      if (result === "not_installed" || result === "desktop") {
        openGaodeInstallPage(platform);
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      className="guide-open-btn"
      disabled={busy}
      onClick={() => void onClick()}
    >
      {busy ? "…" : label}
    </button>
  );
}
