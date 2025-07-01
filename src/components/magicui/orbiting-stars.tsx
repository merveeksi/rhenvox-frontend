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

type OrbStar = {
  size: number;
  left: number;
  bottom: number;
  duration: number;
  delay: number;
  opacity: number;
  translateX: number;
  translateY: number;
  scale: number;
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

// New OrbStars component with smaller, more subtle stars
export const OrbStars: React.FC = () => {
  const [stars, setStars] = useState<OrbStar[]>([]);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

    // Generate more stars but smaller and more subtle
    const generatedStars = Array.from({ length: 24 }).map(() => {
      const size = randomBetween(3, 8);
      const left = randomBetween(0, 100); // %
      const bottom = randomBetween(0, 100); // % starting point
      const duration = randomBetween(15, 40);
      const delay = randomBetween(0, 20);
      const opacity = randomBetween(0.1, 0.4);
      // Add transform values for each star
      const translateX = (Math.random() > 0.5 ? 1 : -1) * randomBetween(20, 50);
      const translateY = (Math.random() > 0.5 ? 1 : -1) * randomBetween(20, 50);
      const scale = randomBetween(0.8, 1.2);
      return { 
        size, 
        left, 
        bottom, 
        duration, 
        delay, 
        opacity,
        translateX,
        translateY,
        scale
      };
    });
    
    setStars(generatedStars);
    
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
        overflow: "hidden",
        visibility: isInViewport ? "visible" : "hidden"
      }}
    >
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${star.left}%`,
            top: `${star.bottom}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            backgroundColor: "currentColor",
            opacity: star.opacity,
            transform: "translateZ(0)",
            willChange: "transform",
            animation: `orb-float-${i} ${star.duration}s ease-in-out ${star.delay}s infinite alternate`
          }}
        />
      ))}
      <style>
        {stars.map((star, i) => (
          `@keyframes orb-float-${i} {
            0% {
              transform: translate(0, 0) scale(1) translateZ(0);
            }
            100% {
              transform: translate(${star.translateX}px, ${star.translateY}px) scale(${star.scale}) translateZ(0);
            }
          }`
        )).join('')}
      </style>
    </div>
  );
};

// Small hover effect component for navbar links
export const NavHoverEffect: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {isHovered && (
        <div className="absolute -inset-1 -z-10 opacity-70 blur-sm">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <div className="h-full w-full">
                {Array.from({ length: 5 }).map((_, i) => {
                  const size = randomBetween(2, 4);
                  const left = randomBetween(0, 100);
                  const top = randomBetween(0, 100);
                  const delay = randomBetween(0, 1);
                  
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full bg-current"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${left}%`,
                        top: `${top}%`,
                        opacity: 0.6,
                        animation: `nav-orb-float-${i} 2s ease-in-out ${delay}s infinite alternate`
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes nav-orb-float-0 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(5px, -5px); }
        }
        @keyframes nav-orb-float-1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-7px, 3px); }
        }
        @keyframes nav-orb-float-2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(3px, 6px); }
        }
        @keyframes nav-orb-float-3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-5px, -3px); }
        }
        @keyframes nav-orb-float-4 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(6px, -4px); }
        }
      `}</style>
    </div>
  );
};
