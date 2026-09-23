"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

export function NurBilgiCaseStudy() {
  const { t } = useI18n();

  const surfaces = [
    t("nurBilgi.tagWeb"),
    t("nurBilgi.tagMobile"),
    t("nurBilgi.tagBackend"),
  ];

  const scope = [
    t("nurBilgi.scopeWeb"),
    t("nurBilgi.scopeMobile"),
    t("nurBilgi.scopeBackend"),
  ];

  const capabilities = [
    t("nurBilgi.capQa"),
    t("nurBilgi.capQuran"),
    t("nurBilgi.capPrayer"),
    t("nurBilgi.capRelated"),
  ];

  const nodes = [
    {
      label: t("nurBilgi.archWebLabel"),
      value: t("nurBilgi.archWebValue"),
      note: "TypeScript",
    },
    {
      label: t("nurBilgi.archMobileLabel"),
      value: t("nurBilgi.archMobileValue"),
      note: "TypeScript",
    },
  ];

  return (
    <article className="rv-case">
      <header className="rv-case-hero">
        <div className="rv-case-frame">
          <Reveal>
            <p className="rv-case-back">
              <Link href="/work">{t("nurBilgi.back")}</Link>
            </p>
            <div className="rv-case-hero-layout">
              <div className="rv-case-hero-copy">
                <p className="rv-case-kicker">{t("workPage.eyebrow")}</p>
                <h1 className="rv-case-title">{t("nurBilgi.title")}</h1>
                <p className="rv-case-desc">{t("nurBilgi.description")}</p>
                <ul className="rv-work-meta">
                  {surfaces.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="rv-case-actions">
                  <a
                    href="https://nurbilgi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rv-work-primary"
                  >
                    {t("nurBilgi.visit")}
                    <ExternalLink aria-hidden="true" />
                  </a>
                  <Link href="/contact" className="rv-work-secondary">
                    {t("nurBilgi.discuss")}
                  </Link>
                </div>
              </div>

              <div className="rv-case-stage">
                <div className="rv-case-stage-grid" aria-hidden="true" />
                <div className="rv-case-frame-mark" aria-hidden="true" />
                <div className="rv-case-plate">
                  <Image
                    src="/images/nurbilgi.logo.png"
                    alt="Nur Bilgi logo"
                    fill
                    priority
                    sizes="(max-width: 800px) 72vw, 320px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="rv-case-statement" aria-labelledby="nb-overview">
        <div className="rv-case-frame">
          <Reveal>
            <h2 id="nb-overview" className="rv-case-label">
              {t("nurBilgi.overviewTitle")}
            </h2>
            <p>{t("nurBilgi.overview")}</p>
          </Reveal>
        </div>
      </section>

      <section className="rv-case-scope" aria-labelledby="nb-scope">
        <div className="rv-case-frame">
          <Reveal>
            <h2 id="nb-scope" className="rv-case-label">
              {t("nurBilgi.scopeTitle")}
            </h2>
            <ol className="rv-case-scope-list">
              {scope.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="rv-case-arch" aria-labelledby="nb-arch">
        <div className="rv-case-frame">
          <Reveal>
            <h2 id="nb-arch" className="rv-case-label">
              {t("nurBilgi.architectureTitle")}
            </h2>
            <p className="rv-case-arch-lead">{t("nurBilgi.architecture")}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rv-arch">
              <ul className="rv-arch-sources">
                {nodes.map((node) => (
                  <li key={node.label}>
                    <span className="rv-arch-label">{node.label}</span>
                    <span className="rv-arch-value">{node.value}</span>
                    <span className="rv-arch-note">{node.note}</span>
                  </li>
                ))}
              </ul>
              <div className="rv-arch-join" aria-hidden="true">
                <span className="rv-arch-bridge" />
                <span className="rv-arch-stem" />
              </div>
              <div className="rv-arch-core">
                <span className="rv-arch-label">{t("nurBilgi.archBackendLabel")}</span>
                <span className="rv-arch-value">{t("nurBilgi.archBackendValue")}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rv-case-caps" aria-labelledby="nb-caps">
        <div className="rv-case-frame">
          <Reveal>
            <h2 id="nb-caps" className="rv-case-label">
              {t("nurBilgi.capabilitiesTitle")}
            </h2>
            <ul className="rv-case-cap-list">
              {capabilities.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="rv-case-end" aria-labelledby="nb-live">
        <div className="rv-case-frame">
          <Reveal>
            <h2 id="nb-live" className="rv-case-label">
              {t("nurBilgi.liveTitle")}
            </h2>
            <p className="rv-case-end-body">{t("nurBilgi.liveBody")}</p>
            <a
              className="rv-case-url"
              href="https://nurbilgi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nurbilgi.com
              <ExternalLink aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="rv-case-close" aria-labelledby="nb-close">
        <div className="rv-case-frame">
          <Reveal>
            <h2 id="nb-close" className="rv-case-close-title">
              {t("nurBilgi.ctaTitle")}
            </h2>
            <p>{t("nurBilgi.ctaBody")}</p>
            <div className="rv-case-actions">
              <Link href="/contact" className="rv-work-primary">
                {t("nurBilgi.discuss")}
              </Link>
              <Link href="/work" className="rv-case-return">
                {t("nurBilgi.back")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
