import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n";
import Script from "next/script";

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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    'msapplication-TileImage': '/apple-touch-icon.png',
    'msapplication-TileColor': '#0B0E19',
    'theme-color': '#7A30DC',
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
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{ __html: `
          link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"] {
            border-radius: 50% !important; 
            overflow: hidden !important;
          }
        `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>

        {/* Improved theme initialization script */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                // Get theme from localStorage
                const savedTheme = localStorage.getItem('theme');
                // Initialize theme correctly
                if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
                  // Remove any existing theme classes
                  document.documentElement.classList.remove('light', 'dark');
                  // Apply the saved theme
                  document.documentElement.classList.add(savedTheme);
                } else {
                  // Default to dark theme
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                }
              } catch (e) {
                console.error('Error initializing theme:', e);
                // Fallback to dark theme on error
                document.documentElement.classList.add('dark');
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
