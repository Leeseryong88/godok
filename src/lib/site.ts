function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) {
    const host = vercelProd.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}

/** 사이트 공통 정보 */
export const SITE = {
  name: "Amap Search",
  companyNote: "AutoNavi / Amap unofficial helper",
  githubIssues: "https://github.com/Leeseryong88/godok/issues",
  contactEmail: "ai-riska@gmail.com",
  /**
   * 절대 URL (sitemap / metadata용)
   * 예: NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   */
  url: resolveSiteUrl(),
} as const;

export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p}`;
}
