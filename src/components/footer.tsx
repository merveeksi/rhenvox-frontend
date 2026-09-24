"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const { t, href } = useI18n();
  const year = new Date().getFullYear();

  const pages = [
    { href: "/work", label: t("navbar.work") },
    { href: "/services", label: t("navbar.services") },
    { href: "/about", label: t("navbar.about") },
    { href: "/contact", label: t("navbar.contact") },
  ];

  const legal = [
    { href: "/privacy", label: t("footer.privacyPolicy") },
    { href: "/terms", label: t("footer.termsOfService") },
    { href: "/kvkk", label: t("footer.kvkk") },
  ];

  return (
    <footer className="rv-footer">
      <div className="rv-footer-frame">
        <div className="rv-footer-main">
          <div className="rv-footer-brand">
            <Link href={href("/")} className="rv-footer-mark">
              Rhenvox
            </Link>
            <p className="rv-footer-desc">{t("footer.description")}</p>
            <a className="rv-footer-mail" href="mailto:hello@rhenvox.com">
              hello@rhenvox.com
            </a>
            <SocialLinks className="rv-footer-social" />
          </div>

          <nav className="rv-footer-nav" aria-label={t("footer.pages")}>
            <p className="rv-footer-label">{t("footer.pages")}</p>
            <ul>
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={href(link.href)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="rv-footer-nav" aria-label={t("footer.legal")}>
            <p className="rv-footer-label">{t("footer.legal")}</p>
            <ul>
              {legal.map((link) => (
                <li key={link.href}>
                  <Link href={href(link.href)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rv-footer-base">
          <p>
            © {year} {t("footer.copyright")}
          </p>
          <p>{t("about.factCompanyValue")}</p>
        </div>
      </div>
    </footer>
  );
}
