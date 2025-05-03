// This script ensures favicons are rounded by applying CSS to them directly
// and also by creating new rounded favicon images via Canvas
(function() {
  function createRoundedFavicon() {
    // Find the favicon links
    const faviconLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    
    if (faviconLinks.length === 0) {
      console.log('No favicon links found, will try again later');
      return;
    }
    
    faviconLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      // Create a new Image to load the favicon
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // To handle CORS
      
      img.onload = function() {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const size = Math.max(img.width, img.height);
        canvas.width = size;
        canvas.height = size;
        
        // Get the canvas context
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // Create a circular clipping path
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, size, size);
        
        // Create a new link element
        const newLink = document.createElement('link');
        newLink.rel = link.rel;
        newLink.sizes = link.sizes;
        newLink.type = 'image/png';
        
        // Convert canvas to data URL
        try {
          newLink.href = canvas.toDataURL('image/png');
          
          // Replace the original link with the new one
          link.parentNode?.replaceChild(newLink, link);
        } catch (e) {
          console.error('Error creating rounded favicon:', e);
        }
      };
      
      img.onerror = function() {
        console.error('Error loading favicon image:', href);
      };
      
      // Set the source of the image
      img.src = href;
    });
  }
  
  function applyFaviconCSS() {
    // Create and inject a style element for better browser compatibility
    const style = document.createElement('style');
    style.textContent = `
      link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"] {
        border-radius: 50% !important;
        overflow: hidden !important;
        -webkit-mask-image: radial-gradient(circle, black 100%, transparent 100%) !important;
        mask-image: radial-gradient(circle, black 100%, transparent 100%) !important;
      }
      
      /* For the actual image inside (in some browsers) */
      link[rel="icon"] img, link[rel="shortcut icon"] img, link[rel="apple-touch-icon"] img,
      img[sizes="16x16"], img[sizes="32x32"], img[sizes="48x48"], img[sizes="64x64"] {
        border-radius: 50% !important;
        overflow: hidden !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Run both methods for maximum compatibility
  function initRoundFavicons() {
    applyFaviconCSS();
    setTimeout(createRoundedFavicon, 500); // Slight delay to ensure icons are loaded
  }

  // Run when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRoundFavicons);
  } else {
    initRoundFavicons();
  }

  // Also run after window loads
  window.addEventListener('load', initRoundFavicons);
})(); 