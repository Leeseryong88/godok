import { L } from "./labels";
import type { CityGuide } from "./types";

export const CHONGQING_GUIDE: CityGuide = {
  city: "重庆",
  attractions: [
    { id: "hongyadong", keyword: "洪崖洞", labels: L("홍야둥", "Hongyadong") },
    { id: "jiefangbei", keyword: "解放碑", labels: L("제팡베이", "Jiefangbei") },
    { id: "ciqikou", keyword: "磁器口古镇", labels: L("츠치커우 고진", "Ciqikou Ancient Town") },
    { id: "cableway", keyword: "长江索道", labels: L("창장 케이블카", "Yangtze River Cableway") },
    { id: "liziba", keyword: "李子坝轻轨站", labels: L("리즈바 경궤역", "Liziba Station") },
    { id: "chaotianmen", keyword: "朝天门", labels: L("차오톈먼", "Chaotianmen") },
    { id: "nanshan", keyword: "南山一棵树", labels: L("난산 이커수", "Nanshan One Tree") },
    { id: "wulong", keyword: "武隆天生三桥", labels: L("우룽 천생삼교", "Wulong Karst") },
    { id: "dazu", keyword: "大足石刻", labels: L("다쭈 석각", "Dazu Rock Carvings") },
    { id: "egean", keyword: "重庆三峡博物馆", labels: L("삼협 박물관", "Three Gorges Museum") },
  ],
};
