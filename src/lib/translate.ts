import { GoogleGenAI } from "@google/genai";
import { extractChineseKeyword, isMostlyChinese } from "./chinese";
import { lookupLocal } from "./localDict";

export type TranslateSource = "local" | "passthrough" | "gemini";

export type TranslateResult = {
  keyword: string;
  source: TranslateSource;
};

/** 토큰 최소 + 검색용 짧은 중국어만 강제 */
const SYSTEM =
  "Output ONLY one Simplified Chinese Amap keyword. No markdown/quotes/explanation.";

/** 신규 계정에서 2.5 Flash-Lite 대신 사용 */
const MODEL = "gemini-3.1-flash-lite";
const MAX_QUERY_CHARS = 80;

function clipQuery(q: string): string {
  return q.trim().slice(0, MAX_QUERY_CHARS);
}

/**
 * 토큰 절약 우선순위:
 * 1) 로컬 사전 히트 → API 0
 * 2) 이미 중국어 → API 0
 * 3) Gemini Flash-Lite (thinking off, maxOutputTokens 낮음)
 */
export async function resolveSearchKeyword(
  rawQuery: string
): Promise<TranslateResult> {
  const query = clipQuery(rawQuery);
  if (!query) throw new Error("EMPTY_QUERY");

  const local = lookupLocal(query);
  if (local) return { keyword: local, source: "local" };

  if (isMostlyChinese(query)) {
    return { keyword: query, source: "passthrough" };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("MISSING_GEMINI_API_KEY");

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: query,
    config: {
      systemInstruction: SYSTEM,
      temperature: 0,
      maxOutputTokens: 16,
      thinkingConfig: { thinkingBudget: 0 },
    },
  });

  const text = response.text?.trim();
  if (!text) throw new Error("EMPTY_MODEL_OUTPUT");

  const keyword = extractChineseKeyword(text);
  if (!keyword) throw new Error("EMPTY_KEYWORD");

  return { keyword, source: "gemini" };
}
