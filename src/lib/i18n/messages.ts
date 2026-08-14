import type { Locale } from "./locales";

export type Messages = {
  brand: string;
  brandSub: string;
  language: string;
  searchAria: string;
  cityAria: string;
  queryAria: string;
  placeholder: string;
  desktopBanner: string;
  desktopOnly: string;
  emptyQuery: string;
  searchFailed: string;
  queryKicker: string;
  placeTypeTitle: string;
  placeTypeDescCity: string;
  placeTypeDesc: string;
  customLabel: string;
  customPlaceholder: string;
  find: string;
  openingApp: string;
  close: string;
  installKicker: string;
  installTitle: string;
  installDesc: string;
  installPrimary: string;
  installSecondary: string;
  dismiss: string;
  affiliateLink: string;
  affiliateDisclosure: string;
  tabSearch: string;
  tabSpots: string;
  cityTabsAria: string;
  spotsPickCity: string;
  spotsPickCityDesc: string;
  spotsChangeCity: string;
  spotsCityGuide: string;
  spotsTitle: string;
  spotsDesc: string;
  spotsComingSoon: string;
  spotsHint: string;
  spotsFar: string;
  spotsMapAria: string;
  spotDetail: string;
  spotAbout: string;
  spotReadMore: string;
  openInAmap: string;
  howToGo: string;
  cities: Record<string, string>;
  placeTypes: Record<string, string>;
};

const citiesEn: Messages["cities"] = {
  "": "All",
  北京: "Beijing",
  上海: "Shanghai",
  广州: "Guangzhou",
  深圳: "Shenzhen",
  成都: "Chengdu",
  杭州: "Hangzhou",
  重庆: "Chongqing",
  西安: "Xi'an",
  南京: "Nanjing",
  武汉: "Wuhan",
  苏州: "Suzhou",
  天津: "Tianjin",
  青岛: "Qingdao",
  厦门: "Xiamen",
  昆明: "Kunming",
  大连: "Dalian",
  哈尔滨: "Harbin",
};

const placeTypesEn: Messages["placeTypes"] = {
  restaurant: "Restaurant",
  cafe: "Cafe",
  hotel: "Hotel",
  landmark: "Landmark",
  road: "Road",
  subway: "Subway",
  shopping: "Shopping",
  airport: "Airport",
};

export const MESSAGES: Record<Locale, Messages> = {
  en: {
    brand: "Amap Search",
    brandSub: "AutoNavi",
    language: "Language",
    searchAria: "Place search",
    cityAria: "Select city",
    queryAria: "Search query",
    placeholder: "Search — Amap",
    desktopBanner:
      "This service works on mobile only. Open it on your phone to search in the Amap app.",
    desktopOnly: "You can only search with the Amap app on mobile.",
    emptyQuery: "Please enter a search term.",
    searchFailed: "Search failed.",
    queryKicker: "Query",
    placeTypeTitle: "What kind of place?",
    placeTypeDescCity: "Search by type in {city}",
    placeTypeDesc: "Pick a type for more accurate results",
    customLabel: "Custom type",
    customPlaceholder: "e.g. hospital, park, museum",
    find: "Find",
    openingApp: "Opening in Amap…",
    close: "Close",
    installKicker: "Amap",
    installTitle: "Please install Amap",
    installDesc:
      "The app is missing or did not open. Install Amap, then search again to see results in the app.",
    installPrimary: "Install Amap",
    installSecondary: "Open download page",
    dismiss: "Close",
    affiliateLink: "China travel eSIM & Wi‑Fi",
    affiliateDisclosure:
      "Coupang Partners affiliate link. A commission may be earned.",
    tabSearch: "Search",
    tabSpots: "Spot map",
    cityTabsAria: "Select city",
    spotsPickCity: "Choose a city",
    spotsPickCityDesc: "Pick a city to open its spot map",
    spotsChangeCity: "Change city",
    spotsCityGuide: "City sights guide",
    spotsTitle: "{city} · spots",
    spotsDesc: "Tap a pin to read the place, then open it in Amap",
    spotsComingSoon: "Coming soon",
    spotsHint: "Tap a pin, or pick a day-trip from the list",
    spotsFar: "Day trip",
    spotsMapAria: "Tourist map",
    spotDetail: "Place details",
    spotAbout: "What this place is",
    spotReadMore: "Read the full guide",
    openInAmap: "Open in Amap",
    howToGo: "Getting there",
    cities: citiesEn,
    placeTypes: placeTypesEn,
  },
  es: {
    brand: "Amap Search",
    brandSub: "AutoNavi",
    language: "Idioma",
    searchAria: "Buscar lugares",
    cityAria: "Elegir ciudad",
    queryAria: "Término de búsqueda",
    placeholder: "Buscar — Amap",
    desktopBanner:
      "Este servicio solo funciona en el móvil. Ábrelo en el teléfono para buscar en la app Amap.",
    desktopOnly: "Solo puedes buscar con la app Amap en el móvil.",
    emptyQuery: "Introduce un término de búsqueda.",
    searchFailed: "Error en la búsqueda.",
    queryKicker: "Consulta",
    placeTypeTitle: "¿Qué tipo de lugar?",
    placeTypeDescCity: "Busca por tipo en {city}",
    placeTypeDesc: "Elige un tipo para resultados más precisos",
    customLabel: "Tipo personalizado",
    customPlaceholder: "ej. hospital, parque, museo",
    find: "Buscar",
    openingApp: "Abriendo en Amap…",
    close: "Cerrar",
    installKicker: "Amap",
    installTitle: "Instala Amap",
    installDesc:
      "La app no está instalada o no se abrió. Instala Amap y vuelve a buscar para ver los resultados en la app.",
    installPrimary: "Instalar Amap",
    installSecondary: "Abrir página de descarga",
    dismiss: "Cerrar",
    affiliateLink: "eSIM y Wi‑Fi para viajar a China",
    affiliateDisclosure:
      "Enlace de afiliado de Coupang Partners. Puede generarse una comisión.",
    tabSearch: "Buscar",
    tabSpots: "Mapa",
    cityTabsAria: "Elegir ciudad",
    spotsPickCity: "Elige una ciudad",
    spotsPickCityDesc: "Elige una ciudad para ver su mapa",
    spotsChangeCity: "Cambiar ciudad",
    spotsCityGuide: "Guía de lugares",
    spotsTitle: "{city} · lugares",
    spotsDesc: "Toca un pin para ver la descripción y abrirla en Amap",
    spotsComingSoon: "Próximamente",
    spotsHint: "Toca un pin, o elige una excursión de la lista",
    spotsFar: "Excursión",
    spotsMapAria: "Mapa turístico",
    spotDetail: "Detalle del lugar",
    spotAbout: "Qué es este lugar",
    spotReadMore: "Leer la guía completa",
    openInAmap: "Abrir en Amap",
    howToGo: "Cómo llegar",
    cities: {
      "": "Todas",
      北京: "Pekín",
      上海: "Shanghái",
      广州: "Cantón",
      深圳: "Shenzhen",
      成都: "Chengdú",
      杭州: "Hangzhou",
      重庆: "Chongqing",
      西安: "Xi'an",
      南京: "Nankín",
      武汉: "Wuhan",
      苏州: "Suzhou",
      天津: "Tianjín",
      青岛: "Qingdao",
      厦门: "Xiamen",
      昆明: "Kunming",
      大连: "Dalian",
      哈尔滨: "Harbin",
    },
    placeTypes: {
      restaurant: "Restaurante",
      cafe: "Café",
      hotel: "Hotel",
      landmark: "Lugar turístico",
      road: "Calle",
      subway: "Metro",
      shopping: "Compras",
      airport: "Aeropuerto",
    },
  },
  hi: {
    brand: "Amap Search",
    brandSub: "AutoNavi",
    language: "भाषा",
    searchAria: "स्थान खोज",
    cityAria: "शहर चुनें",
    queryAria: "खोज शब्द",
    placeholder: "खोज — Amap",
    desktopBanner:
      "यह सेवा केवल मोबाइल पर चलती है। Amap ऐप में खोजने के लिए फ़ोन पर खोलें।",
    desktopOnly: "Amap ऐप से खोज केवल मोबाइल पर संभव है।",
    emptyQuery: "कृपया खोज शब्द दर्ज करें।",
    searchFailed: "खोज विफल रही।",
    queryKicker: "खोज",
    placeTypeTitle: "यह किस तरह की जगह है?",
    placeTypeDescCity: "{city} में प्रकार के अनुसार खोजें",
    placeTypeDesc: "सटीक परिणामों के लिए प्रकार चुनें",
    customLabel: "अपना प्रकार",
    customPlaceholder: "जैसे: अस्पताल, पार्क, संग्रहालय",
    find: "खोजें",
    openingApp: "Amap में खोला जा रहा है…",
    close: "बंद करें",
    installKicker: "Amap",
    installTitle: "कृपया Amap इंस्टॉल करें",
    installDesc:
      "ऐप नहीं है या नहीं खुला। Amap इंस्टॉल करने के बाद फिर खोजें तो परिणाम ऐप में दिखेंगे।",
    installPrimary: "Amap इंस्टॉल करें",
    installSecondary: "डाउनलोड पेज खोलें",
    dismiss: "बंद करें",
    affiliateLink: "चीन यात्रा eSIM और वाई‑फाई",
    affiliateDisclosure:
      "Coupang Partners अफ़िलिएट लिंक। कमीशन मिल सकता है।",
    tabSearch: "खोज",
    tabSpots: "मानचित्र",
    cityTabsAria: "शहर चुनें",
    spotsPickCity: "शहर चुनें",
    spotsPickCityDesc: "मानचित्र देखने के लिए शहर चुनें",
    spotsChangeCity: "शहर बदलें",
    spotsCityGuide: "स्थलों की जानकारी",
    spotsTitle: "{city} · स्थल",
    spotsDesc: "पिन दबाकर विवरण देखें, फिर Amap में खोलें",
    spotsComingSoon: "जल्द आ रहा है",
    spotsHint: "पिन दबाएँ, या सूची से दिन भर की जगह चुनें",
    spotsFar: "दिन भर",
    spotsMapAria: "पर्यटन मानचित्र",
    spotDetail: "स्थान विवरण",
    spotAbout: "यह स्थान क्या है",
    spotReadMore: "पूरी जानकारी पढ़ें",
    openInAmap: "Amap में खोलें",
    howToGo: "कैसे जाएँ",
    cities: {
      "": "सभी",
      北京: "बीजिंग",
      上海: "शंघाई",
      广州: "गुआंगझोउ",
      深圳: "शेन्ज़ेन",
      成都: "चेंग्दू",
      杭州: "हांगझोउ",
      重庆: "चोंगकिंग",
      西安: "शीआन",
      南京: "नानजिंग",
      武汉: "वूहान",
      苏州: "सूझोउ",
      天津: "तियानजिन",
      青岛: "चिंगदाओ",
      厦门: "शियामेन",
      昆明: "कुनमिंग",
      大连: "दालियान",
      哈尔滨: "हारबिन",
    },
    placeTypes: {
      restaurant: "रेस्तराँ",
      cafe: "कैफ़े",
      hotel: "होटल",
      landmark: "दर्शनीय स्थल",
      road: "सड़क",
      subway: "मेट्रो",
      shopping: "खरीदारी",
      airport: "हवाई अड्डा",
    },
  },
  ar: {
    brand: "Amap Search",
    brandSub: "AutoNavi",
    language: "اللغة",
    searchAria: "البحث عن مكان",
    cityAria: "اختر المدينة",
    queryAria: "كلمة البحث",
    placeholder: "بحث — Amap",
    desktopBanner:
      "هذه الخدمة تعمل على الجوال فقط. افتحها على هاتفك للبحث في تطبيق Amap.",
    desktopOnly: "يمكنك البحث عبر تطبيق Amap على الجوال فقط.",
    emptyQuery: "يرجى إدخال كلمة بحث.",
    searchFailed: "فشل البحث.",
    queryKicker: "الاستعلام",
    placeTypeTitle: "ما نوع المكان؟",
    placeTypeDescCity: "ابحث حسب النوع في {city}",
    placeTypeDesc: "اختر النوع لنتائج أدق",
    customLabel: "نوع مخصص",
    customPlaceholder: "مثال: مستشفى، حديقة، متحف",
    find: "بحث",
    openingApp: "جارٍ الفتح في Amap…",
    close: "إغلاق",
    installKicker: "Amap",
    installTitle: "يرجى تثبيت Amap",
    installDesc:
      "التطبيق غير مثبت أو لم يفتح. ثبّت Amap ثم ابحث مجددًا لعرض النتائج في التطبيق.",
    installPrimary: "تثبيت Amap",
    installSecondary: "فتح صفحة التحميل",
    dismiss: "إغلاق",
    affiliateLink: "eSIM وواي فاي للسفر إلى الصين",
    affiliateDisclosure:
      "رابط تسويق بالعمولة عبر Coupang Partners. قد تُحتسب عمولة.",
    tabSearch: "بحث",
    tabSpots: "الخريطة",
    cityTabsAria: "اختر المدينة",
    spotsPickCity: "اختر مدينة",
    spotsPickCityDesc: "اختر مدينة لفتح خريطة المعالم",
    spotsChangeCity: "تغيير المدينة",
    spotsCityGuide: "دليل المعالم",
    spotsTitle: "{city} · معالم",
    spotsDesc: "اضغط الدبوس لقراءة الوصف ثم افتحه في Amap",
    spotsComingSoon: "قريبًا",
    spotsHint: "اضغط دبوسًا أو اختر رحلة يوم من القائمة",
    spotsFar: "رحلة يوم",
    spotsMapAria: "خريطة سياحية",
    spotDetail: "تفاصيل المكان",
    spotAbout: "ما هذا المكان",
    spotReadMore: "اقرأ الدليل الكامل",
    openInAmap: "فتح في Amap",
    howToGo: "كيف تصل",
    cities: {
      "": "الكل",
      北京: "بكين",
      上海: "شنغهاي",
      广州: "قوانغتشو",
      深圳: "شنتشن",
      成都: "تشنغدو",
      杭州: "هانغتشو",
      重庆: "تشونغتشينغ",
      西安: "شيان",
      南京: "نانجينغ",
      武汉: "ووهان",
      苏州: "سوتشو",
      天津: "تيانجين",
      青岛: "تشينغداو",
      厦门: "شيامن",
      昆明: "كونمينغ",
      大连: "داليان",
      哈尔滨: "هاربين",
    },
    placeTypes: {
      restaurant: "مطعم",
      cafe: "مقهى",
      hotel: "فندق",
      landmark: "معلم سياحي",
      road: "طريق",
      subway: "مترو",
      shopping: "تسوق",
      airport: "مطار",
    },
  },
  ko: {
    brand: "Amap Search",
    brandSub: "AutoNavi",
    language: "언어",
    searchAria: "장소 검색",
    cityAria: "도시 선택",
    queryAria: "장소 검색어",
    placeholder: "검색- Amap연동",
    desktopBanner:
      "이 서비스는 모바일에서만 사용할 수 있어요. 휴대폰 브라우저로 열어 Amap 앱으로 검색하세요.",
    desktopOnly: "모바일에서만 Amap 앱으로 검색할 수 있어요.",
    emptyQuery: "검색어를 입력해 주세요.",
    searchFailed: "검색에 실패했습니다.",
    queryKicker: "검색어",
    placeTypeTitle: "어떤 장소인가요?",
    placeTypeDescCity: "{city}에서 유형에 맞춰 검색해요",
    placeTypeDesc: "유형을 고르면 더 정확하게 찾아요",
    customLabel: "직접 입력",
    customPlaceholder: "예: 병원, 공원, 박물관",
    find: "찾기",
    openingApp: "Amap으로 여는 중…",
    close: "닫기",
    installKicker: "Amap",
    installTitle: "Amap을 설치해 주세요",
    installDesc:
      "앱이 없거나 열리지 않았어요. Amap을 설치한 뒤 다시 검색하면 앱에서 결과를 볼 수 있어요.",
    installPrimary: "Amap 설치하기",
    installSecondary: "다운로드 페이지 열기",
    dismiss: "닫기",
    affiliateLink: "중국 여행 유심·와이파이 보기",
    affiliateDisclosure:
      "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",
    tabSearch: "검색",
    tabSpots: "명소 지도",
    cityTabsAria: "도시 선택",
    spotsPickCity: "도시를 선택하세요",
    spotsPickCityDesc: "명소 지도를 볼 도시를 고르세요",
    spotsChangeCity: "도시 변경",
    spotsCityGuide: "도시 관광지 설명",
    spotsTitle: "{city} · 명소",
    spotsDesc: "지도의 핀을 눌러 설명을 보고, Amap으로 여세요",
    spotsComingSoon: "준비 중",
    spotsHint: "시내 핀을 누르거나, 목록의 교외 명소를 고르세요",
    spotsFar: "교외",
    spotsMapAria: "관광 지도",
    spotDetail: "명소 설명",
    spotAbout: "어떤 곳인가요",
    spotReadMore: "이 명소 더 읽기",
    openInAmap: "Amap에서 열기",
    howToGo: "가는 법",
    cities: {
      "": "전체",
      北京: "베이징",
      上海: "상하이",
      广州: "광저우",
      深圳: "선전",
      成都: "청두",
      杭州: "항저우",
      重庆: "충칭",
      西安: "시안",
      南京: "난징",
      武汉: "우한",
      苏州: "쑤저우",
      天津: "톈진",
      青岛: "칭다오",
      厦门: "샤먼",
      昆明: "쿤밍",
      大连: "다롄",
      哈尔滨: "하얼빈",
    },
    placeTypes: {
      restaurant: "식당",
      cafe: "카페",
      hotel: "호텔",
      landmark: "유적지·관광지",
      road: "길·도로",
      subway: "지하철역",
      shopping: "쇼핑",
      airport: "공항",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale] ?? MESSAGES.en;
}
