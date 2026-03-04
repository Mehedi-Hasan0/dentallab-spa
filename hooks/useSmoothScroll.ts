'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;
export const stopLenis = () => lenisInstance?.stop();
export const startLenis = () => lenisInstance?.start();

export function useSmoothScroll() {
  useEffect(() => {
    // Only initialize Lenis on Desktop for maximum performance/smoothness balances
    const isMobile = window.innerWidth < 1024;

    if (!lenisInstance && !isMobile) {
      lenisInstance = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        lerp: 0.3,
        infinite: false,
        syncTouch: true,
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    // Global anchor click handler for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          if (lenisInstance) {
            lenisInstance.scrollTo(href);
          } else {
            // Native fallback for mobile
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    };
  }, []);
}
