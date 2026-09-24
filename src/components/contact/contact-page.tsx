"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { useI18n } from "@/lib/i18n";

export function ContactPage() {
  const { t } = useI18n();

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const product = String(data.get("product") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, `Build: ${product}`, "", message].join("\n");
    const href = `mailto:hello@rhenvox.com?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

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

      <section id="quote" className="rv-card mb-8 scroll-mt-24 p-6 md:mb-10 md:p-8">
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-rhenvox-text">
          {t("contact.quoteTitle")}
        </h2>
        <p className="mb-6 max-w-prose text-base leading-relaxed text-rhenvox-muted">
          {t("contact.quoteBody")}
        </p>
        <form className="grid max-w-xl gap-4" onSubmit={submitQuote}>
          <label className="grid gap-1.5 text-sm text-rhenvox-text">
            {t("contact.quoteName")}
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              className="h-11 rounded-md border border-rhenvox-border bg-transparent px-3 text-base text-rhenvox-text"
            />
          </label>
          <label className="grid gap-1.5 text-sm text-rhenvox-text">
            {t("contact.quoteEmail")}
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-11 rounded-md border border-rhenvox-border bg-transparent px-3 text-base text-rhenvox-text"
            />
          </label>
          <fieldset className="grid gap-2">
            <legend className="mb-1 text-sm text-rhenvox-text">{t("contact.quoteProduct")}</legend>
            {[
              ["web", t("contact.quoteWeb")],
              ["mobile", t("contact.quoteMobile")],
              ["both", t("contact.quoteBoth")],
            ].map(([value, label]) => (
              <label key={value} className="flex items-center gap-2 text-base text-rhenvox-text">
                <input type="radio" name="product" value={value} required defaultChecked={value === "both"} />
                {label}
              </label>
            ))}
          </fieldset>
          <label className="grid gap-1.5 text-sm text-rhenvox-text">
            {t("contact.quoteMessage")}
            <textarea
              name="message"
              required
              rows={5}
              className="rounded-md border border-rhenvox-border bg-transparent px-3 py-2 text-base leading-relaxed text-rhenvox-text"
            />
          </label>
          <div>
            <Button type="submit">{t("contact.quoteSubmit")}</Button>
          </div>
          <p className="text-sm leading-relaxed text-rhenvox-muted">{t("contact.quoteNote")}</p>
        </form>
      </section>

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
          {t("footer.social")}
        </h2>
        <SocialLinks />
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
