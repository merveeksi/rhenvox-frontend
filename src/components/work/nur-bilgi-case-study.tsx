"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { CaseStudySection } from "./case-study-section";
import { TechnicalStack } from "./technical-stack";

export function NurBilgiCaseStudy() {
  const { t } = useI18n();

  const tags = [
    t("nurBilgi.tagWeb"),
    t("nurBilgi.tagMobile"),
    t("nurBilgi.tagBackend"),
  ];

  const scope = [
    t("nurBilgi.scopeWeb"),
    t("nurBilgi.scopeMobile"),
    t("nurBilgi.scopeBackend"),
  ];

  const architecture = [
    { label: t("nurBilgi.archWebLabel"), value: t("nurBilgi.archWebValue") },
    { label: t("nurBilgi.archMobileLabel"), value: t("nurBilgi.archMobileValue") },
    { label: t("nurBilgi.archBackendLabel"), value: t("nurBilgi.archBackendValue") },
  ];

  const capabilities = [
    t("nurBilgi.capQa"),
    t("nurBilgi.capQuran"),
    t("nurBilgi.capPrayer"),
    t("nurBilgi.capRelated"),
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <p className="mb-8">
        <Link
          href="/work"
          className="text-sm text-rhenvox-muted transition-colors hover:text-rhenvox-text"
        >
          ← {t("nurBilgi.back")}
        </Link>
      </p>

      <header className="mb-12 border-b border-rhenvox-border pb-10 md:mb-16 md:pb-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-start">
          <div>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
              {t("nurBilgi.title")}
            </h1>
            <p className="mb-5 max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
              {t("nurBilgi.description")}
            </p>
            <div className="mb-8">
              <TechnicalStack items={tags} />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a
                  href="https://nurbilgi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("nurBilgi.visit")}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">{t("nurBilgi.discuss")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-rhenvox-border bg-rhenvox-surface p-6">
            <div className="relative h-24 w-full max-w-[9rem]">
              <Image
                src="/images/nurbilgi.logo.png"
                alt="Nur Bilgi logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <CaseStudySection title={t("nurBilgi.overviewTitle")}>
        <p>{t("nurBilgi.overview")}</p>
      </CaseStudySection>

      <CaseStudySection title={t("nurBilgi.scopeTitle")}>
        <ul className="list-disc space-y-2 pl-5">
          {scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title={t("nurBilgi.architectureTitle")}>
        <p>{t("nurBilgi.architecture")}</p>
        <dl className="divide-y divide-rhenvox-border border-y border-rhenvox-border">
          {architecture.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
            >
              <dt className="font-mono text-xs text-rhenvox-muted">{row.label}</dt>
              <dd className="text-sm text-rhenvox-text">{row.value}</dd>
            </div>
          ))}
        </dl>
        <TechnicalStack items={["Next.js", "React Native", "TypeScript", ".NET"]} />
      </CaseStudySection>

      <CaseStudySection title={t("nurBilgi.capabilitiesTitle")}>
        <ul className="list-disc space-y-2 pl-5">
          {capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title={t("nurBilgi.liveTitle")}>
        <p>{t("nurBilgi.liveBody")}</p>
        <p>
          <a
            href="https://nurbilgi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rhenvox-accent hover:underline"
          >
            nurbilgi.com
          </a>
        </p>
      </CaseStudySection>

      <section className="border-t border-rhenvox-border pt-10">
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("nurBilgi.ctaTitle")}
        </h2>
        <p className="mb-6 max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("nurBilgi.ctaBody")}
        </p>
        <Button asChild>
          <Link href="/contact">{t("nurBilgi.discuss")}</Link>
        </Button>
      </section>
    </article>
  );
}
