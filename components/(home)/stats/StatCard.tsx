'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { StatItem } from '@/types';
import clsx from 'clsx';

interface StatCardProps {
  stat: StatItem;
  className?: string;
}

export default function StatCard({ stat, className }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat.value);
    }
  }, [isInView, motionValue, stat.value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <article
      ref={ref}
      className={clsx(
        'glass-card-2 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 md:items-start md:text-left lg:p-8 2xl:p-9',
        className
      )}
    >
      <div className="flex flex-col justify-center gap-4 lg:min-h-40 lg:gap-12 lg:py-5">
        <h3 className="title-text text-white">
          <span>{displayValue.toLocaleString()}</span>
          {stat.suffix && <span className="text-white/60">{stat.suffix}</span>}
        </h3>
        <p className={clsx('desc-text', 'text-white/40!')}>{stat.description}</p>
      </div>
    </article>
  );
}
