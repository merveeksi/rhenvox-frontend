import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: canonicalUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: canonicalUrl("/work"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: canonicalUrl("/work/nur-bilgi"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/services"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: canonicalUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: canonicalUrl("/contact"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/privacy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: canonicalUrl("/terms"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: canonicalUrl("/kvkk"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
