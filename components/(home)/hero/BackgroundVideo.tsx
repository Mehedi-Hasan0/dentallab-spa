'use client';

import Image from 'next/image';

interface BackgroundVideoProps {
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
}

export function BackgroundVideo({ videoSrc, posterSrc, posterAlt }: BackgroundVideoProps) {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for when video fails or script is disabled */}
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
    </div>
  );
}
