"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="rv-atmosphere mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <header className="mb-12 max-w-2xl md:mb-16">
        <p className="rv-kicker mb-3">{t("contact.eyebrow")}</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          {t("contact.title")}
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          {t("contact.subtitle")}
        </p>
      </header>

      <section className="rv-card mb-8 p-6 md:mb-10 md:p-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("contact.emailTitle")}
        </h2>
        <p className="mb-4 max-w-prose break-words font-mono text-lg text-rhenvox-text">
          <a
            href="mailto:hello@rhenvox.com"
            className="hover:text-rhenvox-accent"
          >
            hello@rhenvox.com
          </a>
        </p>
        <p className="mb-4 max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("contact.emailLead")}
        </p>
        <ul className="mb-6 max-w-prose list-disc space-y-2 pl-5 text-base leading-relaxed text-rhenvox-muted">
          <li>{t("contact.q1")}</li>
          <li>{t("contact.q2")}</li>
          <li>{t("contact.q3")}</li>
          <li>{t("contact.q4")}</li>
        </ul>
        <Button asChild>
          <a href="mailto:hello@rhenvox.com">{t("contact.emailCta")}</a>
        </Button>
      </section>

      <section className="rv-card mb-8 p-6 md:mb-10 md:p-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("contact.otherTitle")}
        </h2>
        <dl className="max-w-prose space-y-3">
          <div>
            <dt className="rv-kicker mb-1">{t("contact.phoneLabel")}</dt>
            <dd>
              <a
                href="tel:+447845722801"
                className="break-words text-sm text-rhenvox-text hover:text-rhenvox-accent"
              >
                +44 7845 722801
              </a>
            </dd>
          </div>
          <div>
            <dt className="rv-kicker mb-1">{t("contact.whatsappLabel")}</dt>
            <dd>
              <a
                href="https://wa.me/447845722801"
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-sm text-rhenvox-text hover:text-rhenvox-accent"
              >
                WhatsApp +44 7845 722801
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="rv-card mb-8 p-6 md:mb-10 md:p-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("contact.officeTitle")}
        </h2>
        <p className="mb-4 max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("contact.officeNote")}
        </p>
        <address className="max-w-prose not-italic text-base leading-relaxed text-rhenvox-text">
          <p className="break-words">{t("contact.address1")}</p>
          <p className="break-words">{t("contact.address2")}</p>
          <p className="break-words">{t("contact.address3")}</p>
        </address>
        <p className="mt-4 max-w-prose break-words text-sm text-rhenvox-muted">
          {t("contact.companyNumberLabel")}: {t("contact.companyNumberValue")}
        </p>
      </section>

      <section className="rv-card p-6 md:p-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("contact.turkeyTitle")}
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("contact.turkeyBody")}
        </p>
      </section>
    </div>
  );
}
