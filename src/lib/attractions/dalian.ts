import { L } from "./labels";
import type { CityGuide } from "./types";

export const DALIAN_GUIDE: CityGuide = {
  city: "大连",
  attractions: [
    { id: "xinghai", keyword: "星海广场", labels: L("싱하이 광장", "Xinghai Square") },
    { id: "tiger-beach", keyword: "老虎滩海洋公园", labels: L("라오후탄 해양공원", "Tiger Beach Ocean Park") },
    { id: "jinshitan", keyword: "金石滩", labels: L("진스탄", "Golden Pebble Beach") },
    { id: "russian-street", keyword: "俄罗斯风情街", labels: L("러시아 풍정가", "Russian Street") },
    { id: "bangchui", keyword: "棒棰岛", labels: L("방추이섬", "Bangchui Island") },
    { id: "binhai", keyword: "滨海路", labels: L("빈하이로", "Binhai Road") },
    { id: "zhongshan", keyword: "中山广场", labels: L("중산 광장", "Zhongshan Square") },
    { id: "zoo", keyword: "大连森林动物园", labels: L("삼림동물원", "Forest Zoo") },
    { id: "lvshun", keyword: "旅顺", labels: L("뤼순", "Lushun") },
    { id: "discoveryland", keyword: "发现王国", labels: L("발견왕국", "Discoveryland") },
  ],
};
