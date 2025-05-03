"use client";

import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = [
  {
    title: "Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://twitter.com/rhenvox", label: "Twitter" },
      { href: "https://linkedin.com/company/rhenvox", label: "LinkedIn" },
      { href: "https://github.com/rhenvox", label: "GitHub" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-rhenvox-surface pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-rhenvox-muted max-w-xs">
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
                      className="text-rhenvox-muted hover:text-rhenvox-sky transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-rhenvox-bg/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-rhenvox-muted text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Rhenvox. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@rhenvox.com"
                className="text-rhenvox-muted hover:text-rhenvox-sky transition-colors text-sm"
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