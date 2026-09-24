"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { localize } from "@/lib/i18n/routing";

export default function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const next = locale === "en" ? "tr" : "en";

  return (
    <button
      type="button"
      onClick={() => router.push(localize(pathname || "/", next))}
      className="rounded-md px-2 py-1.5 font-mono text-[0.68rem] tracking-[0.16em] text-rhenvox-muted transition-colors hover:text-rhenvox-text"
      aria-label={locale === "en" ? t("navbar.switchToTurkish") : t("navbar.switchToEnglish")}
    >
      {locale.toUpperCase()}
    </button>
  );
}
