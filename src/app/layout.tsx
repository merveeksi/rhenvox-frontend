import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import { SkipLink } from "@/components/skip-link";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SHARE_IMAGE_ALT,
  SITE_URL,
  canonicalUrl,
} from "@/lib/seo";
import type React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Rhenvox",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalUrl("/"),
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: "Rhenvox",
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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@rhenvox",
    site: "@rhenvox",
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: SHARE_IMAGE_ALT,
      },
    ],
  },
  other: {
    "msapplication-TileImage": "/images/apple-touch-icon.png",
    "msapplication-TileColor": "#2F5580",
    "theme-color": "#14161C",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <I18nProvider>
            <SkipLink />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
