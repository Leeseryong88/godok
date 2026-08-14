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
    dameisha: M(22.5955, 114.3108, ["동부 해변입니다. 수영·산책용이며 푸톈 시내에서 이동이 깁니다.", "주말 오후는 매우 붐빕니다. 빈 자리를 보려면 평일 오전, 짐은 적게, 귀경 버스 시간을 Amap에 넣으세요."], ["An east-side beach for swimming and walks. Transit from Futian is long.", "Weekend afternoons jam. Go weekday morning, pack light, and save the bus home in Amap."]),
    lianhuashan: M(22.5536, 114.0595, ["덩샤오핑 동상이 있는 도심 공원입니다. 일몰 전망과 산책이 목적입니다.", "시민중심 지하철에서 오르기 쉽습니다. 한낮보다 해질녘이 시원하고, 핑안 타워 야경과 같은 저녁에 묶기 좋습니다."], ["Downtown park with the Deng statue. Sunset views and an easy walk.", "Climb from Civic Center metro. Dusk is cooler; pair with Ping An lights the same evening."]),
    "shenzhen-bay": M(22.5194, 113.9755, ["만 공원 자전거·산책로입니다. 해질녘 홍콩 스카이라인이 보입니다.", "렌탈 자전거 또는 도보로 충분합니다. 바람막이를 챙기고, 화차오청 일정 뒤에 가볍게 넣기 좋습니다."], ["Bay-park cycling and walking. Dusk brings a Hong Kong skyline view.", "Rent a bike or walk. Bring a wind layer; it sits well after an OCT afternoon."]),
    "zhongying-street": M(22.5518, 114.2285, ["선전·홍콩 경계의 쇼핑 골목입니다. 간식·잡화가 많고 신분증 확인이 있을 수 있습니다.", "주말은 매우 붐빕니다. 오전에 짧게 보고, 다메이사와 같은 동부 하루에 넣지 말고 이동 여유를 두세요."], ["A border shopping lane. Snacks and goods; carry ID.", "Weekends are packed. Keep it a short morning and don’t stack Dameisha without extra transit time."]),
    "oct-east": M(22.626, 114.416, ["동부 산·해변 리조트입니다. 테마파크와 호텔이 섞여 하루 일정이 기본입니다.", "시내와 섞지 마세요. 공식 셔틀을 Amap에 저장하고, 숙박 없이 당일치기면 막차를 먼저 확인하세요."], ["An east hills-and-beach resort. Parks and hotels—plan a full day.", "Don’t mix with downtown. Save the shuttle in Amap and lock the last train if you are not staying over."]),
    jiaochangwei: M(22.595, 114.46, ["다펑 반도의 해변 게스트하우스 거리입니다. 주말 밤 바와 해변이 목적입니다.", "시내에서 멀어 하루 또는 1박이 편합니다. 주중 낮이 한적하고, 짐은 숙소에 두고 모래사장을 걸으세요."], ["A Dapeng beach guesthouse strip. Weekend nights are for bars and the sand.", "Far from downtown—day trip or one night. Weekdays are quieter; leave bags at the inn."]),
    huaqiangbei: M(22.5456, 114.0858, ["전자 도매·가젯 상가입니다. 관광 산책로가 아니라 쇼핑·구경용입니다.", "미로 같아서 목적 상점을 Amap에 찍어 두세요. 카드보다 모바일 결제가 편하고, 짝퉁·A/S는 스스로 판단하세요."], ["An electronics wholesale maze. Shopping and gadgets, not a scenic stroll.", "Pin the shop in Amap. Mobile pay beats cards; judge fakes and warranties yourself."]),
    "ping-an": M(22.5335, 114.0556, ["초고층 전망대입니다. 맑은 날에만 홍콩·선전만이 보입니다.", "흐리면 티켓을 미루세요. 시민중심·롄화산과 붙여 해질녘에 올라가면 야경이 이어집니다."], ["A supertall deck. Hong Kong and the bay only show on clear days.", "Skip haze. Pair with Civic Center and Lianhuashan and go up at dusk."]),
  },
  成都: {
    kuanzhai: M(30.6738, 104.0546, "저녁 간식과 사진이 핵심이고, 오전은 골목이 한적합니다. 지하철로 근처까지 온 뒤 세 골목을 천천히 돌고, 인민공원과 같은 서쪽으로 이어가세요.", "Evening snacks and photos; mornings are quieter. Arrive by metro, walk the three lanes, then continue west toward People’s Park."),
    jinli: M(30.6472, 104.0488, "우후츠와 붙어 있어 같은 반나절로 묶기 쉽습니다. 야시장 피크는 해 진 뒤이니, 사당을 먼저 보고 골목으로 나오세요.", "It sits beside Wuhou Shrine, so use the same half-day. See the shrine first, then the lanes after dark."),
    "panda-base": M(30.7386, 104.1419, "오전 먹이 시간에 판다가 가장 잘 보입니다. 시내에서 북동쪽으로 멀어 반나절을 배정하고, 막차를 Amap에 미리 넣으세요.", "Morning feeding is the best panda window. It sits northeast of downtown—give it a half-day and save the last train in Amap."),
    chunxi: M(30.6558, 104.0815, "타이구이와 붙어 비 오는 날 실내 일정으로 쓰기 좋습니다. 지하철 2호선이 가깝고, 저녁 식사는 이 축에서 해결하기 쉽습니다.", "Joined to Taikoo Li, it works as a rainy indoor plan. Metro 2 is close; dinner is easy along this spine."),
    wuhou: M(30.6464, 104.048, "진리 고가와 붙여 오전에 짧게 보기 좋습니다. 그늘이 있어 더운 날 첫 스톱으로 두고, 사당 후 골목으로 이어가세요.", "A short morning with Jinli next door. Use the shade as a first stop in heat, then walk out to the old street."),
    dufu: M(30.6605, 104.0288, "한적한 산책 코스입니다. 인민공원과 서쪽으로 이어지고, 판다 기지와 같은 날에는 체력이 겹치니 나누세요.", "A quiet garden walk west toward People’s Park. Don’t stack it with the panda base on the same tired afternoon."),
    dujiangyan: M(31.0089, 103.6096, "시외 당일치기입니다. 청청산과 묶어 하루로 나가고, 고속철·버스 시간을 전날 Amap에 고정하세요.", "An outbound day trip. Pair with Qingcheng Mountain and lock rail or bus times in Amap the night before."),
    qingcheng: M(30.9006, 103.5647, "도강언과 같은 교외 하루가 기본입니다. 앞산은 반나절, 뒷산은 더 길어 체력에 맞게 고르세요.", "Same outbound day as Dujiangyan. Front mountain is a half-day; back mountain needs more legs."),
    "taikoo-li": M(30.6548, 104.0832, "대사 옆 저녁 식사·카페 거점입니다. 춘시루와 한 블록이니 쇼핑 후 여기서 하루를 접으세요.", "Dinner and café base beside the big temple. It shares a block with Chunxi Road, so end the shopping day here."),
    "people-park": M(30.6608, 104.0584, "오전 찻집과 춤이 가장 현지답습니다. 입장료가 있는 차 하우스도 있으니, 콴자이 일정 전후에 가볍게 넣으세요.", "Morning tea houses and dancing feel the most local. Some tea seats charge; slot it before or after Kuanzhai."),
  },
  杭州: {
    "west-lake": M(30.2487, 120.1486, "자전거 또는 북선 산책이 기본 코스입니다. 한 바퀴를 욕심내지 말고, 단교·레이펑탑을 나눠 같은 호숫가에 두세요.", "Bike or walk the north shore first. Don’t force a full loop; split Broken Bridge and Leifeng along the same water."),
    lingyin: M(30.2428, 120.1012, "오전이 덜 붐빕니다. 룽징 차밭과 서쪽으로 이어지고, 시후 야경과 같은 날에 무리하지 마세요.", "Mornings are less crowded. Continue west toward Longjing, and don’t stack a long West Lake night after."),
    xixi: M(30.2746, 120.0635, "보트 동선이라 반나절이 필요합니다. 모기약과 그늘을 챙기고, 시후와 하루를 나누세요.", "Boats make this a half-day. Pack repellent and shade, and keep it separate from a full West Lake day."),
    songcheng: M(30.1975, 120.113, "야간 공연 시간을 먼저 맞추세요. 공연이 핵심이라 낮 입장만으로는 아쉽고, 귀경 교통을 Amap에 넣으세요.", "Lock the night-show time first. Day tickets miss the point; save the ride home in Amap."),
    hefang: M(30.2422, 120.1715, "청허팡과 거의 한 구역입니다. 저녁 간식 루프로 묶고, 호수 일정 뒤에 가볍게 넣으세요.", "Same cluster as Qinghefang. Use it as an evening snack loop after the lake."),
    leifeng: M(30.2313, 120.1489, "호수 남쪽 일몰 전망이 좋습니다. 단교와 나눠 찍고, 탑 내부 줄이 길면 바깥 전망만으로도 충분합니다.", "Best at sunset on the south shore. Split shots with Broken Bridge; skip the tower climb if the queue is long."),
    "broken-bridge": M(30.2594, 120.1518, "아침 안개 사진이 상징적입니다. 북선에서 가깝고, 자전거를 빌려 시후 오전의 첫 스톱으로 두세요.", "Classic misty morning photos. It sits on the north shore—rent a bike and make it the first lake stop."),
    longjing: M(30.2206, 120.1035, "오후에 찻집, 링인스와 같은 서쪽 블록입니다. 시내 버스가 끊기기 전에 내려오고, 차 시음은 한 집으로 충분합니다.", "Afternoon tasting on the same west block as Lingyin. Come down before the last city bus; one tea house is enough."),
    qiandao: M(29.605, 119.028, "시내에서 멀어 하루를 통째로 쓰거나 숙박하세요. 고속철 시간을 먼저 고정하고, 시후와 같은 날에 섞지 마세요.", "Far from the city—full day or overnight. Lock the high-speed rail first and don’t mix it with West Lake."),
    qinghefang: M(30.2415, 120.1705, "허팡제와 붙여 저녁 간식 루프를 만드세요. 오후에 약방·점포를 보고, 밤 조명은 거리에서 이어집니다.", "Build an evening snack loop with Hefang Street. Shops by day, lanterns after dark."),
  },
  重庆: {
    hongyadong: M(29.5626, 106.5788, "해 진 뒤 강 건너편에서 찍는 야경이 핵심입니다. 내부 상점가는 붐비니, 제팡베이에서 걸어와 짧은 저녁 스톱으로 두세요.", "The shot that matters is from across the river after dark. Inside is crowded—walk from Jiefangbei and keep it a short evening."),
    jiefangbei: M(29.557, 106.577, "쇼핑·식사 거점으로 홍야둥과 가깝습니다. 지하철이 모이는 자리이니, 낮 도심과 밤 야경의 연결점으로 쓰세요.", "Shopping and meals, a short walk from Hongyadong. Use the metro hub as the hinge between a downtown day and night lights."),
    ciqikou: M(29.5816, 106.4478, "반나절, 오전이 덜 붐빕니다. 시내 서쪽으로 떨어져 경궤·버스를 타고, 홍야둥 야경과 같은 동선에 억지로 넣지 마세요.", "A quieter morning half-day. It sits west of downtown—don’t force it onto the same night as Hongyadong."),
    cableway: M(29.5588, 106.5865, "낮 전망·사진용이며 주말 대기 줄이 깁니다. 조톈먼 쪽에서 타면 두 강을 한 번에 보고, 저녁 루프 전에 낮 슬롯을 고르세요.", "Day views; weekend queues run long. Board near Chaotianmen to see both rivers, and ride before the night loop."),
    liziba: M(29.5508, 106.5318, "열차 시간에 맞춰 짧은 인증 스톱입니다. 플랫폼 위치가 여러 곳이라 Amap에 관측 지점을 찍고, 한 대만 보고 이동하세요.", "Time it to a passing train and keep the stop short. Pin the lookout in Amap—one train is enough."),
    chaotianmen: M(29.5688, 106.5868, "저녁 강풍이 셉니다. 케이블카·홍야둥과 같은 강변 블록으로 묶고, 바람막이를 챙기세요.", "Windy at night. Pair with the cableway and Hongyadong on the same river block, and bring a wind layer."),
    nanshan: M(29.55, 106.62, "시내 조명을 한눈에 보려면 해질녘에 올라가세요. 강 남쪽이라 이동이 있으니, 낮 도심과 나눠 저녁 전용으로 잡으세요.", "Go at dusk for the whole city. It sits on the south bank, so keep it as an evening trip apart from downtown walking."),
    wulong: M(29.433, 107.9, "당일치기 교외로 시내와 섞지 마세요. 이동이 길어 이른 출발이 필수이고, 다쭈와 같은 날에 욕심내지 마세요.", "An outbound day—don’t mix with downtown. Leave early, and don’t stack Dazu on the same date."),
    dazu: M(29.701, 105.711, "이동이 길어 하루를 배정하세요. 우룽과 방향을 나누고, 귀경 막차를 먼저 확인하세요.", "Long transfer; give it a full day. Split it from Wulong and lock the last train first."),
    egean: M(29.5622, 106.5512, "비 오는 오전에 적합하고 제팡베이에서 가깝습니다. 실내 전시라 야경 전 낮 블록으로 넣기 좋습니다.", "A rainy-morning indoor stop near Jiefangbei. Use it as the day block before night views."),
  },
  西安: {
    terracotta: M(34.3853, 109.2788, "하루의 절반, 이른 입장권이 대기 줄에 유리합니다. 화청지와 동부 하루로 묶고, 시내 성벽과 같은 날에 섞지 마세요.", "Half-day; early tickets beat queues. Pair with Huaqing Palace on an east day, not with the city wall."),
    "dayan-pagoda": M(34.2196, 108.9642, "저녁 분수 쇼가 있으면 야간 일정을 맞추세요. 대당불야성과 한 블록이니, 탑을 낮에 보고 밤 거리로 이어가세요.", "Time evening fountain shows. It shares a block with the Tang night mall—pagoda by day, streets after dark."),
    "city-wall": M(34.258, 108.947, "남문에서 자전거를 빌려 한낮 더위를 피하세요. 한 바퀴는 체력이 들고, 회민가·종루와 같은 도심 오전에 붙이기 좋습니다.", "Rent bikes at the south gate and skip midday heat. A full loop is long; pair a section with the Bell Tower morning."),
    "muslim-quarter": M(34.2618, 108.9428, "저녁이 핵심이며 종루에서 걸어 들어갑니다. 골목이 미로라 만나는 지점을 정해 두고, 한 끼만 여기서 해결하세요.", "Evening peak; walk in from the Bell Tower. Alleys maze—set a meeting point and eat one meal here."),
    "bell-tower": M(34.261, 108.9425, "야경 사진과 회민가 입구입니다. 지하철 종루역이 거점이고, 고루와 한 축이니 짧게 찍고 골목으로 이동하세요.", "Night photos and the door to the Muslim Quarter. Metro Bell Tower is the hub; shoot quickly and walk into the lanes."),
    huaqing: M(34.3625, 109.2136, "병마용과 같은 동부 하루로 묶기 쉽습니다. 온천 구역은 선택이고, 이동 시간을 병마용 입장권 앞에 넣으세요.", "Same east day as the warriors. The hot-spring area is optional; put transit time before the terracotta ticket."),
    "tang-night": M(34.2185, 108.9648, "대야탑과 한 블록인 야간 보행 거리입니다. 해가 진 뒤가 목적이고, 분수 쇼 시간과 겹치면 동선이 단순해집니다.", "Pedestrian nights beside the pagoda. After dark is the point; lining it up with the fountain show keeps the walk simple."),
    "history-museum": M(34.2255, 108.952, "예약이 필수이고 오전이 한적합니다. 소야탑과 가까워 실내 반나절로 묶고, 병마용과 같은 날에 욕심내지 마세요.", "Reserve; quieter mornings. Pair with the Small Wild Goose Pagoda as an indoor half-day, not with the warriors."),
    xiaoyan: M(34.2394, 108.9395, "박물관과 가까운 짧은 스톱입니다. 탑 정원만 돌아도 충분하고, 대야탑과 혼동하지 마세요.", "A short stop near the museum. The garden is enough; don’t confuse it with the Giant Wild Goose Pagoda."),
    daming: M(34.2955, 108.9595, "넓은 터라 그늘과 물을 챙기세요. 시내 북쪽으로 떨어져 반나절이 필요하고, 성벽과 같은 더운 날에 잇지 마세요.", "A wide site—bring shade and water. It sits north of downtown, so give it a half-day and skip stacking the wall in heat."),
  },
  南京: {
    "fuzi-miao": M(32.0216, 118.7885, "친화이허 유람과 저녁을 묶으세요. 야시장은 해 진 뒤가 핵심이고, 라오먼둥에서 식사하면 본대보다 한적합니다.", "Pair with a Qinhuai boat in the evening. The market peaks after dark; eat in Laomendong if the main strip is packed."),
    "sun-yat-sen": M(32.0622, 118.848, "계단이 길어 오전에 오르세요. 명효릉과 같은 쯔진산 블록으로 묶고, 물과 편한 신발을 챙기세요.", "Climb in the morning—the stairs are long. Same Purple Mountain block as Ming Xiaoling; pack water and easy shoes."),
    presidential: M(32.0448, 118.7985, "실내 전시라 비 오는 날에 적합합니다. 예약·검색이 있으니 오전에 들어가고, 푸쯔먀오와 도심 하루로 이어가세요.", "Indoor exhibits work in rain. Book and clear security in the morning, then continue to Fuzi Miao downtown."),
    xuanwu: M(32.0765, 118.796, "자전거 또는 유람선으로 순환하세요. 성벽·지밍스와 북쪽으로 이어지고, 여름에는 그늘 구간을 고르세요.", "Loop by bike or boat. It continues north to the wall and Jiming Temple; pick shaded stretches in summer."),
    museum: M(32.0418, 118.8472, "예약 후 오전이 편합니다. 중산릉 가는 길에 넣기 쉽고, 실내라 산행 전 체력을 아낄 수 있습니다.", "Morning booking is easier. It sits on the way to the mausoleum, so use it as an indoor pause before the hill."),
    laomendong: M(32.0168, 118.7948, "푸쯔먀오보다 한적한 저녁 식사 거리입니다. 골목이 이어지니 유람선 전후에 한 끼를 여기서 해결하세요.", "Quieter dinner than Fuzi Miao. The lanes connect, so eat here before or after the boat."),
    "ming-xiaoling": M(32.0548, 118.837, "중산릉과 같은 쯔진산 하루로 묶으세요. 신도가 길어 그늘을 챙기고, 두 능을 오후에 몰아 넣지 마세요.", "Same Purple Mountain day as Sun Yat-sen. The sacred way is long—bring shade and don’t rush both tombs after lunch."),
    jiming: M(32.0605, 118.7948, "벚꽃 철이면 오전 일찍 가세요. 성벽 산책과 붙어 있고, 쉬안우호와 같은 북쪽 루프로 이어집니다.", "Cherry season: go extra early. It joins the wall walk and continues toward Xuanwu Lake."),
    "city-wall": M(32.0588, 118.792, "지밍스·호수와 붙여 걷기 좋습니다. 구간이 길어서 한 문에서 한 문만 걷고, 해 지기 전에 내려오세요.", "Walk it with Jiming Temple and the lake. Pick one gate-to-gate stretch and come down before dusk."),
    qinhuai: M(32.021, 118.7915, "유람선은 해 진 뒤 슬롯이 핵심입니다. 선착장이 여러 곳이라 Amap에 정확한 부두를 찍고, 푸쯔먀오와 같은 저녁에 묶으세요.", "Boat slots after dark are the point. Pin the exact pier in Amap and keep it on the same evening as Fuzi Miao."),
  },
  武汉: {
    "yellow-crane": M(30.5455, 114.2985, "오전이 대기 줄이 짧습니다. 후부샹·대교 전망과 같은 무창 블록으로 묶고, 흐린 날은 전망보다 누각 자체를 보세요.", "Morning lines are shorter. Pair with Hubu Alley and the bridge on the Wuchang block; on haze days, the tower itself still reads."),
    "east-lake": M(30.555, 114.388, "자전거 반나절이 기본입니다. 여름엔 그늘을 찾고, 황학루 야경과 같은 날에 체력을 나누세요.", "A half-day bike is the default. Seek shade in summer and don’t stack a Yellow Crane night on tired legs."),
    "hubu-alley": M(30.5518, 114.2955, "점심 전에 가고 황학루에서 가깝습니다. 골목이 짧으니 한두 집만 고르고, 대기 줄이 긴 간판은 피하세요.", "Go before lunch; it sits next to the tower. The alley is short—pick one or two stalls and skip the longest signs."),
    "wuhan-uni": M(30.5386, 114.3615, "개화 철 주말은 출입을 확인하세요. 둥후와 이어 녹지 하루로 묶고, 캠퍼스 예절을 지키세요.", "Check access on bloom weekends. Pair with East Lake as a green day, and treat the campus as a living school."),
    "yangtze-bridge": M(30.5488, 114.2895, "황학루 사진 포인트와 이어집니다. 보행 구간이 있어 짧게 걷고, 강바람 때문에 저녁에는 겉옷을 챙기세요.", "Same photo set as the tower. Use the pedestrian stretch for a short walk and bring a layer for river wind at dusk."),
    guiyuan: M(30.5512, 114.2568, "한양 쪽 오전 짧은 참배입니다. 강을 건너야 하니 황학루와 같은 오전에 욕심내지 말고, 칭촨거와 붙여 보세요.", "A short Hanyang morning. Crossing the river takes time—pair with Qingchuan Pavilion, not a rushed Yellow Crane slot."),
    chuhe: M(30.5568, 114.3485, "저녁 산책·식사 거점입니다. 지하철이 가깝고, 둥후 일정 뒤에 실내 쇼핑으로 이어가기 좋습니다.", "Evening walk and dinner. Metro is close; it sits well after East Lake as an indoor finish."),
    qingchuan: M(30.5575, 114.2865, "황학루를 강 건너 바라보는 각도입니다. 한양 강변에서 짧고, 구이위안스와 같은 블록으로 묶으세요.", "The angle that faces Yellow Crane Tower across the river. Keep it short on the Hanyang shore with Guiyuan Temple."),
    lihuangpi: M(30.5845, 114.298, "한커우 강변과 붙여 걷기 좋습니다. 오후 골목 후 해질녘 강변으로 이어가면 한커우 하루가 완성됩니다.", "Walk on to the Hankou bund. Lanes in the afternoon, river lights at dusk, and the Hankou day is complete."),
    "hankou-bund": M(30.5848, 114.3045, "해질녘부터 조명이 살아납니다. 리황피루에서 걸어오고, 바람막이를 챙기세요.", "Lights from dusk. Walk over from Lihuangpi Road and bring a wind layer."),
  },
  苏州: {
    humble: M(31.3258, 120.6288, "오전이 한적하고 박물관·핑장루와 한 권역입니다. 유원까지 욕심내면 정원이 겹치니, 졸정원을 깊게 보는 편이 낫습니다.", "Quieter in the morning, with the museum and Pingjiang nearby. Don’t stack Lingering Garden—go deep on this one instead."),
    hanshan: M(31.3122, 120.5648, "짧은 참배 후 산탕제로 이어지세요. 저녁 등불과 같은 서쪽 블록이고, 호구와 오전에 나눠 넣기 좋습니다.", "A short stop, then west to Shantang. Same evening-lantern block; split Tiger Hill into the morning if you have time."),
    huqiu: M(31.3378, 120.5765, "반나절 산책이 필요합니다. 기울어진 탑까지 오르면 계단이 있고, 산탕제 저녁과 붙여 서쪽 하루를 만드세요.", "A half-day walk. Stairs lead to the leaning pagoda; finish west with Shantang lanterns."),
    pingjiang: M(31.3178, 120.6325, "저녁 산책이 가장 예쁩니다. 졸정원·박물관에서 걸어 나오고, 주말 한낮은 피하세요.", "Prettiest in the evening. Walk out from the Humble Garden and museum, and skip weekend noon."),
    zhouzhuang: M(31.1175, 120.856, "당일치기, 오전에 출발하세요. 퉁리와 같은 날에 욕심내지 말고, 귀경 버스를 Amap에 먼저 넣으세요.", "Day trip—leave in the morning. Don’t stack Tongli, and save the bus home in Amap first."),
    lingering: M(31.3165, 120.5985, "졸정원과 취향이 겹치면 하나만 깊게 보세요. 오전이 한적하고, 서쪽 산탕제와는 거리를 두세요.", "Pick one garden if time is tight. Mornings are quieter; it sits apart from western Shantang."),
    jinji: M(31.3188, 120.705, "고성에서 동쪽으로 떨어져 있습니다. 야경·자전거가 목적이고, 정원 일정과 하루를 나누세요.", "East of the old city. Night lights and a bike loop; keep it off a garden-heavy day."),
    shantang: M(31.3172, 120.5755, "한산사 후 저녁 등불 거리가 핵심입니다. 배편은 선택이고, 돌길은 미끄러우니 편한 신을 신으세요.", "Lanterns after Hanshan Temple. A boat is optional; stone lanes get slick, so wear easy shoes."),
    tongli: M(31.1595, 120.7155, "저우좡보다 한적한 대안 당일치기입니다. 오전에 출발하고, 두 고진을 하루에 잇지 마세요.", "A quieter water-town alternative to Zhouzhuang. Leave in the morning and don’t do both towns in one day."),
    museum: M(31.3228, 120.628, "졸정원 옆, 예약 후 오전이 편합니다. 실내라 비 오는 날 첫 스톱으로 두고 정원으로 이어가세요.", "Next to the Humble Garden; book a morning slot. Use it as a rainy first stop, then walk into the garden."),
  },
  天津: {
    eye: M(39.1538, 117.1765, "하이허 야경과 함께 저녁에 타세요. 강변 산책과 같은 블록이고, 대기 줄이 짧을 때 탑승권을 끊으세요.", "Ride at night with Haihe lights. Same river block as the walk; buy when the queue is short."),
    "ancient-culture": M(39.1465, 117.1858, "구루와 붙어 간식·기념품 골목입니다. 오전이 덜 붐비고, 하이허로 내려가는 도심 낮 코스의 시작점으로 쓰세요.", "Snacks beside the Drum Tower. Quieter in the morning; start a downtown day here and drop to the Haihe."),
    "five-avenues": M(39.1155, 117.2, "오전 도보가 쾌적합니다. 쯔팡쯔와 같은 블록이고, 한낮 관광버스가 몰리면 골목 안쪽으로 들어가세요.", "A pleasant morning walk. Same block as Porcelain House; duck into side streets when tour buses pile up."),
    "italian-style": M(39.1368, 117.2048, "하이허 북쪽 카페·사진 거리입니다. 강변 산책과 이어지고, 주말 저녁은 인파가 많습니다.", "Cafés north of the Haihe. It continues from the riverwalk; weekend evenings crowd up."),
    "porcelain-house": M(39.1188, 117.1975, "우다다오와 같은 블록의 짧은 관람입니다. 내부가 좁으니 오전에 들어가고, 사진 규정을 확인하세요.", "A short visit on the Five Avenues block. Interiors are tight—go in the morning and check photo rules."),
    haihe: M(39.136, 117.195, "야경 산책이 톈진의 기본 코스입니다. 대관람차·이태리 풍정구를 강 따라 잇고, 바람막이를 챙기세요.", "The city’s default night stroll. String the Eye and Italian quarter along the river, and bring a wind layer."),
    panshan: M(40.092, 117.28, "시외 반나절 산행입니다. 주말 교통을 확인하고, 도심 조계 거리와 같은 날에 섞지 마세요.", "A half-day hike outside town. Check weekend transport and keep it off a concession-street day."),
    museum: M(39.0865, 117.2145, "문화중심의 실내 스톱입니다. 비 오는 날에 적합하고, 우다다오와는 지하철로 이어지세요.", "Indoor stop in the cultural center. Good in rain; metro across to the Five Avenues."),
    binjiangdao: M(39.1255, 117.2055, "우다다오에서 이어지는 번화가입니다. 쇼핑·식사 거점으로 쓰고, 강변 야경 전에 여기서 하루를 접으세요.", "Shopping that continues from the Five Avenues. Eat here, then finish on the Haihe at dusk."),
    "drum-tower": M(39.1468, 117.1848, "고문화가 입구의 짧은 랜드마크입니다. 사진을 찍고 골목으로 들어가며, 하이허까지 걸어 내려가기 좋습니다.", "A short landmark at Culture Street. Photograph it, then walk the lanes down toward the Haihe."),
  },
  青岛: {
    zhanqiao: M(36.06, 120.3225, "아침 바다가 한적하고 성당 쪽으로 이어집니다. 파도가 높으면 난간이 미끄러우니, 신호산과 같은 스난 오전에 묶으세요.", "Quiet morning sea; walk toward the cathedral. Rails get slick in swell—pair it with Signal Hill on a Shinan morning."),
    badaguan: M(36.0538, 120.3555, "플라타너스 산책이 목적이고 한낮 관광버스는 피하세요. 잔차오와 해안이 이어지되, 거주지라 큰 소리·드론은 삼가세요.", "A plane-tree walk; skip midday tour buses. The shore continues from Zhanqiao, but it is residential—no drones, keep voices down."),
    "may-fourth": M(36.0618, 120.3895, "해질녘 조명이 사진에 잘 나옵니다. 잔차오와는 거리가 있어 같은 저녁에 이어가려면 이동 시간을 넣으세요.", "Lights photograph well at dusk. It sits apart from Zhanqiao, so add transit if you want both in one evening."),
    laoshan: M(36.17, 120.62, "당일치기 산·해안으로 시내와 하루를 나누세요. 케이블·도보 코스가 갈리니, 체력에 맞는 문을 Amap에 찍으세요.", "Split a full mountain-and-coast day from downtown. Cable and walking routes differ—pin the gate that matches your legs."),
    "beer-museum": M(36.0885, 120.3535, "시음·공장 투어는 오후 슬롯이 여유롭습니다. 잔차오와 떨어져 있으니 도심 오후에 따로 넣고, 주량은 이동 전을 남기세요.", "Afternoon tasting slots feel less rushed. It sits apart from Zhanqiao, so keep it as its own downtown afternoon."),
    "golden-beach": M(35.968, 120.292, "황도 쪽이라 이동 시간을 넣으세요. 시내 해안과 다른 날에 두고, 여름 주말은 그늘·물을 챙기세요.", "Huangdao needs extra transit. Keep it off a Shinan shore day, and pack shade and water on summer weekends."),
    "signal-hill": M(36.0665, 120.3305, "짧은 오르막으로 잔차오 야경과 이어집니다. 해질녘에 오르면 붉은 지붕이 한눈에 보이고, 성당과 같은 언덕 블록입니다.", "A short climb that pairs with Zhanqiao at dusk. Red roofs read from the top; same hill block as the cathedral."),
    cathedral: M(36.0678, 120.3288, "외관 사진 후 잔차오로 가깝습니다. 미사 시간에는 내부가 제한되니, 피차이위안 저녁 전에 낮 스톱으로 두세요.", "Facade photos, then a short walk to the pier. Interiors close around services—use it as a day stop before Pichaiyuan."),
    aquarium: M(36.0555, 120.3365, "비 오는 날이나 아이 동반에 적합합니다. 잔차오·루쉰 공원 해안과 붙어 있어, 날씨가 나빠지면 실내로 피하기 좋습니다.", "Good for rain or kids. It sits on the Zhanqiao–Lu Xun Park shore, so duck inside when weather turns."),
    pichaiyuan: M(36.0688, 120.3275, "저녁 해산물·분식 골목입니다. 성당·잔차오와 가까워 스난 하루의 마지막 식사로 두고, 주말 밤은 줄을 보세요.", "Evening seafood and small eats. Close to the cathedral and pier, so end a Shinan day here; weekend nights queue."),
  },
  厦门: {
    gulangyu: M(24.4475, 118.0668, "배편·도보 전용이라 하루를 통째로 쓰세요. 주말 오전 배를 타고, 캐리어는 본섬 숙소에 두고 가벼운 가방만 가져가세요.", "Ferry and walking only—give it a full day. Take a morning boat on weekends, leave luggage on the main island, and pack light."),
    zhongshan: M(24.4578, 118.0825, "부두·야식으로 섬 일정 전후에 넣기 좋습니다. 페리 대기 줄이 이 거리와 이어지니, 배 시간에 맞춰 걷으세요.", "Snacks before or after the island ferry. Queues for the boat spill onto this street, so time the walk to your sailing."),
    nanputuo: M(24.4418, 118.0928, "샤먼대와 붙어 오전 참배·캠퍼스 산책이 됩니다. 개학기에는 대학 출입을 확인하고, 환다오루와 이어서 남쪽 하루를 짜세요.", "Morning with the university next door. Check campus access in term time, then continue south along Huandao Road."),
    zengcuoan: M(24.4325, 118.1455, "해질녘이 예쁘고 주말은 붐빕니다. 환다오루 중간에 있어 후리산과 묶어 걷고, 짐은 적게 들고 가세요.", "Dusk is pretty; weekends crowd up. It sits mid-Huandao Road—walk it with Hulishan and pack light."),
    "xiamen-uni": M(24.4378, 118.0978, "남보타사와 같은 블록입니다. 개학기 출입을 확인하고, 사포웨이 저녁과 붙여 남쪽 캠퍼스 하루를 만드세요.", "Same block as Nanputuo. Check term-time access and finish south with a Shapowei evening."),
    huandao: M(24.432, 118.16, "자전거 또는 버스로 후리산까지 이어집니다. 한낮 햇볕이 강해 모자·물을 챙기고, 구랑위와 같은 날에 욕심내지 마세요.", "Bike or bus toward Hulishan. Midday sun is hard—hat and water—and don’t stack a full Gulangyu day."),
    hulishan: M(24.4315, 118.141, "환다오루 중간의 짧은 군사 유적입니다. 쩡춰안과 같은 해안 블록으로 묶고, 내부 전시보다 포문 전망이 핵심입니다.", "A short fortress stop on Huandao Road. Pair with Zengcuo’an; the gun-port view matters more than indoor cases."),
    botanical: M(24.4555, 118.1025, "더운 오후의 그늘 산책입니다. 본섬 내륙이라 해안 일정과 나누고, 편한 신을 신으세요.", "A shade walk for hot afternoons. It sits inland on the island, so split it from a shore day and wear easy shoes."),
    jimei: M(24.5665, 118.0975, "반나절 교외이며 도보 다리 사진이 상징입니다. 본섬에서 다리를 건너야 하니, 구랑위와 같은 날에 섞지 마세요.", "A half-day off the main island; the walking bridge is the shot. Don’t mix it with a Gulangyu day."),
    shapowei: M(24.4395, 118.0895, "대학가와 가까운 저녁 항구입니다. 남보타사 일정 뒤에 카페로 이어가고, 만조 때 계단이 젖을 수 있습니다.", "Evening cafés near the university. Continue here after Nanputuo; steps can wet at high tide."),
  },
  昆明: {
    "stone-forest": M(24.818, 103.324, "당일치기, 이른 버스를 타세요. 주샹과 같은 방향이지만 둘을 하루에 잇기엔 빠듯하고, 모자와 물을 챙기세요.", "Day trip; take an early bus. Jiuxiang is the same direction but stacking both is tight—pack a hat and water."),
    dianchi: M(24.85, 102.68, "시산·민족촌과 남서쪽 하루로 묶습니다. 호숫가는 바람이 세니 겉옷을 챙기고, 스린과 같은 날에 섞지 마세요.", "A southwest day with Xishan and Ethnic Village. The shore is windy; don’t mix it with Stone Forest."),
    cuihu: M(25.0495, 102.7025, "도심 아침 산책입니다. 갈매기 철이면 오전이 붐비고, 위안퉁스와 붙여 짧은 시내 블록을 만드세요.", "A downtown morning walk. Gull season crowds the shore; pair it with Yuantong Temple as a short city block."),
    xishan: M(24.96, 102.63, "계단이 길어 오전 등반 또는 차를 타세요. 뎬츠를 내려다보는 코스라 민족촌과 같은 남서 하루에 넣고, 무릎을 아껴야 하면 케이블을 쓰세요.", "Long stairs—morning climb or a ride. It looks over Dianchi, so keep it on the southwest day; use the cable to save knees."),
    "ethnic-village": M(24.9665, 102.6605, "공연 시간을 보고 반나절을 배정하세요. 다관루·뎬츠와 가깝고, 시산 등반과 같은 오후에 체력이 겹칩니다.", "Check show times; half-day. Close to Daguan and Dianchi, so don’t stack a hard Xishan climb after."),
    jinma: M(25.0328, 102.7178, "짧은 랜드마크 후 근처 식사를 붙이세요. 도심이라 취이후와 이어지고, 사진만 찍고 오래 머물 필요는 없습니다.", "A short landmark plus nearby food. Downtown, it continues toward Green Lake; photograph and move on."),
    daguan: M(24.9695, 102.6668, "민족촌과 가까운 호수 누각입니다. 뎬츠 일정에 짧게 넣고, 일몰 무렵 바람이 셉니다.", "Lakeside, near Ethnic Village. Slot it into a Dianchi day; wind picks up around sunset."),
    "flower-city": M(24.9027, 102.7881, "새벽·오전이 가장 활기차습니다. 도매 시장이라 미끄럽고 짐이 많으니, 편한 신과 작은 가방만 가져가세요.", "Dawn and morning are liveliest. It is a wholesale floor—slippery, busy—so wear easy shoes and carry a small bag."),
    jiuxiang: M(24.98, 103.38, "스린과 같은 방향의 선택 당일치기입니다. 동굴은 춥고 미끄러우니 겉옷·미끄럼 방지를 챙기세요.", "Optional same-direction day as Stone Forest. Caves are cold and slick—bring a layer and steady shoes."),
    yuantong: M(25.0555, 102.7125, "취이후와 붙여 오전 블록을 만드세요. 도심 사찰이라 짧게 보고, 스린 출발 전 여유로 넣기 좋습니다.", "Downtown morning with Green Lake. Keep the visit short; it sits well as a calm hour before a Stone Forest departure."),
  },
  大连: {
    xinghai: M(38.8825, 121.5865, "저녁 산책이 기본입니다. 바다가 넓어 바람막이를 챙기고, 중산광장과 같은 날에 이어서 시내 루프를 만드세요.", "The default evening walk. The square is windy; pair it with Zhongshan Square for a downtown loop."),
    "tiger-beach": M(38.8855, 121.68, "반나절, 빈하이로와 이어집니다. 방추이섬까지 해안을 잇고, 진스탄과는 하루를 나누세요.", "Half-day on the Binhai Road strip. Continue to Bangchui Island, and keep Jinshitan for another day."),
    jinshitan: M(39.08, 122.0, "교외 해안이라 하루를 배정하세요. 발견왕국과 같은 권역이고, 시내 싱하이와 같은 날에 섞지 마세요.", "Outbound coast—full day. Same area as Discoveryland; don’t mix it with Xinghai downtown."),
    "russian-street": M(38.9215, 121.6125, "중산광장과 가까운 짧은 사진 거리입니다. 오전이나 해질녘이 덜 밋밋하고, 오래 머물 필요는 없습니다.", "A short photo strip near Zhongshan Square. Morning or dusk photographs better; don’t overstay."),
    bangchui: M(38.88, 121.695, "라오후탄에서 이어지는 해안 전망입니다. 빈하이로 버스·도보로 잇고, 절벽 난간에서 바람을 조심하세요.", "Coastal views that continue from Tiger Beach. Use Binhai Road buses or a walk, and mind the cliff wind."),
    binhai: M(38.89, 121.65, "해안 절경을 이어서 보는 도로입니다. 버스 정류장이 흩어져 있으니 Amap에 내리고 싶은 전망을 찍으세요.", "A string of coastal viewpoints. Bus stops are scattered—pin the lookout you want in Amap."),
    zhongshan: M(38.9218, 121.6388, "시내 거점의 원형 광장입니다. 러시아 풍정가와 붙여 낮에 찍고, 저녁은 싱하이로 넘어가세요.", "Downtown hub of circular facades. Photograph it with Russian Street by day, then move to Xinghai at dusk."),
    zoo: M(38.8828, 121.6132, "아이 동반 반나절입니다. 언덕이 있어 편한 신을 신고, 싱하이와 가까워 같은 서쪽에 묶으세요.", "Kids, half-day. The grounds slope, so wear easy shoes; it sits west near Xinghai."),
    lvshun: M(38.815, 121.26, "역사 당일치기로 시내와 하루를 나누세요. 이동이 길어 이른 출발이 필요하고, 진스탄과 방향을 섞지 마세요.", "A history day split from downtown. Leave early, and don’t mix it with Jinshitan in the other direction."),
    discoveryland: M(39.09, 121.95, "진스탄 권역의 하루 일정입니다. 시내 야경과 섞지 말고, 막차·셔틀을 Amap에 넣으세요.", "Jinshitan area, full day. Don’t mix with a downtown night; save the last train or shuttle in Amap."),
  },
  哈尔滨: {
    "central-street": M(45.7705, 126.62, "성 소피아와 붙여 걷습니다. 겨울에는 바닥이 미끄럽고 체감 온도가 낮으니, 짧은 구간을 나누고 자주 들어가 녹이세요.", "Walk on to St. Sophia. In winter the stones ice over—split the street into short stretches and warm up indoors."),
    sophia: M(45.7698, 126.6295, "야경 조명이 상징인 광장 스톱입니다. 중앙대가에서 가깝고, 자오린 공원 얼음등과 같은 저녁 루프로 묶으세요.", "Night lights are the postcard shot. Close to Central Street; loop Zhaolin ice lanterns the same evening."),
    "ice-world": M(45.785, 126.58, "겨울 밤 입장, 두꺼운 옷이 필수입니다. 시내에서 이동이 있으니 저녁 전용으로 잡고, 낮 중앙대가와 하루를 나누세요.", "Winter nights; dress very warm. It sits off downtown, so keep it as an evening trip apart from Central Street by day."),
    "sun-island": M(45.79, 126.6, "강 건너 공원입니다. 여름 산책·겨울 눈 조각이 목적이고, 도보 다리·버스를 Amap에서 확인하세요.", "Cross-river park. Summer walks and winter snow sculpture; check the bridge or bus in Amap."),
    "flood-monument": M(45.7778, 126.6185, "중앙대가 북쪽 강변의 짧은 스톱입니다. 방한 후 사진을 찍고, 성당 야경과 같은 축으로 이어가세요.", "A short river stop north of Central Street. Photograph it, then continue toward the cathedral lights."),
    volga: M(45.715, 126.953, "반나절 교외입니다. 시내 성당 권역과 하루를 나누고, 겨울에는 난방 식당을 동선에 넣으세요.", "A half-day suburb. Split it from the cathedral district, and in winter put a heated meal on the route."),
    laodaowai: M(45.7785, 126.645, "음식·사진 거리입니다. 중앙대가와 분위기가 달라 오후 골목으로 쓰고, 미끄러운 벽돌을 조심하세요.", "Food and photos on a different grain from Central Street. Use it as an afternoon lane walk; watch icy brick."),
    polarland: M(45.7865, 126.575, "아이·추운 날의 실내 스톱입니다. 빙설대세계와 가까워 같은 권역에 묶되, 둘 다 하면 하루가 깁니다.", "Indoor, good for kids and bitter cold. Near Ice and Snow World—doing both makes a long day."),
    zhaolin: M(45.7735, 126.6255, "겨울 얼음등이 성당에서 가깝습니다. 저녁 루프에 넣고, 여름에는 짧은 그늘 공원으로만 보세요.", "Winter ice lanterns, near the cathedral. Put it on the evening loop; in summer it is only a short shade park."),
    yabuli: M(44.78, 128.45, "시내에서 멀어 숙박 또는 하루를 통째로 쓰세요. 장비 대여와 셔틀을 전날 확인하고, 도심 얼음 축제와 같은 날에 섞지 마세요.", "Far from town—overnight or a full day. Confirm gear rental and shuttles the night before, and don’t mix it with downtown ice."),
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
