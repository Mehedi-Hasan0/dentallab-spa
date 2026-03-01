"use client";

import { useState, useRef, useEffect, useCallback, RefObject } from "react";
import useMediaQuery from "./useMediaQuery";
import { useScrollDirection } from "./useScrollDirection";

interface UseNavDropdownReturn {
  openDropdown: string | null;
  isVisible: boolean;
  navRef: RefObject<HTMLDivElement | null>;
  toggleDropdown: (e: React.MouseEvent, name: string) => void;
  closeDropdown: () => void;
}

/**
 * useNavDropdown
 * Manages all dropdown state and side effects for the Navbar:
 * - Toggle open/close by name
 * - Close on outside click
 * - Close when navbar scrolls out of view (via onScrollDown callback)
 * - Close when viewport narrows below lg (1024px)
 */
export default function useNavDropdown(): UseNavDropdownReturn {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  const toggleDropdown = useCallback(
    (e: React.MouseEvent, name: string) => {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === name ? null : name));
    },
    []
  );

  // useScrollDirection fires closeDropdown inside the scroll event listener
  const isVisible = useScrollDirection(closeDropdown);

  // Close on click outside the navbar element
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeDropdown]);

  // Close when viewport narrows below lg breakpoint (1024px)
  useMediaQuery("(min-width: 1024px)", (matches) => {
    if (!matches) closeDropdown();
  });

  return { openDropdown, isVisible, navRef, toggleDropdown, closeDropdown };
}
