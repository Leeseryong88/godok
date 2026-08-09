import { NextResponse } from "next/server";
import { resolveSearchKeyword, type PlaceIntent } from "@/lib/translate";

export const runtime = "nodejs";

type Body = {
  query?: string;
  placeTypeId?: string;
  placeTypeCustom?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const query = typeof body.query === "string" ? body.query.trim() : "";
  if (!query) {
    return NextResponse.json({ error: "query is required" }, { status: 400 });
  }
  if (query.length > 80) {
    return NextResponse.json(
      { error: "query must be 80 characters or less" },
      { status: 400 }
    );
  }

  const placeTypeId =
    typeof body.placeTypeId === "string" ? body.placeTypeId.trim() : "";
  const placeTypeCustom =
    typeof body.placeTypeCustom === "string"
      ? body.placeTypeCustom.trim().slice(0, 40)
      : "";

  if (!placeTypeId && !placeTypeCustom) {
    return NextResponse.json(
      { error: "장소 유형을 선택하거나 입력해 주세요." },
      { status: 400 }
    );
  }

  const intent: PlaceIntent = {
    typeId: placeTypeId || undefined,
    custom: placeTypeCustom || undefined,
  };

  try {
    const result = await resolveSearchKeyword(query, intent);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "TRANSLATE_FAILED";

    if (message === "MISSING_GEMINI_API_KEY") {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY가 설정되지 않았습니다. .env.local을 확인하세요.",
        },
        { status: 500 }
      );
    }

    console.error("[translate]", err);

    const raw =
      err && typeof err === "object" && "message" in err
        ? String((err as { message: unknown }).message)
        : "";

    let friendly = "번역에 실패했습니다. 잠시 후 다시 시도해 주세요.";
    if (raw.includes("quota") || raw.includes("RESOURCE_EXHAUSTED")) {
      friendly =
        "Gemini 사용량 한도를 초과했습니다. 잠시 후 다시 시도하세요.";
    } else if (raw.includes("API key") || raw.includes("PERMISSION_DENIED")) {
      friendly =
        "Gemini API 키가 유효하지 않습니다. .env.local을 확인하세요.";
    } else if (
      raw.includes("no longer available") ||
      raw.includes("NOT_FOUND")
    ) {
      friendly = "번역 모델을 사용할 수 없습니다. 앱을 업데이트해 주세요.";
    }

    return NextResponse.json({ error: friendly }, { status: 502 });
  }
}
