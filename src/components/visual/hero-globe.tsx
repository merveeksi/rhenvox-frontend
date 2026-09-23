"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const MARKERS: NonNullable<COBEOptions["markers"]> = [
  { location: [51.5074, -0.1278], size: 0.06 },
  { location: [41.0082, 28.9784], size: 0.05 },
  { location: [40.7128, -74.006], size: 0.03 },
  { location: [35.6762, 139.6503], size: 0.03 },
  { location: [-23.5505, -46.6333], size: 0.03 },
];

export function HeroGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0.4);
  const pointerX = useRef<number | null>(null);
  const { resolvedTheme } = useTheme();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dark = resolvedTheme !== "light";
    let width = Math.max(canvas.offsetWidth, 280);
    const onResize = () => {
      width = Math.max(canvas.offsetWidth, 280);
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width * 2,
      height: width * 2,
      phi: phiRef.current,
      theta: 0.28,
      dark: dark ? 1 : 0,
      diffuse: dark ? 1.15 : 1.35,
      mapSamples: 18000,
      mapBrightness: dark ? 4.2 : 3.4,
      baseColor: dark ? [0.14, 0.18, 0.28] : [0.82, 0.85, 0.9],
      markerColor: dark ? [0.48, 0.64, 0.84] : [0.22, 0.38, 0.58],
      glowColor: dark ? [0.18, 0.24, 0.36] : [0.72, 0.78, 0.88],
      markers: MARKERS,
      onRender: (state) => {
        if (!reduced && pointerX.current === null) {
          phiRef.current += 0.0024;
        }
        state.phi = phiRef.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    canvas.style.opacity = "1";

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [resolvedTheme, reduced]);

  return (
    <div
      className={cn("relative mx-auto aspect-square w-full max-w-[34rem]", className)}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--rhenvox-accent)_22%,transparent)_0%,transparent_68%)]" />
      <div className="rv-orbit pointer-events-none absolute inset-[8%] rounded-full border border-rhenvox-border/60" />
      <div className="rv-orbit rv-orbit-slow pointer-events-none absolute inset-[2%] rounded-full border border-dashed border-rhenvox-border/40" />
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_32%_26%,color-mix(in_srgb,var(--rhenvox-accent)_55%,white)_0%,color-mix(in_srgb,var(--rhenvox-accent)_22%,transparent)_16%,#1a2230_52%,#0e1118_100%)] shadow-[inset_-24px_-18px_48px_rgba(0,0,0,0.45)]" />
      <div className="pointer-events-none absolute inset-[12%] rounded-full opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_70%_70%,transparent_40%,black_100%)]" />
      <canvas
        ref={canvasRef}
        className="relative z-[1] size-full cursor-grab opacity-0 transition-opacity duration-700 active:cursor-grabbing [contain:layout_paint_size]"
        onPointerDown={(event) => {
          pointerX.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={() => {
          pointerX.current = null;
        }}
        onPointerCancel={() => {
          pointerX.current = null;
        }}
        onPointerMove={(event) => {
          if (pointerX.current === null) return;
          const delta = event.clientX - pointerX.current;
          pointerX.current = event.clientX;
          phiRef.current += delta / 620;
        }}
      />
    </div>
  );
}
