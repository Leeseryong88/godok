import { L } from "./labels";
import type { CityGuide } from "./types";

export const HARBIN_GUIDE: CityGuide = {
  city: "哈尔滨",
  attractions: [
    { id: "central-street", keyword: "中央大街", labels: L("중앙대가", "Central Street") },
    { id: "sophia", keyword: "圣索菲亚教堂", labels: L("성 소피아 성당", "St. Sophia Cathedral") },
    { id: "ice-world", keyword: "冰雪大世界", labels: L("빙설대세계", "Ice and Snow World") },
    { id: "sun-island", keyword: "太阳岛", labels: L("태양섬", "Sun Island") },
    { id: "flood-monument", keyword: "防洪纪念塔", labels: L("방홍기념탑", "Flood Control Monument") },
    { id: "volga", keyword: "伏尔加庄园", labels: L("볼가 장원", "Volga Manor") },
    { id: "laodaowai", keyword: "老道外", labels: L("라오다오와이", "Laodaowai") },
    { id: "polarland", keyword: "哈尔滨极地馆", labels: L("하얼빈 극지관", "Harbin Polarland") },
    { id: "zhaolin", keyword: "兆麟公园", labels: L("자오린 공원", "Zhaolin Park") },
    { id: "yabuli", keyword: "亚布力", labels: L("야부리", "Yabuli") },
  ],
};