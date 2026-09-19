import type { Metadata } from "next";

export const SITE_URL = "https://rhenvox.com";

export const DEFAULT_TITLE =
  "Rhenvox | Web, Mobile & Software Product Development";

export const DEFAULT_DESCRIPTION =
  "Rhenvox builds web, mobile and backend/API products, including practical AI integrations inside software.";

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

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: path === "/" ? title : `${title} | Rhenvox`,
      description,
      url,
      siteName: "Rhenvox",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? title : `${title} | Rhenvox`,
      description,
    },
  };
}
