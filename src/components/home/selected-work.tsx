"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

export function HomeSelectedWork() {
  const { t } = useI18n();

  const tags = [
    t("home.work.tagWeb"),
    t("home.work.tagMobile"),
    t("home.work.tagBackend"),
  ];

  return (
    <section className="rv-work" aria-labelledby="selected-work-title">
      <div className="rv-work-frame">
        <Reveal>
          <div className="rv-work-intro">
            <h2 id="selected-work-title" className="rv-work-kicker">
              <span className="rv-work-num">01</span>
              <span className="rv-work-dash" aria-hidden="true" />
              {t("home.work.title")}
            </h2>
            <p className="rv-work-sub">{t("home.work.subtitle")}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <article className="rv-work-feature">
            <div className="rv-work-copy">
              <h3 className="rv-work-name">{t("home.work.name")}</h3>
              <p className="rv-work-lead">{t("home.work.description")}</p>
              <div className="rv-work-notes">
                <p>{t("home.work.role")}</p>
                <p>{t("home.work.mobileNote")}</p>
              </div>
              <ul className="rv-work-meta">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="rv-work-actions">
                <Link href="/work/nur-bilgi" className="rv-work-primary">
                  {t("workPage.viewCaseStudy")}
                </Link>
                <a
                  href="https://nurbilgi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rv-work-secondary"
                >
                  {t("home.work.visit")}
                  <ExternalLink aria-hidden="true" />
                </a>
              </div>
              <ul className="rv-store-links">
                <li>
                  <a href="https://apps.apple.com/us/app/nur-bilgi-quran-hadith-dua/id6755481228" target="_blank" rel="noopener noreferrer">
                    {t("nurBilgi.appStore")}
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.nurbilgi.app" target="_blank" rel="noopener noreferrer">
                    {t("nurBilgi.playStore")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rv-work-stage">
              <div className="rv-work-stage-grid" aria-hidden="true" />
              <div className="rv-work-mark" aria-hidden="true">
                01
              </div>
              <div className="rv-nb-frame" aria-hidden="true" />
              <div className="rv-work-stage-inner">
                <div className="rv-nb-plate">
                  <Image
                    src="/images/nurbilgi.logo.png"
                    alt="Nur Bilgi logo"
                    fill
                    sizes="(max-width: 640px) 70vw, 280px"
                    className="object-contain"
                  />
                </div>
                <ul className="rv-nb-index" aria-hidden="true">
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="rv-work-extra">
            <div>
              <p className="rv-work-num">02</p>
              <h3 className="rv-work-name">CoGuide</h3>
              <p className="rv-work-lead">{t("workPage.coguidSummary")}</p>
              <a
                href="https://coguid.com/tr"
                target="_blank"
                rel="noopener noreferrer"
                className="rv-work-secondary"
              >
                {t("workPage.visitCoguid")}
                <ExternalLink aria-hidden="true" />
              </a>
            </div>
            <p className="rv-shot-pending">{t("workPage.imagePending")}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
