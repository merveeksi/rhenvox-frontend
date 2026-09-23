"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

export function HomeCapabilities() {
  const { t } = useI18n();

  const items = [
    {
      index: "01",
      title: t("home.capabilities.webTitle"),
      body: t("home.capabilities.webBody"),
      lead: true,
    },
    {
      index: "02",
      title: t("home.capabilities.mobileTitle"),
      body: t("home.capabilities.mobileBody"),
    },
    {
      index: "03",
      title: t("home.capabilities.backendTitle"),
      body: t("home.capabilities.backendBody"),
    },
    {
      index: "04",
      title: t("home.capabilities.aiTitle"),
      body: t("home.capabilities.aiBody"),
    },
  ];

  return (
    <section className="rv-caps" aria-labelledby="capabilities-title">
      <div className="rv-caps-frame">
        <div className="rv-caps-layout">
          <Reveal>
            <h2 id="capabilities-title" className="rv-caps-title">
              {t("home.capabilities.title")}
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <ol className="rv-caps-list">
              {items.map((item) => (
                <li key={item.index} className={item.lead ? "rv-caps-row is-lead" : "rv-caps-row"}>
                  <span className="rv-caps-index">{item.index}</span>
                  <h3 className="rv-caps-name">{item.title}</h3>
                  <p className="rv-caps-body">{item.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
