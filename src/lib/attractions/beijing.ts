import { L } from "./labels";
import type { CityGuide } from "./types";

export const BEIJING_GUIDE: CityGuide = {
  city: "北京",
  attractions: [
    { id: "forbidden-city", keyword: "故宫", labels: L("자금성", "Forbidden City", "Ciudad Prohibida") },
    { id: "tiananmen", keyword: "天安门广场", labels: L("천안문 광장", "Tiananmen Square", "Plaza de Tiananmén") },
    { id: "great-wall", keyword: "八达岭长城", labels: L("만리장성 팔달령", "Badaling Great Wall", "Gran Muralla Badaling") },
    { id: "summer-palace", keyword: "颐和园", labels: L("이화원", "Summer Palace", "Palacio de Verano") },
    { id: "temple-of-heaven", keyword: "天坛", labels: L("천단", "Temple of Heaven", "Templo del Cielo") },
    { id: "yuanmingyuan", keyword: "圆明园", labels: L("원명원", "Old Summer Palace", "Antiguo Palacio de Verano") },
    { id: "nanluoguxiang", keyword: "南锣鼓巷", labels: L("난뤄구샹", "Nanluoguxiang") },
    { id: "bird-nest", keyword: "鸟巢", labels: L("냐오차오(국립경기장)", "Bird's Nest") },
    { id: "beihai", keyword: "北海公园", labels: L("베이하이 공원", "Beihai Park", "Parque Beihai") },
    { id: "yonghegong", keyword: "雍和宫", labels: L("융허궁", "Lama Temple", "Templo Lama") },
    { id: "shichahai", keyword: "什刹海", labels: L("스차하이", "Shichahai") },
    { id: "798", keyword: "798艺术区", labels: L("798 예술구", "798 Art District") },
  ],
};
