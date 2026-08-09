/** 고덕 Key 없이 검색 페이지를 여는 공식 URI */
export function buildGaodeSearchUrl(keyword: string, city?: string): string {
  const params = new URLSearchParams({
    keyword,
    view: "list",
    callnative: "1",
    src: "gaode-search-mvp",
  });
  if (city) params.set("city", city);
  return `https://uri.amap.com/search?${params.toString()}`;
}
