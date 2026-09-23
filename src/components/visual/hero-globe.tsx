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
        diffuse: dark ? 0.78 : 1.05,
        mapSamples: 16000,
        mapBrightness: dark ? 1.55 : 2.1,
        mapBaseBrightness: dark ? 0.008 : 0.1,
        baseColor: dark ? [0.122, 0.122, 0.12] : [0.76, 0.75, 0.73],
        markerColor: dark ? [0.54, 0.545, 0.56] : [0.4, 0.43, 0.47],
        glowColor: dark ? [0.012, 0.012, 0.014] : [0.8, 0.81, 0.83],
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
          <clipPath id="rv-orbit-back-clip" clipPathUnits="userSpaceOnUse">
            <rect x="-40" y="-40" width="180" height="90" transform="rotate(-21 50 50)" />
          </clipPath>
        </defs>
        <g clipPath="url(#rv-orbit-back-clip)">
          <ellipse
            className="rv-orbit-rail"
            cx="50"
            cy="50"
            rx="54"
            ry="24"
            transform="rotate(-21 50 50)"
            stroke="rgba(167, 163, 155, 0.7)"
            strokeWidth="0.46"
          />
          <ellipse className="rv-orbit-glint" cx="50" cy="50" rx="54" ry="24" transform="rotate(-21 50 50)" />
        </g>
      </svg>
      <div className="rv-globe-sphere">
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
      </div>
      <svg className="rv-globe-orbit-front" viewBox="0 0 100 100" fill="none">
        <defs>
          <clipPath id="rv-orbit-front-clip" clipPathUnits="userSpaceOnUse">
            <rect x="-40" y="50" width="180" height="90" transform="rotate(-21 50 50)" />
          </clipPath>
        </defs>
        <g clipPath="url(#rv-orbit-front-clip)">
          <ellipse
            className="rv-orbit-rail"
            cx="50"
            cy="50"
            rx="54"
            ry="24"
            transform="rotate(-21 50 50)"
            style={{ stroke: "#f3f1ec", strokeWidth: "0.72", opacity: 0.92 }}
          />
          <ellipse className="rv-orbit-glint" cx="50" cy="50" rx="54" ry="24" transform="rotate(-21 50 50)" />
        </g>
      </svg>
    </div>
  );
}
