"use client";

import { useI18n, Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "en" ? "tr" : "en";
    setLocale(newLocale);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded-md px-2 py-1.5 text-sm font-medium text-rhenvox-muted transition-colors hover:bg-rhenvox-surface-muted hover:text-rhenvox-text"
      aria-label={locale === "en" ? t("navbar.switchToTurkish") : t("navbar.switchToEnglish")}
    >
      {locale.toUpperCase()}
    </button>
  );
}
