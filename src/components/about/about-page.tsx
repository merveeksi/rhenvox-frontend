"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { useI18n } from "@/lib/i18n";

export function AboutPage() {
  const { t, href } = useI18n();

  const principles = [
    { title: t("about.p1Title"), body: t("about.p1Body") },
    { title: t("about.p2Title"), body: t("about.p2Body") },
    { title: t("about.p3Title"), body: t("about.p3Body") },
    { title: t("about.p4Title"), body: t("about.p4Body") },
  ];

  const facts = [
    { label: t("about.factCompany"), value: t("about.factCompanyValue") },
    { label: t("about.factIncorporated"), value: t("about.factIncorporatedValue") },
    { label: t("about.factRegistered"), value: t("about.factRegisteredValue") },
    { label: t("about.factOperated"), value: t("about.factOperatedValue") },
  ];

  return (
    <div className="rv-atmosphere mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <header className="mb-12 max-w-2xl md:mb-16">
        <p className="rv-kicker mb-3">{t("about.eyebrow")}</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          {t("about.title")}
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          {t("about.subtitle")}
        </p>
      </header>

      <section className="mb-12 md:mb-14">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("about.storyTitle")}
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("about.story")}
        </p>
      </section>

      <section className="rv-founder" aria-labelledby="founder-heading">
        <div className="rv-founder-portrait">
          <Image
            src="/images/profile.png"
            alt={t("about.founderAlt")}
            width={1080}
            height={1080}
            sizes="(max-width: 800px) 80vw, 280px"
            className="rv-founder-photo"
          />
        </div>
        <div className="rv-founder-copy">
          <p className="rv-kicker">{t("about.founderTitle")}</p>
          <h2 id="founder-heading" className="rv-founder-name">
            {t("about.founderName")}
          </h2>
          <p className="rv-founder-bio">{t("about.founderBody")}</p>
          <SocialLinks className="rv-founder-links" external />
        </div>
      </section>

      <section className="mb-12 md:mb-14">
        <h2 className="mb-6 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("about.howTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="rv-card h-full p-5 md:p-6">
              <h3 className="mb-2 text-base font-medium text-rhenvox-text">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-rhenvox-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 md:mb-14">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("about.factsTitle")}
        </h2>
        <dl className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {facts.map((item) => (
            <div key={item.label} className="rv-card p-5">
              <dt className="rv-kicker mb-1">{item.label}</dt>
              <dd className="break-words text-sm text-rhenvox-text">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-rhenvox-border pt-10">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href={href("/work")}>{t("about.ctaWork")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={href("/contact#quote")}>{t("about.ctaDiscuss")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
