import { L } from "./labels";
import type { CityGuide } from "./types";

export const GUANGZHOU_GUIDE: CityGuide = {
  city: "广州",
  attractions: [
    { id: "canton-tower", keyword: "广州塔", labels: L("광저우탑", "Canton Tower", "Torre de Cantón") },
    { id: "pearl-river", keyword: "珠江夜游", labels: L("주장 야경 크루즈", "Pearl River Night Cruise") },
    { id: "chen-clan", keyword: "陈家祠", labels: L("천자츠", "Chen Clan Ancestral Hall") },
    { id: "shameen", keyword: "沙面", labels: L("사몐", "Shamian Island") },
    { id: "baiyun", keyword: "白云山", labels: L("바이윈산", "Baiyun Mountain", "Montaña Baiyun") },
    { id: "chimelong", keyword: "长隆旅游度假区", labels: L("창룽 리조트", "Chimelong Resort") },
    { id: "beijing-road", keyword: "北京路步行街", labels: L("베이징로 보행거리", "Beijing Road") },
    { id: "yongqingfang", keyword: "永庆坊", labels: L("융칭팡", "Yongqingfang") },
    { id: "yuexiu", keyword: "越秀公园", labels: L("웨슈 공원", "Yuexiu Park") },
    { id: "sacred-heart", keyword: "石室圣心大教堂", labels: L("석실성심대성당", "Sacred Heart Cathedral") },
  ],
};
