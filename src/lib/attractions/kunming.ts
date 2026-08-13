import { L } from "./labels";
import type { CityGuide } from "./types";

export const KUNMING_GUIDE: CityGuide = {
  city: "昆明",
  attractions: [
    { id: "stone-forest", keyword: "石林", labels: L("스린(석림)", "Stone Forest") },
    { id: "dianchi", keyword: "滇池", labels: L("뎬츠호", "Dianchi Lake") },
    { id: "cuihu", keyword: "翠湖公园", labels: L("취이후 공원", "Green Lake Park") },
    { id: "xishan", keyword: "西山龙门", labels: L("시산 용문", "Western Hills Dragon Gate") },
    { id: "ethnic-village", keyword: "云南民族村", labels: L("윈난 민족촌", "Yunnan Ethnic Village") },
    { id: "jinma", keyword: "金马碧鸡坊", labels: L("금마벽계방", "Golden Horse & Jade Rooster Archway") },
    { id: "daguan", keyword: "大观楼", labels: L("다관루", "Daguan Pavilion") },
    { id: "flower-city", keyword: "斗南花卉市场", labels: L("더우난 꽃시장", "Dounan Flower Market") },
    { id: "jiuxiang", keyword: "九乡", labels: L("주샹", "Jiuxiang") },
    { id: "yuantong", keyword: "圆通寺", labels: L("위안퉁스", "Yuantong Temple") },
  ],
};
