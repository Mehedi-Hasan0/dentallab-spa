"use client";

import { useEffect } from "react";
import { stopLenis, startLenis } from "./useSmoothScroll";

/**
 * useScrollLock
 * Custom hook to lock/unlock body scroll and Lenis smooth scrolling.
 * @param lock - Boolean to indicate if scrolling should be locked.
 */
export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
      stopLenis();
    } else {
      document.body.style.overflow = "";
      startLenis();
    }

    return () => {
      document.body.style.overflow = "";
      startLenis();
    };
  }, [lock]);
}
