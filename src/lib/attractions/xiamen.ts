import { L } from "./labels";
import type { CityGuide } from "./types";

export const XIAMEN_GUIDE: CityGuide = {
  city: "厦门",
  attractions: [
    { id: "gulangyu", keyword: "鼓浪屿", labels: L("구랑위", "Gulangyu Island") },
    { id: "zhongshan", keyword: "中山路", labels: L("중산로", "Zhongshan Road") },
    { id: "nanputuo", keyword: "南普陀寺", labels: L("남보타사", "Nanputuo Temple") },
    { id: "zengcuoan", keyword: "曾厝垵", labels: L("쩡춰안", "Zengcuo'an") },
    { id: "xiamen-uni", keyword: "厦门大学", labels: L("샤먼대학", "Xiamen University") },
    { id: "huandao", keyword: "环岛路", labels: L("환다오루", "Huandao Road") },
    { id: "hulishan", keyword: "胡里山炮台", labels: L("후리산 포대", "Hulishan Fortress") },
    { id: "botanical", keyword: "厦门园林植物园", labels: L("식물원", "Botanical Garden") },
    { id: "jimei", keyword: "集美学村", labels: L("지메이 학촌", "Jimei School Village") },
    { id: "shapowei", keyword: "沙坡尾", labels: L("사포웨이", "Shapowei") },
  ],
};
