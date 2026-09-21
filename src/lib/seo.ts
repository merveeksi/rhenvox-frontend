import type { Metadata } from "next";

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
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = canonicalUrl(path);
  const brandedTitle = path === "/" ? title : `${title} | Rhenvox`;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      // Relative path resolved against metadataBase (Next serializes "/" as origin without a trailing slash).
      canonical: path,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: "Rhenvox",
      locale: "en_US",
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
