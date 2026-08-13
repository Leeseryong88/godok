import { L } from "./labels";
import type { CityGuide } from "./types";

export const SHENZHEN_GUIDE: CityGuide = {
  city: "深圳",
  attractions: [
    { id: "window-world", keyword: "世界之窗", labels: L("윈도우 오브 더 월드", "Window of the World") },
    { id: "happy-valley", keyword: "欢乐谷", labels: L("해피밸리", "Happy Valley") },
    { id: "dameisha", keyword: "大梅沙", labels: L("다메이사 해변", "Dameisha Beach") },
    { id: "lianhuashan", keyword: "莲花山公园", labels: L("롄화산 공원", "Lianhuashan Park") },
    { id: "shenzhen-bay", keyword: "深圳湾公园", labels: L("선전만 공원", "Shenzhen Bay Park") },
    { id: "zhongying-street", keyword: "中英街", labels: L("중잉제", "Chung Ying Street") },
    { id: "oct-east", keyword: "东部华侨城", labels: L("동부 화차오청", "OCT East") },
    { id: "jiaochangwei", keyword: "较场尾", labels: L("자오창웨이", "Jiaochangwei") },
    { id: "huaqiangbei", keyword: "华强北", labels: L("화창베이", "Huaqiangbei") },
    { id: "ping-an", keyword: "平安金融中心", labels: L("핑안 금융센터", "Ping An Finance Centre") },
  ],
};
