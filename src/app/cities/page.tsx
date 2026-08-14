import type { Metadata } from "next";
import { CitiesIndexView } from "@/components/CitiesIndexView";
import { listCityArticleLinks } from "@/lib/cityPages";

export const metadata: Metadata = {
  title: "도시 관광지 안내",
  description:
    "중국 주요 도시의 관광지 역사와 특징을 도시별로 읽을 수 있습니다.",
  alternates: { canonical: "/cities" },
};

export default function CitiesIndexPage() {
  return <CitiesIndexView cities={listCityArticleLinks()} />;
}
