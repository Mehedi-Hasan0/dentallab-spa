'use client';

import { FC } from 'react';
import { motion } from 'motion/react';

interface TestimonialHeaderProps {
  title: string;
  description: string;
}

const TestimonialHeader: FC<TestimonialHeaderProps> = ({ title, description }) => (
  <header className="mb-16 text-center lg:mb-24">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-lg text-white/60"
    >
      {description}
    </motion.p>
  </header>
);

export default TestimonialHeader;
