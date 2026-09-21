"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function AboutPage() {
  const { t } = useI18n();

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
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
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

      <section className="mb-12 md:mb-14">
        <h2 className="mb-6 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("about.howTitle")}
        </h2>
        <div className="max-w-prose divide-y divide-rhenvox-border border-y border-rhenvox-border">
          {principles.map((item) => (
            <div key={item.title} className="py-5">
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
        <dl className="grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          {facts.map((item) => (
            <div key={item.label}>
              <dt className="rv-kicker mb-1">{item.label}</dt>
              <dd className="break-words text-sm text-rhenvox-text">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-rhenvox-border pt-10">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/work">{t("about.ctaWork")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">{t("about.ctaDiscuss")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
