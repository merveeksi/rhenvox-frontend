"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/visual/reveal";

function ServiceArea({
  title,
  body,
  items,
}: {
  title: string;
  body: string;
  items: string[];
}) {
  return (
    <Reveal>
      <section className="rv-card rv-card-hover mb-6 p-6 md:mb-8 md:p-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
          {title}
        </h2>
        <p className="mb-4 max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {body}
        </p>
        <ul className="max-w-prose list-disc space-y-2 pl-5 text-base leading-relaxed text-rhenvox-muted">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

export function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="rv-atmosphere mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <header className="mb-12 max-w-2xl md:mb-16">
        <p className="rv-kicker mb-3">{t("services.eyebrow")}</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          {t("services.title")}
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          {t("services.subtitle")}
        </p>
      </header>

      <ServiceArea
        title={t("services.webTitle")}
        body={t("services.webBody")}
        items={[
          t("services.web1"),
          t("services.web2"),
          t("services.web3"),
          t("services.web4"),
          t("services.web5"),
        ]}
      />

      <ServiceArea
        title={t("services.mobileTitle")}
        body={t("services.mobileBody")}
        items={[
          t("services.mobile1"),
          t("services.mobile2"),
          t("services.mobile3"),
          t("services.mobile4"),
          t("services.mobile5"),
          t("services.mobile6"),
        ]}
      />

      <ServiceArea
        title={t("services.backendTitle")}
        body={t("services.backendBody")}
        items={[
          t("services.backend1"),
          t("services.backend2"),
          t("services.backend3"),
          t("services.backend4"),
          t("services.backend5"),
        ]}
      />

      <ServiceArea
        title={t("services.aiTitle")}
        body={t("services.aiBody")}
        items={[
          t("services.ai1"),
          t("services.ai2"),
          t("services.ai3"),
          t("services.ai4"),
        ]}
      />

      <Reveal>
        <section className="rv-card mb-6 p-6 md:mb-8 md:p-8">
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
            {t("services.engageTitle")}
          </h2>
          <p className="mb-4 max-w-prose text-base leading-relaxed text-rhenvox-muted">
            {t("services.engageIntro")}
          </p>
          <ol className="max-w-prose list-decimal space-y-2 pl-5 text-base leading-relaxed text-rhenvox-muted">
            <li>{t("services.engage1")}</li>
            <li>{t("services.engage2")}</li>
            <li>{t("services.engage3")}</li>
            <li>{t("services.engage4")}</li>
          </ol>
        </section>
      </Reveal>

      <section className="border-t border-rhenvox-border pt-10">
        <h2 className="mb-6 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("services.ctaTitle")}
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/contact">{t("services.ctaPrimary")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/work">{t("services.ctaSecondary")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
