'use client';

import Image from 'next/image';

interface BackgroundVideoProps {
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
}

export function BackgroundVideo({ videoSrc, posterSrc, posterAlt }: BackgroundVideoProps) {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        className="object-cover"
        priority
        fetchPriority="high"
        sizes="100vw"
      />

      <video
        className="relative z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
    </div>
  );
}
