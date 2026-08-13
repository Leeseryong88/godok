import { L } from "./labels";
import type { CityGuide } from "./types";

export const NANJING_GUIDE: CityGuide = {
  city: "南京",
  attractions: [
    { id: "fuzi-miao", keyword: "夫子庙", labels: L("푸쯔먀오", "Confucius Temple") },
    { id: "sun-yat-sen", keyword: "中山陵", labels: L("중산릉", "Sun Yat-sen Mausoleum") },
    { id: "presidential", keyword: "总统府", labels: L("총통부", "Presidential Palace") },
    { id: "xuanwu", keyword: "玄武湖", labels: L("쉬안우호", "Xuanwu Lake") },
    { id: "museum", keyword: "南京博物院", labels: L("난징 박물관", "Nanjing Museum") },
    { id: "laomendong", keyword: "老门东", labels: L("라오먼둥", "Laomendong") },
    { id: "ming-xiaoling", keyword: "明孝陵", labels: L("명효릉", "Ming Xiaoling Mausoleum") },
    { id: "jiming", keyword: "鸡鸣寺", labels: L("지밍스", "Jiming Temple") },
    { id: "city-wall", keyword: "南京城墙", labels: L("난징 성벽", "Nanjing City Wall") },
    { id: "qinhuai", keyword: "秦淮河", labels: L("친화이허", "Qinhuai River") },
  ],
};
