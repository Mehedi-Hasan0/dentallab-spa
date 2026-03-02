'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

let lenisInstance: Lenis | null = null;

export const stopLenis = () => lenisInstance?.stop();
export const startLenis = () => lenisInstance?.start();

export function useSmoothScroll() {
  useEffect(() => {
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        lerp: 0.05,
        infinite: false,
        syncTouch: true,
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);
}
