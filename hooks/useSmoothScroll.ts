'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

let lenisInstance: Lenis | null = null;

export const stopLenis = () => lenisInstance?.stop();
export const startLenis = () => lenisInstance?.start();

export function useSmoothScroll() {
  useEffect(() => {
    if (!lenisInstance) {
      lenisInstance = new Lenis();

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
