"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const MARKERS: NonNullable<COBEOptions["markers"]> = [
  { location: [51.5074, -0.1278], size: 0.055 },
  { location: [41.0082, 28.9784], size: 0.048 },
  { location: [40.7128, -74.006], size: 0.028 },
  { location: [35.6762, 139.6503], size: 0.028 },
  { location: [-23.5505, -46.6333], size: 0.028 },
];

export function HeroGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0.55);
  const pointerX = useRef<number | null>(null);
  const { resolvedTheme } = useTheme();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dark = resolvedTheme !== "light";
    let width = Math.max(canvas.offsetWidth, 240);
    const onResize = () => {
      width = Math.max(canvas.offsetWidth, 240);
    };
    const observer = new ResizeObserver(onResize);
    observer.observe(canvas);

    let globe: ReturnType<typeof createGlobe> | null = null;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: phiRef.current,
        theta: 0.26,
        dark: dark ? 1 : 0,
        diffuse: dark ? 1.35 : 1.28,
        mapSamples: 16000,
        mapBrightness: dark ? 4.6 : 3.1,
        mapBaseBrightness: dark ? 0.05 : 0.16,
        baseColor: dark ? [0.11, 0.125, 0.15] : [0.86, 0.87, 0.89],
        markerColor: dark ? [0.78, 0.8, 0.84] : [0.22, 0.28, 0.36],
        glowColor: dark ? [0.16, 0.18, 0.22] : [0.72, 0.75, 0.78],
        markers: MARKERS,
        scale: 1.02,
        onRender: (state) => {
          if (!reduced && pointerX.current === null) {
            phiRef.current += 0.0016;
          }
          state.phi = phiRef.current;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
      canvas.dataset.ready = "true";
    } catch {
      canvas.dataset.ready = "false";
    }

    return () => {
      globe?.destroy();
      observer.disconnect();
    };
  }, [resolvedTheme, reduced]);

  return (
    <div className={cn("rv-globe", className)} aria-hidden="true">
      <svg className="rv-globe-orbits" viewBox="0 0 100 100" fill="none">
        <defs>
          <mask id="rv-orbit-back" maskUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="black" />
            <rect x="-30" y="-30" width="160" height="82" fill="white" transform="rotate(-21 50 50)" />
          </mask>
          <mask id="rv-orbit-front" maskUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="black" />
            <rect x="-30" y="48" width="160" height="84" fill="white" transform="rotate(-21 50 50)" />
          </mask>
        </defs>
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.28" opacity="0.45" />
        <g mask="url(#rv-orbit-back)">
          <ellipse className="rv-orbit-rail" cx="50" cy="50" rx="44" ry="14.5" transform="rotate(-21 50 50)" />
          <ellipse className="rv-orbit-glint" cx="50" cy="50" rx="44" ry="14.5" transform="rotate(-21 50 50)" />
        </g>
      </svg>
      <canvas
        ref={canvasRef}
        className="rv-globe-canvas"
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
          phiRef.current += delta / 560;
        }}
      />
      <svg className="rv-globe-orbit-front" viewBox="0 0 100 100" fill="none">
        <g mask="url(#rv-orbit-front)">
          <ellipse className="rv-orbit-rail" cx="50" cy="50" rx="44" ry="14.5" transform="rotate(-21 50 50)" />
          <ellipse className="rv-orbit-glint" cx="50" cy="50" rx="44" ry="14.5" transform="rotate(-21 50 50)" />
        </g>
      </svg>
    </div>
  );
}
