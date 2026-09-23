"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

export function WorkIndex() {
  const { t } = useI18n();

  const facts = [
    { label: t("workPage.product"), value: "Nur Bilgi" },
    { label: t("workPage.type"), value: t("workPage.typeValue") },
    { label: t("workPage.scope"), value: t("workPage.scopeValue") },
    { label: t("workPage.platform"), value: t("workPage.platformValue") },
    { label: t("workPage.status"), value: t("workPage.statusValue") },
  ];

  return (
    <div className="rv-index">
      <header className="rv-index-hero">
        <div className="rv-index-frame">
          <Reveal>
            <p className="rv-index-kicker">{t("workPage.eyebrow")}</p>
            <h1 className="rv-index-title">{t("workPage.title")}</h1>
            <p className="rv-index-lead">{t("workPage.subtitle")}</p>
          </Reveal>
        </div>
      </header>

      <section className="rv-index-body" aria-labelledby="work-project-title">
        <div className="rv-index-frame">
          <Reveal delay={70}>
            <article className="rv-index-feature">
              <div className="rv-index-copy">
                <p className="rv-index-num">01</p>
                <h2 id="work-project-title" className="rv-index-name">
                  Nur Bilgi
                </h2>
                <p className="rv-index-summary">{t("workPage.summary")}</p>
                <dl className="rv-index-facts">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="rv-index-actions">
                  <Link href="/work/nur-bilgi" className="rv-work-primary">
                    {t("workPage.viewCaseStudy")}
                  </Link>
                  <a
                    href="https://nurbilgi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rv-work-secondary"
                  >
                    {t("workPage.visitNurBilgi")}
                    <ExternalLink aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rv-index-stage">
                <div className="rv-index-stage-grid" aria-hidden="true" />
                <div className="rv-index-frame-mark" aria-hidden="true" />
                <div className="rv-index-plate">
                  <Image
                    src="/images/nurbilgi.logo.png"
                    alt="Nur Bilgi logo"
                    fill
                    priority
                    sizes="(max-width: 800px) 70vw, 280px"
                    className="object-contain"
                  />
                </div>
              </div>
            </article>
          </Reveal>

          <p className="rv-index-close">
            {t("workPage.ctaBody")}{" "}
            <Link href="/contact">{t("workPage.discuss")}</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
