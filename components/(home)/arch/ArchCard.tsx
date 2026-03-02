'use client';

import { ArchCard as ArchCardType } from '@/types';
import { motion } from 'motion/react';
import Image from 'next/image';

interface ArchCardProps {
  card: ArchCardType;
  isVisible: boolean;
}

export default function ArchCard({ card, isVisible }: ArchCardProps) {
  const { title, description, align, position, lineIcon, lineWidth, lineHeight, linePosition } =
    card;

  return (
    <>
      {/* Info Card - role="note" marks it as supplementary content */}
      <motion.article
        role="note"
        aria-label={title}
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ ...position }}
        className={`pointer-events-none absolute z-30 flex w-[22%] min-w-[160px] flex-col gap-1.5 ${align}`}
      >
        <h3 className="text-xs font-semibold tracking-wide text-white lg:text-sm 2xl:text-base">
          {title}
        </h3>
        <p className="text-[11px] leading-relaxed text-white/50 lg:text-xs 2xl:text-sm">
          {description}
        </p>
      </motion.article>

      {/* SVG connector line - purely decorative, hidden from AT */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.55 } : { opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeInOut' }}
        style={{
          ...linePosition,
          width: lineWidth,
          height: lineHeight,
        }}
        className="pointer-events-none absolute z-20"
      >
        <Image src={lineIcon} alt="" fill sizes="12vw" className="object-contain" />
      </motion.div>
    </>
  );
}
