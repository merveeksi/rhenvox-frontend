"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ProjectMeta } from "./project-meta";

export function WorkIndex() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <header className="mb-12 max-w-2xl">
        <p className="rv-kicker mb-3">{t("workPage.eyebrow")}</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          {t("workPage.title")}
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          {t("workPage.subtitle")}
        </p>
      </header>

      <article className="rv-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-rhenvox-text">
              Nur Bilgi
            </h2>
            <p className="mb-6 max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
              {t("workPage.summary")}
            </p>
            <div className="mb-8">
              <ProjectMeta
                items={[
                  { label: t("workPage.product"), value: "Nur Bilgi" },
                  { label: t("workPage.type"), value: t("workPage.typeValue") },
                  { label: t("workPage.scope"), value: t("workPage.scopeValue") },
                  { label: t("workPage.platform"), value: t("workPage.platformValue") },
                  { label: t("workPage.status"), value: t("workPage.statusValue") },
                ]}
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/work/nur-bilgi">{t("workPage.viewCaseStudy")}</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://nurbilgi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("workPage.visitNurBilgi")}
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center border-t border-rhenvox-border bg-rhenvox-surface-muted p-10 lg:border-l lg:border-t-0">
            <div className="relative h-32 w-full max-w-[12rem]">
              <Image
                src="/images/nurbilgi.logo.png"
                alt="Nur Bilgi logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </article>

      <p className="mt-12 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
        {t("workPage.ctaBody")}{" "}
        <Link href="/contact" className="text-rhenvox-accent hover:underline">
          {t("workPage.discuss")}
        </Link>
      </p>
    </div>
  );
}
