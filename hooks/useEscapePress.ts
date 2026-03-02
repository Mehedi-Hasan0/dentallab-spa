'use client';

import { useEffect } from 'react';

/**
 * Custom hook that triggers a callback when the Escape key is pressed.
 *
 * @param onEscape - Function to call when Escape is pressed
 * @param active - Whether the listener should be active (e.g., when a modal is open)
 */
export default function useEscapePress(onEscape: () => void, active: boolean = true) {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscape();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, active]);
}
