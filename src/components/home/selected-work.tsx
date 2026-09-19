"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { HomeSection } from "./section";

export function HomeSelectedWork() {
  const { t } = useI18n();

  const tags = [
    t("home.work.tagWeb"),
    t("home.work.tagMobile"),
    t("home.work.tagBackend"),
  ];

  return (
    <HomeSection className="bg-rhenvox-surface">
      <div className="mb-8 max-w-2xl">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-rhenvox-text md:text-3xl">
          {t("home.work.title")}
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("home.work.subtitle")}
        </p>
      </div>

      <article className="rv-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-rhenvox-text">
              {t("home.work.name")}
            </h3>
            <p className="mb-4 max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
              {t("home.work.description")}
            </p>
            <p className="mb-3 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              {t("home.work.role")}
            </p>
            <p className="mb-5 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              {t("home.work.mobileNote")}
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-rhenvox-border px-2 py-0.5 font-mono text-xs text-rhenvox-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="https://nurbilgi.com" target="_blank" rel="noopener noreferrer">
                  {t("home.work.visit")}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/work">{t("home.work.more")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex min-h-48 items-center justify-center border-t border-rhenvox-border bg-rhenvox-surface-muted p-8 lg:border-l lg:border-t-0">
            <div className="relative h-36 w-full max-w-xs">
              <Image
                src="/images/nurbilgi.logo.png"
                alt="Nur Bilgi logo"
                fill
                sizes="(max-width: 1024px) 12rem, 16rem"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </article>
    </HomeSection>
  );
}
