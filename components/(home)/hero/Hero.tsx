'use client';

import { heroContent } from '@/constants';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { BackgroundVideo } from './BackgroundVideo';
import { HeroGrid } from './HeroGrid';
import { PartnerLogos } from './PartnerLogos';

/**
 * Hero component - The landing section for the home page.
 * Features:
 * - Parallax scroll animation on titles
 * - Responsive container-query based font scaling
 * - Modular background video and grid components
 * - Accessible and optimized for SEO
 */
export default function Hero() {
  const { scrollY } = useScroll();
  const yTranslate = useTransform(scrollY, [0, 1000], [0, -100]);
  const y = useSpring(yTranslate, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="relative h-screen w-full" aria-labelledby="hero-title">
      {/* Visual background layers */}
      <BackgroundVideo
        videoSrc={heroContent.videoSrc}
        posterSrc={heroContent.posterSrc}
        posterAlt={heroContent.posterAlt}
      />
      <HeroGrid />

      {/* Main Content Area */}
      <div className="relative z-10 mt-5 h-full px-5 pt-(--nav-height-mobile) md:pt-(--nav-height-desktop) xl:mt-7 xl:px-10 2xl:px-20">
        {/* Semantic description for screen readers (Hidden visually) */}
        <p className="sr-only">{heroContent.description}</p>

        <div className="flex h-full flex-col justify-end md:flex-row">
          {/* Left Side: Dynamic Titles */}
          <div className="flex min-w-0 flex-col justify-center pb-28 md:@container md:flex-1 md:justify-end md:pb-20 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ y }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-w-0 flex-col gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-4"
            >
              <h1
                id="hero-title"
                className="text-gradient font-work-sans text-[clamp(1rem,7cqw,5rem)] leading-none font-medium tracking-tighter whitespace-nowrap uppercase md:text-[clamp(1.5rem,7cqw,6.5rem)] lg:tracking-wide"
              >
                {heroContent.title}
              </h1>
              <span className="text-gradient font-work-sans text-[clamp(1.5rem,11.5cqw,10rem)] leading-[0.9] font-semibold tracking-tighter whitespace-nowrap uppercase md:text-[clamp(2rem,11.5cqw,12.5rem)] lg:tracking-wide">
                {heroContent.subtitle}
              </span>
            </motion.div>
          </div>

          {/* Right Side: Benefits & CTA */}
          <div className="flex shrink-0 flex-col items-center gap-16 pt-10 pb-36 md:w-[320px] md:items-end md:justify-between md:gap-12 md:pt-12 md:pb-20 lg:w-[400px] xl:w-[440px]">
            {/* Benefits List */}
            <ul
              className="flex flex-col items-center gap-5 text-center md:items-end md:gap-3 md:text-right"
              aria-label="Key highlights"
            >
              {heroContent.benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-work-sans text-sm text-white/60 sm:text-base lg:text-lg xl:text-xl"
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={heroContent.cta.href}
                aria-label={heroContent.cta.ariaLabel}
                className="group flex h-14 items-center gap-4 rounded-full border border-white/20 bg-white/5 px-6 backdrop-blur-md transition-all duration-500 hover:border-white/50 hover:bg-white/10 sm:h-16 sm:px-8"
              >
                <span className="text-base font-medium text-white sm:text-lg">
                  {heroContent.cta.text}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:rotate-45 sm:h-10 sm:w-10">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partner Logo Marquee */}
      <PartnerLogos logos={heroContent.partnerLogos} />
    </section>
  );
}
