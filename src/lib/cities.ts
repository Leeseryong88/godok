/** 고덕 city / adcode — 도시 검색 범위 지정용 */
export const CITIES = [
  { value: "", label: "전체(중국)", short: "전체", adcode: "" },
  { value: "北京", label: "베이징 · 北京", short: "베이징", adcode: "110000" },
  { value: "上海", label: "상하이 · 上海", short: "상하이", adcode: "310000" },
  { value: "广州", label: "광저우 · 广州", short: "광저우", adcode: "440100" },
  { value: "深圳", label: "선전 · 深圳", short: "선전", adcode: "440300" },
  { value: "成都", label: "청두 · 成都", short: "청두", adcode: "510100" },
  { value: "杭州", label: "항저우 · 杭州", short: "항저우", adcode: "330100" },
  { value: "重庆", label: "충칭 · 重庆", short: "충칭", adcode: "500000" },
  { value: "西安", label: "시안 · 西安", short: "시안", adcode: "610100" },
  { value: "南京", label: "난징 · 南京", short: "난징", adcode: "320100" },
  { value: "武汉", label: "우한 · 武汉", short: "우한", adcode: "430100" },
  { value: "苏州", label: "쑤저우 · 苏州", short: "쑤저우", adcode: "320500" },
  { value: "天津", label: "톈진 · 天津", short: "톈진", adcode: "120000" },
  { value: "青岛", label: "칭다오 · 青岛", short: "칭다오", adcode: "370200" },
  { value: "厦门", label: "샤먼 · 厦门", short: "샤먼", adcode: "350200" },
  { value: "昆明", label: "쿤밍 · 昆明", short: "쿤밍", adcode: "530100" },
  { value: "大连", label: "다롄 · 大连", short: "다롄", adcode: "210200" },
  { value: "哈尔滨", label: "하얼빈 · 哈尔滨", short: "하얼빈", adcode: "230100" },
] as const;

export function getCityMeta(cityZh: string): {
  name: string;
  adcode: string;
} | null {
  const hit = CITIES.find((c) => c.value && c.value === cityZh.trim());
  if (!hit || !hit.value) return null;
  return { name: hit.value, adcode: hit.adcode };
}
