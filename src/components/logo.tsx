"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center mr-6">
      <div className="font-bold text-2xl relative">
        <span className="gradient-text">RHENVOX</span>
      </div>
    </Link>
  );
} 