import { L } from "./labels";
import type { CityGuide } from "./types";

export const QINGDAO_GUIDE: CityGuide = {
  city: "青岛",
  attractions: [
    { id: "zhanqiao", keyword: "栈桥", labels: L("잔차오", "Zhanqiao Pier") },
    { id: "badaguan", keyword: "八大关", labels: L("바다관", "Badaguan") },
    { id: "may-fourth", keyword: "五四广场", labels: L("오사광장", "May Fourth Square") },
    { id: "laoshan", keyword: "崂山", labels: L("라오산", "Mount Lao") },
    { id: "beer-museum", keyword: "青岛啤酒博物馆", labels: L("칭다오 맥주박물관", "Tsingtao Beer Museum") },
    { id: "golden-beach", keyword: "金沙滩", labels: L("금사탄", "Golden Beach") },
    { id: "signal-hill", keyword: "信号山", labels: L("신호산", "Signal Hill") },
    { id: "cathedral", keyword: "青岛天主教堂", labels: L("칭다오 성당", "St. Michael's Cathedral") },
    { id: "aquarium", keyword: "青岛海底世界", labels: L("해저세계", "Underwater World") },
    { id: "pichaiyuan", keyword: "劈柴院", labels: L("피차이위안", "Pichaiyuan") },
  ],
};
