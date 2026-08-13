import type { CityArticle } from "../types";

export const BEIJING_ARTICLE: CityArticle = {
  slug: "beijing",
  cityZh: "北京",
  readingMinutes: 6,
  updatedAt: "2026-08-13",
  ko: {
    title: "베이징 여행 가이드: 궁궐·호수·후통을 하루 단위로 나누기",
    lead:
      "베이징은 명소가 넓게 퍼져 있어 ‘유명한 곳’보다 ‘가까운 곳끼리’ 묶는 게 핵심입니다. 자금성·천안문은 같은 날, 이화원·원명원은 서북 하루, 만리장성은 별도 일정으로 잡으면 지하철·버스 시간을 아끼고, Alipay·WeChat Pay와 교통 QR을 미리 켜 두면 역 자판기 앞에서 헤매지 않습니다. 각 지점은 Amap에서 열어 출구 번호와 셔틀·버스 환승을 확인하세요.",
    bestFor: "3박4일 첫 방문 · 궁궐·장성·후통",
    sections: [
      {
        heading: "도착·숙소 거점",
        paragraphs: [
          "수도국제공항(PEK)은 공항선·택시·디디, 다싱공항(PKX)은 다싱공항선으로 시내에 들어옵니다. 심야면 미터보다 앱 호출이 하차 지점이 명확하고, 입국 직후 eSIM이나 공항 Wi-Fi로 Alipay/WeChat 교통 코드를 활성화해 두세요. 기차로 베이징남·베이징서에 내린 경우에도 지하철 환승이 길 수 있으니 캐리어는 작게.",
          "숙소는 동청구·시청구·후통 인근처럼 1·2·4·6호선 접근이 쉬운 성안이 첫 방문에 편합니다. 이화원·원명원만 보면 하이뎬도 가능하지만, 자금성·스차하이와 매일 오가면 피로가 큽니다. 장성 당일은 일찍 출발해야 하니 지하철 첫차권·관광버스 집합 장소를 숙소에서 전날 밤 확인하세요.",
        ],
      },
      {
        heading: "추천 일정 블록",
        paragraphs: [
          "궁궐 날: 오전에 천안문 보안을 통과해 자금성 중축선을 걷고, 동·서원 중 하나만 깊게 보세요. 저녁은 난뤄구샹이나 스차하이로 가볍게 마무리하면 체력이 남습니다. 서북 날: 이화원(쿤밍호 유람선 포함 시 반나절)과 원명원을 묶고, 시내 궁궐과 같은 날에 넣지 마세요.",
          "장성 날은 팔달령·무단링 등 구간을 하나만 고르고 아침 7시 전후 출발이 안전합니다. 새둥지·798·베이하이·융화궁은 비·미세먼지 날의 대체 또는 여유 오전에 넣고, 천단은 남문–기년전 짧은 코스만으로도 충분합니다.",
        ],
      },
      {
        heading: "교통·결제·앱",
        paragraphs: [
          "베이징 메트로는 환승 도보가 긴 역이 많아 Amap 예상 시간에 여유를 두세요. 관광 축은 1·2·4·6호선이 많고, 티켓은 자판기·교통카드·Alipay/WeChat QR이면 충분합니다. 장성은 끝역에서 버스로 갈아타는 루트가 일반적이니 막차·막버스를 같은 화면에 저장해 두세요.",
          "천안문·궁궐·박물관은 보안 검색과 신분 확인이 길어질 수 있어 여권(또는 여행증명)을 항상 지니고, 큰 짐은 숙소에 맡기세요. 겨울·초봄에는 추위·미세먼지를 보고 실내(사원·박물관) 비중을 높이고, 디디 호출 시 하차 핀을 광장 한복판이 아닌 지하철 출구로 잡으면 이동합니다.",
        ],
      },
      {
        heading: "먹을거리·피해야 할 실수",
        paragraphs: [
          "카오야는 저녁 예약이 편하고, 점심은 후통의 잔화지아오·몐·만두로 빠르게 해결하는 여행객이 많습니다. 난뤄구샹은 낮 기념품·저녁 호수 산책으로 시간을 나누면 인파를 분산할 수 있고, 융화궁은 오전 예불 분위기가 좋습니다.",
          "흔한 실수는 자금성과 장성을 같은 날에 넣거나, 이화원까지 궁궐 일정에 붙이는 것입니다. 예약 없이 궁궐에 가면 입장 자체가 막힐 수 있으니 전날 공식 채널을 확인하고, 매운 음식과 건조한 공기를 대비해 물·립밤을 챙기세요.",
        ],
      },
    ],
    tipsHeading: "여행 팁",
    tips: [
      "자금성·장성·서북 공원은 예약·날씨·체력을 보고 날짜를 분리하세요. 같은 날 욕심내면 이동만 깁니다.",
      "천안문·궁궐 보안 검색이 길 수 있으니 오전에 도착하고 큰 짐·라이터·보조배터리 규정은 미리 확인하세요.",
      "메트로 환승 도보가 길므로 Amap 도보 분을 일정에 그대로 넣고, 환승역에서는 출구 번호를 저장하세요.",
      "이화원·원명원·장성은 시내 궁궐과 섞지 말고, 장성 하산 후 저녁 일정은 짧게 잡으세요.",
      "Alipay/WeChat 교통 QR과 디디를 입국 당일 세팅하면 자판기·택시 줄에서 시간을 아낍니다.",
    ],
    spotsHeading: "대표 명소",
    openInAmap: "Amap에서 열기",
    spotNotes: {
      "forbidden-city": "궁궐 핵심. 예약 후 중축선 위주로 걷고, 오전이 덜 붐비며 출구 동선은 Amap에 미리 저장하세요.",
      tiananmen: "광장과 성루 일대. 오전 방문이 대기열에 유리하고, 신분 확인·검색대를 감안해 여유를 두세요.",
      "great-wall": "당일치기 교외 일정. 이른 출발이 필수이며 지하철 끝역+버스 조합 후 시내 저녁은 가볍게 잡으세요.",
      "summer-palace": "쿤밍호와 복랑. 유람선까지 하면 반나절, 원명원과 묶어 서북 전용 하루로 잡는 편이 안전합니다.",
      "temple-of-heaven": "넓은 제례 공원. 남문에서 기년전 짧은 코스가 효율적이고, 아침 운동 풍경이 볼거리입니다.",
      yuanmingyuan: "원명원 유적 정원. 산책 위주라 오전이면 충분하고, 이화원과 같은 서북 블록으로 묶으세요.",
      nanluoguxiang: "후통 상점 거리. 이른 아침·저녁이 덜 붐비며, 도보로 스차하이와 이어 저녁 블록을 만들기 좋습니다.",
      "bird-nest": "올림픽 공원 경기장. 외관·야경 사진이 좋고, 근처 수륙과 짧게 돌며 지하철로 접근하기 쉽습니다.",
      beihai: "도심 호수 공원. 유람선이나 호수 일주가 핵심이며, 자금성 다음 날 여유 코스로 적합합니다.",
      yonghegong: "티베트 불교 사원. 오전 분위기가 좋고, 지하철 2·5호선으로 접근해 후통 일정과 이어가기 쉽습니다.",
      shichahai: "후하이 호수와 바·인력거. 해질녘 산책이 인기이며 난뤄구샹과 같은 저녁 루프로 묶으세요.",
      "798": "갤러리·카페 단지. 비 오는 날·현대미술에 잘 맞고, 도보 구역이 넓어 편한 신발과 반나절을 배정하세요.",
    },
  },
  en: {
    title: "Beijing travel guide: palaces, lakes, and hutongs by day blocks",
    lead:
      "Beijing’s sights are spread out—group nearby places, not every famous name. Pair the Forbidden City with Tiananmen, give Summer Palace and Yuanmingyuan a northwest day, and keep the Great Wall separate so metro and bus time stays sane. Set up Alipay/WeChat transit codes early, and open each pin in Amap for exit numbers and shuttle links.",
    bestFor: "3–4 day first visit · palaces, Wall & hutongs",
    sections: [
      {
        heading: "Arrival & where to stay",
        paragraphs: [
          "Capital Airport (PEK) links by Airport Express, taxi, or Didi; Daxing (PKX) uses the Daxing Airport line. Late night, app rides beat curb confusion—activate Alipay/WeChat transit QR on eSIM or airport Wi-Fi before you leave. Arriving at Beijing South or West can mean long transfer walks, so pack light.",
          "Stay inside the historic core near Lines 1, 2, 4, or 6 (Dongcheng/Xicheng/hutong belts) for a first visit. Haidian works only if you focus on the northwest parks; otherwise daily palace trips wear you down. Wall days start early—confirm first trains and bus meetup points the night before.",
        ],
      },
      {
        heading: "Suggested day blocks",
        paragraphs: [
          "Palace day: clear Tiananmen security in the morning, walk the Forbidden City axis, and deepen only one side court. Finish lightly at Nanluoguxiang or Shichahai. Northwest day: Summer Palace (half-day with a Kunming Lake boat) plus Yuanmingyuan—never bolt them onto the palace core.",
          "Wall day: pick one section (Badaling, Mutianyu, etc.) and leave around 7am. Use Bird’s Nest, 798, Beihai, or Yonghe Temple as rain/smog backups; Temple of Heaven works as a short south-gate to Hall of Prayer loop.",
        ],
      },
      {
        heading: "Transit, payments, apps",
        paragraphs: [
          "Metro transfers can mean long underground walks—pad Amap times. Lines 1, 2, 4, and 6 cover many tourist axes; station machines, transit cards, or payment-app QR codes are enough. Wall trips usually need an end-station bus—save last-bus times on the same screen.",
          "Tiananmen, the palace, and museums run security and ID checks—carry passport and leave bulky bags at the hotel. In winter or dusty spring, favor indoor temples and museums. For Didi, pin a metro exit rather than the middle of a huge square.",
        ],
      },
      {
        heading: "Food & common mistakes",
        paragraphs: [
          "Reserve roast duck for dinner; lunch noodles or zhajiangmian in a hutong keep the day moving. Shop Nanluoguxiang earlier, then shift to Shichahai after dusk; Yonghe Temple feels best in the morning.",
          "Common mistakes: Forbidden City plus Wall in one day, or adding Summer Palace to the palace block. Book the palace ahead—walk-ups can fail—and carry water and lip balm for dry air and rich food.",
        ],
      },
    ],
    tipsHeading: "Travel tips",
    tips: [
      "Split Forbidden City, Great Wall, and northwest parks onto separate days for energy and bookings.",
      "Arrive early for Tiananmen/palace security; leave bulky bags at the hotel and check battery rules.",
      "Pad schedules for long metro transfer walks—save exit numbers in Amap.",
      "Don’t mix Summer Palace/Yuanmingyuan/Wall with the central palace day; keep Wall evenings short.",
      "Set Alipay/WeChat transit QR and Didi on arrival day to skip machine and taxi queues.",
    ],
    spotsHeading: "Key spots",
    openInAmap: "Open in Amap",
    spotNotes: {
      "forbidden-city": "Core palace. Book ahead, follow the axis in the morning, and save exit paths in Amap before you enter.",
      tiananmen: "Square and gate area. Morning is better for queues; budget extra time for ID and security checks.",
      "great-wall": "Outbound day trip. Early start required; metro end-station plus bus, then a light evening back in town.",
      "summer-palace": "Kunming Lake and long corridors. Half-day with a boat; pair with Yuanmingyuan as a northwest block.",
      "temple-of-heaven": "Vast ritual park. Short Hall of Prayer route from the south gate works; mornings show local exercise scenes.",
      yuanmingyuan: "Ruins garden for walking. A morning is enough; keep it with Summer Palace, not the palace core.",
      nanluoguxiang: "Hutong shopping lane. Early or evening is calmer; walk on to Shichahai for the same night block.",
      "bird-nest": "Olympic stadium exterior shots and night lights; short metro-friendly stop with the Water Cube nearby.",
      beihai: "City lake park. Boat or circuit walk; a soft day after the Forbidden City when legs need a break.",
      yonghegong: "Lama Temple with a strong morning mood; Metro Lines 2/5 and an easy link toward hutong evenings.",
      shichahai: "Houhai lakes, bars, rickshaws. Best at dusk paired with Nanluoguxiang in one evening loop.",
      "798": "Gallery-café compound. Rain-day modern art; wear comfortable shoes and give it a half-day of walking.",
    },
  },
};
