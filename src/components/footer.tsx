"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useState, useEffect } from "react";

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
  const [mounted, setMounted] = useState(false);
  
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