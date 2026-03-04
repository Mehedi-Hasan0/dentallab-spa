'use client';

import { FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TestimonialItem } from '@/types';
import { TESTIMONIAL_CONFIG } from './testimonial-config';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  activeIndex: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial, activeIndex }) => (
  <div
    role="tabpanel"
    id={`testimonial-panel-${activeIndex}`}
    aria-labelledby={`testimonial-tab-${activeIndex}`}
    aria-live="polite"
    className="relative grid min-h-20 sm:min-h-60 md:min-h-30 lg:min-h-85 xl:min-h-80"
  >
    <AnimatePresence initial={false}>
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: TESTIMONIAL_CONFIG.ANIMATION_DURATION, ease: 'easeOut' }}
        className="col-start-1 row-start-1 flex flex-col justify-center space-y-8"
      >
        <blockquote className="text-xl leading-relaxed text-white sm:text-2xl lg:text-3xl xl:text-4xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div>
          <cite className="block text-xl font-medium text-white not-italic">
            {testimonial.author}
          </cite>
          <p className="text-white/40">{testimonial.role}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
);

export default TestimonialCard;
