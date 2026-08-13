import { L } from "./labels";
import type { CityGuide } from "./types";

export const SUZHOU_GUIDE: CityGuide = {
  city: "苏州",
  attractions: [
    { id: "humble", keyword: "拙政园", labels: L("졸정원", "Humble Administrator's Garden") },
    { id: "hanshan", keyword: "寒山寺", labels: L("한산사", "Hanshan Temple") },
    { id: "huqiu", keyword: "虎丘", labels: L("호구", "Tiger Hill") },
    { id: "pingjiang", keyword: "平江路", labels: L("핑장루", "Pingjiang Road") },
    { id: "zhouzhuang", keyword: "周庄古镇", labels: L("저우좡 고진", "Zhouzhuang") },
    { id: "lingering", keyword: "留园", labels: L("유원", "Lingering Garden") },
    { id: "jinji", keyword: "金鸡湖", labels: L("진지호", "Jinji Lake") },
    { id: "shantang", keyword: "山塘街", labels: L("산탕제", "Shantang Street") },
    { id: "tongli", keyword: "同里古镇", labels: L("퉁리 고진", "Tongli") },
    { id: "museum", keyword: "苏州博物馆", labels: L("쑤저우 박물관", "Suzhou Museum") },
  ],
};
