"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";
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
      <Reveal>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
          {t("home.process.title")}
        </h2>
      </Reveal>
      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.index}>
            <Reveal delay={index * 70}>
              <div className="rv-card rv-card-hover h-full p-6 md:p-7">
                <p className="mb-4 font-mono text-sm tracking-[0.18em] text-rhenvox-accent">
                  {step.index}
                </p>
                <h3 className="mb-2 text-lg font-medium text-rhenvox-text">{step.title}</h3>
                <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}
