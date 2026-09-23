"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon
        points="16,2 20,12 30,16 20,20 16,30 12,20 2,16 12,12"
        fill="currentColor"
        fillOpacity="0.92"
      />
    </svg>
  );
}

export function StarScrollbar() {
  const reduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(min-width: 1024px)");
    const updateMedia = () => setDesktop(media.matches);
    updateMedia();
    media.addEventListener("change", updateMedia);

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      media.removeEventListener("change", updateMedia);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!mounted || !desktop || reduced) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden w-12 lg:block" aria-hidden="true">
      <div
        className="absolute right-1 flex w-10 flex-col items-center"
        style={{ top: `calc(8.25rem + ${progress} * (100vh - 11rem))` }}
      >
        <span className="relative text-rhenvox-accent">
          <Star size={22} />
          <span className="absolute -left-2 top-3 text-rhenvox-accent/70">
            <Star size={8} />
          </span>
          <span className="absolute -right-1.5 top-1 text-rhenvox-accent/55">
            <Star size={6} />
          </span>
        </span>
      </div>
    </div>
  );
}
