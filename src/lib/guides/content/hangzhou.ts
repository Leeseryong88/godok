import type { CityArticle } from "../types";

export const HANGZHOU_ARTICLE: CityArticle = {
  slug: "hangzhou",
  cityZh: "杭州",
  readingMinutes: 5,
  updatedAt: "2026-08-13",
  ko: {
    title: "항저우 여행 가이드: 西湖를 중심으로 동선을 접기",
    lead:
      "항저우는 西湖(시후)가 모든 일정의 중심입니다. 호수 한 바퀴를 무리해서 돌기보다 단교·레이펑탑·허팡저를 구역별로 나누고 지하철·공유자전거·유람선을 섞으면 편하며, Alipay·WeChat Pay로 자전거·버스·찻집 결제를 미리 준비하세요. 링인스·시시습지·용정·천도호는 반나절 이상 블록으로 잡고, Amap에 호수 출입구를 저장해 두면 길을 잃기 어렵습니다.",
    bestFor: "2박3일 · 시후·차·사찰 산책",
    sections: [
      {
        heading: "도착·숙소 거점",
        paragraphs: [
          "샤오산국제공항은 지하철·공항버스로 시내에 연결되고, 항저우동역은 고속철 거점이라 1호선 축 호텔이 환승이 단순합니다. 짐이 많으면 호수 바로 앞보다 지하철역 5–10분 거리 숙소가 계단·돌길을 줄여 줍니다. 입국 후 교통 QR과 공유자전거 앱 결제를 Alipay/WeChat에 연결해 두세요.",
          "숙소는 호수 동·북쪽(호빈·우린·첸장 일대)처럼 1·2·7호선으로 시후·허팡저에 닿기 쉬운 곳이 첫 방문에 무난합니다. 용정·시시·천도호를 넣더라도 시내 거점을 유지하고 당일만 나가면 캐리어를 끌지 않아도 됩니다.",
        ],
      },
      {
        heading: "추천 일정 블록",
        paragraphs: [
          "시후 날: 오전 단교·바이티 산책, 낮 유람선이나 공유자전거로 구역을 옮기고, 해질녘 레이펑탑·호수 조명으로 마무리하세요. 허팡저·칭허팡은 호수 동남 상점·야시장 감성으로, 낮에 링인스를 보고 저녁에 돌아오는 동선이 자연스럽습니다.",
          "사찰·습지·차밭 날: 링인사는 오전이 한산하고 산문이 길어 편한 신발이 필요합니다. 시시국가습지는 배·전기차·도보 조합으로 반나절, 용정은 시음·산책용 오르막 반나절입니다. 송성은 저녁 공연 중심, 천도호는 당일·1박 중 선택해 호수 장거리 도보와 겹치지 마세요.",
        ],
      },
      {
        heading: "교통·결제·앱",
        paragraphs: [
          "메트로 1·7호선 등이 호수 접근에 도움이 되고, 호반에서는 공유자전거·유람선·짧은 버스가 더 빠를 때가 많습니다. Amap으로 출입구·대여소·선착장을 저장하고, 주말 자전거 대여소 대기를 감안하세요. 결제·교통 QR·자전거 잠금 해제는 Alipay/WeChat이 기본입니다.",
          "강남 비에 대비해 우산과 미끄럼 방지 신발, 습지·차밭 날에는 여분 양말을 챙기세요. 사찰·공연장은 검색대가 있을 수 있어 큰 짐은 숙소에 두고, 호숫가 돌길은 밤에 미끄러우니 조명을 확인하며 걷니다.",
        ],
      },
      {
        heading: "먹을거리·피해야 할 실수",
        paragraphs: [
          "롱징차는 차밭이나 시내 찻집에서 시음하고, 시후 초어·생선국수는 점심에 가볍게 먹기 좋습니다. 관광 식당가는 가격이 높으니 골목 한 블록을 더 걸어보고, 저녁은 허팡저 간식과 본식 중 하나만 무겁게 가져가세요.",
          "흔한 실수는 시후 전 구간 도보 일주와 링인스·시시를 같은 날에 욱여넣거나, 천도호를 무거운 호수 날에 붙이는 것입니다. 비가 오면 실내 찻집·송성·쇼핑몰로 일정을 바꾸고, 자전거는 반납 구역을 미리 확인하세요.",
        ],
      },
    ],
    tipsHeading: "여행 팁",
    tips: [
      "시후는 구역을 나눠 걷고, 전 구간 도보 일주보다 배·자전거를 섞으세요.",
      "링인스·시시·용정은 각각 반나절 블록으로 일정을 분리하세요.",
      "레이펑탑·호수 야경은 해질녘, 단교는 오전이 사진에 유리합니다.",
      "천도호는 시내와 멀어 당일치기 피로도가 크니 무리한 연계를 피하세요.",
      "공유자전거·유람선·교통 QR을 Alipay/WeChat에 연결해 두면 호반에서 현금이 필요 없습니다.",
    ],
    spotsHeading: "대표 명소",
    openInAmap: "Amap에서 열기",
    spotNotes: {
      "west-lake": "시후 호수 전체. 구역별 산책이 핵심이며 Amap에 출입구를 핀해 두고 배·자전거를 섞으세요.",
      lingyin: "링인사 사찰·산문. 오전 방문이 한산하고 걷는 거리가 길어 편한 신발을 신고 반나절을 배정하세요.",
      xixi: "시시국가습지. 배·도보 조합의 반나절 생태 일정이며 비 오는 날은 여분 양말을 챙기세요.",
      songcheng: "송성 테마·쇼. 저녁 공연을 중심으로 잡고 낮 호수 장거리 도보와 과하게 겹치지 마세요.",
      hefang: "허팡저 상점 거리. 칭허팡과 이어지며 저녁 분위기가 좋고 호수 동남에서 지하철·도보로 붙입니다.",
      leifeng: "레이펑탑 전망. 해질녘·야경이 인기이며 호수 남쪽에 있어 단교 오전 일정과 나눠 잡으세요.",
      "broken-bridge": "단교와 바이티. 오전 산책·사진 포인트로 시후 북쪽이 중심이며 안개가 걷힐 때가 예쁩니다.",
      longjing: "용정 차밭. 시음과 산책이 목적이며 오르막 접근을 감안해 반나절과 편한 신발을 배정하세요.",
      qiandao: "천도호. 항저우에서 나가는 호수 여행으로 당일·1박을 선택하고 시후 헤비 데이와 분리하세요.",
      qinghefang: "칭허팡 역사 거리. 허팡저와 같은 상점 블록으로 간식·기념품이 몰리니 식사 피크를 피하세요.",
    },
  },
  en: {
    title: "Hangzhou travel guide: fold your days around West Lake",
    lead:
      "West Lake is Hangzhou’s center of gravity. Instead of walking the full loop, split Broken Bridge, Leifeng Pagoda, and Hefang Street by zone and mix metro, bikes, and boats—with Alipay or WeChat Pay ready for bike unlocks, buses, and teahouses. Lingyin, Xixi, Longjing, and Qiandao each need a half-day or more; pin lake gates in Amap so you don’t get turned around.",
    bestFor: "2–3 days · West Lake, tea & temples",
    sections: [
      {
        heading: "Arrival & where to stay",
        paragraphs: [
          "Xiaoshan Airport links by metro and airport bus; Hangzhou East is the high-speed hub—Line 1 hotels keep transfers simple. With luggage, a 5–10 minute walk to a metro stop often beats a lakeside hotel’s stairs and stone paths. Connect transit QR and bike apps to Alipay/WeChat on arrival.",
          "Stay east or north of the lake (Lakeside, Wulin, Qianjiang belts) for Lines 1/2/7 access to West Lake and Hefang on a first visit. Even with Longjing, Xixi, or Qiandao on the plan, keep a city base and day-trip out.",
        ],
      },
      {
        heading: "Suggested day blocks",
        paragraphs: [
          "Lake day: Broken Bridge and Bai Causeway in the morning, a boat or shared bike to shift zones, then Leifeng Pagoda and lake lights at dusk. Hefang and Qinghefang sit southeast—natural after Lingyin by day and back for evening snacks.",
          "Temple, wetland, tea: Lingyin is quieter in the morning with long approach walks. Xixi needs a half-day of boats and paths; Longjing is an uphill tasting half-day. Center Songcheng on the evening show; treat Qiandao as a day or overnight, not bolted onto a marathon lake walk.",
        ],
      },
      {
        heading: "Transit, payments, apps",
        paragraphs: [
          "Metro Lines 1 and 7 help with lake access; around the shore, bikes, boats, and short buses often beat another transfer. Save gates, docks, and bike docks in Amap—weekend docks can queue. Unlocks and fares run on Alipay/WeChat.",
          "Jiangnan rain is frequent—umbrella, grippy shoes, spare socks for wetland or tea-hill days. Temples and show venues may have security; leave big bags at the hotel. Lakeside stones get slick after dark—watch the lighting.",
        ],
      },
      {
        heading: "Food & common mistakes",
        paragraphs: [
          "Taste Longjing at the fields or a city teahouse; West Lake fish and fish-noodle soups make easy lunches. Tourist strips price high—walk one block out. At night, choose either Hefang snacks or one heavier sit-down meal.",
          "Common mistakes: walking the entire lake plus Lingyin and Xixi in one day, or adding Qiandao to a heavy lake schedule. In rain, switch to teahouses, Songcheng, or malls, and confirm bike return zones before you ride.",
        ],
      },
    ],
    tipsHeading: "Travel tips",
    tips: [
      "Split West Lake by zone; mix boats and bikes instead of a full walk circuit.",
      "Give Lingyin, Xixi, and Longjing their own half-day blocks.",
      "Leifeng and lake lights at dusk; Broken Bridge in the morning for photos.",
      "Qiandao is far—don’t bolt it onto a heavy lake day.",
      "Link bike unlocks, boats, and transit QR to Alipay/WeChat so the lakeshore stays cashless.",
    ],
    spotsHeading: "Key spots",
    openInAmap: "Open in Amap",
    spotNotes: {
      "west-lake": "West Lake as a whole. Walk by zones; pin entrances in Amap and mix boats with bikes instead of one long march.",
      lingyin: "Lingyin Temple and mountain gates. Morning is quieter; long walks mean comfortable shoes are non-negotiable.",
      xixi: "Xixi National Wetland. Boat-plus-walk half-day ecology trip—pack spare socks if rain is likely.",
      songcheng: "Songcheng shows and park. Center on the evening performance; don’t stack a marathon lake walk the same day.",
      hefang: "Hefang Street shops. Links to Qinghefang; nicer at night and an easy southeast add-on after lake or temple time.",
      leifeng: "Leifeng Pagoda views. Dusk and night lights on the south shore—keep separate from a Broken Bridge morning.",
      "broken-bridge": "Broken Bridge and Bai Causeway. Morning photos on the north side as mist lifts; classic first lake hour.",
      longjing: "Longjing tea terraces. Tasting and strolls; budget a half-day and uphill shoes from the city edge.",
      qiandao: "Qiandao Lake. Outbound lake trip—day or overnight from Hangzhou; keep it off a heavy West Lake day.",
      qinghefang: "Qinghefang historic street. Same snack-souvenir block as Hefang; shift snack timing off meal peaks.",
    },
  },
};
