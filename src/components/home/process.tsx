"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

export function HomeProcess() {
  const { t } = useI18n();

  const steps = [
    { index: "01", title: t("home.process.understandTitle"), body: t("home.process.understandBody") },
    { index: "02", title: t("home.process.planTitle"), body: t("home.process.planBody") },
    { index: "03", title: t("home.process.buildTitle"), body: t("home.process.buildBody") },
    { index: "04", title: t("home.process.shipTitle"), body: t("home.process.shipBody") },
  ];

  return (
    <section className="rv-process" aria-labelledby="process-title">
      <div className="rv-process-frame">
        <Reveal>
          <h2 id="process-title" className="rv-process-title">
            {t("home.process.title")}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="rv-process-track">
            <div className="rv-process-rail" aria-hidden="true">
              <span className="rv-process-rail-fill" />
            </div>
            <ol className="rv-process-list">
              {steps.map((step) => (
                <li key={step.index} className="rv-process-item">
                  <span className="rv-process-marker" aria-hidden="true" />
                  <div className="rv-process-copy">
                    <p className="rv-process-num">{step.index}</p>
                    <h3 className="rv-process-name">{step.title}</h3>
                    <p className="rv-process-body">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
