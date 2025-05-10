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

// Büyük yıldız SVG (parlayan, gradientli)
const MainStar = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff" stopOpacity="1" />
        <stop offset="60%" stopColor="#6ecaff" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#7A30DC" stopOpacity="0.25" />
      </radialGradient>
    </defs>
    <polygon
      points="16,2 20,12 30,16 20,20 16,30 12,20 2,16 12,12"
      fill="url(#star-glow)"
      filter="url(#main-glow)"
    />
    <defs>
      <filter id="main-glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

// Küçük yan yıldızlar
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
  
  // Kullanıcı scroll olayını izle
  useEffect(() => {
    // Client-side render olduğunu belirt
    setIsMounted(true);
    
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const viewportHeight = doc.clientHeight;
      
      setScrollInfo({
        scrollPercent: scrollTop / (scrollHeight || 1),
        viewportHeight
      });
    };
    
    // İlk yüklenmede pozisyonu hesapla
    handleScroll();
    
    // Event listener'ları ekle
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Client-side değilse render etme
  if (!isMounted) {
    return null;
  }
  
  // Thumb yüksekliği ve pozisyonu
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
        {/* Thumb (gradient çizgi + yıldız) */}
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
          }}
        >
          {/* Gradient çizgi */}
          <div
            style={{
              width: 2,
              height: thumbHeight - 32,
              background:
                "linear-gradient(180deg, #48C5FF, #68F9E5 40%, #7A30DC 100%)",
              marginBottom: -8,
              boxShadow:
                "0 0 16px 2px #48C5FF44, 0 0 32px 8px #7A30DC22, 0 0 24px 0px #68F9E566",
              borderRadius: 2,
              opacity: 0.95,
              filter: "blur(0.5px)",
            }}
          />
          {/* Yıldız ve yan yıldızlar */}
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