import { L } from "./labels";
import type { CityGuide } from "./types";

export const WUHAN_GUIDE: CityGuide = {
  city: "武汉",
  attractions: [
    { id: "yellow-crane", keyword: "黄鹤楼", labels: L("황학루", "Yellow Crane Tower") },
    { id: "east-lake", keyword: "东湖", labels: L("둥후", "East Lake") },
    { id: "hubu-alley", keyword: "户部巷", labels: L("후부샹", "Hubu Alley") },
    { id: "wuhan-uni", keyword: "武汉大学", labels: L("우한대학", "Wuhan University") },
    { id: "yangtze-bridge", keyword: "武汉长江大桥", labels: L("창장대교", "Yangtze River Bridge") },
    { id: "guiyuan", keyword: "归元寺", labels: L("구이위안스", "Guiyuan Temple") },
    { id: "chuhe", keyword: "楚河汉街", labels: L("추허한제", "Chuhe Hanjie") },
    { id: "qingchuan", keyword: "晴川阁", labels: L("칭촨거", "Qingchuan Pavilion") },
    { id: "lihuangpi", keyword: "黎黄陂路", labels: L("리황피루", "Lihuangpi Road") },
    { id: "hankou-bund", keyword: "汉口江滩", labels: L("한커우 강변", "Hankou Bund") },
  ],
};
