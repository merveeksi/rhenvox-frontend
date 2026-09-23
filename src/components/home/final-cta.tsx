"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

export function HomeFinalCta() {
  const { t } = useI18n();

  return (
    <section className="rv-close" aria-labelledby="home-cta-title">
      <div className="rv-close-glow" aria-hidden="true" />
      <div className="rv-close-frame">
        <Reveal>
          <h2 id="home-cta-title" className="rv-close-title">
            {t("home.cta.title")}
          </h2>
          <p className="rv-close-body">{t("home.cta.body")}</p>
          <div className="rv-close-actions">
            <Link href="/contact" className="rv-work-primary">
              {t("home.cta.primary")}
            </Link>
            <a className="rv-close-mail" href="mailto:hello@rhenvox.com">
              hello@rhenvox.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
