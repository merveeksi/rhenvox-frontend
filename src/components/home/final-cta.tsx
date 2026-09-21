"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { HomeSection } from "./section";

export function HomeFinalCta() {
  const { t } = useI18n();

  return (
    <HomeSection className="bg-rhenvox-surface">
      <div className="max-w-2xl">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
          {t("home.cta.title")}
        </h2>
        <p className="mb-6 max-w-prose text-base leading-relaxed text-rhenvox-muted">
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
    </HomeSection>
  );
}
