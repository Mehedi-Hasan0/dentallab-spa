"use client";

import { useEffect, useRef } from "react";

export function useFollowMouse() {
  const blobRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateBlobPosition = () => {
      if (blobRef.current) {
        const { x, y } = mousePosRef.current;

        blobRef.current.animate(
          {
            left: `${x}px`,
            top: `${y}px`,
          },
          { duration: 1500, fill: "forwards" },
        );
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePosRef.current = { x: event.clientX, y: event.clientY };
      updateBlobPosition();
    };

    if (typeof window !== "undefined") {
      mousePosRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
    }

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return blobRef;
}
