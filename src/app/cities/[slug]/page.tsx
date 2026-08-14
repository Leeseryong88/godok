import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityArticleView } from "@/components/CityArticleView";
import {
  CITY_ARTICLES,
  getCityArticle,
  listCityArticleLinks,
} from "@/lib/cityPages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CITY_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getCityArticle(slug);
  if (!article) return { title: "City guide" };
  return {
    title: article.ko.title,
    description: article.ko.lede,
    alternates: { canonical: `/cities/${article.slug}` },
  };
}

export default async function CityGuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getCityArticle(slug);
  if (!article) notFound();
  return (
    <CityArticleView article={article} related={listCityArticleLinks()} />
  );
}
