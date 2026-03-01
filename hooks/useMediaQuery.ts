"use client";

import { useState, useEffect } from "react";

/**
 * useMediaQuery
 * Returns `true` when the viewport matches the given CSS media query string.
 * Subscribes to resize events and updates reactively.
 * 
 * @example
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export default function useMediaQuery(
  query: string,
  onChange?: (matches: boolean) => void
): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
      onChange?.(event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query, onChange]);

  return matches;
}
