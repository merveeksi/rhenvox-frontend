"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { HomeSection } from "./section";

export function HomeAbout() {
  const { t } = useI18n();

  return (
    <HomeSection>
      <div className="max-w-2xl">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
          {t("home.about.title")}
        </h2>
        <p className="mb-6 max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("home.about.body")}
        </p>
        <Link
          href="/about"
          className="text-sm font-medium text-rhenvox-accent hover:underline"
        >
          {t("home.about.link")}
        </Link>
      </div>
    </HomeSection>
  );
}
