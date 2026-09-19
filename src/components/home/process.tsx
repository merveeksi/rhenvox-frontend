"use client";

import { useI18n } from "@/lib/i18n";
import { HomeSection } from "./section";

export function HomeProcess() {
  const { t } = useI18n();

  const steps = [
    { index: "01", title: t("home.process.understandTitle"), body: t("home.process.understandBody") },
    { index: "02", title: t("home.process.planTitle"), body: t("home.process.planBody") },
    { index: "03", title: t("home.process.buildTitle"), body: t("home.process.buildBody") },
    { index: "04", title: t("home.process.shipTitle"), body: t("home.process.shipBody") },
  ];

  return (
    <HomeSection className="bg-rhenvox-surface">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
        {t("home.process.title")}
      </h2>
      <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step.index}>
            <p className="mb-2 font-mono text-xs text-rhenvox-muted">{step.index}</p>
            <h3 className="mb-2 text-base font-medium text-rhenvox-text">{step.title}</h3>
            <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}
