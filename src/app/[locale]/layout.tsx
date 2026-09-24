import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/routing";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return children;
}
