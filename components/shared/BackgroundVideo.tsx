import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BackgroundVideoProps {
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
  overlayClassName?: string;
  className?: string;
}

export function BackgroundVideo({
  videoSrc,
  posterSrc,
  posterAlt,
  overlayClassName,
  className,
}: BackgroundVideoProps) {
  return (
    <div className={cn('absolute inset-0 -z-10 h-full w-full overflow-hidden', className)}>
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
      <div
        className={cn('absolute inset-0 z-20 bg-black/20', overlayClassName)}
        aria-hidden="true"
      />
    </div>
  );
}
