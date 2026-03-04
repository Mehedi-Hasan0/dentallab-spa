'use client';

import { motion } from 'motion/react';
import { fadeRight, fadeLeft } from './sharedAnim';
import clsx from 'clsx';

interface SectionHeaderProps {
  /** used for `aria-labelledby` on the parent section */
  headingId: string;
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  headingId,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-6 md:flex-row md:items-end md:justify-between md:gap-8',
        className
      )}
    >
      <motion.h2
        id={headingId}
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="title-text text-center md:text-left"
      >
        {title}
      </motion.h2>

      <motion.p
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="desc-text max-w-md text-center md:text-right"
      >
        {description}
      </motion.p>
    </div>
  );
}
