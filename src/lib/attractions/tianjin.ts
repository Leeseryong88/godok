import { L } from "./labels";
import type { CityGuide } from "./types";

export const TIANJIN_GUIDE: CityGuide = {
  city: "天津",
  attractions: [
    { id: "eye", keyword: "天津之眼", labels: L("톈진의 눈", "Tianjin Eye") },
    { id: "ancient-culture", keyword: "古文化街", labels: L("고문화가", "Ancient Culture Street") },
    { id: "five-avenues", keyword: "五大道", labels: L("우다다오", "Five Great Avenues") },
    { id: "italian-style", keyword: "意式风情区", labels: L("이태리 풍정구", "Italian Style Town") },
    { id: "porcelain-house", keyword: "瓷房子", labels: L("쯔팡쯔", "Porcelain House") },
    { id: "haihe", keyword: "海河", labels: L("하이허", "Haihe River") },
    { id: "panshan", keyword: "盘山", labels: L("판산", "Mount Panshan") },
    { id: "museum", keyword: "天津博物馆", labels: L("톈진 박물관", "Tianjin Museum") },
    { id: "binjiangdao", keyword: "滨江道", labels: L("빈장다오", "Binjiang Dao") },
    { id: "drum-tower", keyword: "鼓楼", labels: L("구루", "Drum Tower") },
  ],
};
