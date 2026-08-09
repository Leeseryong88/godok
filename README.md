# 고덕검색 (Gaode Search Bridge)

한국어·영어·일본어 등으로 장소를 입력하면 **검색 의도에 맞는 짧은 중국어 키워드**로 변환한 뒤, 高德地图(고덕지도) 검색 페이지/앱으로 열어주는 초간단 MVP입니다.

고덕 API Key는 **필요 없습니다.**

## 토큰 절약 설계

1. **로컬 사전** — 스타벅스, 천안문 등 자주 쓰는 표현은 Gemini 호출 없이 변환
2. **중국어 패스스루** — 이미 중국어면 API 호출 스킵
3. **도시 선택 로컬 처리** — 도시는 LLM에 보내지 않음
4. **Gemini 3.1 Flash-Lite** (`gemini-3.1-flash-lite`)
   - 초단 시스템 프롬프트
   - `thinkingBudget: 0` (사고 토큰 끔)
   - `maxOutputTokens: 16`
   - `temperature: 0`
   - 출력은 중국어 키워드만

## 시작하기

```bash
npm install
cp .env.example .env.local
# .env.local 에 GEMINI_API_KEY 입력
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## 사용 흐름

1. 도시 선택 (예: 상하이)
2. 검색어 입력 (예: `천안문`, `Starbucks`)
3. **중국어로 변환**
4. **고덕지도에서 보기** → `uri.amap.com` 검색 결과로 이동 (`callnative=1`로 앱 시도)

## API

`POST /api/translate`

```json
{ "query": "천안문" }
```

응답 예:

```json
{ "keyword": "天安门", "source": "local" }
```

`source`: `local` | `passthrough` | `gemini`
