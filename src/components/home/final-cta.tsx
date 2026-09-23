"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";
import { HomeSection } from "./section";

export function HomeFinalCta() {
  const { t } = useI18n();

  return (
    <HomeSection className="bg-rhenvox-surface">
      <Reveal>
        <div className="rv-card relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--rhenvox-accent)_22%,transparent),transparent_70%)]" />
          <div className="relative max-w-2xl">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
              {t("home.cta.title")}
            </h2>
            <p className="mb-8 max-w-prose text-base leading-relaxed text-rhenvox-muted">
              {t("home.cta.body")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">{t("home.cta.primary")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:hello@rhenvox.com">hello@rhenvox.com</a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </HomeSection>
  );
}
