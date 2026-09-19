"use client";

import { useI18n } from "@/lib/i18n";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function ServicesPage() {
  const { t } = useI18n();

  const services = [
    {
      title: t("services.categories.software.title"),
      description: t("services.categories.software.description"),
      features: [
        "Web applications",
        "Backend and API development",
        "Product development",
        "Integrations",
        "Maintenance and improvement of existing products",
      ],
    },
    {
      title: t("services.categories.design.title"),
      description: t("services.categories.design.description"),
      features: [
        "React Native applications",
        "iOS and Android product development",
        "API-connected mobile apps",
        "Release and support work",
      ],
    },
    {
      title: t("services.categories.ai.title"),
      description: t("services.categories.ai.description"),
      features: [
        "AI-assisted product features",
        "API-based model integrations",
        "Chat and Q&A assistants inside an existing product",
      ],
    },
  ];

  const consulting = {
    title: "Product & Technical Consulting",
    description: "Architecture, technical planning, product implementation decisions, and modernization of existing software. This is advisory and implementation support, not a claim of large enterprise transformation programmes.",
    features: [
      "Technical architecture and planning",
      "Product implementation decisions",
      "Modernization of existing systems",
    ],
  };

  const engagementModels = [
    {
      title: "Fixed Scope Projects",
      description: "A defined piece of work with agreed requirements and deliverables.",
    },
    {
      title: "Time & Materials",
      description: "Ongoing development where requirements can change as the product evolves.",
    },
  ];

  const processSteps = [
    { name: t("services.process.discovery"), description: "Clarify the product, constraints, and required work" },
    { name: t("services.process.planning"), description: "Agree scope, architecture, and a delivery plan" },
    { name: t("services.process.design"), description: "Shape the product interface and flows where needed" },
    { name: t("services.process.development"), description: "Build the web, mobile, and API pieces in scope" },
    { name: t("services.process.testing"), description: "Check the work before release" },
    { name: t("services.process.deployment"), description: "Ship the product" },
    { name: t("services.process.support"), description: "Maintenance and follow-on improvements when agreed" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-12 max-w-2xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          {t("services.pageTitle")}
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          {t("services.heroSubtitle")}
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-rhenvox-text">What we offer</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rv-card p-6">
              <h3 className="mb-2 text-base font-medium text-rhenvox-text">{service.title}</h3>
              <p className="mb-5 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-rhenvox-muted">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rv-card mt-4 p-6">
          <h3 className="mb-2 text-base font-medium text-rhenvox-text">{consulting.title}</h3>
          <p className="mb-5 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
            {consulting.description}
          </p>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {consulting.features.map((feature) => (
              <li key={feature} className="text-sm text-rhenvox-muted">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-rhenvox-text">
          {t("services.process.title")}
        </h2>
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.name} className="rv-card p-4">
              <p className="mb-1 font-mono text-xs text-rhenvox-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-1 text-sm font-medium text-rhenvox-text">{step.name}</h3>
              <p className="text-xs leading-relaxed text-rhenvox-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-rhenvox-text">Ways of working</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {engagementModels.map((model) => (
            <div key={model.title} className="rv-card p-6">
              <h3 className="mb-2 text-base font-medium text-rhenvox-text">{model.title}</h3>
              <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rv-card p-6 md:p-8">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-rhenvox-text">
          Have a project in mind?
        </h2>
        <p className="mb-6 max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
          If you need web, mobile, or API work — including practical AI features inside a product — get in touch.
        </p>
        <ShimmerButton href="/contact">
          <span>Get in touch</span>
        </ShimmerButton>
      </div>
    </div>
  );
}
