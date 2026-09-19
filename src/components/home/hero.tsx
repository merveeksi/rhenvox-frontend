"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function HomeHero() {
  const { t } = useI18n();

  return (
    <section className="px-4 pb-16 pt-24 md:px-6 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <p className="rv-kicker mb-4">{t("home.hero.eyebrow")}</p>
        <h1 className="mb-5 text-3xl font-semibold tracking-tight text-rhenvox-text sm:text-4xl md:text-[2.75rem] md:leading-tight">
          {t("home.hero.title")}
        </h1>
        <p className="mb-8 max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          {t("home.hero.description")}
        </p>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/contact">{t("home.hero.primaryCta")}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/work">{t("home.hero.secondaryCta")}</Link>
          </Button>
        </div>
        <p className="font-mono text-xs text-rhenvox-muted">
          {t("home.hero.line")}
        </p>
      </div>
    </section>
  );
}
