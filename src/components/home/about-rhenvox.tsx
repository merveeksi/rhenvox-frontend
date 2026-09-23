"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";
import { HomeSection } from "./section";

export function HomeAbout() {
  const { t } = useI18n();

  return (
    <HomeSection>
      <Reveal>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
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
          <aside className="rv-card p-6 md:p-7">
            <p className="rv-kicker mb-4">{t("about.factsTitle")}</p>
            <dl className="space-y-4">
              <div>
                <dt className="mb-1 text-xs text-rhenvox-muted">{t("about.factRegistered")}</dt>
                <dd className="text-sm text-rhenvox-text">{t("about.factRegisteredValue")}</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs text-rhenvox-muted">{t("about.factOperated")}</dt>
                <dd className="text-sm text-rhenvox-text">{t("about.factOperatedValue")}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Reveal>
    </HomeSection>
  );
}
