'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { footerContent } from '@/constants';
import SocialIcon from '@/components/shared/SocialIcon';
import { NewsletterForm } from './NewsletterForm';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  // Parallax effect for the large text
  // Start above its position and move to its middle position
  const yTranslate = useTransform(scrollYProgress, [0, 1], [-380, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 0.4]);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-black pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-20"
      aria-labelledby="footer-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/bg-img/bg-pattern-3.webp"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/10" />
      </div>

      <div className="nav-spacing relative z-20 flex flex-col items-stretch justify-center sm:gap-7 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20">
        <h2 id="footer-heading" className="sr-only">
          Footer Information
        </h2>

        {/* Top Section: Branding & Newsletter */}
        <div className="relative z-30 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src={footerContent.logo}
                alt="Dental Lab Logo"
                width={200}
                height={40}
                className="h-auto w-48 md:w-56"
              />
            </Link>

            <div className="flex gap-4">
              {footerContent.socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-white/40 hover:bg-white/10"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <SocialIcon name={social.icon} size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full lg:max-w-2xl">
            <NewsletterForm />
          </div>
        </div>

        {/* Middle Section: Large Parallax Text */}
        <div className="relative z-10 flex min-h-30 items-center justify-center py-10 xl:py-20 2xl:min-h-45">
          <motion.h3
            style={{ y: yTranslate, opacity }}
            className="absolute inset-x-0 w-full text-center text-[8vw] font-bold tracking-tighter text-white uppercase select-none sm:text-[9vw] md:text-[9vw] lg:text-[9vw] 2xl:text-[8vw]"
          >
            {footerContent.parallaxText}
          </motion.h3>
        </div>

        {/* Bottom Section: Copyright & Links */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">
          <p className="text-xs tracking-wider text-white/40 uppercase">
            {footerContent.copyright}
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {footerContent.bottomLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-xs font-medium tracking-widest text-white/60 uppercase transition-colors hover:text-white"
                  >
                    <span>{link.name}</span>
                    <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
