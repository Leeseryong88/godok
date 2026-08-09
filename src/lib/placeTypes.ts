export type PlaceTypeOption = {
  id: string;
  label: string;
  /** 고덕 검색에 붙일 중국어 힌트 */
  hintZh: string;
  /** Gemini에 넘길 짧은 의도 설명 */
  intentEn: string;
};

export const PLACE_TYPES: PlaceTypeOption[] = [
  {
    id: "restaurant",
    label: "식당",
    hintZh: "餐厅",
    intentEn: "restaurant / food place",
  },
  {
    id: "cafe",
    label: "카페",
    hintZh: "咖啡",
    intentEn: "cafe / coffee shop",
  },
  {
    id: "hotel",
    label: "호텔",
    hintZh: "酒店",
    intentEn: "hotel",
  },
  {
    id: "landmark",
    label: "유적지·관광지",
    hintZh: "景点",
    intentEn: "landmark / tourist attraction / historic site",
  },
  {
    id: "road",
    label: "길·도로",
    hintZh: "路",
    intentEn: "road / street name",
  },
  {
    id: "subway",
    label: "지하철역",
    hintZh: "地铁站",
    intentEn: "subway / metro station",
  },
  {
    id: "shopping",
    label: "쇼핑",
    hintZh: "购物",
    intentEn: "shopping mall / store",
  },
  {
    id: "airport",
    label: "공항",
    hintZh: "机场",
    intentEn: "airport",
  },
];

export function findPlaceType(id: string): PlaceTypeOption | undefined {
  return PLACE_TYPES.find((t) => t.id === id);
}

/** 이미 유형 힌트가 들어가면 중복 부착 방지 */
export function withPlaceHint(keyword: string, hintZh: string): string {
  const k = keyword.trim();
  const h = hintZh.trim();
  if (!k) return k;
  if (!h) return k;
  if (k.includes(h)) return k;
  return `${k} ${h}`;
}
