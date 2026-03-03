'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { archRestorationContent } from '@/constants';
import { getLenis } from '@/hooks/useSmoothScroll';
import ArchCard from './ArchCard';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ArchRestoration() {
  const { title, description, videoSrc, cards } = archRestorationContent;
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cardsVisible = useTransform(scrollYProgress, [0.85, 0.95], [false, true]);
  const [isCardsActive, setIsCardsActive] = useState(false);
  useMotionValueEvent(cardsVisible, 'change', (latestValue) => {
    setIsCardsActive(latestValue as boolean);
  });

  // Frame-perfect scroll-linked video playback
  // We hook into Lenis's own scroll event so the video update happens in the
  // SAME tick as Lenis updates the DOM - eliminating async lag from Framer Motion.
  useEffect(() => {
    let rafId: number;
    let isUsingLenis = false;

    function updateVideoTime() {
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video || !video.duration || !container) return;

      const rect = container.getBoundingClientRect();
      const sectionScrollableHeight = container.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / sectionScrollableHeight));
      const targetTime = rawProgress * video.duration;

      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        if (
          'fastSeek' in video &&
          typeof (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek ===
            'function'
        ) {
          (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek(targetTime);
        } else {
          video.currentTime = targetTime;
        }
      }
    }

    function fallbackTick() {
      updateVideoTime();
      rafId = requestAnimationFrame(fallbackTick);
    }

    function tryConnectLenis() {
      const lenis = getLenis();
      if (lenis) {
        lenis.on('scroll', updateVideoTime);
        isUsingLenis = true;
      } else {
        rafId = requestAnimationFrame(fallbackTick);
        setTimeout(tryConnectLenis, 100);
      }
    }

    tryConnectLenis();

    return () => {
      if (isUsingLenis) {
        getLenis()?.off('scroll', updateVideoTime);
      }
      cancelAnimationFrame(rafId);
    };
  }, []);

  const headerOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.08], [0, -20]);
  const videoScale = useTransform(scrollYProgress, [0, 0.12], [0.95, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="bg-foreground relative h-[450vh] w-full"
      aria-labelledby="arch-heading"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden pt-20 md:pt-14 lg:pt-10">
        {/* Section header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-[80px] z-40 flex w-full flex-col items-center gap-4 px-5 pt-8 text-center md:top-16 md:gap-6 md:pt-10 2xl:top-24"
        >
          <h2 id="arch-heading" className="title-text leading-tight whitespace-pre-line">
            {title}
          </h2>
          <p className="desc-text max-w-2xl text-white/60">{description}</p>

          {/* Scroll affordance indicator */}
          <div aria-hidden="true" className="mt-2 flex flex-col items-center gap-2">
            <div className="h-10 w-px bg-linear-to-b from-white/20 to-transparent" />
            <span className="text-xs font-medium tracking-widest text-white/70 uppercase">
              Scroll to explore
            </span>
          </div>
        </motion.div>

        {/* Scroll-driven video */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="relative h-[65vh] w-full max-w-7xl px-5 sm:h-[60vh] md:h-[70vh] md:px-10 2xl:px-0"
        >
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/5 bg-black/20 md:rounded-[2rem]">
            {/* muted + playsInline for auto-seek on mobile */}
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              // @ts-ignore
              fetchPriority="high"
              aria-label="Animated breakdown of the full arch restoration components"
              className="h-full w-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Info cards */}
            <div aria-label="Component details" className="absolute inset-0 z-20 hidden lg:block">
              {cards.map((card) => (
                <ArchCard key={card.title} card={card} isVisible={isCardsActive} />
              ))}
            </div>

            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -inset-20 -z-10 rounded-full bg-white/10 blur-[120px] transition-opacity duration-1000 ${isCardsActive ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isCardsActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 lg:bottom-10"
        >
          <Link
            href="#"
            aria-label="See full details of arch restoration products"
            className="group flex h-14 items-center gap-4 rounded-full border border-white/20 bg-white/5 px-6 backdrop-blur-md transition-all duration-500 hover:border-white/50 hover:bg-white/10 sm:px-8 lg:h-16"
          >
            <span className="text-base font-medium text-white lg:text-lg">See details</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:rotate-45 lg:h-10 lg:w-10">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
