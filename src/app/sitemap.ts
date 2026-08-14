import type { MetadataRoute } from "next";
import { listCityArticleLinks } from "@/lib/cityPages";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const cities: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/cities"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...listCityArticleLinks().map((city) => ({
      url: absoluteUrl(`/cities/${city.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cities,
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
