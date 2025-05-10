"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center mr-6">
      <div className="relative">
        <div className="rounded-md p-2">
          <span className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-rhenvox-turquoise light:from-rhenvox-turquoise-light via-rhenvox-sky light:via-rhenvox-sky-light to-rhenvox-purple light:to-rhenvox-purple-light drop-shadow-md">
            RHENVOX
          </span>
        </div>
      </div>
    </Link>
  );
} 