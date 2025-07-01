"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/" className="flex items-center mr-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-sky to-rhenvox-purple opacity-10 blur-md rounded-full transform scale-125"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rhenvox-purple to-rhenvox-turquoise opacity-15 animate-pulse rounded-full"></div>
        <div className="relative rounded-xl p-3 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm">
          <span className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-sky to-rhenvox-purple">
            RHENVOX
          </span>
        </div>
      </div>
    </Link>
  );
} 