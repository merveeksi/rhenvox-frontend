import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import type React from "react"
import "@/app/globals.css"
import { CustomScrollbar } from "@/components/magicui/custom-scrollbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhenvox.com"),
  title: "Rhenvox | Software Engineering & AI R&D",
  description: "Premium software engineering, AI R&D, and UI/UX design services",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/images/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhenvox.com",
    title: "Rhenvox | Software Engineering & AI R&D",
    description: "Premium software engineering, AI R&D, and UI/UX design services",
    siteName: "Rhenvox",
    images: [
      {
        url: "https://rhenvox.com/images/rhenvox-logo.png",
        width: 924,
        height: 952,
        alt: "Rhenvox Logo",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhenvox | Software Engineering & AI R&D",
    description: "Premium software engineering, AI R&D, and UI/UX design services",
    images: ["https://rhenvox.com/images/rhenvox-logo.png"],
    creator: "@rhenvox",
    site: "@rhenvox",
  },
  other: {
    'msapplication-TileImage': '/images/apple-touch-icon.png',
    'msapplication-TileColor': '#7A30DC',
    'theme-color': '#0A0025',
    'light-theme-color': '#E4D5F8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <I18nProvider>
            <CustomScrollbar />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
