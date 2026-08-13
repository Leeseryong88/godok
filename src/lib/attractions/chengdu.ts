import { L } from "./labels";
import type { CityGuide } from "./types";

export const CHENGDU_GUIDE: CityGuide = {
  city: "成都",
  attractions: [
    { id: "kuanzhai", keyword: "宽窄巷子", labels: L("콴자이샹쯔", "Kuanzhai Alley") },
    { id: "jinli", keyword: "锦里古街", labels: L("진리 고가", "Jinli Ancient Street") },
    { id: "panda-base", keyword: "成都大熊猫繁育研究基地", labels: L("판다 기지", "Giant Panda Base") },
    { id: "chunxi", keyword: "春熙路", labels: L("춘시루", "Chunxi Road") },
    { id: "wuhou", keyword: "武侯祠", labels: L("우후츠", "Wuhou Shrine") },
    { id: "dufu", keyword: "杜甫草堂", labels: L("두보초당", "Du Fu Thatched Cottage") },
    { id: "dujiangyan", keyword: "都江堰", labels: L("도강언", "Dujiangyan") },
    { id: "qingcheng", keyword: "青城山", labels: L("청청산", "Mount Qingcheng") },
    { id: "taikoo-li", keyword: "太古里", labels: L("타이구이", "Taikoo Li") },
    { id: "people-park", keyword: "人民公园", labels: L("인민공원", "People's Park") },
  ],
};
