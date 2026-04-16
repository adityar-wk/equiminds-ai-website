import { useEffect, useRef } from 'react';
import { animate } from 'motion/react';
import { useLocation } from 'react-router-dom';

export function ScrollHandler() {
  const isScrolling = useRef(false);
  const location = useLocation();

  useEffect(() => {
    // Only apply snap scroll for Products and Case Studies pages
    const isSnapScrollPage = ['/products', '/case-studies'].includes(location.pathname);
    
    if (!isSnapScrollPage) return;

    const getSections = () => Array.from(document.querySelectorAll('section, footer'));
    
    const handleWheel = (e: WheelEvent) => {
      // Only handle vertical scroll
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      
      // Sensitivity threshold to avoid accidental triggers
      if (Math.abs(e.deltaY) < 20) return;

      // Prevent default browser scroll
      e.preventDefault();
      
      if (isScrolling.current) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentScroll = window.scrollY;
      
      // Find current section index (the one most visible in viewport)
      let currentIndex = 0;
      let minDiff = Infinity;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const diff = Math.abs(rect.top);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = index;
        }
      });

      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);

      if (nextIndex !== currentIndex) {
        isScrolling.current = true;
        const target = sections[nextIndex] as HTMLElement;
        
        // "Instant" trigger: start animation immediately
        // Use a fast expoOut easing for that snappy feel
        animate(window.scrollY, target.offsetTop, {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1], // Snappy expoOut
          onUpdate: (latest) => window.scrollTo(0, latest),
          onComplete: () => {
            // Lock for a short period to prevent "over-scrolling" multiple sections
            setTimeout(() => {
              isScrolling.current = false;
            }, 400);
          }
        });
      }
    };

    // Touch support for mobile
    let touchStart = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0].clientY;
      const delta = touchStart - touchEnd;
      
      // Threshold for swipe
      if (Math.abs(delta) > 50) {
        // Mock a wheel event
        handleWheel({ 
          deltaY: delta, 
          deltaX: 0, 
          preventDefault: () => e.preventDefault() 
        } as WheelEvent);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Support hash navigation (Navbar links)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          isScrolling.current = true;
          animate(window.scrollY, (target as HTMLElement).offsetTop, {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => window.scrollTo(0, latest),
            onComplete: () => {
              setTimeout(() => { isScrolling.current = false; }, 400);
            }
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check on mount for initial hash
    if (window.location.hash) handleHashChange();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location.pathname]);

  return null;
}
