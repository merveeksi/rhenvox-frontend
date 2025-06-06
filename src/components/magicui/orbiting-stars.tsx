"use client";

import React, { useEffect, useState, useRef } from "react";

// Reduced star count for better performance
const STAR_COUNT = 16; // Reduced from 32
const MIN_SIZE = 8;
const MAX_SIZE = 18;
const MIN_DURATION = 6;
const MAX_DURATION = 14;

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

type Star = {
  size: number;
  left: number;
  bottom: number;
  duration: number;
  delay: number;
  opacity: number;
};

export const OrbitingStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Client-side only star generation with viewport detection
  useEffect(() => {
    // Observer to check if component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Generate stars only once
    const generatedStars = Array.from({ length: STAR_COUNT }).map(() => {
      const size = randomBetween(MIN_SIZE, MAX_SIZE);
      const left = randomBetween(2, 98); // %
      const bottom = randomBetween(0, 60); // % starting point
      const duration = randomBetween(MIN_DURATION, MAX_DURATION);
      const delay = randomBetween(0, MAX_DURATION);
      const opacity = randomBetween(0.25, 0.55);
      return { size, left, bottom, duration, delay, opacity };
    });
    
    setStars(generatedStars);
    
    // Cleanup function
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
        // Don't render stars when not in viewport
        visibility: isInViewport ? "visible" : "hidden"
      }}
    >
      {stars.map((star, i) => (
        <svg
          key={i}
          width={star.size}
          height={star.size}
          viewBox="0 0 20 20"
          style={{
            position: "absolute",
            left: `${star.left}%`,
            bottom: `${star.bottom}%`,
            opacity: star.opacity,
            transform: "translateZ(0)", // Hardware acceleration
            willChange: "transform", // Optimize animation performance
            animation: `star-float ${star.duration}s linear ${star.delay}s infinite`,
          }}
        >
          <polygon
            points="10,0 13,7 20,10 13,13 10,20 7,13 0,10 7,7"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      ))}
      <style>{`
        @keyframes star-float {
          0% {
            transform: translateY(0) translateZ(0);
            opacity: 1;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-120px) translateZ(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}; 