'use client';

import { statsContent } from '@/constants';
import StatCard from './StatCard';
import { motion } from 'motion/react';
import clsx from 'clsx';

export default function Stats() {
  const { title, description, items } = statsContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <section
      id="stats"
      className={clsx('main-container bg-foreground', 'section-spacing-1')}
      aria-labelledby="stats-heading"
    >
      <div className="flex flex-col gap-12 lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <motion.h2
            id="stats-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={clsx('title-text', 'text-center')}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="desc-text max-w-2xl text-center text-white/60"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-1 md:grid-cols-3"
        >
          {items.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <StatCard stat={stat} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
