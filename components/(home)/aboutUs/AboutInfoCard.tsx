'use client';

import { motion } from 'motion/react';
import clsx from 'clsx';
import { AboutInfoCardData } from '@/types';

interface AboutInfoCardProps {
  data: AboutInfoCardData;
  animationDelay?: number;
  className?: string;
}

export default function AboutInfoCard({ data, animationDelay = 0, className }: AboutInfoCardProps) {
  const { id, title, description } = data;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: animationDelay }}
      className={clsx(
        'glass-card-2 relative flex h-full flex-col gap-10 overflow-hidden rounded-2xl',
        'transition-all duration-300',
        className
      )}
      aria-labelledby={`about-info-title-${id}`}
    >
      {/* Title zone */}
      <div className="flex-none p-4 lg:p-5 xl:p-6">
        <h3
          id={`about-info-title-${id}`}
          className={clsx('font-medium text-white/90 md:whitespace-pre-line', 'feature-text')}
        >
          {title}
        </h3>
      </div>

      {/* Description zone */}
      <div className="flex flex-1 items-end justify-start bg-white/5 p-4 lg:p-5 xl:p-6">
        <p className="text-xs leading-relaxed text-white/55 md:text-sm">{description}</p>
      </div>
    </motion.article>
  );
}
