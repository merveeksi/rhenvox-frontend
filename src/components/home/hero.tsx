"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useI18n, type Locale } from "@/lib/i18n";

const HeroGlobe = dynamic(
  () => import("@/components/visual/hero-globe").then((module) => module.HeroGlobe),
  {
    ssr: false,
    loading: () => <div className="rv-globe" aria-hidden="true" />,
  }
);

const HERO_LINES: Record<Locale, readonly string[]> = {
  en: ["We build web", "and mobile products", "that are made to ship."],
  tr: ["Web ve mobil ürünleri,", "yayına çıkacak şekilde", "geliştiriyoruz."],
};

function heroLines(title: string, locale: Locale) {
  const lines = HERO_LINES[locale];
  return lines.join(" ") === title ? lines : null;
}

function CapabilityLine({ text, style }: { text: string; style?: CSSProperties }) {
  const parts = text
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <p className="rv-hero-meta rv-enter" style={style}>
      <span className="rv-hero-meta-mark" aria-hidden="true" />
      {parts.map((part, index) => (
        <span key={part} className="rv-hero-meta-item">
          {index > 0 ? <span className="rv-hero-meta-sep">·</span> : null}
          {part}
        </span>
      ))}
    </p>
  );
}

export function HomeHero() {
  const { t, locale } = useI18n();
  const title = t("home.hero.title");
  const lines = heroLines(title, locale);

  return (
    <section className="rv-hero" aria-labelledby="home-hero-title">
      <div className="rv-hero-bg" aria-hidden="true">
        <div className="rv-hero-glow" />
        <div className="rv-hero-grid" />
        <div className="rv-hero-vignette" />
        <div className="rv-hero-noise" />
      </div>

      <div className="rv-hero-frame">
        <div className="rv-hero-copy">
          <p className="rv-hero-eyebrow rv-enter">
            <span className="rv-hero-eyebrow-rule" aria-hidden="true" />
            {t("home.hero.eyebrow")}
          </p>
          <h1 id="home-hero-title" className="rv-hero-title rv-enter [animation-delay:80ms]">
            {lines
              ? lines.map((line) => (
                  <span key={line} className="rv-hero-title-line">
                    {line}
                  </span>
                ))
              : title}
          </h1>
          <p className="rv-hero-lead rv-enter [animation-delay:160ms]">{t("home.hero.description")}</p>
          <div className="rv-hero-actions rv-enter [animation-delay:240ms]">
            <Link href="/contact" className="rv-hero-primary">
              {t("home.hero.primaryCta")}
            </Link>
            <Link href="/work" className="rv-hero-secondary">
              {t("home.hero.secondaryCta")}
            </Link>
          </div>
          <CapabilityLine text={t("home.hero.line")} style={{ animationDelay: "320ms" }} />
        </div>

        <div className="rv-hero-visual">
          <div className="rv-enter-scale">
            <HeroGlobe />
          </div>
        </div>
      </div>

      <div className="rv-hero-seam" aria-hidden="true" />
    </section>
  );
}
