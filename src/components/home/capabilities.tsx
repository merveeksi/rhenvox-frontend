"use client";

import { useI18n } from "@/lib/i18n";
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
    <HomeSection>
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
        {t("home.capabilities.title")}
      </h2>
      <div className="divide-y divide-rhenvox-border border-y border-rhenvox-border">
        {items.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8"
          >
            <h3 className="text-base font-medium text-rhenvox-text">{item.title}</h3>
            <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
