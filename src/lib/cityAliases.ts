/**
 * 사용자가 한/영으로 도시를 적어도 고덕 city 파라미터용 중국어로 변환.
 * 매칭 실패 시 입력값 그대로 사용(중국어 직접 입력 지원).
 */
const ALIASES: Record<string, string> = {
  // major cities
  베이징: "北京",
  beijing: "北京",
  peking: "北京",
  상하이: "上海",
  shanghai: "上海",
  광저우: "广州",
  guangzhou: "广州",
  canton: "广州",
  선전: "深圳",
  shenzhen: "深圳",
  청두: "成都",
  chengdu: "成都",
  항저우: "杭州",
  hangzhou: "杭州",
  충칭: "重庆",
  chongqing: "重庆",
  시안: "西安",
  xian: "西安",
  "xi'an": "西安",
  난징: "南京",
  nanjing: "南京",
  우한: "武汉",
  wuhan: "武汉",
  쑤저우: "苏州",
  suzhou: "苏州",
  톈진: "天津",
  tianjin: "天津",
  칭다오: "青岛",
  qingdao: "青岛",
  샤먼: "厦门",
  xiamen: "厦门",
  쿤밍: "昆明",
  kunming: "昆明",
  다롄: "大连",
  dalian: "大连",
  하얼빈: "哈尔滨",
  harbin: "哈尔滨",
  창사: "长沙",
  changsha: "长沙",
  정저우: "郑州",
  zhengzhou: "郑州",
  지난: "济南",
  jinan: "济南",
  푸저우: "福州",
  fuzhou: "福州",
  닝보: "宁波",
  ningbo: "宁波",
  원저우: "温州",
  wenzhou: "温州",
  싼야: "三亚",
  sanya: "三亚",
  하이커우: "海口",
  haikou: "海口",
  라싸: "拉萨",
  lhasa: "拉萨",
  우루무치: "乌鲁木齐",
  urumqi: "乌鲁木齐",
};

function normalize(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, " ");
}

/** 고덕 검색용 도시명 (중국어 우선) */
export function resolveCityForGaode(input: string): string {
  const raw = input.trim();
  if (!raw) return "";
  return ALIASES[normalize(raw)] ?? raw;
}
