import type { Metadata } from "next";
import { localize, type Locale } from "@/lib/i18n/routing";

export const SITE_URL = "https://rhenvox.com";

export const DEFAULT_TITLE =
  "Rhenvox | Web, Mobile & Software Product Development";

export const DEFAULT_DESCRIPTION =
  "Rhenvox builds web, mobile and backend/API products, including practical AI integrations inside software.";

export const SHARE_IMAGE_ALT =
  "Rhenvox — web, mobile and software product development";

export function canonicalUrl(path: string): string {
  if (path === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  locale = "en",
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): Metadata {
  const url = canonicalUrl(path);
  const isHome = path === `/${locale}`;
  const brandedTitle = isHome ? title : `${title} | Rhenvox`;
  const enPath = localize(path, "en");
  const trPath = localize(path, "tr");

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      languages: {
        en: enPath,
        tr: trPath,
        "x-default": enPath,
      },
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: "Rhenvox",
      locale: locale === "tr" ? "tr_TR" : "en_GB",
      alternateLocale: locale === "tr" ? ["en_GB"] : ["tr_TR"],
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: SHARE_IMAGE_ALT,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      creator: "@merveeksi6117",
      images: [
        {
          url: "/twitter-image",
          width: 1200,
          height: 630,
          alt: SHARE_IMAGE_ALT,
        },
      ],
    },
  };
}

export function localizedMetadata(input: {
  title: string;
  description: string;
  path: string;
}) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale: raw } = await params;
    const locale: Locale = raw === "tr" ? "tr" : "en";
    return pageMetadata({
      ...input,
      locale,
      path: localize(input.path, locale),
    });
  };
}
