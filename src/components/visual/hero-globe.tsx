"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const MARKERS: NonNullable<COBEOptions["markers"]> = [
  { location: [51.5074, -0.1278], size: 0.09 },
  { location: [41.0082, 28.9784], size: 0.085 },
];

export function HeroGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(4.5);
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
        theta: 0.18,
        dark: dark ? 1 : 0,
        diffuse: dark ? 0.7 : 1.15,
        mapSamples: 16000,
        mapBrightness: dark ? 6.4 : 3.1,
        mapBaseBrightness: dark ? 0 : 0.12,
        baseColor: dark ? [0.16, 0.18, 0.22] : [0.86, 0.87, 0.89],
        markerColor: dark ? [1, 1, 1] : [0.18, 0.32, 0.52],
        glowColor: dark ? [0.04, 0.055, 0.08] : [0.72, 0.75, 0.78],
        markers: MARKERS,
        scale: 1.02,
        onRender: (state) => {
          if (!reduced && pointerX.current === null) {
            phiRef.current += 0.0022;
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
          <clipPath id="rv-orbit-back-clip" clipPathUnits="userSpaceOnUse">
            <rect x="-40" y="-40" width="180" height="90" transform="rotate(-21 50 50)" />
          </clipPath>
        </defs>
        <g clipPath="url(#rv-orbit-back-clip)">
          <ellipse className="rv-orbit-rail" cx="50" cy="50" rx="46" ry="15" transform="rotate(-21 50 50)" />
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
        <defs>
          <clipPath id="rv-orbit-front-clip" clipPathUnits="userSpaceOnUse">
            <rect x="-40" y="50" width="180" height="90" transform="rotate(-21 50 50)" />
          </clipPath>
        </defs>
        <g clipPath="url(#rv-orbit-front-clip)">
          <ellipse className="rv-orbit-rail" cx="50" cy="50" rx="46" ry="15" transform="rotate(-21 50 50)" />
        </g>
      </svg>
    </div>
  );
}
