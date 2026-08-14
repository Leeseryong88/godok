import type { Locale } from "@/lib/i18n/locales";

export type CityVisitCopy = {
  visitTitle: string;
  transportTitle: string;
  ticketsTitle: string;
  seasonTitle: string;
  transport: string;
  tickets: string;
  season: string;
};

const VISIT: Record<string, { ko: CityVisitCopy; en: CityVisitCopy }> = {
  beijing: {
    ko: {
      visitTitle: "중축을 걷는 하루",
      transportTitle: "지하철이 궁과 장성을 나눈다",
      ticketsTitle: "실명 예약이 기본이다",
      seasonTitle: "가을 하늘이 수도의 계절이다",
      transport:
        "시내 궁궐은 지하철이 가장 단순하다. 1호선 톈안먼둥·톈안먼시에서 천안문과 자금성 남문(오문)까지 걷고, 8호선 올림픽공원은 냐오차오, 4호선 베이궁먼은 이화원이다. 팔달령 장성은 도심과 성격이 다르다. 허베이 방향 교외 열차나 관광 버스가 필요하고, 왕복에 반나절을 잡는 편이 안전하다. 후통은 6호선 난뤄구샹 일대가 입구가 된다.",
      tickets:
        "자금성·천단 같은 유네스코 유적은 여권이 필요한 실명 예약이 흔하고, 월요일 휴관이 많다. 현장 매표만 믿고 가면 만석인 날이 있다. 팔달령은 구간 입장과 케이블카가 따로 팔리며, 원명원은 폐허 구역과 공원 구역의 표가 갈린다. 후통과 스차하이 호숫가는 입장료가 없다. 요금과 예약 창구는 수시로 바뀌니 전날 공식 채널을 확인하는 것이 맞다.",
      season:
        "9월 말에서 10월의 맑은 하늘이 중축선과 장성을 가장 또렷하게 보여 준다. 봄에는 황사가 끼고, 7–8월은 소나기와 더위가 겹친다. 겨울은 건조하고 추우나 궁전 기와와 후통이 한산하다. 장성 능선은 겨울 바람에 체감 온도가 빠르게 떨어지니, 교외 일정은 해 지기 전에 끝내는 편이 낫다.",
    },
    en: {
      visitTitle: "A day along the axis",
      transportTitle: "Metro for palaces, a half-day for the Wall",
      ticketsTitle: "Passport booking is the rule",
      seasonTitle: "Clear autumn is the capital’s season",
      transport:
        "Palaces in the city are a metro problem. Line 1 at Tiananmen East or West walks you to the square and the Meridian Gate; Line 8 serves the Bird’s Nest; Line 4 at Beigongmen is the Summer Palace. Badaling is a different kind of trip: a suburban train or tourist bus, and a half day on the clock. Hutongs open most easily around Nanluoguxiang on Line 6.",
      tickets:
        "The Forbidden City and Temple of Heaven usually need real-name booking with a passport and often close on Mondays. Same-day tickets sell out. Badaling splits wall entry from cable cars; Yuanmingyuan splits ruin and park. Hutongs and the Shichahai lakeshore are free. Prices and booking windows change; check the official channel the day before.",
      season:
        "Late September and October give the axis and the Wall their clearest light. Spring can bring dust, July and August heat and downpours. Winter is dry and cold, but palaces and alleys are quieter. On the Wall the wind drops the felt temperature fast, so finish the suburban leg before dusk.",
    },
  },
  shanghai: {
    ko: {
      visitTitle: "강을 건너며 읽기",
      transportTitle: "2호선이 도시의 척추다",
      ticketsTitle: "강변은 공짜, 정원과 탑은 표",
      seasonTitle: "습기를 계산해야 한다",
      transport:
        "푸동공항에서 시내는 2호선 또는 자기부상 후 환승이 일반적이다. 와이탄과 루자쭈이는 강을 사이에 두고 2호선 둥창루·루자쭈이, 10호선 위위안이 가깝다. 황푸강 페리는 지하철보다 느리나, 석조와 유리가 한 화면에 들어온다. 프랑스 조계와 톈쯔팡은 걷거나 10·12호선이 편하다. 저우좡 같은 수향은 시외 버스나 전철을 따로 잡아야 한다.",
      tickets:
        "와이탄 산책로와 난징로 보행 구간은 입장료가 없다. 위위안, 상하이박물관 특별전, 동방명주·상하이타워 전망대는 표를 산다. 징안스는 향과 입장 구역이 나뉠 수 있다. 디즈니랜드는 날짜 지정 예약이 사실상 필수다. 전망대는 날씨가 흐리면 돈이 아깝다. 공식 앱·창구 요금을 당일에 다시 보는 습관이 필요하다.",
      season:
        "3–5월과 10–11월이 걷기 좋다. 여름은 습하고 태풍 가장자리가 스칠 수 있으며, 겨울은 영하까지 잘 안 내려가도 강바람이 뼈에 남는다. 야경을 보려면 해 진 뒤 한 시간이 루자쭈이 조명이 가장 촘촘하다. 수향은 주말·국경절에 다리가 막히니, 평일 오전이 사람의 밀도를 낮춘다.",
    },
    en: {
      visitTitle: "Read the city by crossing the river",
      transportTitle: "Line 2 is the spine",
      ticketsTitle: "The Bund is free; gardens and towers are not",
      seasonTitle: "Budget for humidity",
      transport:
        "From Pudong Airport, Line 2 or the maglev plus a transfer is the usual path. The Bund and Lujiazui sit on Line 2 (East Nanjing Road, Lujiazui) with Yuyuan on Line 10. The Huangpu ferry is slower than the metro and puts stone and glass in one frame. The former French Concession and Tianzifang are walking or Lines 10 and 12. Water towns such as Zhouzhuang need a separate suburban train or bus.",
      tickets:
        "The Bund promenade and Nanjing Road pedestrian stretch are free. Yu Garden, special museum shows, and the Oriental Pearl or Shanghai Tower decks sell tickets. Jing’an Temple may split incense courts from paid halls. Disneyland is effectively a dated reservation. Skip a deck on a grey day. Recheck official prices the same morning.",
      season:
        "March–May and October–November walk best. Summer is humid and can catch a typhoon fringe; winter rarely goes far below zero, but river wind stays in the bones. Lights on Lujiazui densest about an hour after sunset. Water towns jam on weekends and national holidays; weekday mornings thin the bridges.",
    },
  },
  guangzhou: {
    ko: {
      visitTitle: "아침차로 하루를 연다",
      transportTitle: "지하철과 강이 같이 움직인다",
      ticketsTitle: "사당과 성당의 표가 갈린다",
      seasonTitle: "우기와 따뜻한 겨울",
      transport:
        "바이윈공항에서 시내는 공항선·3호선이 기본이다. 천씨서당은 1호선 천젠츠, 스스성당은 2호선 Gongyuanqian 일대, 광저우타워는 3호선 광저우타워역이다. 주장 유람선은 야경에 맞춰 강을 한 바퀴 돌고, 사몐섬은 도보다 짧다. 웨슈공원·전한 남월왕박물관은 같은 언덕 권역이라 한 묶음으로 걷는 편이 낫다.",
      tickets:
        "천씨서당과 남월왕묘·박물관은 입장료가 있다. 스스성당은 예배 시간과 관광 입장 규칙이 다를 수 있다. 사몐의 거리는 무료고, 일부 옛 건물은 전시 요금이 붙는다. 광저우타워 전망대는 층별로 표가 나뉜다. 칭핑 시장은 입장료 없이 혼잡이 대가이다. 주말 아침 딤섬 줄은 명소 대기만큼 길다.",
      season:
        "10–12월이 가장 걷기 편하다. 4–9월은 비와 습기가 많고 태풍이 스칠 수 있다. 겨울에도 얇은 겉옷이면 충분할 때가 많으나, 에어컨 실내는 오히려 춥다. 용주이 단오 전후의 주장 드래곤보트는 강변 일정을 바꾼다. 한여름 정오의 돌바닥은 피하고, 그늘 있는 서관 골목을 낮 일정에 넣는 것이 맞다.",
    },
    en: {
      visitTitle: "Open the day with morning tea",
      transportTitle: "Metro and river move together",
      ticketsTitle: "Halls and the cathedral split their tickets",
      seasonTitle: "Rainy summers, mild winters",
      transport:
        "Baiyun Airport feeds the city on the airport line and Line 3. Chen Clan Academy sits on Line 1 at Chen Clan Academy station; Sacred Heart Cathedral is a walk from Gongyuanqian on Line 2; Canton Tower has its own Line 3 stop. Pearl River night boats loop the banks; Shamian is a short walk. Yuexiu Park and the Nanyue King Museum share one hill, so treat them as one circuit.",
      tickets:
        "Chen Clan Academy and the Nanyue tombs charge. The cathedral may separate worship hours from tourist entry. Shamian streets are free; some old houses add exhibit fees. Canton Tower decks are sold by level. Qingping Market costs nothing but crowd. Weekend dim-sum lines can match attraction queues.",
      season:
        "October–December walks easiest. April–September bring rain, humidity, and the odd typhoon fringe. Winter often needs only a light layer, though indoor air-con can feel colder than the street. Dragon-boat days around Duanwu change the river timetable. Avoid stone at summer noon; put Shamian and Xiguan shade into the afternoon.",
    },
  },
  shenzhen: {
    ko: {
      visitTitle: "국경 도시의 시간표",
      transportTitle: "메트로가 만과 산을 잇는다",
      ticketsTitle: "공원은 공짜, 테마파크는 예약",
      seasonTitle: "아열대 비와 짧은 겨울",
      transport:
        "바오안공항에서 시내는 11호선·공항버스가 일반적이다. 루오후 국경은 1호선, 선전베이(푸톈)는 고속철과 4·5호선이 만난다. 윈하이·셰커우 해안은 2호선 후 버스나 공유 자전거, 롄화산 공원은 3·4호선 부근이다. 다펑 반도는 도심에서 동쪽으로 멀어 전용 시간을 잡아야 한다. 홍콩 방면 출입은 여권·통행 서류가 일정 전체를 지배한다.",
      tickets:
        "롄화산·윈하이 산책로는 입장료가 없다. 윈도우오브더월드, 해피밸리, 대팡소인국 같은 테마파크는 날짜 지정 표가 사실상 필수이고 주말 할증이 있다. 중잉제 국경 거리는 오픈 스페이스이나 촬영·출입 규칙이 구간에 따라 다르다. 화창베이 상가는 무료 입장, 지갑은 별개다. 해변 일부는 계절 샤워·캐비닛 요금만 받는다.",
      season:
        "11–3월이 야외 일정에 유리하다. 5–9월은 소나기와 고온이 반복되고, 태풍 경보가 뜨면 해안·테마파크가 먼저 닫힌다. 겨울에도 반팔이 가능한 낮이 있으나 야간 해안 바람은 차다. 국경절·춘절에는 루오후 줄이 명소 대기보다 길다. 일출을 보려면 다펑 쪽은 전날 숙소를 동쪽에 두는 편이 낫다.",
    },
    en: {
      visitTitle: "A border city’s timetable",
      transportTitle: "Metro joins bay and hill",
      ticketsTitle: "Parks free, theme parks dated",
      seasonTitle: "Subtropical rain, a short winter",
      transport:
        "Bao’an Airport reaches town on Line 11 or airport buses. Luohu crossing is Line 1; Shenzhen North (Futian) meets high-speed rail and Lines 4 and 5. Coastal Shekou and the bay path are Line 2 plus bike or bus; Lianhua Hill sits near Lines 3 and 4. Dapeng peninsula needs its own half day east. Hong Kong crossings will dominate any dual-city plan: passports and permits first.",
      tickets:
        "Lianhua Hill and the bay promenade are free. Window of the World, Happy Valley, and Splendid China sell dated tickets with weekend premiums. Chung Ying Street is open space with stretch-by-stretch photo rules. Huaqiangbei costs nothing to enter. Some beaches charge only for showers and lockers in season.",
      season:
        "November–March favours outdoor days. May–September repeat heat and downpours; typhoon warnings close coasts and parks first. Winter afternoons can still be short sleeves, but night wind on the bay is cool. National Day and Spring Festival make Luohu queues longer than any theme park. For sunrise at Dapeng, sleep east the night before.",
    },
  },
  chengdu: {
    ko: {
      visitTitle: "찻집 좌석을 찾기 전에",
      transportTitle: "평원의 지하철, 판다의 교외",
      ticketsTitle: "사당은 가볍고 기지는 예약",
      seasonTitle: "흐린 겨울과 짧은 봄",
      transport:
        "솽류공항에서 시내는 19·10호선 또는 공항선 조합이 흔하다. 콴자이샹쯔는 4호선 중의료기(宽窄巷子) 역, 우후츠는 도보권, 두푸차오탕은 버스·택시를 섞는 편이 낫다. 청두 자이언트판다 기지와 두장옌은 도심 지하철만으로 끝나지 않는다. 기지 셔틀이나 관광 버스를 반나절 단위로 잡아야 한다. 평지라 공유 자전거가 잘 맞는다.",
      tickets:
        "우후츠·두푸초당은 입장료가 있고, 콴자이 골목 자체는 무료다. 판다 기지는 오전 먹이 시간에 맞춰 예약을 여는 날이 많고, 현장 매표가 막히면 하루가 통째로 밀린다. 두장옌은 내단·외단 구역 요금이 다를 수 있다. 찻집 자리는 표가 아니라 차 값이다. 국경절에는 기지와 도강언을 같은 날에 넣지 않는 것이 정신 건강에 좋다.",
      season:
        "3–6월과 9–11월이 걷기와 판다 관람에 무난하다. 겨울은 크게 춥지 않으나 회색 하늘이 길고, 여름은 습하고 소나기가 잦다. 판다는 더운 한낮보다 아침 활동이 많다. 청두의 매운 훠궈는 고지대가 아니어도 위를 지치게 하니, 첫날은 순한 메뉴로 몸과 일정을 맞추는 편이 낫다.",
    },
    en: {
      visitTitle: "Before you claim a teahouse seat",
      transportTitle: "Metro on the plain, a shuttle for pandas",
      ticketsTitle: "Shrines are light; the base is a reservation",
      seasonTitle: "Grey winters, a short spring",
      transport:
        "Shuangliu Airport usually reaches town on Lines 19 and 10 or the airport rail mix. Kuanzhai Alleys sit on Line 4; Wuhou Shrine is a walk; Du Fu’s Cottage mixes bus and taxi. The panda base and Dujiangyan are not metro-only: budget a shuttle and a half day each. The basin is flat, so bikes work.",
      tickets:
        "Wuhou and Du Fu charge; the Kuanzhai lanes themselves are free. The panda base often opens timed morning slots around feeding, and a sold-out window can eat the whole day. Dujiangyan may split inner and outer zones. A teahouse seat is the price of tea, not a ticket. Do not stack the base and Dujiangyan on a National Day.",
      season:
        "March–June and September–November walk and watch pandas most easily. Winter is not bitter, but the sky stays grey; summer is humid with bursts of rain. Pandas move more in the morning than at hot noon. Chengdu hotpot will tire a stomach even on the flat; keep day one milder than the city’s reputation.",
    },
  },
  hangzhou: {
    ko: {
      visitTitle: "호수를 한 바퀴 기준으로",
      transportTitle: "1호선과 공유 자전거",
      ticketsTitle: "서호 수면은 공짜다",
      seasonTitle: "연무 낀 봄, 단풍 가을",
      transport:
        "샤오산공항에서 시내는 공항선·1호선이 일반적이다. 서호 북동 모서리는 1호선 룽샹차오·딩안루 부근에서 걷거나 자전거로 들어간다. 링인사는 호수 서북쪽이라 버스·택시가 지하철보다 빠르고, 허팡제는 1호선 딩안루에서 가깝다. 전도호(첸다오후)는 시외 버스나 전철을 반나절 이상 잡아야 하는 다른 일정이다. 소제·백제 둑길은 차보다 발이 맞다.",
      tickets:
        "서호 둘레길과 소제·백제는 입장료가 없다. 링인사 경내는 표, 뇌봉탑·레이펑타 전망은 별도인 날이 많다. 룽징 차밭은 마을 산책은 무료, 유료 다원·시음은 가게마다 다르다. 서호 유람선은 선착장별로 요금이 갈린다. 국경절 호숫가는 표보다 사람 수가 병목이다.",
      season:
        "3–4월 유채·복숭아와 9–11월 맑은 날이 호수를 가장 잘 보여 준다. 메이유(장마) 무렵은 연무가 운치이자 사진의 적이다. 여름 한낮은 그늘 없는 제방이 덥고, 겨울은 습한 추위다. 주말 새벽 호수 한 바퀴가 낮 관광 버스보다 항저우다. 차 따는 철에는 룽징 마을 버스가 붐빈다.",
    },
    en: {
      visitTitle: "Plan around one loop of the lake",
      transportTitle: "Line 1 and a shared bike",
      ticketsTitle: "The water itself is free",
      seasonTitle: "Mist in spring, maples in autumn",
      transport:
        "Xiaoshan Airport usually meets Line 1. The north-east corner of West Lake is a walk or bike from Longxiangqiao or Ding’an Road. Lingyin Temple is faster by bus or taxi than metro; Hefang Street is close to Ding’an Road. Thousand Island Lake is a different half-day on suburban rail or bus. The Su and Bai causeways prefer feet to cars.",
      tickets:
        "The lakeshore and causeways are free. Lingyin charges; Leifeng Pagoda often sells a separate view ticket. Longjing village paths are free; paid gardens and tastings vary by shop. Lake boats split prices by pier. On national holidays the crowd is the bottleneck, not the ticket.",
      season:
        "March–April blossom and September–November clear days show the lake best. Plum-rain weeks make mist both atmosphere and a problem for photos. Summer noon on the causeway is hot; winter is a damp cold. A dawn loop beats the tour buses. During the pick, Longjing village buses fill early.",
    },
  },
  chongqing: {
    ko: {
      visitTitle: "계단을 일정에 넣는다",
      transportTitle: "경궤와 삭도가 엘리베이터다",
      ticketsTitle: "야경은 공짜, 다쭈는 하루",
      seasonTitle: "안개 겨울, 찜통 여름",
      transport:
        "장베이공항에서 시내는 10호선·공항버스가 기본이다. 해방비·홍야동은 1·2호선과 걷기의 혼합이고, 2호선 리쯔바는 건물 사이로 열차가 지난다. 창장 삭도는 강을 수직으로 건너는 교통이자 전망이다. 츠치커우는 1호선, 무등산은 케이블·버스가 더 맞다. 평지 지도 앱의 직선 거리는 충칭에서 거짓말이다. 고저 차를 항상 본다.",
      tickets:
        "홍야동 골목과 강변 야경은 입장료가 없다. 츠치커우 고진 자체는 무료인 구간이 많고, 개별 전시관이 표를 판다. 다쭈 석각은 시내에서 멀어 입장·교통을 하루로 묶어야 한다. 무등산 케이블카는 날씨 취소가 잦다. 야경 유람선은 선착장·코스별로 가격이 다르다. 계단이 많은 밤은 구두보다 밑창이 중요하다.",
      season:
        "3–4월과 10–11월이 계단 도시에 가장 덜 가혹하다. 여름은 화로라 불릴 만큼 덥고, 겨울은 크게 영하가 아니어도 안개와 습기가 뼈에 남는다. 야경은 비가 갠 밤이 물에 불이 가장 잘 번진다. 국경절 홍야동은 이동 자체가 관람이다. 오전 박물관, 해 진 뒤 강변으로 일정을 나누면 더위에 덜 진다.",
    },
    en: {
      visitTitle: "Put stairs on the itinerary",
      transportTitle: "Light rail and cable are the lifts",
      ticketsTitle: "Night views are free; Dazu is a day",
      seasonTitle: "Fog in winter, a furnace in summer",
      transport:
        "Jiangbei Airport feeds Lines 10 and airport buses. Jiefangbei and Hongyadong mix Lines 1–2 with walking; Liziba on Line 2 is the train through a residential block. The Yangtze cableway is transport and a view. Ciqikou is Line 1; Nanshan prefers bus and cable. Straight-line maps lie here. Always read the elevation.",
      tickets:
        "Hongyadong lanes and river lights are free. Ciqikou’s streets are largely open; small museums sell their own tickets. Dazu rock carvings sit far enough out to own a full day. Nanshan cables cancel in weather. Night boats vary by pier and loop. On stair nights, soles matter more than style.",
      season:
        "March–April and October–November are least harsh on a stair city. Summer earns the furnace nickname; winter rarely freezes but fog and damp stay in the bones. Lights smear best on the water after rain. National Day at Hongyadong makes moving the attraction. Museums in the morning, river after dark, loses less to heat.",
    },
  },
  xian: {
    ko: {
      visitTitle: "성벽 위에서 시계를 맞춘다",
      transportTitle: "2호선과 병마용 전용 시간",
      ticketsTitle: "병마용이 하루의 표를 먹는다",
      seasonTitle: "황토 바람과 맑은 가을",
      transport:
        "셴양공항에서 시내는 공항성제선이 성벽 북쪽으로 들어온다. 종루·회민가는 2호선 종루, 대야탑은 3·4호선 다옌타, 명 성벽 순환은 융닝먼 등 성문에서 자전거·보행이 가능하다. 병마용은 도심 동북쪽 교외라 관광 버스 5호 또는 전용 셔틀을 반나절 묶는 것이 기본이다. 화청지는 병마용과 같은 축에 있어 하루 코스로 붙이기 쉽다.",
      tickets:
        "병마용 박물관은 성수기 실명 예약이 사실상 필수다. 성벽은 문마다 자전거 대여와 입장 요금이 붙고, 대야탑 북광장 음악 분수는 무료, 탑 입정은 유료다. 회민가 골목은 입장료가 없다. 화청지·병마용을 같은 날에 넣으면 걷기가 길다. 위조 안내원 버스가 역 앞에 서니, 공식 창구 색을 기억하고 탄다.",
      season:
        "4–5월과 9–10월이 성벽 자전거에 맞다. 봄에는 황사가 끼고, 여름 성벽 위는 그늘이 없다. 겨울은 건조하고 추우나 대기는 의외로 맑은 날이 있다. 병마용은 오전 첫 입장 때가 1갱의 밀도가 낮다. 국경절에는 회민가 양고기 국수 줄이 유적 줄과 비슷해진다.",
    },
    en: {
      visitTitle: "Set the clock on the wall",
      transportTitle: "Line 2, then a half-day for the army",
      ticketsTitle: "The terracotta pits eat the day’s ticket",
      seasonTitle: "Loess wind and a clear autumn",
      transport:
        "Xianyang Airport meets the city on the airport intercity line toward the north wall. Bell Tower and the Hui quarter sit on Line 2; the Giant Wild Goose Pagoda on Lines 3 and 4. Ming wall cycling starts at gates such as Yongningmen. The terracotta pits are a suburban half-day on Tourist Bus 5 or a shuttle. Huaqing Pool sits on the same east axis, easy to pair.",
      tickets:
        "The terracotta museum is effectively a real-name booking in peak months. The wall charges for entry and bike hire by gate. The north square fountain is free; climbing the pagoda is not. The Hui streets are free. Pairing Huaqing and the pits makes a long walk. Fake guide buses wait at stations; use the official livery.",
      season:
        "April–May and September–October suit wall cycling. Spring can dust the sky; summer on the rampart has no shade. Winter is dry and cold, sometimes with surprisingly clear air. First entry at Pit 1 is the quietest. On National Day the lamb-noodle line in the Hui quarter matches the relic queues.",
    },
  },
  nanjing: {
    ko: {
      visitTitle: "성벽을 하루의 뼈대로",
      transportTitle: "지하철이 능과 호수를 가른다",
      ticketsTitle: "능침은 구간 요금",
      seasonTitle: "플라타너스 그늘의 여름",
      transport:
        "루커우공항에서 시내는 공항선·S1이 난징남역으로 들어온다. 푸즈먀오·친화이는 3호선 푸즈먀오, 총통부는 2·3호선 다싱궁 인근, 중산릉·명효릉은 2호선 하마창 후 관광 버스나 공유 자전거다. 쉬안우호는 1호선 쉬안우먼. 명 성벽은 중화문·타이핑먼 등 구간마다 오르는 입구가 다르다. 쯔진산은 한 능이 아니라 능역이다.",
      tickets:
        "푸즈먀오 거리 자체는 무료, 일부 전각과 배가 유료다. 중산릉 광역은 구역별로 표를 사고, 명효릉·링구사는 별도인 날이 많다. 난징대학살기념관은 예약 입장이 일반적이고 입장료는 없다. 성벽 일부 구간은 별도 요금이다. 주말 친화이 유선은 대기보다 배 시간이 병목이다.",
      season:
        "3–5월 벚꽃·유채와 10–11월 단풍이 쯔진산을 가장 잘 보여 준다. 여름은 습하고 플라타너스가 거리를 어둡게 가린다. 겨울은 강남의 습한 추위다. 추우 기념관은 실내라 더운 날 오전에 넣기 좋다. 국경절 중산릉 광장은 순환 버스가 줄로 변한다. 성벽 일몰은 중화문 쪽이 해 방향이 맞을 때가 많다.",
    },
    en: {
      visitTitle: "Use the wall as the day’s bone",
      transportTitle: "Metro splits tombs from the lake",
      ticketsTitle: "Tombs charge by zone",
      seasonTitle: "Plane-tree shade in summer",
      transport:
        "Lukou Airport reaches Nanjing South on S1. Confucius Temple and the Qinhuai sit on Line 3; the Presidential Palace near Daxinggong on Lines 2 and 3; Sun Yat-sen’s Mausoleum and Ming Xiaoling after Xiamafang on Line 2 plus bus or bike. Xuanwu Lake is Xuanwumen on Line 1. Ming wall climbs differ by gate—Zhonghua, Taiping. Purple Mountain is a tomb field, not one stop.",
      tickets:
        "Fuzimiao streets are free; some halls and boats charge. Sun Yat-sen’s park sells by zone; Xiaoling and Linggu are often separate. The Memorial Hall of the Nanjing Massacre is typically free with a reservation. Some wall stretches add a fee. Weekend Qinhuai boats bottleneck on timetable more than ticket.",
      season:
        "March–May blossom and October–November maples show Purple Mountain best. Summer is humid; plane trees darken the avenues. Winter is Jiangnan’s damp cold. The memorial hall is indoor, useful on a hot morning. National Day turns mausoleum shuttle loops into queues. Sunset on the wall often faces better at Zhonghuamen.",
    },
  },
  wuhan: {
    ko: {
      visitTitle: "다리를 건너야 도시가 된다",
      transportTitle: "2호선이 장강을 관통한다",
      ticketsTitle: "황학루는 표, 강변은 공짜",
      seasonTitle: "화로 같은 여름을 피한다",
      transport:
        "톈허공항에서 시내는 2호선이 한커우를 지나 장강터널로 무창까지 간다. 황학루는 2·4호선 황학루·신허가, 동후는 8호선 허우후 일대, 한양 구정사는 버스·택시가 섞인다. 장강 유람과 우한 장강대교 보행은 서로 다른 고도다. 세 진을 하루에 다 밟으려면 지하철 환승을 일정 한가운데에 둔다. 여름 한낮의 교량은 그늘이 없다.",
      tickets:
        "황학루 공원·누각은 입장료가 있다. 동후 녹지 일부는 무료, 수상 버스·정원은 유료 구간이 있다. 후베이성박물관은 예약이 일반적이고 상설은 무료인 날이 많다. 후부항 야시장은 입장료 없이 배 시간표가 관건이다. 합류점 유람선은 야간 요금이 더 높다. 다리를 걷는 일은 표가 아니라 체력이다.",
      season:
        "3–5월과 9–11월이 강가 걷기에 맞다. 우한 여름은 중국에서 손꼽히게 덥고 습해, 정오 실외를 비우는 것이 현지 습관이다. 겨울은 강바람이 차다. 벚꽃 철 우한대학·동후는 인파가 대학 일정을 삼킨다. 장마·홍수 주의보가 뜨면 강변 산책로가 먼저 닫힌다. 야경은 한커우 강변에서 무창 쪽 조명을 보는 구도가 흔하다.",
    },
    en: {
      visitTitle: "The city exists after you cross a bridge",
      transportTitle: "Line 2 goes through the Yangtze",
      ticketsTitle: "Yellow Crane Tower charges; the bank is free",
      seasonTitle: "Avoid the furnace months",
      transport:
        "Tianhe Airport rides Line 2 through Hankou and the river tunnel into Wuchang. Yellow Crane Tower sits by Lines 2 and 4; East Lake by Line 8; Hanyang’s Guiyuan Temple mixes bus and taxi. A river cruise and a walk on the First Bridge are different altitudes. To touch all three towns in a day, put a metro transfer at noon. The bridge at summer midday has no shade.",
      tickets:
        "Yellow Crane Tower’s park and pavilion charge. Parts of East Lake are free; boats and gardens may not be. Hubei Provincial Museum is often a free timed reservation. Hubu Alley has no ticket; boat times matter more. Confluence night cruises cost more after dark. Walking the bridge is stamina, not a stub.",
      season:
        "March–May and September–November suit river walks. Wuhan summer is among China’s hottest and wettest; locals empty the outdoor noon. Winter wind off the river is sharp. Cherry season at Wuhan University and East Lake can swallow a day in queues. Flood warnings close promenades first. Night views often look from Hankou toward Wuchang lights.",
    },
  },
  suzhou: {
    ko: {
      visitTitle: "원림은 오전이 정원이다",
      transportTitle: "지하철과 수향 버스가 갈린다",
      ticketsTitle: "졸정·유원이 표를 먹는다",
      seasonTitle: "장마의 담장, 단풍의 창",
      transport:
        "상하이에서 고속철로 20–30분이면 쑤저우역·쑤저우베이·쑤저우위안취가 갈린다. 졸정원은 1호선 둥베이제 부근, 유원은 1호선 차위안, 핑장로는 걷거나 4호선 권역이다. 한산사는 3호선 후 버스, 진지호(저우좡·퉁리 방향)는 시외 일정을 따로 잡는다. 원림 사이는 가까워 보여도 담장 골목이 꺾이니, 한 정원당 90분은 짧게 잡아도 된다.",
      tickets:
        "졸정원·유원·망사원은 성수기 오전 표가 빨리 끊긴다. 핑장로·산탕제는 거리 입장료가 없고, 개별 회관이 유료다. 호구(후추)는 사·탑 요금이 붙는 날이 많다. 수향 고진은 통표가 배·다리를 묶는다. 학생·고령 할인은 여권이 필요할 수 있다. 오후에 가면 원림의 창이 아니라 사람 뒷모습을 찍게 된다.",
      season:
        "3–5월 신록과 10–11월 단풍이 창틀 풍경에 맞다. 메이유 때는 운하가 차오르고 돌길이 미끄럽다. 여름 원림은 그늘이 있으나 습기가 사진 렌즈를 흐린다. 겨울은 한산하고 나무는 뼈대만 남는다. 주말에는 정원 두 곳이면 충분하다. 평일 개장 직후 졸정원의 동쪽이 먼저 비는 편이다.",
    },
    en: {
      visitTitle: "A garden is a morning",
      transportTitle: "Metro in town, a bus for water towns",
      ticketsTitle: "Humble Administrator and Lingering eat the stubs",
      seasonTitle: "Rain on walls, maples in windows",
      transport:
        "High-speed rail from Shanghai splits Suzhou, Suzhou North, and Suzhou Industrial Park in 20–30 minutes. Humble Administrator’s Garden sits near Dongbeijie on Line 1; Lingering Garden at Yuanlin; Pingjiang Road is a walk or Line 4. Hanshan Temple is Line 3 plus bus; Tongli or Zhouzhuang need their own suburban slot. Gardens look close; walls zigzag. Ninety minutes per garden is already tight.",
      tickets:
        "Humble Administrator, Lingering, and Master of Nets sell out morning slots in peak. Pingjiang and Shantang streets are free; some halls charge. Tiger Hill often tickets temple and pagoda. Water towns bundle boats and bridges in a pass. Student or senior discounts may want a passport. Arrive after lunch and you photograph backs, not windows.",
      season:
        "March–May green and October–November maples fit the window frames. Plum rain raises canals and slicks stone. Summer gardens have shade and humid lenses. Winter is quiet, trees reduced to structure. Two gardens are enough on a weekend. Right after opening on a weekday, the east of Humble Administrator empties first.",
    },
  },
  tianjin: {
    ko: {
      visitTitle: "하이허를 따라 접는다",
      transportTitle: "베이징에서 30분, 시내는 강이 축",
      ticketsTitle: "조계 거리는 무료다",
      seasonTitle: "바다보다 강의 바람",
      transport:
        "베이징남역에서 고속철로 톈진·톈진시역이 가깝다. 빈하이공항에서는 2호선. 우다다오는 1호선 잉커우다오 후 도보, 이태리 풍정구는 2호선 둥난자오 인근, 고루는 1호선 동남각. 하이허 유람선은 해방교 일대 선착장이 많다. 판산은 지현 방향 교외라 시내 조계와 같은 날에 넣지 않는 편이 낫다. 강변은 평지라 공유 자전거가 잘 맞는다.",
      tickets:
        "우다다오 별장 거리는 걸어 다니는 한 무료다. 일부 실내 박물관만 표를 판다. 이태리 풍정구도 광장은 무료, 전시관은 유료. 톈진의 눈(하이허 관람차)은 날씨에 따라 운휴한다. 고루 상점은 입장료가 없고, 판산은 구간 입장이다. 조계 건축을 밖에서 읽는 일정은 지갑보다 신발이다.",
      season:
        "4–6월과 9–10월이 강변 걷기에 맞다. 여름은 습하고, 겨울 하이허 바람은 베이징보다 습하게 춥다. 주말 이태리 광장은 야시장 밀도가 건축을 가린다. 오전 우다다오, 해 진 뒤 해방교 조명이 한 세트다. 안개 낀 날은 관람차보다 거리 파사드가 남는 선택이다.",
    },
    en: {
      visitTitle: "Fold the day along the Haihe",
      transportTitle: "Half an hour from Beijing; the river is the axis",
      ticketsTitle: "Concession streets are free",
      seasonTitle: "River wind more than sea breeze",
      transport:
        "High-speed trains from Beijing South make Tianjin and Tianjin West close. Binhai Airport meets Line 2. Five Great Avenues are a walk from Yingkoudao on Line 1; the Italian concession near Dongnanjiao on Line 2; the Drum Tower at Southeast Corner. Haihe boats leave piers around Jiefang Bridge. Panshan is a Jizhou day, not a tag-on. The bank is flat; bikes work.",
      tickets:
        "Walking Wudadao’s villas is free; a few house museums charge. Italian concession squares are free, indoor shows not. The Tianjin Eye stops in weather. Drum Tower shops have no ticket; Panshan charges by zone. A façade day costs soles more than stubs.",
      season:
        "April–June and September–October suit the bank. Summer is humid; winter wind off the Haihe feels wetter than Beijing. Weekend Italian squares let night markets hide the architecture. Wudadao in the morning and Jiefang lights after dark make one set. On fog, skip the wheel and keep the street fronts.",
    },
  },
  qingdao: {
    ko: {
      visitTitle: "방파제에서 시계를 맞춘다",
      transportTitle: "해안이 가로보다 먼저다",
      ticketsTitle: "잔차오는 공짜, 라오산은 표",
      seasonTitle: "7–8월이 바다의 달",
      transport:
        "자오둥공항에서 시내는 지하철 8·1호선 환승 또는 공항버스다. 잔차오·바다관 일대는 3호선 잔차오, 스난 구릉의 붉은 지붕은 그 역에서 오르막이다. 칭다오 맥주박물관은 3호선 덩저우루 인근. 라오산은 도심에서 동쪽으로 버스·관광 전철을 따로 잡는다. 빈하이 산책로는 구간이 길어 한 방향을 정해 걷는 편이 덜 지친다.",
      tickets:
        "잔차오 방파제와 바다관 해안 도로는 입장료가 없다. 칭다오 맥주박물관은 시음 포함 표가 일반적이다. 라오산은 거봉·타이칭궁 등 구역 요금이 갈리고 케이블카가 별도다. 독일 총독부 옛 건물 일부는 박물관 요금이다. 해수욕장은 성수기 샤워·파라솔만 받는 곳이 있다. 안개 낀 날 라오산 정상 표는 다시 생각하는 것이 맞다.",
      season:
        "6월 말에서 9월 초가 해수욕과 해산물 철이다. 봄·가을은 걷기 좋고 물은 아직 차다. 겨울 방파제는 바람이 세고 한산하다. 8월 주말 잔차오는 사람 때문에 바다 사진이 어렵다. 맥주 축제 기간은 숙소가 먼저 찬다. 오전 석조 거리, 오후 해안, 해 진 뒤 등대가 이 도시의 일반적인 호흡이다.",
    },
    en: {
      visitTitle: "Set the clock on the pier",
      transportTitle: "The shore is the avenue",
      ticketsTitle: "Zhanqiao is free; Laoshan sells tickets",
      seasonTitle: "July and August belong to the water",
      transport:
        "Jiaodong Airport meets town on Lines 8 and 1 or airport buses. Zhanqiao and the villas sit on Line 3; the red roofs of Shinan are an uphill walk from there. The beer museum is near Dengzhou Road on Line 3. Laoshan is an eastbound bus or tourist train of its own. The coastal path is long; pick one direction.",
      tickets:
        "Zhanqiao pier and the villa shore road are free. The beer museum usually bundles a tasting. Laoshan splits Jufeng, Taiqing Palace and other zones; cables are extra. Some governorate buildings charge as museums. Beaches may take only shower or umbrella fees in season. Skip a Laoshan summit ticket in fog.",
      season:
        "Late June to early September is swimming and seafood. Spring and autumn walk well while the water stays cold. Winter piers are windy and empty. August weekends at Zhanqiao hide the sea behind people. Beer festival weeks fill rooms first. Stone streets in the morning, shore in the afternoon, lighthouse after dark is the city’s usual breath.",
    },
  },
  xiamen: {
    ko: {
      visitTitle: "배를 한 번 타야 섬이 된다",
      transportTitle: "페리와 환다오 버스",
      ticketsTitle: "구랑위 상륙은 공짜가 아니다",
      seasonTitle: "태풍이 일정을 다시 쓴다",
      transport:
        "가오치공항에서 시내는 1호선. 구랑위는 룬퉁·둥두 등 부두에서 여객선을 타며, 성수기엔 선표가 실명이다. 섬 안은 차 없이 걷거나 배터리 카. 남보타사·샤먼대학은 1·3호선 권역, 환다오로는 버스가 해안을 돈다. 천가경 학촌은 본섬 동남이라 반나절을 따로 둔다. 페리가 끊기면 구랑위 일정 전체가 멈춘다.",
      tickets:
        "구랑위는 상륙 선표가 사실상 입장료고, 숙박객 규칙은 수시로 바뀐다. 섬 내부 피아노 박물관·일부 별장은 별도 표. 남보타사는 향과 경내 요금이 있을 수 있다. 환다오 해안과 샤먼대 밖 백성도는 무료 구간이 많다. 선표를 당일 현장에서만 사려 하면 만선이다. 공식 페리 채널을 전날 연다.",
      season:
        "10–12월과 3–5월이 걷기와 바다색에 유리하다. 6–9월은 더위와 태풍 경보가 페리·환다오를 먼저 닫는다. 여름 주말 구랑위는 골목 폭이 사람 폭이 된다. 겨울은 온화하나 해풍이 세다. 일출은 본섬 동부, 일몰은 구랑위 서쪽 해안이 자주 맞다. 비 오는 날 별장 실내 박물관을 예비로 넣는다.",
    },
    en: {
      visitTitle: "The island exists after one ferry",
      transportTitle: "Boats and the round-island bus",
      ticketsTitle: "Landing on Gulangyu is not free",
      seasonTitle: "Typhoons rewrite the day",
      transport:
        "Gaoqi Airport meets Line 1. Gulangyu boats leave piers such as Lundu and Dongdu; peak sailings are real-name. On the islet you walk or take battery cars—no ordinary traffic. Nanputuo and Xiamen University sit on Lines 1 and 3; buses loop Huandao Road. Zengcuo’an village needs its own half day on the south-east of the main island. If ferries stop, Gulangyu stops.",
      tickets:
        "The ferry ticket is effectively the landing fee; overnight rules change. Piano museums and some villas sell extra tickets. Nanputuo may charge inner courts. Much of Huandao shore and the sands outside the university are free. Same-day pier tickets sell out. Open the official ferry channel the night before.",
      season:
        "October–December and March–May favour walking and water colour. June–September heat and typhoon warnings close boats and the coast first. Summer weekends turn Gulangyu lanes into shoulder width. Winter is mild with a hard sea wind. Sunrise often fits the east of the main island; sunset the west of Gulangyu. Keep a villa museum for rain.",
    },
  },
  kunming: {
    ko: {
      visitTitle: "고원의 햇볕을 일정에 넣는다",
      transportTitle: "지하철과 석림 열차",
      ticketsTitle: "호수는 공짜, 석림은 표",
      seasonTitle: "사철 봄, 겨울 갈매기",
      transport:
        "창수이공항에서 시내는 공항선·6호선. 취이후(그린레이크)는 3·4호선 권역, 윈난성박물관은 교외 방향으로 지하철·버스가 섞인다. 석림은 고속철 석림역 또는 관광 버스가 도심과 성격이 다른 반나절이다. 뎬츠 동부는 버스, 더우난 꽃시장은 새벽에 움직인다. 고도 때문에 첫날은 일정을 느슨히, 자외선 차단은 여름 물건이 아니다.",
      tickets:
        "취이후 공원은 입장료가 없다. 석림은 핵심 구역 표와 카트가 따로 팔린다. 윈난 민족촌은 구역 입장, 위안퉁사는 향·경내 요금이 있을 수 있다. 더우난 도매는 관광 입장과 경매 시간이 다르다. 호숫가 생태 공원 일부는 무료다. 석림을 오후에 가면 돌 그늘이 짧고 버스가 몰린다.",
      season:
        "연중 온화하나 12–1월 취이후 갈매기와 7–8월 꽃·맑은 하늘이 서로 다른 이유다. 건기(대략 11–4월)는 햇살이 강하고, 우기(5–10월)는 오후 소나기가 많다. 석림 돌은 비에 미끄럽다. 봄성 별명에 속아 긴팔을 안 가져가면 저녁 호숫가가 춥다. 고도 두통이 있으면 첫날 석림을 미룬다.",
    },
    en: {
      visitTitle: "Put plateau sun on the clock",
      transportTitle: "Metro in town, a train to the Stone Forest",
      ticketsTitle: "The lake is free; the karst sells tickets",
      seasonTitle: "Spring all year, gulls in winter",
      transport:
        "Changshui Airport meets the airport line and Line 6. Green Lake sits on Lines 3 and 4; the provincial museum mixes metro and bus toward the edge. The Stone Forest is a half-day on high-speed rail to Shilin or a tourist bus. East Dianchi is a bus; Dounan flower market moves at dawn. Altitude means a loose first day. Sunscreen is not only a summer object.",
      tickets:
        "Green Lake park is free. The Stone Forest splits core tickets and carts. Yunnan Ethnic Village charges by zone; Yuantong Temple may ticket inner courts. Dounan wholesale and tourist hours differ. Some lakeside ecological parks are free. An afternoon Stone Forest means short shadows and full buses.",
      season:
        "Mild all year, but December–January gulls at Green Lake and July–August flowers are different reasons to come. The dry season (roughly November–April) is bright; the wet (May–October) throws afternoon storms. Karst is slick in rain. The Spring City nickname lies at dusk by the lake—bring a long sleeve. If the altitude nags, delay the Stone Forest to day two.",
    },
  },
  dalian: {
    ko: {
      visitTitle: "원형 광장에서 바다로",
      transportTitle: "버스와 빈하이로가 척추다",
      ticketsTitle: "해안은 공짜, 뤼순은 표",
      seasonTitle: "여름 피서, 겨울 바람",
      transport:
        "저우수이쯔공항에서 시내는 지하철 2호선·공항버스. 중산 광장은 2호선 중산광장, 싱하이 광장은 1·12호선 권역 후 도보가 넓다. 빈하이로는 해안 절벽을 따라 버스·택시가 지하철보다 맞다. 뤼순(여순)은 도심에서 남서쪽으로 전철·버스가 한 시간 안팎이라 오전이 아니면 203고지에서 해가 먼저 진다. 항만 도시라 구릉 계단이 지도의 짧은 선을 배신한다.",
      tickets:
        "싱하이 광장·빈하이 산책 구간은 입장료가 없다. 뤼순 박물관·203고지·일부 요새는 구역 표가 갈린다. 극지해양세계 같은 수족관은 테마파크 요금이다. 러시아·일본풍 거리는 걸어 다니는 한 무료. 해수욕장은 성수기 시설비만 받는 곳이 있다. 안개 낀 날 해안 드라이브는 전망이 아니라 경적이다.",
      season:
        "6–9월이 해수욕과 해산물의 철이고, 벚꽃은 4월 말–5월 초 시내가 분홍이 된다. 겨울 황해 바람은 하얼빈만큼 춥지 않아도 체감이 세다. 8월 주말 싱하이는 원형 잔디가 사람 밭이 된다. 뤼순은 평일에야 요새의 침묵이 남는다. 오전 광장 건축, 오후 빈하이, 해 진 뒤 항만 조명이 한 호흡이다.",
    },
    en: {
      visitTitle: "From the round square to the sea",
      transportTitle: "Buses and Binhai Road are the spine",
      ticketsTitle: "The shore is free; Lushun sells tickets",
      seasonTitle: "Summer refuge, winter wind",
      transport:
        "Zhoushuizi Airport meets Line 2 and airport buses. Zhongshan Square sits on Line 2; Xinghai Square is a wide walk after Lines 1 and 12. Binhai Road along the cliffs prefers bus or taxi to metro. Lushun is an hour south-west by rail or bus; if you start late, 203 Meter Hill loses the sun first. Harbour hills betray short lines on the map.",
      tickets:
        "Xinghai Square and stretches of Binhai are free. Lushun museum, 203 Meter Hill and some forts split zone tickets. Polar aquarium parks charge theme-park prices. Russian and Japanese streets are free to walk. Beaches may take only facility fees in season. Fog turns a coastal drive into horns, not views.",
      season:
        "June–September is swimming and seafood; late April to early May paints the streets with cherry. Winter wind off the Yellow Sea is not Harbin-cold but feels hard. August weekends turn Xinghai’s lawn into a field of people. Lushun keeps fortress silence on weekdays. Squares in the morning, Binhai in the afternoon, harbour lights after dark is one breath.",
    },
  },
  harbin: {
    ko: {
      visitTitle: "추위를 분 단위로 계산한다",
      transportTitle: "지하철과 축제 셔틀",
      ticketsTitle: "겨울 표가 하얼빈의 표다",
      seasonTitle: "12–2월이 본 시즌이다",
      transport:
        "타이핑공항에서 시내는 공항버스·지하철 연장 구간이 해마다 조금 달라진다. 중앙대가는 1·2호선 환승 후 도보, 성 소피아 성당은 그 동북쪽 골목이다. 송화강 방홍기념탑·태양섬은 강 건너 다리·버스. 빙설대세계는 시외라 관광 버스나 겨울 전용 셔틀이 사실상 필수다. 야부리 스키는 다른 도시 일정이다. 아이젠·핫팩이 지하철 노선만큼 중요하다.",
      tickets:
        "중앙대가 보행은 무료다. 성 소피아는 건축 박물관 입장료가 있다. 빙설대세계·얼음등 축제는 날짜·야간 요금이 핵심이고, 현장 매표 줄이 한 시간을 넘기기도 한다. 태양섬은 계절·구역에 따라 표가 갈린다. 실내 중앙대가 상점과 빵집은 몸을 녹이는 무표 휴식이다. 축제는 해가 진 뒤가 본편이라 오후 입장권을 산다.",
      season:
        "12월 중순부터 2월이 얼음 건축의 철이다. 기온이 영하 20도 근처로 내려가는 밤이 있어, 노출 피부와 배터리·카메라가 먼저 멈춘다. 여름은 짧고 선선해 강변 피서가 된다. 봄 해빙은 진창이다. 가을은 짧다. 축제를 보러 가면서 낮에만 머물면 등불을 놓친다. 장갑은 예비용이 한 켤레 더 있어야 한다.",
    },
    en: {
      visitTitle: "Count the cold in minutes",
      transportTitle: "Metro and festival shuttles",
      ticketsTitle: "Winter tickets are Harbin’s tickets",
      seasonTitle: "December–February is the real season",
      transport:
        "Taiping Airport buses and metro extensions shift a little each year. Central Street is a walk after Lines 1 and 2; St. Sophia sits in the lanes just north-east. The flood monument and Sun Island sit across the Songhua by bridge or bus. Ice and Snow World is suburban: a tourist bus or winter shuttle is effectively required. Yabuli skiing is another city. Spikes and heat packs matter as much as the map.",
      tickets:
        "Walking Central Street is free. St. Sophia charges as an architecture museum. Ice and Snow World and the ice-lantern festival sell by date and night premium; on-site lines can pass an hour. Sun Island splits by season and zone. Indoor bakeries on Central Street are a free thaw. The show is after dark, so buy an afternoon-into-night ticket.",
      season:
        "Mid-December through February is ice architecture. Nights near −20 °C stop skin, batteries and cameras first. Summer is short and cool enough for a river escape. Spring thaw is mud. Autumn is brief. A daylight-only festival trip misses the lanterns. Pack a spare pair of gloves.",
    },
  },
};

export function getCityVisit(
  slug: string,
  locale: Locale | string
): CityVisitCopy | undefined {
  const entry = VISIT[slug];
  if (!entry) return undefined;
  return locale === "ko" ? entry.ko : entry.en;
}
