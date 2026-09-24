import type { MetadataRoute } from "next";
import { LOCALES, localize } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo";

const paths = [
  "/",
  "/work",
  "/work/nur-bilgi",
  "/services",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/kvkk",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    paths.map((path) => {
      const localized = localize(path, locale);
      return {
        url: canonicalUrl(localized),
        changeFrequency:
          path === "/" ? "weekly" : path === "/privacy" || path === "/terms" || path === "/kvkk" ? "yearly" : "monthly",
        priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.7,
        alternates: {
          languages: {
            en: canonicalUrl(localize(path, "en")),
            tr: canonicalUrl(localize(path, "tr")),
          },
        },
      } satisfies MetadataRoute.Sitemap[number];
    }),
  );
}
