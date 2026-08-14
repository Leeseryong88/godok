import type { Locale } from "@/lib/i18n/locales";

export type SpotMeta = {
  lat: number;
  lng: number;
  ko: string[];
  en: string[];
};

function M(
  lat: number,
  lng: number,
  ko: string | string[],
  en: string | string[]
): SpotMeta {
  return {
    lat,
    lng,
    ko: Array.isArray(ko) ? ko : [ko],
    en: Array.isArray(en) ? en : [en],
  };
}

/** 도시별 관광지 좌표·짧은 설명 (대략 위치, 관광지도용) */
export const SPOT_META: Record<string, Record<string, SpotMeta>> = {
  上海: {
    bund: M(31.2404, 121.4905, ["황푸강 서쪽 제방의 클래식 스카이라인입니다. 석양부터 조명이 켜지며, 맞은편 루자쭈이 타워와 함께 상하이 야경의 기본 코스가 됩니다.", "지하철 2·10호선 난징둥루역에서 걸어 갑니다. 사진 줄은 남쪽 벤치보다 중산둥루 중간 난간이 덜 붐비고, 평일 저녁이 한적합니다."], ["The Bund is the classic west-bank skyline. Lights come on at dusk, pairing with Lujiazui towers across the river.", "Walk from Nanjing East Road (metro 2/10). Mid-promenade railings beat the crowded south benches; weeknights are calmer."]),
    "oriental-pearl": M(31.2396, 121.4998, ["푸둥을 상징하는 라디오 타워입니다. 낮에는 전망대, 밤에는 외탄에서 올려다보는 실루엣이 더 잘 나옵니다.", "루자쭈이역에서 가깝습니다. 대기 줄이 길면 입장 대신 강변에서 찍고, 상하이타워와 같은 반나절에 묶으세요."], ["Pudong’s landmark radio tower. Use the deck by day, or photograph it from the Bund at night.", "Close to Lujiazui station. If queues are long, shoot from the river and pair with Shanghai Tower the same half-day."]),
    yuyuan: M(31.227, 121.4921, ["명대 정원과 상점 골목이 붙어 있는 구시가입니다. 연못·누각·석가산이 핵심이고, 바로 옆이 성황묘입니다.", "오전 개장 직후가 한적합니다. 10·14호선 환승 후 도보로 들어가고, 안쪽 식당은 관광 가격대가 흔하니 한 블록만 빠지세요."], ["A Ming garden joined to shopping lanes. Ponds, pavilions, and rockeries are the core; City God Temple is next door.", "Go at opening. Walk after metro 10/14; prices inside run high—step one block out to eat."]),
    chenghuangmiao: M(31.2275, 121.4926, ["예원 옆 성황묘와 상점가입니다. 간식·기념품·야시장 분위기가 몰려 점심·저녁 피크가 붐빕니다.", "예원과 같은 반나절로 묶으세요. 식사는 골목 분점이나 현지인이 많은 자리를 고르면 대기와 가격을 줄일 수 있습니다."], ["City God Temple and market beside Yu Garden. Snacks and souvenirs peak at lunch and dinner.", "Same half-day as Yu Garden. Eat at a side-street branch to cut queues and tourist pricing."]),
    "nanjing-road": M(31.2348, 121.475, ["인민광장에서 외탄으로 이어지는 보행 쇼핑 거리입니다. 백화점·간식·네온이 한 축에 모여 있습니다.", "낮에 걷고 해질녘 외탄으로 이어가면 동선이 단순합니다. 비가 오면 지하상가·지하철 출구가 많아 피하기 좋습니다."], ["Pedestrian shopping from People’s Square to the Bund—malls, snacks, and neon on one spine.", "Walk by day and continue to the Bund at dusk. Many metro exits help on rainy days."]),
    lujiazui: M(31.2387, 121.5055, ["금융 지구 초고층 군집입니다. 센트럴 녹지와 강변 산책로를 돌면 타워 각도가 계속 바뀝니다.", "2호선 루자쭈이역이 거점입니다. 상하이타워·동방명주와 묶어 오후에 외탄으로 넘어가면 야경이 자연스럽게 이어집니다."], ["Pudong’s tower cluster. Loop the central green and river path for changing angles.", "Metro 2 at Lujiazui is the hub. Pair with Shanghai Tower, then cross to the Bund for night lights."]),
    "shanghai-tower": M(31.2337, 121.5056, ["중국에서 가장 높은 전망대 중 하나입니다. 맑은 오전에야 스카이라인이 제대로 보입니다.", "흐리거나 황사가 있으면 티켓을 미루세요. 루자쭈이 메트로와 바로 연결되고, 보안 검색 때문에 큰 짐은 숙소에 두는 편이 낫습니다."], ["One of China’s tallest observation decks. A clear morning is the only time the skyline pays off.", "Skip haze days. It sits on the Lujiazui metro; leave big bags at the hotel for security."]),
    disneyland: M(31.1433, 121.6573, ["하루를 통째로 쓰는 테마파크입니다. 시내 동쪽에서 멀어 외탄 야경과 같은 날에 섞으면 체력이 먼저 달립니다.", "11호선으로 들어가고 개장 직후 인기 어트랙션을 먼저 도세요. 귀경 막차를 Amap에서 확인하고, 숙소는 시내 거점을 유지하는 편이 낫습니다."], ["A full-day park far east of downtown. Don’t stack it with a Bund night.", "Take metro 11 and hit headliners at open. Check the last train in Amap; keep a city-center hotel."]),
    tianzifang: M(31.2104, 121.4668, ["리롱을 개조한 좁은 골목 상권입니다. 카페·공방·사진 스폿이 많아 비 오는 저녁 산책에 잘 맞습니다.", "9호선 다푸차오·다타이 근처입니다. 주말 한낮은 어깨를 부딪치니, 평일 해질녘이나 이른 오전이 쾌적합니다."], ["Converted lilong lanes of cafés and studios. A good rainy-evening wander.", "Near Dapuqiao/Datai on metro 9. Weekend noon is packed; weekday dusk or early morning is easier."]),
    xintiandi: M(31.2194, 121.4741, ["스쿠먼을 살린 레스토랑·바 거리입니다. 저녁 식사 거점으로 쓰기 좋고, 예원과도 환승으로 이어집니다.", "1·10·13호선이 가깝습니다. 관광 가격대이니 한 끼만 여기서 쓰고, 낮에는 난징로·우캉루로 분위기를 나누세요."], ["Shikumen dining and bars. A solid dinner base, with metro links toward Yu Garden.", "Lines 1/10/13 are close. Pay for one sit-down meal here, then shift to Nanjing Road or Wukang by day."]),
    "shanghai-museum": M(31.2284, 121.4754, ["인민광장 옆 대형 박물관입니다. 청동·도자·회화가 알차고, 사전 예약이 필요한 날이 많습니다.", "오전에 입장하고 가방은 작게 가져가세요. 끝난 뒤 난징로를 거쳐 외탄으로 이어가면 하루 블록이 깔끔합니다."], ["A major museum on People’s Square—bronzes, ceramics, painting. Book ahead on busy days.", "Enter in the morning with a small bag. Then walk Nanjing Road toward the Bund."]),
    "jingan-temple": M(31.2234, 121.4458, ["도심 한복판의 금빛 사찰입니다. 짧은 참배·사진 스톱으로 충분하고, 2·7호선 징안스역과 붙어 있습니다.", "우캉루와 같은 오전에 묶기 쉽습니다. 보안 검색이 있으니 큰 캐리어는 두고, 주말 한낮은 인파가 몰립니다."], ["A gold-roofed temple in the city core. A short stop, right on metro 2/7 at Jing’an Temple.", "Easy to pair with Wukang Road in the morning. Security checks mean no big luggage; weekends crowd up."]),
    "wukang-road": M(31.2078, 121.4386, ["플라타너스와 유럽풍 주택이 이어지는 산책로입니다. 카페 투어와 사진이 목적이고, 볼거리는 건물 파사드입니다.", "주말 한낮은 인파가 많습니다. 평일 오전이나 이른 저녁이 쾌적하고, 징안스와 붙여 서쪽 오전에 넣기 좋습니다."], ["A plane-tree street of European-style houses. Cafés and facades are the point.", "Weekend noon is busy. Weekday mornings or early evening pair well with Jing’an Temple."]),
    zhujiajiao: M(31.1114, 121.051, ["배와 돌다리가 있는 물골목 고진입니다. 시내에서 서쪽으로 멀어 반나절 당일치기가 기본입니다.", "오전에 출발해 다리·배 사진을 찍고 오후에 시내로 돌아오세요. 막차를 놓치기 쉬우니 Amap에서 귀경 시간을 먼저 고정하세요."], ["A canal town of boats and stone bridges, west of the city. Treat it as a half-day trip.", "Leave in the morning and return by afternoon. Lock the last train in Amap before you go."]),
  },
  北京: {
    "forbidden-city": M(39.9163, 116.3972, ["명·청 황제의 궁궐입니다. 중축선(오문–태화전–건청궁)만 따라가도 핵심을 볼 수 있고, 예약이 필수인 날이 많습니다.", "오전이 덜 붐빕니다. 천안문과 같은 날로 묶고, 출구 동선은 Amap에 미리 저장하세요. 큰 가방은 검색대에서 시간이 갑니다."], ["The Ming–Qing imperial palace. Walking the central axis covers the essentials; timed tickets are often required.", "Mornings are quieter. Pair with Tiananmen, save exits in Amap, and skip large bags at security."]),
    tiananmen: M(39.9054, 116.3976, ["광장과 천안문 성루 일대입니다. 국기 게양·사진이 목적이고, 신분 확인과 검색대가 있습니다.", "오전 방문이 대기열에 유리합니다. 자금성과 붙여 하루를 짜고, 물·보조배터리는 검색 규정을 확인하세요."], ["The square and gate tower. Flag-raising and photos are the draw; expect ID and security checks.", "Morning lines are shorter. Same day as the Forbidden City; check rules for water and power banks."]),
    "great-wall": M(40.3594, 116.02, ["팔달령 구간은 당일치기 장성으로 가장 흔합니다. 시내에서 이동만 반나절이라 이른 출발이 필수입니다.", "지하철 끝역과 버스·셔틀을 전날 Amap에 묶어 두세요. 시내 저녁은 가볍게 잡고, 다른 명소와 같은 날에 섞지 마세요."], ["Badaling is the usual day-trip Wall. Transit alone eats a half-day, so leave early.", "Save the last metro plus bus in Amap the night before. Keep the evening light and don’t stack other sights."]),
    "summer-palace": M(39.999, 116.2755, ["쿤밍호와 긴 복랑이 있는 황실 정원입니다. 유람선까지 타면 반나절이 기본입니다.", "원명원과 묶어 서북 전용 하루로 잡으세요. 지하철 4호선 북궁문 쪽이 접근이 쉽고, 한낮 더위에는 호숫가를 우선하세요."], ["An imperial garden of Kunming Lake and long corridors. A boat ride makes it a true half-day.", "Pair with Yuanmingyuan as a northwest day. Beigongmen on metro 4 is handy; stick to the shore in heat."]),
    "temple-of-heaven": M(39.8822, 116.4066, ["황제가 제를 지내던 넓은 공원입니다. 기년전 사진이 상징이고, 아침에는 현지인 운동 풍경이 볼거리입니다.", "남문에서 기년전으로 짧은 코스가 효율적입니다. 자금성 다음 날 여유로 넣거나, 오전에만 들르고 후통으로 이동하세요."], ["A ceremonial park; the Hall of Prayer is the icon, plus morning exercise scenes.", "South gate to the hall is the efficient loop. Use it as a light morning after the palace, then hutongs."]),
    yuanmingyuan: M(40.0077, 116.2978, ["원명원 유적 정원입니다. 건물보다 호수·돌과 산책이 핵심이라 오전이면 충분합니다.", "이화원과 같은 서북 블록으로 묶으세요. 입장권·구역이 나뉘어 있으니 보고 싶은 문을 Amap에 찍어 두세요."], ["The Old Summer Palace ruins. Lakes and walks matter more than buildings; a morning is enough.", "Same northwest block as the Summer Palace. Sections use different gates—pin yours in Amap."]),
    nanluoguxiang: M(39.9375, 116.403, ["후통을 개조한 상점 거리입니다. 간식·소품이 많고, 골목 안쪽이 남뤄구샹 본대보다 한적합니다.", "이른 아침이나 저녁이 덜 붐빕니다. 도보로 스차하이와 이어 저녁 루프를 만들면 이동이 아깝지 않습니다."], ["A rebuilt hutong shopping lane. Snacks and souvenirs; side alleys beat the main strip.", "Early morning or evening is quieter. Walk on to Shichahai for a full evening loop."]),
    "bird-nest": M(39.9929, 116.3969, ["2008 올림픽 국립경기장입니다. 내부보다 외관·야경 사진이 목적인 경우가 많습니다.", "올림픽공원 지하철로 접근하기 쉽습니다. 수륙(워터큐브)과 짧게 돌고, 낮에 외관만 봐도 충분하면 입장권은 생략하세요."], ["The 2008 Olympic stadium. Exterior and night shots often beat going inside.", "Easy metro to Olympic Park. Loop the Water Cube; skip tickets if the facade is enough."]),
    beihai: M(39.9254, 116.3892, ["자금성 서쪽의 도심 호수 공원입니다. 백탑과 유람선, 호수 일주가 핵심입니다.", "궁궐 다음 날 여유 코스로 적합합니다. 입장 문이 여러 곳이라 나올 역을 Amap에 맞춰 고르세요."], ["A city lake west of the Forbidden City. The white dagoba and a boat loop are the point.", "A gentle day after the palace. Multiple gates—pick the metro exit in Amap."]),
    yonghegong: M(39.9474, 116.417, ["티베트 불교 사원입니다. 향과 불상, 오전 예불 분위기가 좋고 2·5호선이 가깝습니다.", "후통 일정과 이어가기 쉽습니다. 보안 검색이 있으니 가방은 작게, 주말 오전은 줄이 깁니다."], ["A Tibetan Buddhist temple. Incense and morning mood; metro 2/5 are close.", "Easy to pair with hutongs. Small bags for security; weekend mornings queue."]),
    shichahai: M(39.94, 116.389, ["후하이·첸하이 호수와 바, 인력거가 모인 야경 구역입니다. 해질녘 산책이 가장 예쁩니다.", "난뤄구샹과 같은 저녁 루프로 묶으세요. 주말 밤은 혼잡하고, 호숫가 식사는 한 블록 안쪽이 덜 비쌉니다."], ["Houhai lakes, bars, and rickshaws. Dusk walks are the prettiest.", "Same evening loop as Nanluoguxiang. Weekend nights jam; eat one block off the water."]),
    "798": M(39.9842, 116.4955, ["공장 지대를 개조한 갤러리·카페 단지입니다. 현대미술과 거리 사진이 목적이고 도보 구역이 넓습니다.", "비 오는 날·반나절을 배정하세요. 편한 신발을 신고, 귀경 버스·지하철을 Amap에 미리 넣어두세요."], ["A factory-turned gallery and café district. Contemporary art and street photos; lots of walking.", "Give it a rainy half-day. Wear easy shoes and save the metro/bus home in Amap."]),
  },
  广州: {
    "canton-tower": M(23.1064, 113.3245, ["주강 가의 전망 타워입니다. 해질녘 입장하면 강과 시내 조명이 한 번에 보입니다.", "지하철 3호선 광저우타역이 가깝습니다. 흐린 날은 전망보다 야경 크루즈를 우선하고, 티켓 시간대를 미리 고르세요."], ["A Pearl River observation tower. Dusk tickets catch the city lights in one view.", "Near Canton Tower station on metro 3. On haze days, prefer a night cruise and book a timed slot."]),
    "pearl-river": M(23.1088, 113.319, ["주강을 따라가는 야경 유람선입니다. 타워·하이신샤를 강에서 보는 것이 핵심입니다.", "타워 인근 선착장에서 저녁 슬롯을 고르세요. 선착장이 여러 곳이라 Amap에 정확한 부두를 찍고, 바람막이를 챙기세요."], ["A night cruise along the Pearl River—the tower and skyline from the water.", "Pick an evening slot near the tower piers. Pin the exact dock in Amap and bring a wind layer."]),
    "chen-clan": M(23.1264, 113.2466, ["광동 서원의 목조·도자 장식이 유명한 사당입니다. 실내 전시라 더운 오전에 적합합니다.", "리완·사몐과 묶어 걷기 좋습니다. 오전이 한적하고, 사진 삼각대는 제한될 수 있습니다."], ["A Lingnan ancestral hall known for wood and ceramic work. Indoor, good on hot mornings.", "Walk with Liwan and Shamian. Quieter before noon; tripods may be limited."]),
    shameen: M(23.1069, 113.2436, ["강 위의 작은 섬 거리입니다. 그늘진 가로수와 카페, 식민지 시대 건물이 산책 코스입니다.", "성심대성당·융칭팡과 가깝습니다. 한낮 더위에는 짧게 돌고, 저녁 강바람이 더 쾌적합니다."], ["A small island of shade trees, cafés, and concession-era buildings.", "Near the cathedral and Yongqingfang. Keep midday short; evenings are cooler by the river."]),
    baiyun: M(23.1866, 113.295, ["시내 북쪽의 산입니다. 정상 전망과 산책로가 목적이고, 여름에는 습하고 덥습니다.", "케이블카 또는 이른 아침 등반이 덜 힘듭니다. 물·모기약을 챙기고, 시내 야경과 같은 날에 무리하지 마세요."], ["A mountain on the north side of town. Views and trails; summers are hot and humid.", "Take the cable car or start at dawn. Pack water and repellent; don’t stack a long downtown night."]),
    chimelong: M(22.9986, 113.3268, ["사파리·서커스·리조트가 모인 하루짜리 권역입니다. 시내에서 남쪽으로 떨어져 있습니다.", "시내 야경과 같은 날에 섞지 마세요. 공식 셔틀·지하철 막차를 Amap에서 확인하고, 숙소는 창룽 또는 시내 중 하나만 고르세요."], ["Safari, circus, and resort—plan a full day south of downtown.", "Don’t mix with a city night. Check shuttles and last trains in Amap; stay either at Chimelong or downtown."]),
    "beijing-road": M(23.1252, 113.2698, ["유리 바닥 유적과 상점가 보행거리입니다. 낮 간식·쇼핑 후 웨슈공원으로 이어갈 수 있습니다.", "지하철 1·2호선 근처입니다. 주말 저녁은 인파가 많고, 성당과 붙여 구시가 반나절로 쓰기 좋습니다."], ["A pedestrian street with glass-floor ruins. Snacks and shops, then Yuexiu Park.", "Near metro 1/2. Weekend evenings pack in; pair with the cathedral for an old-town half-day."]),
    yongqingfang: M(23.1156, 113.2395, ["리완의 개조 골목입니다. 짧은 사진·카페 스톱으로 사몐과 가깝습니다.", "야시장 분위기는 저녁이 낫습니다. 너무 오래 머물 필요는 없고, 천자츠와 같은 서쪽에 묶으세요."], ["Renovated Liwan lanes. A short café and photo stop next to Shamian.", "Better in the evening. Don’t overstay; keep it on a west-side block with Chen Clan."]),
    yuexiu: M(23.1395, 113.266, ["오양석상이 있는 시내 공원입니다. 아침 운동과 전루(오층루) 전망이 볼거리입니다.", "더위 전에 오르세요. 베이징로에서 이어지는 오전 코스로 좋고, 그늘과 물을 챙기세요."], ["City park with the Five Rams statue. Morning exercise and the five-story tower views.", "Climb before the heat. A good morning after Beijing Road; bring shade and water."]),
    "sacred-heart": M(23.1172, 113.2548, ["석재 고딕 성당입니다. 외관 사진이 핵심이고, 미사 시간에는 내부 관람이 제한됩니다.", "베이징로·사몐과 이어가기 쉽습니다. 정면 광장에서 찍고, 그늘이 적은 한낮은 짧게 스톱하세요."], ["A stone Gothic cathedral. The facade is the shot; interiors close around services.", "Easy with Beijing Road and Shamian. Photograph the square and keep a hot midday stop short."]),
  },
  深圳: {
    "window-world": M(22.5378, 113.9746, ["세계 명소를 축소해 둔 테마파크입니다. 사진 스폿이 많고 반나절이면 충분합니다.", "해피밸리와 같은 화차오청 권역입니다. 더운 날에는 그늘 동선을 짜고, 시내 저녁과 무리하게 잇지 마세요."], ["A miniature-world park with lots of photo sets. A half-day is enough.", "Same OCT cluster as Happy Valley. Plan shade in heat and don’t force a long downtown night after."]),
    "happy-valley": M(22.5426, 113.982, ["롤러코스터 중심의 놀이공원입니다. 주말 오전이 대기 줄이 짧습니다.", "윈도우 오브 더 월드와 하루를 나누지 말고, 하나를 깊게 노세요. 물·자외선 차단을 챙기세요."], ["A coaster park. Weekend mornings have shorter queues.", "Don’t split the day with Window of the World—pick one. Pack water and sunscreen."]),
    dameisha: M(22.5955, 114.3108, ["동부 해변입니다. 수영·산책용이며 푸톈 시내에서 이동이 깁니다.", "주말 오후는  ent잡합니다. 빈 자리를 보려면 평일 오전, 짐은 적게, 귀경 버스 시간을 Amap에 넣으세요."], ["An east-side beach for swimming and walks. Transit from Futian is long.", "Weekend afternoons jam. Go weekday morning, pack light, and save the bus home in Amap."]),
    lianhuashan: M(22.5536, 114.0595, ["덩샤오핑 동상이 있는 도심 공원입니다. 일몰 전망과 산책이 목적입니다.", "시민중심 지하철에서 오르기 쉽습니다. 한낮보다 해질녘이 시원하고, 핑안 타워 야경과 같은 저녁에 묶기 좋습니다."], ["Downtown park with the Deng statue. Sunset views and an easy walk.", "Climb from Civic Center metro. Dusk is cooler; pair with Ping An lights the same evening."]),
    "shenzhen-bay": M(22.5194, 113.9755, ["만 공원 자전거·산책로입니다. 해질녘 홍콩 스카이라인이 보입니다.", "렌탈 자전거 또는 도보로 충분합니다. 바람막이를 챙기고, 화차오청 일정 뒤에 가볍게 넣기 좋습니다."], ["Bay-park cycling and walking. Dusk brings a Hong Kong skyline view.", "Rent a bike or walk. Bring a wind layer; it sits well after an OCT afternoon."]),
    "zhongying-street": M(22.5518, 114.2285, ["선전·홍콩 경계의 쇼핑 골목입니다. 간식·잡화가 많고 신분증 확인이 있을 수 있습니다.", "주말은 매우 붐빕니다. 오전에 짧게 보고, 다메이사와 같은 동부 하루에 넣지 말고 이동 여유를 두세요."], ["A border shopping lane. Snacks and goods; carry ID.", "Weekends are packed. Keep it a short morning and don’t stack Dameisha without extra transit time."]),
    "oct-east": M(22.626, 114.416, ["동부 산·해변 리조트입니다. 테마파크와 호텔이 섞여 하루 일정이 기본입니다.", "시내와 섞지 마세요. 공식 셔틀을 Amap에 저장하고, 숙박 없이 당일치기면 막차를 먼저 확인하세요."], ["An east hills-and-beach resort. Parks and hotels—plan a full day.", "Don’t mix with downtown. Save the shuttle in Amap and lock the last train if you are not staying over."]),
    jiaochangwei: M(22.595, 114.46, ["다펑 반도의 해변 게스트하우스 거리입니다. 주말 밤 바와 해변이 목적입니다.", "시내에서 멀어 하루 또는 1박이 편합니다. 주중 낮이 한적하고, 짐은 숙소에 두고 모래사장을 걸으세요."], ["A Dapeng beach guesthouse strip. Weekend nights are for bars and the sand.", "Far from downtown—day trip or one night. Weekdays are quieter; leave bags at the inn."]),
    huaqiangbei: M(22.5456, 114.0858, ["전자 도매·가젯 상가입니다. 관광 산책로가 아니라 쇼핑·구경용입니다.", "미로 같아서 목적 상점을 Amap에 찍어 두세요. 카드보다 모바일 결제가 편하고, 짝퉁·A/S는 스스로 판단하세요."], ["An electronics wholesale maze. Shopping and gadgets, not a scenic stroll.", "Pin the shop in Amap. Mobile pay beats cards; judge fakes and warranties yourself."]),
    "ping-an": M(22.5335, 114.0556, ["초고층 전망대입니다. 맑은 날에만 홍콩·선전만이 보입니다.", "흐리면 티켓을 미루세요. 시민중심·롄화산과 붙여 해질녘에 올라가면 야경이 이어집니다."], ["A supertall deck. Hong Kong and the bay only show on clear days.", "Skip haze. Pair with Civic Center and Lianhuashan and go up at dusk."]),
  },
  成都: {
    kuanzhai: M(30.6738, 104.0546, "콴자이 골목. 저녁 간식·사진이 핵심이고 오전은 한적합니다.", "Wide-narrow alleys. Evening snacks; quieter mornings."),
    jinli: M(30.6472, 104.0488, "우후츠 옆 고가. 야시장 분위기로 사당과 같은 반나절을 묶으세요.", "Old street by Wuhou. Night-market feel; pair with the shrine."),
    "panda-base": M(30.7386, 104.1419, "오전 먹이 시간이 판다를 보기 쉽습니다. 반나절을 배정하세요.", "Morning feeding is the best panda window. Half-day."),
    chunxi: M(30.6558, 104.0815, "번화가·타이구이 쇼핑. 비 오는 날 실내 일정으로 적합합니다.", "Shopping spine by Taikoo Li. Good rainy-day indoor plan."),
    wuhou: M(30.6464, 104.048, "삼국 사당. 진리와 붙여 오전에 짧게 보기 좋습니다.", "Three Kingdoms shrine. Short morning with Jinli."),
    dufu: M(30.6605, 104.0288, "시인 기념 정원. 한적한 산책, 인민공원과 서쪽으로 이어집니다.", "Poet’s garden. Quiet walk; west toward People’s Park."),
    dujiangyan: M(31.0089, 103.6096, "관개 유적 당일치기. 청청산과 묶어 하루로 나가세요.", "Irrigation works day trip. Pair with Qingcheng."),
    qingcheng: M(30.9006, 103.5647, "도교 명산. 도강언과 같은 교외 하루가 기본입니다.", "Daoist mountain. Same outbound day as Dujiangyan."),
    "taikoo-li": M(30.6548, 104.0832, "대사 옆 오픈몰. 저녁 식사·카페 거점입니다.", "Open-air mall by the big temple. Dinner and café base."),
    "people-park": M(30.6608, 104.0584, "차 하우스와 춤. 오전 현지 일상에 가장 가깝습니다.", "Tea houses and dancing. Closest to local morning life."),
  },
  杭州: {
    "west-lake": M(30.2487, 120.1486, "시후 순환. 자전거 또는 북선 산책이 기본 코스입니다.", "West Lake loop. Bike or walk the north shore first."),
    lingyin: M(30.2428, 120.1012, "석굴·사찰. 오전이 덜 붐비고 룽징 쪽과 서쪽으로 이어집니다.", "Grottoes and temple. Morning crowds; west toward Longjing."),
    xixi: M(30.2746, 120.0635, "습지 보트. 반나절, 모기·그늘을 준비하세요.", "Wetland boats. Half-day; pack shade and repellent."),
    songcheng: M(30.1975, 120.113, "야간 공연 테마파크. 공연 시간을 먼저 맞추세요.", "Night-show park. Lock the performance time first."),
    hefang: M(30.2422, 120.1715, "허팡제 간식 거리. 청허팡과 거의 한 구역입니다.", "Snack street. Same cluster as Qinghefang."),
    leifeng: M(30.2313, 120.1489, "호수 남쪽 탑. 일몰 전망과 단교를 나눠 찍기 좋습니다.", "South-lake pagoda. Split sunset shots with Broken Bridge."),
    "broken-bridge": M(30.2594, 120.1518, "시후 북단 다리. 아침 안개 사진이 상징적입니다.", "North-lake bridge. Classic misty morning photos."),
    longjing: M(30.2206, 120.1035, "차밭 마을. 오후에 찻집, 링인스와 같은 서쪽 블록.", "Tea village. Afternoon tasting; west block with Lingyin."),
    qiandao: M(29.605, 119.028, "시내에서 먼 호수. 하루를 통째로 쓰거나 숙박하세요.", "Far lake from the city. Full day or overnight."),
    qinghefang: M(30.2415, 120.1705, "청허팡 역사 거리. 허팡제와 붙여 저녁 간식 루프.", "Historic street. Evening snack loop with Hefang."),
  },
  重庆: {
    hongyadong: M(29.5626, 106.5788, "절벽 야경 상점가. 해 진 뒤 강 건너 사진이 핵심입니다.", "Cliffside night market. Best shot is from across the river after dark."),
    jiefangbei: M(29.557, 106.577, "번화가 기념비. 쇼핑·식사 거점으로 홍야둥과 가깝습니다.", "Downtown monument. Shopping base, walk to Hongyadong."),
    ciqikou: M(29.5816, 106.4478, "자기 고진. 반나절, 오전이 덜 붐빕니다.", "Porcelain old town. Half-day, quieter in the morning."),
    cableway: M(29.5588, 106.5865, "창장 케이블카. 낮 전망·사진용이며 대기 줄을 보세요.", "Yangtze cableway. Day views; watch the queue."),
    liziba: M(29.5508, 106.5318, "건물 통과 경궤. 열차 시간에 맞춰 짧은 인증 스톱.", "Train-through-building stop. Time it to a passing train."),
    chaotianmen: M(29.5688, 106.5868, "두 강이 만나는 광장. 저녁 강풍이 셉니다.", "Confluence plaza. Windy at night."),
    nanshan: M(29.55, 106.62, "난산 야경 전망. 시내 조명을 한눈에 보려면 해질녘에 올라가세요.", "South-bank night view. Go at dusk for the whole city."),
    wulong: M(29.433, 107.9, "카르스트 다리. 당일치기 교외, 시내와 섞지 마세요.", "Karst bridges. Outbound day—don’t mix with downtown."),
    dazu: M(29.701, 105.711, "석각 당일치기. 이동이 길어 하루를 배정하세요.", "Rock carvings day trip. Long transfer; give it a full day."),
    egean: M(29.5622, 106.5512, "삼협 박물관. 비 오는 오전, 제팡베이와 가깝습니다.", "Three Gorges Museum. Rainy morning near Jiefangbei."),
  },
  西安: {
    terracotta: M(34.3853, 109.2788, "병마용. 하루의 절반, 이른 입장권이 대기 줄에 유리합니다.", "Warriors. Half-day; early tickets beat queues."),
    "dayan-pagoda": M(34.2196, 108.9642, "대야탑과 북광장. 저녁 분수가 있으면 야간 일정을 맞추세요.", "Giant Wild Goose Pagoda. Time evening fountain shows."),
    "city-wall": M(34.258, 108.947, "자전거 성벽. 남문 출발이 흔하고 한낮 더위를 피하세요.", "Bike the wall. South gate start; avoid midday heat."),
    "muslim-quarter": M(34.2618, 108.9428, "회민가 간식. 저녁이 핵심이며 종루와 붙여 걷습니다.", "Snack streets. Evening peak; walk from the Bell Tower."),
    "bell-tower": M(34.261, 108.9425, "시내 중심 종루. 야경 사진·회민가 입구입니다.", "City-center tower. Night photos and Muslim Quarter entry."),
    huaqing: M(34.3625, 109.2136, "온천 궁. 병마용과 같은 동부 하루로 묶기 쉽습니다.", "Hot-spring palace. Same east day as the warriors."),
    "tang-night": M(34.2185, 108.9648, "대당불야성. 야간 보행 거리, 대야탑과 한 블록입니다.", "Tang night mall. Pedestrian nights by the pagoda."),
    "history-museum": M(34.2255, 108.952, "섬서 역사박물관. 예약 필수, 오전이 한적합니다.", "Shaanxi History Museum. Reserve; quieter mornings."),
    xiaoyan: M(34.2394, 108.9395, "소야탑. 짧은 스톱, 박물관과 가깝습니다.", "Small pagoda. Short stop near the museum."),
    daming: M(34.2955, 108.9595, "대명궁 유적. 넓은 터라 그늘·물을 챙기세요.", "Daming Palace ruins. Wide site—bring shade and water."),
  },
  南京: {
    "fuzi-miao": M(32.0216, 118.7885, "夫子庙 야시장. 친화이허 유람과 저녁을 묶으세요.", "Confucius Temple night market. Pair with a Qinhuai boat."),
    "sun-yat-sen": M(32.0622, 118.848, "중산릉. 계단이 길어 오전에 오르고 명효릉과 같은 산 블록.", "Mausoleum stairs. Morning climb; same hill as Ming Xiaoling."),
    presidential: M(32.0448, 118.7985, "총통부. 실내 전시라 비 오는 날에 적합합니다.", "Presidential Palace. Indoor exhibits—good in rain."),
    xuanwu: M(32.0765, 118.796, "쉬안우호 순환. 자전거·유람선, 성벽과 북쪽으로 이어집니다.", "Xuanwu Lake loop. Bike or boat; north toward the wall."),
    museum: M(32.0418, 118.8472, "난징 박물관. 예약 후 오전, 중산릉 가는 길에 넣기 쉽습니다.", "Nanjing Museum. Morning booking; on the way to the mausoleum."),
    laomendong: M(32.0168, 118.7948, "라오먼둥 골목. 푸쯔먀오보다 한적한 저녁 식사 거리.", "Old-gate lanes. Quieter dinner than Fuzi Miao."),
    "ming-xiaoling": M(32.0548, 118.837, "명효릉 신도. 중산릉과 같은 쯔진산 하루로 묶으세요.", "Sacred way. Same Purple Mountain day as Sun Yat-sen."),
    jiming: M(32.0605, 118.7948, "지밍스와 성벽. 벚꽃 철이면 오전 일찍.", "Temple and wall. Cherry season: go extra early."),
    "city-wall": M(32.0588, 118.792, "난징 성벽 일부. 지밍스·호수와 붙여 걷기 좋습니다.", "Wall section. Walk with Jiming Temple and the lake."),
    qinhuai: M(32.021, 118.7915, "친화이허 야경. 유람선은 해 진 뒤 슬롯이 핵심입니다.", "Qinhuai night river. Boat slots after dark."),
  },
  武汉: {
    "yellow-crane": M(30.5455, 114.2985, "황학루. 강과 대교가 한눈에, 오전이 대기 줄이 짧습니다.", "Yellow Crane Tower. River-and-bridge views; shorter morning lines."),
    "east-lake": M(30.555, 114.388, "둥후 녹지. 자전거 반나절, 여름엔 그늘을 찾으세요.", "East Lake greenway. Half-day bike; seek shade in summer."),
    "hubu-alley": M(30.5518, 114.2955, "후부샹 분식. 점심 전에 가고 황학루와 가깝습니다.", "Snack alley. Go before lunch; next to the tower."),
    "wuhan-uni": M(30.5386, 114.3615, "캠퍼스 벚꽃·건축. 개화 철 주말은 출입을 확인하세요.", "Campus blossoms and architecture. Check access on bloom weekends."),
    "yangtze-bridge": M(30.5488, 114.2895, "창장대교 전망. 황학루 사진 포인트와 이어집니다.", "Yangtze bridge views. Same photo set as the tower."),
    guiyuan: M(30.5512, 114.2568, "구이위안스. 짧은 참배, 한양 쪽 오전 스톱.", "Temple stop. Short Hanyang morning visit."),
    chuhe: M(30.5568, 114.3485, "추허한제 쇼핑 거리. 저녁 산책·식사 거점.", "Chuhe Hanjie. Evening walk and dinner."),
    qingchuan: M(30.5575, 114.2865, "칭촨거. 황학루를 강 건너 바라보는 각도입니다.", "Pavilion facing Yellow Crane Tower across the river."),
    lihuangpi: M(30.5845, 114.298, "리황피루 역사 거리. 한커우 강변과 붙여 걷기 좋습니다.", "Historic street. Walk on to the Hankou bund."),
    "hankou-bund": M(30.5848, 114.3045, "한커우 강변 야경. 해질녘부터 조명이 살아납니다.", "Hankou riverfront. Lights from dusk."),
  },
  苏州: {
    humble: M(31.3258, 120.6288, "졸정원. 오전이 한적하고 박물관·핑장루와 한 권역입니다.", "Humble Administrator’s Garden. Morning; museum and Pingjiang nearby."),
    hanshan: M(31.3122, 120.5648, "한산사. 짧은 참배, 산탕제와 서쪽으로 이어집니다.", "Hanshan Temple. Short stop; west toward Shantang."),
    huqiu: M(31.3378, 120.5765, "호구 사탑. 반나절 산책, 기울어진 탑이 상징입니다.", "Tiger Hill. Half-day walk; leaning pagoda is the icon."),
    pingjiang: M(31.3178, 120.6325, "핑장루 수향 골목. 저녁 산책이 가장 예쁩니다.", "Pingjiang canal lane. Prettiest in the evening."),
    zhouzhuang: M(31.1175, 120.856, "저우좡 고진. 당일치기, 오전에 출발하세요.", "Zhouzhuang water town. Day trip, morning start."),
    lingering: M(31.3165, 120.5985, "유원. 졸정원과 정원 취향이 겹치면 하나만 깊게 보세요.", "Lingering Garden. Pick one garden if time is tight."),
    jinji: M(31.3188, 120.705, "진지호 신도시 호수. 야경·자전거, 고성에서 동쪽으로 떨어져 있습니다.", "Jinji Lake new town. Night lights; east of the old city."),
    shantang: M(31.3172, 120.5755, "산탕제. 한산사 후 저녁 등불 거리가 핵심입니다.", "Shantang Street. Lanterns after Hanshan Temple."),
    tongli: M(31.1595, 120.7155, "퉁리 고진. 저우좡보다 한적한 대안 당일치기.", "Tongli. Quieter water-town alternative to Zhouzhuang."),
    museum: M(31.3228, 120.628, "쑤저우 박물관. 졸정원 옆, 예약 후 오전.", "Suzhou Museum. Next to the Humble Garden; book morning."),
  },
  天津: {
    eye: M(39.1538, 117.1765, "톈진의 눈 대관람차. 하이허 야경과 함께 저녁에 타세요.", "Tianjin Eye ferris wheel. Ride at night with Haihe lights."),
    "ancient-culture": M(39.1465, 117.1858, "고문화가. 간식·기념품, 구루와 붙어 있습니다.", "Culture street snacks. Next to the Drum Tower."),
    "five-avenues": M(39.1155, 117.2, "우다다오 풍정 건축. 오전 도보가 쾌적합니다.", "Five Avenues villas. Pleasant morning walk."),
    "italian-style": M(39.1368, 117.2048, "이태리 풍정구. 카페·사진, 하이허 북쪽에 있습니다.", "Italian concession streets. Cafés north of the Haihe."),
    "porcelain-house": M(39.1188, 117.1975, "쯔팡쯔. 짧은 관람, 우다다오와 같은 블록.", "Porcelain House. Short visit on the Five Avenues block."),
    haihe: M(39.136, 117.195, "하이허 강변. 야경 산책이 톈진의 기본 코스입니다.", "Haihe riverwalk. The city’s default night stroll."),
    panshan: M(40.092, 117.28, "판산. 시외 반나절 산행, 평일과 주말 교통을 확인하세요.", "Mount Panshan. Half-day hike; check weekend transport."),
    museum: M(39.0865, 117.2145, "톈진 박물관. 비 오는 날 실내, 문화중심에 있습니다.", "Tianjin Museum. Indoor rainy-day stop in the cultural center."),
    binjiangdao: M(39.1255, 117.2055, "빈장다오 쇼핑. 우다다오에서 이어지는 번화가입니다.", "Binjiang shopping. Continues from the Five Avenues."),
    "drum-tower": M(39.1468, 117.1848, "구루. 고문화가 입구의 짧은 랜드마크.", "Drum Tower. Short landmark at Culture Street."),
  },
  青岛: {
    zhanqiao: M(36.06, 120.3225, "잔차오 방파제. 아침 바다가 한적하고 성당 쪽으로 이어집니다.", "Zhanqiao pier. Quiet morning sea; walk toward the cathedral."),
    badaguan: M(36.0538, 120.3555, "바다관 풍정 가로. 플라타너스 산책, 한낮 관광버스는 피하세요.", "Badaguan villas. Plane-tree walk; skip midday tour buses."),
    "may-fourth": M(36.0618, 120.3895, "오사광장과 조각. 해질녘 조명이 사진에 잘 나옵니다.", "May Fourth Square. Lights photograph well at dusk."),
    laoshan: M(36.17, 120.62, "라오산. 당일치기 산·해안, 시내와 하루를 나누세요.", "Mount Lao. Split a full day from downtown."),
    "beer-museum": M(36.0885, 120.3535, "맥주박물관. 시음·공장 투어, 오후 슬롯이 여유롭습니다.", "Beer museum tasting. Afternoon slots feel less rushed."),
    "golden-beach": M(35.968, 120.292, "금사탄. 황도 쪽 해변, 이동 시간을 넣으세요.", "Golden Beach on Huangdao. Add transit time."),
    "signal-hill": M(36.0665, 120.3305, "신호산 전망. 짧은 오르막, 잔차오 야경과 이어집니다.", "Signal Hill lookout. Short climb; Bund-style night with Zhanqiao."),
    cathedral: M(36.0678, 120.3288, "성 미카엘 성당. 외관 사진 후 잔차오와 가깝습니다.", "St. Michael’s. Facade photos, then the pier."),
    aquarium: M(36.0555, 120.3365, "해저세계. 비·아이 동반 날에 적합합니다.", "Underwater World. Good for rain or kids."),
    pichaiyuan: M(36.0688, 120.3275, "피차이위안 간식 골목. 저녁 해산물·분식.", "Pichaiyuan snacks. Evening seafood and small eats."),
  },
  厦门: {
    gulangyu: M(24.4475, 118.0668, "구랑위. 배편·도보 전용, 하루를 통째로 쓰세요.", "Gulangyu. Ferry and walking only—give it a full day."),
    zhongshan: M(24.4578, 118.0825, "중산로 보행거리. 부두·야식으로 섬 일정 전후에 넣기 좋습니다.", "Zhongshan Road. Snacks before/after the island ferry."),
    nanputuo: M(24.4418, 118.0928, "남보타사. 샤먼대와 붙어 오전 참배·캠퍼스 산책.", "Nanputuo Temple. Morning with Xiamen University next door."),
    zengcuoan: M(24.4325, 118.1455, "쩡춰안 해안 카페. 해질녘이 예쁘고 주말은 붐빕니다.", "Coastal cafés. Dusk is pretty; weekends crowd up."),
    "xiamen-uni": M(24.4378, 118.0978, "샤먼대학. 남보타사와 같은 블록, 개학기 출입을 확인하세요.", "Xiamen University. Same block as Nanputuo; check term-time access."),
    huandao: M(24.432, 118.16, "환다오루 해안도로. 자전거·버스, 후리산까지 이어집니다.", "Island-ring road. Bike or bus toward Hulishan."),
    hulishan: M(24.4315, 118.141, "후리산 포대. 짧은 군사 유적, 환다오루 중간에 있습니다.", "Hulishan fortress. Short stop on Huandao Road."),
    botanical: M(24.4555, 118.1025, "식물원. 그늘 산책, 더운 오후에 적합합니다.", "Botanical garden. Shade walk for hot afternoons."),
    jimei: M(24.5665, 118.0975, "지메이 학촌. 반나절 교외, 도보 다리 사진이 상징입니다.", "Jimei school village. Half-day; the walking bridge is the shot."),
    shapowei: M(24.4395, 118.0895, "사포웨이 옛 항구. 카페·저녁, 대학가와 가깝습니다.", "Old harbour cafés. Evening near the university."),
  },
  昆明: {
    "stone-forest": M(24.818, 103.324, "스린 카르스트. 당일치기, 이른 버스를 타세요.", "Stone Forest karst. Day trip; take an early bus."),
    dianchi: M(24.85, 102.68, "뎬츠 호숫가. 시산·민족촌과 남서쪽 하루로 묶습니다.", "Dianchi lakeshore. Southwest day with Xishan and Ethnic Village."),
    cuihu: M(25.0495, 102.7025, "취이후 공원. 도심 아침 산책, 갈대·갈매기가 볼거리입니다.", "Green Lake Park. Downtown morning; gulls in season."),
    xishan: M(24.96, 102.63, "시산 용문. 계단이 길어 오전 등반 또는 차.", "Western Hills Dragon Gate. Long stairs—morning climb or a ride."),
    "ethnic-village": M(24.9665, 102.6605, "윈난 민족촌. 공연 시간을 보고 반나절을 배정하세요.", "Ethnic Village. Check show times; half-day."),
    jinma: M(25.0328, 102.7178, "금마벽계방. 짧은 랜드마크, 근처 식사와 붙입니다.", "Golden Horse arch. Short landmark plus nearby food."),
    daguan: M(24.9695, 102.6668, "다관루. 호수 누각, 민족촌과 가깝습니다.", "Daguan Pavilion. Lakeside, near Ethnic Village."),
    "flower-city": M(24.9027, 102.7881, "더우난 꽃시장. 새벽·오전이 가장 활기차습니다.", "Dounan flower market. Dawn and morning are liveliest."),
    jiuxiang: M(24.98, 103.38, "주샹 동굴. 스린과 같은 방향으로 당일치기 선택이 됩니다.", "Jiuxiang caves. Optional same-direction day as Stone Forest."),
    yuantong: M(25.0555, 102.7125, "위안퉁스. 도심 사찰, 취이후와 붙여 오전 블록.", "Yuantong Temple. Downtown morning with Green Lake."),
  },
  大连: {
    xinghai: M(38.8825, 121.5865, "싱하이 광장. 바다·조형, 저녁 산책이 기본입니다.", "Xinghai Square. Sea and sculptures; default evening walk."),
    "tiger-beach": M(38.8855, 121.68, "라오후탄 해양공원. 반나절, 빈하이로와 이어집니다.", "Tiger Beach park. Half-day on the Binhai Road strip."),
    jinshitan: M(39.08, 122.0, "진스탄. 교외 해안, 하루를 배정하세요.", "Golden Pebble Beach. Outbound coast—full day."),
    "russian-street": M(38.9215, 121.6125, "러시아 풍정가. 짧은 사진 거리, 중산광장과 가깝습니다.", "Russian Street. Short photo strip near Zhongshan Square."),
    bangchui: M(38.88, 121.695, "방추이섬. 해안 전망, 라오후탄에서 이어집니다.", "Bangchui Island views. Continues from Tiger Beach."),
    binhai: M(38.89, 121.65, "빈하이로 드라이브·버스. 해안 절경을 이어서 봅니다.", "Binhai Road. String of coastal viewpoints."),
    zhongshan: M(38.9218, 121.6388, "중산 광장. 원형 유럽풍 건축, 시내 거점입니다.", "Zhongshan Square. Circular European facades; downtown hub."),
    zoo: M(38.8828, 121.6132, "삼림동물원. 아이 동반·반나절.", "Forest Zoo. Kids, half-day."),
    lvshun: M(38.815, 121.26, "뤼순. 역사 당일치기, 시내와 하루를 나누세요.", "Lushun history day. Split from downtown."),
    discoveryland: M(39.09, 121.95, "발견왕국 테마파크. 진스탄 권역, 하루 일정.", "Discoveryland park. Jinshitan area, full day."),
  },
  哈尔滨: {
    "central-street": M(45.7705, 126.62, "중앙대가. 석재 보행거리, 성 소피아와 붙여 걷습니다.", "Central Street stones. Walk on to St. Sophia."),
    sophia: M(45.7698, 126.6295, "성 소피아 성당. 야경 조명이 상징, 광장 사진 스톱.", "St. Sophia. Night lights are the postcard shot."),
    "ice-world": M(45.785, 126.58, "빙설대세계. 겨울 밤 입장, 두꺼운 옷이 필수입니다.", "Ice and Snow World. Winter nights; dress very warm."),
    "sun-island": M(45.79, 126.6, "태양섬. 강 건너 공원, 여름 산책·겨울 눈 조각.", "Sun Island. Cross-river park; snow sculpture in winter."),
    "flood-monument": M(45.7778, 126.6185, "방홍기념탑. 강변 짧은 스톱, 중앙대가 북쪽.", "Flood monument. Short river stop north of Central Street."),
    volga: M(45.715, 126.953, "볼가 장원. 반나절 교외 러시아 풍경.", "Volga Manor. Half-day Russian-themed suburb."),
    laodaowai: M(45.7785, 126.645, "라오다오와이. 바르거 풍 거리, 음식·사진.", "Laodaowai. Baroque-style street for food and photos."),
    polarland: M(45.7865, 126.575, "극지관. 실내, 아이·추운 날에 적합합니다.", "Polarland. Indoor, good for kids and bitter cold."),
    zhaolin: M(45.7735, 126.6255, "자오린 공원. 겨울 얼음등, 성당에서 가깝습니다.", "Zhaolin Park. Ice lanterns in winter, near the cathedral."),
    yabuli: M(44.78, 128.45, "야부리 스키. 시내에서 멀어 숙박 또는 하루를 통째로.", "Yabuli ski. Far from town—overnight or a full day."),
  },
};

export function getSpotMeta(
  cityZh: string,
  attractionId: string
): SpotMeta | undefined {
  return SPOT_META[cityZh]?.[attractionId];
}

export function getSpotParagraphs(
  cityZh: string,
  attractionId: string,
  locale: Locale | string
): string[] {
  const meta = getSpotMeta(cityZh, attractionId);
  if (!meta) return [];
  return locale === "ko" ? meta.ko : meta.en;
}

export function getSpotBlurb(
  cityZh: string,
  attractionId: string,
  locale: Locale | string
): string {
  return getSpotParagraphs(cityZh, attractionId, locale).join(" ");
}
