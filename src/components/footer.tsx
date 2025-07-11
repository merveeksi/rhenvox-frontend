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
      title: t('footer.pages'),
      links: [
        { href: "/", label: t('navbar.home') },
        { href: "/about", label: t('navbar.about') },
        { href: "/services", label: t('navbar.services') },
        { href: "/portfolio", label: t('navbar.portfolio') },
        { href: "/blog", label: t('navbar.blog') },
        { href: "/careers", label: t('navbar.careers') },
        { href: "/contact", label: t('navbar.contact') },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { href: "/privacy", label: t('footer.privacyPolicy') },
        { href: "/terms", label: t('footer.termsOfService') },
        { href: "/kvkk", label: t('footer.kvkk') },
      ],
    },
    {
      title: t('footer.social'),
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
  
  // Provide a stable server-side rendering version
  if (!mounted) {
    return (
      <footer className="pt-16 pb-8 px-4 md:px-8 bg-rhenvox-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="mb-6">
                <Logo />
              </div>
              <p className="max-w-xs text-rhenvox-muted">
                Premium software engineering, AI R&D, and UI/UX design services
              </p>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold mb-4 text-lg">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-rhenvox-sky transition-colors text-rhenvox-muted"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-rhenvox-bg/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-4 md:mb-0 text-rhenvox-muted">
                © {new Date().getFullYear()} Rhenvox. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:hello@rhenvox.com"
                  className="hover:text-rhenvox-sky transition-colors text-sm text-rhenvox-muted"
                >
                  hello@rhenvox.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  return (
    <footer className="pt-16 pb-8 px-4 md:px-8 bg-rhenvox-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="max-w-xs text-rhenvox-muted">
              Premium software engineering, AI R&D, and UI/UX design services
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4 text-lg">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-rhenvox-sky transition-colors text-rhenvox-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-rhenvox-bg/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-rhenvox-muted">
              {t('footer.copyright').replace('2023', new Date().getFullYear().toString())}
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@rhenvox.com"
                className="hover:text-rhenvox-sky transition-colors text-sm text-rhenvox-muted"
              >
                hello@rhenvox.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 