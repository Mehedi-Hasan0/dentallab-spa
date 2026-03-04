'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ProductItem } from '@/types';
import clsx from 'clsx';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function ProductCard({ product, isActive, onHover, onLeave }: ProductCardProps) {
  return (
    <button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      aria-expanded={isActive}
      aria-controls="product-preview-area"
      className={clsx(
        'group relative w-full cursor-pointer overflow-hidden rounded-2xl p-5 text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 md:p-6',
        isActive ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'
      )}
    >
      <div className="mb-8 flex items-center justify-between md:mb-10 lg:mb-12">
        <div className="flex gap-1.5" aria-hidden="true">
          {product.dots.map((dot, index) => (
            <div
              key={index}
              className={clsx(
                'h-2 w-2 rounded-full transition-colors duration-300 lg:h-3 lg:w-3',
                dot ? 'bg-white' : 'bg-white/20'
              )}
            />
          ))}
        </div>
        <div className="relative">
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, x: 32, y: -32 }}
                animate={{ opacity: 1, x: 5, y: -5 }}
                exit={{ opacity: 0, x: 32, y: -32 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute top-0 right-0 z-10 hidden items-center justify-center rounded-full bg-white text-black lg:flex lg:h-12 lg:w-12"
              >
                <ArrowUpRight strokeWidth={2.5} className="size-6" />
              </motion.div>
            )}
          </AnimatePresence>
          <span
            className={clsx(
              'font-mono text-xs transition-opacity duration-300 lg:text-sm',
              isActive ? 'opacity-0' : 'opacity-50'
            )}
          >
            {product.number}
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
        {product.title}
      </h3>

      {/* Mobile Icon: Always visible at bottom right */}
      <div
        className="absolute right-6 bottom-6 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black lg:hidden"
        aria-hidden="true"
      >
        <ArrowRight size={16} strokeWidth={2.5} />
      </div>
    </button>
  );
}
