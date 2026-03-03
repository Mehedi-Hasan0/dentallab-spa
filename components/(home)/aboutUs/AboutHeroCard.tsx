'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import clsx from 'clsx';
import { AboutHeroCardData } from '@/types';

interface AboutHeroCardProps {
  data: AboutHeroCardData;
  className?: string;
}

export default function AboutHeroCard({ data, className }: AboutHeroCardProps) {
  const { image, imageAlt, hoverHeadline, hoverSubtext, cta } = data;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={clsx(
        'group glass-card-2 relative flex h-full min-h-80 cursor-pointer flex-col overflow-hidden rounded-2xl',
        'focus-within:ring-2 focus-within:ring-white/40',
        'md:min-h-96 lg:min-h-full',
        className
      )}
      aria-label={`About us hero: ${hoverHeadline}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className={clsx(
            'object-cover transition-all duration-700 ease-in-out',
            'group-hover:scale-105 group-hover:blur-sm',
            'group-focus-within:scale-105 group-focus-within:blur-sm'
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className={clsx(
          'absolute inset-0 transition-all duration-700',
          'bg-linear-to-t from-black/85 via-black/50 to-black/10',
          'lg:from-black/50 lg:via-black/20 lg:to-transparent',
          'lg:group-hover:from-black/85 lg:group-hover:via-black/50 lg:group-hover:to-black/10',
          'lg:group-focus-within:from-black/85 lg:group-focus-within:via-black/50 lg:group-focus-within:to-black/10'
        )}
        aria-hidden="true"
      />

      {/* Plus icon */}
      <div
        className={clsx(
          'bg-primary absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500',
          'group-hover:opacity-0',
          'group-focus-within:opacity-0'
        )}
        aria-hidden="true"
      >
        <span className="text-lg leading-none font-light text-white">+</span>
      </div>

      {/* Overlay content */}
      <div
        className={clsx(
          'absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-5 transition-all duration-500 ease-out',
          'lg:translate-y-4 lg:opacity-0',
          'lg:group-hover:translate-y-0 lg:group-hover:opacity-100',
          'lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100',
          'md:p-6 lg:p-7'
        )}
      >
        <div className="flex flex-col gap-1.5">
          <p className="text-base leading-snug font-semibold text-white md:text-lg">
            {hoverHeadline}
          </p>
          <p className="text-sm leading-relaxed text-white/75">{hoverSubtext}</p>
        </div>

        <Link
          href={cta.href}
          aria-label={cta.ariaLabel}
          tabIndex={0}
          className={clsx(
            'flex w-fit items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black',
            'transition-all duration-300 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          )}
        >
          {cta.text}
          <MoveUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
