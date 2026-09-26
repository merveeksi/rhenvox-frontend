"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const DARK_WORDMARK = "/images/rhenvox-header.png";
const LIGHT_WORDMARK = "/images/rhenvox-header-ink.png";

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const { href } = useI18n();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const src = mounted && resolvedTheme === "light" ? LIGHT_WORDMARK : DARK_WORDMARK;

  return (
    <Link href={href("/")} className={className ? `rv-logo ${className}` : "rv-logo"} aria-label="Rhenvox">
      <Image
        src={src}
        alt=""
        width={795}
        height={160}
        priority={priority}
        sizes="200px"
        className="rv-logo-img"
      />
    </Link>
  );
}
