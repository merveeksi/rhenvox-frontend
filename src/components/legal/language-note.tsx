"use client";

import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export function LegalLanguageNote() {
  const pathname = usePathname();
  const { locale, t } = useI18n();
  const page = pathname.split("/").filter(Boolean).pop();

  if ((page === "privacy" || page === "terms") && locale === "tr") {
    return <p className="mb-6 text-sm leading-relaxed text-rhenvox-muted">{t("legal.writtenInEnglish")}</p>;
  }

  if (page === "kvkk" && locale === "en") {
    return <p className="mb-6 text-sm leading-relaxed text-rhenvox-muted">{t("legal.writtenInTurkish")}</p>;
  }

  return null;
}
