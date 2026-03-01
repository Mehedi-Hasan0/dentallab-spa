"use client";

import { useFollowMouse } from "@/hooks/useFollowMouse";

export default function CursorEffect() {
  const blobRef = useFollowMouse();

  return (
    <div id="blob" ref={blobRef} className="border border-white/60 z-50 pointer-events-none" />
  );
}
