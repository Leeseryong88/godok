import { L } from "./labels";
import type { CityGuide } from "./types";

export const XIAN_GUIDE: CityGuide = {
  city: "西安",
  attractions: [
    { id: "terracotta", keyword: "兵马俑", labels: L("병마용", "Terracotta Warriors") },
    { id: "dayan-pagoda", keyword: "大雁塔", labels: L("대야탑", "Giant Wild Goose Pagoda") },
    { id: "city-wall", keyword: "西安城墙", labels: L("시안 성벽", "Xi'an City Wall") },
    { id: "muslim-quarter", keyword: "回民街", labels: L("회민가", "Muslim Quarter") },
    { id: "bell-tower", keyword: "钟楼", labels: L("종루", "Bell Tower") },
    { id: "huaqing", keyword: "华清宫", labels: L("화칭궁", "Huaqing Palace") },
    { id: "tang-night", keyword: "大唐不夜城", labels: L("대당불야성", "Great Tang All Day Mall") },
    { id: "history-museum", keyword: "陕西历史博物馆", labels: L("섬서 역사박물관", "Shaanxi History Museum") },
    { id: "xiaoyan", keyword: "小雁塔", labels: L("소야탑", "Small Wild Goose Pagoda") },
    { id: "daming", keyword: "大明宫", labels: L("대명궁", "Daming Palace") },
  ],
};
