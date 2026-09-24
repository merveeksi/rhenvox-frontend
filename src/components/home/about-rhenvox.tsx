"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

export function HomeAbout() {
  const { t, href } = useI18n();

  const facts = [
    { label: t("about.factCompany"), value: t("about.factCompanyValue") },
    { label: t("about.factIncorporated"), value: t("about.factIncorporatedValue") },
    { label: t("about.factRegistered"), value: t("about.factRegisteredValue") },
    { label: t("about.factOperated"), value: t("about.factOperatedValue") },
  ];

  return (
    <section className="rv-about" aria-labelledby="home-about-title">
      <div className="rv-about-frame">
        <Reveal>
          <div className="rv-about-layout">
            <h2 id="home-about-title" className="rv-about-title">
              {t("home.about.title")}
            </h2>
            <div className="rv-about-copy">
              <p className="rv-about-body">{t("home.about.body")}</p>
              <Link href={href("/about")} className="rv-about-link">
                {t("home.about.link")}
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <dl className="rv-about-facts">
            {facts.map((fact) => (
              <div key={fact.label} className="rv-about-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
