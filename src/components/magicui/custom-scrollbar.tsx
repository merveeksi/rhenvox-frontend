"use client";

import React, { useEffect, useState, useRef } from "react";

// Hide native scrollbar style (added as a separate component)
function HideNativeScrollbar() {
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      body::-webkit-scrollbar {
        display: none;
      }
      body {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);
  
  return null;
}

// Main star SVG (optimized with simpler rendering)
const MainStar = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <polygon
      points="16,2 20,12 30,16 20,20 16,30 12,20 2,16 12,12"
      fill="#fff"
      fillOpacity="0.9"
    />
  </svg>
);

// Small side stars
const SmallStar = ({ size = 10, x = 0, y = 0 }: { size?: number; x?: number; y?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    style={{ position: "absolute", left: x, top: y }}
  >
    <polygon
      points="5,0 6,3 10,5 6,7 5,10 4,7 0,5 4,3"
      fill="#fff"
      fillOpacity="0.7"
    />
  </svg>
);

export const CustomScrollbar: React.FC = () => {
  const [scrollInfo, setScrollInfo] = useState({ scrollPercent: 0, viewportHeight: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const scrollThrottleRef = useRef<number | null>(null);
  
  // Throttle scroll updates for better performance
  const throttleScroll = (callback: () => void, delay = 10) => {
    if (scrollThrottleRef.current === null) {
      scrollThrottleRef.current = window.setTimeout(() => {
        callback();
        scrollThrottleRef.current = null;
      }, delay);
    }
  };
  
  // Track user scroll event
  useEffect(() => {
    // Mark as client-side rendered
    setIsMounted(true);
    
    const handleScroll = () => {
      throttleScroll(() => {
        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        const viewportHeight = doc.clientHeight;
        
        setScrollInfo({
          scrollPercent: scrollTop / (scrollHeight || 1),
          viewportHeight
        });
      });
    };
    
    // Calculate position on initial load
    handleScroll();
    
    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Only recalculate on resize when needed
    const handleResize = () => {
      const viewportHeight = document.documentElement.clientHeight;
      if (Math.abs(viewportHeight - scrollInfo.viewportHeight) > 50) {
        handleScroll();
      }
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollThrottleRef.current) {
        clearTimeout(scrollThrottleRef.current);
      }
    };
  }, [scrollInfo.viewportHeight]);

  // Don't render on server
  if (!isMounted) {
    return null;
  }
  
  // Thumb height and position
  const thumbHeight = 180;
  const trackHeight = scrollInfo.viewportHeight - 40;
  const thumbTop = scrollInfo.scrollPercent * (trackHeight - thumbHeight) + 20;

  return (
    <>
      <HideNativeScrollbar />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 48,
          height: "100vh",
          zIndex: 50,
          pointerEvents: "none",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {/* Track */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 22,
            width: 2,
            height: trackHeight,
            background: "rgba(120,130,150,0.13)",
            borderRadius: 4,
          }}
        />
        {/* Thumb (simplified gradient line + star) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: thumbTop,
            height: thumbHeight,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none",
            willChange: "transform", // Optimize animations
            transform: "translateZ(0)", // Hardware acceleration
          }}
        >
          {/* Gradient line */}
          <div
            style={{
              width: 2,
              height: thumbHeight - 32,
              background:
                "linear-gradient(180deg, #48C5FF, #68F9E5 40%, #7A30DC 100%)",
              marginBottom: -8,
              borderRadius: 2,
              opacity: 0.95,
            }}
          />
          {/* Star and side stars */}
          <div style={{ position: "relative", width: 40, height: 40 }}>
            <MainStar size={32} />
            <SmallStar size={10} x={-8} y={18} />
            <SmallStar size={7} x={22} y={8} />
            <SmallStar size={6} x={10} y={28} />
          </div>
        </div>
      </div>
    </>
  );
}; 