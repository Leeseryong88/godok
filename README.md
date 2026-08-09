# Amap Search

도시와 검색어를 입력하고 Enter를 누르면 장소 유형(식당, 유적지, 호텔 등)을 고른 뒤  
의도에 맞는 중국어 키워드로 변환하여 해당 도시의 **Amap**(AutoNavi, 중국명 高德地图) 앱 검색을 엽니다.  
도시·언어 값은 브라우저에 저장되어 다음에 자동으로 적용됩니다.

## 시작하기

```bash
npm install
cp .env.example .env.local
# GEMINI_API_KEY 입력
npm run dev
```

## 환경 변수

```env
GEMINI_API_KEY=
```
