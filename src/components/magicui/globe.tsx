"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

// Optimized settings with slightly increased size
const GLOBE_CONFIG: COBEOptions = {
  width: 1000, // Increased from 800
  height: 1000, // Increased from 800
  onRender: () => {},
  devicePixelRatio: 1.2, // Slightly increased from 1
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.2,
  mapSamples: 10000, // Slightly increased from 8000 but still much lower than original 40000
  mapBrightness: 3,
  baseColor: [0.1, 0.1, 0.15],
  markerColor: [1, 1, 1],
  glowColor: [0.8, 0.8, 0.9],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const globeInstanceRef = useRef<any>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  // Enhanced viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting);
          // Add a small delay to prevent unnecessary renders
          setTimeout(() => {
            setIsVisible(entry.isIntersecting);
          }, 100);
        });
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current && isVisible) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Only create globe when visible
    if (!isVisible) return;

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: Math.min(widthRef.current * 1.8, 1000), // Increased multiplier and max size
      height: Math.min(widthRef.current * 1.8, 1000), // Increased multiplier and max size
      onRender: (state) => {
        // Only rotate when in viewport, visible, and not interacting
        if (isInViewport && isVisible && !pointerInteracting.current) {
          phiRef.current += 0.001; // Kept slow rotation for better performance
        }
        state.phi = phiRef.current + rs.get();
        state.width = Math.min(widthRef.current * 1.8, 1400);
        state.height = Math.min(widthRef.current * 1.8, 1400);
      },
    });

    globeInstanceRef.current = globe;

    // Delayed opacity for smoother loading
    const timeoutId = setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 200);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
      clearTimeout(timeoutId);
    };
  }, [rs, config, isVisible, isInViewport]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[1200px]", // Increased max width from 800px to 1200px
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]",
          !isVisible && "pointer-events-none" // Disable interactions when not visible
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          if (!isVisible) return;
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => isVisible && updateMovement(e.clientX)}
        onTouchMove={(e) =>
          isVisible && e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
