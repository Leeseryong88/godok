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
    placeholder: "Search places",
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
    placeholder: "Buscar lugares",
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
    placeholder: "स्थान खोजें",
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
    placeholder: "ابحث عن أماكن",
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
    placeholder: "장소 검색",
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
