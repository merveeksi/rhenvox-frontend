"use client";

import { useState, useEffect } from "react";
import { useI18n, Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "en" ? "tr" : "en";
    setLocale(newLocale);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-md px-2 py-1.5 text-sm font-medium text-rhenvox-muted transition-colors hover:bg-rhenvox-surface-muted hover:text-rhenvox-text"
      aria-label={t("navbar.toggleLanguage")}
    >
      {locale.toUpperCase()}
    </button>
  );
}
