import { GoogleGenAI } from "@google/genai";
import { extractChineseKeyword, isMostlyChinese } from "./chinese";
import { lookupLocal } from "./localDict";
import {
  findPlaceType,
  withPlaceHint,
  type PlaceTypeOption,
} from "./placeTypes";

export type TranslateSource = "local" | "passthrough" | "gemini";

export type TranslateResult = {
  keyword: string;
  source: TranslateSource;
};

export type PlaceIntent = {
  /** PLACE_TYPES id 또는 custom */
  typeId?: string;
  /** 직접 입력한 유형 (한국어/영어 등) */
  custom?: string;
};

const MODEL = "gemini-3.1-flash-lite";
const MAX_QUERY_CHARS = 80;
const MAX_CUSTOM_CHARS = 40;

function clipQuery(q: string): string {
  return q.trim().slice(0, MAX_QUERY_CHARS);
}

function resolveIntent(intent?: PlaceIntent): {
  option?: PlaceTypeOption;
  custom?: string;
  intentLabel: string;
  hintZh: string;
} {
  const custom = intent?.custom?.trim().slice(0, MAX_CUSTOM_CHARS) || "";
  const option = intent?.typeId ? findPlaceType(intent.typeId) : undefined;

  if (option) {
    return {
      option,
      intentLabel: option.intentEn,
      hintZh: option.hintZh,
    };
  }

  if (custom) {
    return {
      custom,
      intentLabel: custom,
      hintZh: "",
    };
  }

  return { intentLabel: "", hintZh: "" };
}

function buildSystem(intentLabel: string): string {
  if (!intentLabel) {
    return "Output ONLY one Simplified Chinese Amap keyword. No markdown/quotes/explanation.";
  }

  return `Amap search. User wants a ${intentLabel}. Output ONLY one short Simplified Chinese search phrase for that intent. Prefer official POI name; add a brief type word (餐厅/咖啡/酒店/景点/路/地铁站) if needed to avoid wrong category. No markdown/quotes/explanation.`;
}

/**
 * 토큰 절약 우선순위:
 * 1) 로컬 사전 → (유형 힌트 부착)
 * 2) 이미 중국어 → (유형 힌트 부착)
 * 3) Gemini (의도 포함, thinking off)
 */
export async function resolveSearchKeyword(
  rawQuery: string,
  intent?: PlaceIntent
): Promise<TranslateResult> {
  const query = clipQuery(rawQuery);
  if (!query) throw new Error("EMPTY_QUERY");

  const { intentLabel, hintZh, custom } = resolveIntent(intent);

  const local = lookupLocal(query);
  if (local) {
    return {
      keyword: withPlaceHint(local, hintZh),
      source: "local",
    };
  }

  if (isMostlyChinese(query)) {
    return {
      keyword: withPlaceHint(query, hintZh),
      source: "passthrough",
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("MISSING_GEMINI_API_KEY");

  const ai = new GoogleGenAI({ apiKey });

  // 커스텀 유형은 힌트 한자가 없으므로 모델에 의도를 명시
  const userContent = custom
    ? `${query}\nplace type: ${custom}`
    : intentLabel
      ? `${query}\nplace type: ${intentLabel}`
      : query;

  const systemIntent = intentLabel || custom || "";

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: userContent,
    config: {
      systemInstruction: buildSystem(systemIntent),
      temperature: 0,
      maxOutputTokens: 24,
      thinkingConfig: { thinkingBudget: 0 },
    },
  });

  const text = response.text?.trim();
  if (!text) throw new Error("EMPTY_MODEL_OUTPUT");

  let keyword = extractChineseKeyword(text);
  if (!keyword) throw new Error("EMPTY_KEYWORD");

  // 사전 매핑 힌트가 있으면 결과에 보강 (모델이 빠뜨린 경우)
  if (hintZh) keyword = withPlaceHint(keyword, hintZh);

  return { keyword, source: "gemini" };
}
