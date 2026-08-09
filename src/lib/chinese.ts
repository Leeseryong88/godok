/** 한자(CJK) 비율이 높으면 이미 검색 가능한 중국어로 간주 → Gemini 스킵 */
export function isMostlyChinese(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed) return false;

  const chars = [...trimmed].filter((c) => !/\s/.test(c));
  if (chars.length === 0) return false;

  const cjk = chars.filter((c) => /[\u4e00-\u9fff]/.test(c)).length;
  return cjk / chars.length >= 0.6;
}

/** 모델이 설명문을 붙여도 중국어 키워드만 추출 */
export function extractChineseKeyword(text: string): string {
  const cleaned = text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^["'`]+|["'`]+$/g, "")
    .trim();

  const lines = cleaned
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const candidate = lines[0] ?? cleaned;
  // 따옴표/접두 제거
  const stripped = candidate
    .replace(/^(keyword|결과|번역)\s*[:：]\s*/i, "")
    .replace(/^["「『]+|["」』]+$/g, "")
    .trim();

  return stripped.slice(0, 40);
}
