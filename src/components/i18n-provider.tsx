"use client";

import { ReactNode, createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { en } from "@/lib/i18n/dictionaries/en";
import { tr } from "@/lib/i18n/dictionaries/tr";
import { localeFromPath, localize, type Locale } from "@/lib/i18n/routing";

export type { Locale };

interface I18nContextType {
  locale: Locale;
  t: (key: string) => string;
  href: (path: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  tr,
};

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const pathname = usePathname();
  const active = localeFromPath(pathname) ?? locale;

  useEffect(() => {
    document.documentElement.lang = active;
  }, [active]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = dictionaries[active];
    for (const part of keys) {
      value = (value as Record<string, unknown> | undefined)?.[part];
      if (!value) break;
    }
    return typeof value === "string" ? value : key;
  };

  const href = (path: string) => localize(path, active);

  return (
    <I18nContext.Provider value={{ locale: active, t, href }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
