"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const HeroGlobe = dynamic(
  () => import("@/components/visual/hero-globe").then((module) => module.HeroGlobe),
  {
    ssr: false,
    loading: () => <div className="mx-auto aspect-square w-full max-w-[34rem]" aria-hidden="true" />,
  }
);

export function HomeHero() {
  const { t } = useI18n();

  return (
    <section className="rv-atmosphere relative overflow-hidden px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-28">
      <div className="rv-glow-spot -right-24 top-8 opacity-80" />
      <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)] lg:gap-16">
        <div>
          <p className="rv-kicker rv-enter mb-4">{t("home.hero.eyebrow")}</p>
          <h1 className="rv-enter mb-5 text-3xl font-semibold tracking-tight text-rhenvox-text sm:text-4xl md:text-[2.85rem] md:leading-tight [animation-delay:80ms]">
            {t("home.hero.title")}
          </h1>
          <p className="rv-enter mb-8 max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg [animation-delay:140ms]">
            {t("home.hero.description")}
          </p>
          <div className="rv-enter mb-10 flex flex-col gap-3 sm:flex-row [animation-delay:220ms]">
            <Button size="lg" asChild>
              <Link href="/contact">{t("home.hero.primaryCta")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/work">{t("home.hero.secondaryCta")}</Link>
            </Button>
          </div>
          <p className="rv-enter font-mono text-xs text-rhenvox-muted [animation-delay:300ms]">
            {t("home.hero.line")}
          </p>
        </div>
        <div className="rv-enter relative [animation-delay:180ms]">
          <HeroGlobe />
        </div>
      </div>
    </section>
  );
}
