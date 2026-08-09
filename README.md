# 고덕검색

중국 여행 중 Google 지도 대신 **高德地图(고덕지도)** 를 써야 할 때,  
한국어·영어·일본어로 검색해도 바로 찾아갈 수 있게 도와주는 웹앱입니다.

## 사용 흐름

1. 도시 선택  
2. 가고 싶은 곳 입력  
3. **고덕에서 열기** → 중국어 검색어로 변환 후 앱/웹 실행  

부가 기능:
- **중국어 확인**: 열기 전에 번역 결과만 먼저 보기/수정
- 자주 찾는 곳 / 최근 검색
- 모바일에서 설치된 고덕 앱 우선 실행

## 토큰 절약

1. 로컬 사전 히트 → Gemini 호출 없음  
2. 이미 중국어 → 호출 없음  
3. 도시는 LLM에 보내지 않음  
4. Gemini `gemini-3.1-flash-lite`  
   - 초단 프롬프트  
   - `thinkingBudget: 0`  
   - `maxOutputTokens: 16`

## 시작하기

```bash
npm install
cp .env.example .env.local
# GEMINI_API_KEY 입력
npm run dev
```

브라우저: [http://localhost:3000](http://localhost:3000)

## 환경 변수

```env
GEMINI_API_KEY=
```
