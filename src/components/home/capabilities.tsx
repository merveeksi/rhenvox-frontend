"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";
import { HomeSection } from "./section";

export function HomeCapabilities() {
  const { t } = useI18n();

  const items = [
    { title: t("home.capabilities.webTitle"), body: t("home.capabilities.webBody") },
    { title: t("home.capabilities.mobileTitle"), body: t("home.capabilities.mobileBody") },
    { title: t("home.capabilities.backendTitle"), body: t("home.capabilities.backendBody") },
    { title: t("home.capabilities.aiTitle"), body: t("home.capabilities.aiBody") },
  ];

  return (
    <HomeSection className="rv-atmosphere">
      <Reveal>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
          {t("home.capabilities.title")}
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <article className="rv-card rv-card-hover h-full p-6 md:p-7">
              <p className="mb-3 font-mono text-xs text-rhenvox-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-lg font-medium text-rhenvox-text">{item.title}</h3>
              <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </HomeSection>
  );
}
