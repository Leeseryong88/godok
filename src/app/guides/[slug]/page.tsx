import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticleView } from "@/components/GuideArticleView";
import {
  CITY_ARTICLES,
  getAllGuideSlugs,
  getArticleBySlug,
} from "@/lib/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Guide · Amap Search" };
  return {
    title: article.ko.title,
    description: article.ko.lead.slice(0, 140),
    alternates: { canonical: `/guides/${slug}` },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // ensure article exists in list (tree-shaking / validation)
  if (!CITY_ARTICLES.some((a) => a.slug === slug)) notFound();

  return <GuideArticleView slug={slug} />;
}
