import { L } from "./labels";
import type { CityGuide } from "./types";

export const HANGZHOU_GUIDE: CityGuide = {
  city: "杭州",
  attractions: [
    { id: "west-lake", keyword: "西湖", labels: L("서호", "West Lake", "Lago del Oeste") },
    { id: "lingyin", keyword: "灵隐寺", labels: L("링인스", "Lingyin Temple") },
    { id: "xixi", keyword: "西溪湿地", labels: L("시시 습지", "Xixi Wetland") },
    { id: "songcheng", keyword: "宋城", labels: L("송청", "Songcheng") },
    { id: "hefang", keyword: "河坊街", labels: L("허팡제", "Hefang Street") },
    { id: "leifeng", keyword: "雷峰塔", labels: L("뇌봉탑", "Leifeng Pagoda") },
    { id: "broken-bridge", keyword: "断桥", labels: L("단교", "Broken Bridge") },
    { id: "longjing", keyword: "龙井村", labels: L("룽징촌", "Longjing Village") },
    { id: "qiandao", keyword: "千岛湖", labels: L("전도호", "Thousand Island Lake") },
    { id: "qinghefang", keyword: "清河坊", labels: L("칭허팡", "Qinghefang") },
  ],
};