"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  const footerLinks = [
    {
      title: t("footer.pages"),
      links: [
        { href: "/work", label: t("navbar.work") },
        { href: "/services", label: t("navbar.services") },
        { href: "/about", label: t("navbar.about") },
        { href: "/contact", label: t("navbar.contact") },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { href: "/privacy", label: t("footer.privacyPolicy") },
        { href: "/terms", label: t("footer.termsOfService") },
        { href: "/kvkk", label: t("footer.kvkk") },
      ],
    },
    {
      title: t("footer.social"),
      links: [
        { href: "https://twitter.com/rhenvox", label: "Twitter" },
        { href: "https://linkedin.com/company/rhenvox", label: "LinkedIn" },
        { href: "https://github.com/rhenvox", label: "GitHub" },
      ],
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const year = new Date().getFullYear();
  const description = t("footer.description");
  const copyright = `© ${year} ${t("footer.copyright")}`;

  return (
    <footer className="border-t border-rhenvox-border bg-rhenvox-bg px-4 py-14 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-rhenvox-muted">
              {description}
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-medium text-rhenvox-text">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-rhenvox-muted transition-colors hover:text-rhenvox-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-rhenvox-border pt-6 md:flex-row md:items-center">
          <p className="text-sm text-rhenvox-muted">
            {mounted ? copyright : `\u00A9 ${year} Rhenvox. All rights reserved.`}
          </p>
          <a
            href="mailto:hello@rhenvox.com"
            className="text-sm text-rhenvox-muted transition-colors hover:text-rhenvox-accent"
          >
            hello@rhenvox.com
          </a>
        </div>
      </div>
    </footer>
  );
}
