'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { offices } from '@/constants';
import clsx from 'clsx';

interface SplitLoginButtonProps {
  onClose: () => void;
}

export default function SplitLoginButton({ onClose }: SplitLoginButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex h-16 w-full items-center justify-start sm:w-auto md:justify-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-14 min-w-[240px] items-center justify-center overflow-visible">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.button
              key="main-button"
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onFocus={() => setIsHovered(true)}
              className="flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-white font-medium text-black transition-colors hover:bg-white/90"
              aria-label="Expand dentist login options"
            >
              Dentist Login
              <ArrowUpRight size={20} />
            </motion.button>
          ) : (
            <motion.div
              key="split-buttons"
              initial={{ opacity: 0, gap: '0px' }}
              animate={{ opacity: 1, gap: '8px' }}
              exit={{ opacity: 0, gap: '0px' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex h-full w-full"
              onMouseLeave={() => setIsHovered(false)}
            >
              {offices.map((office, index) => (
                <Link
                  key={office.location}
                  href="/login"
                  onClick={onClose}
                  autoFocus={index === 0}
                  className={clsx(
                    'group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-medium transition-all duration-300',
                    'hover:bg-accent bg-white text-black hover:text-white'
                  )}
                  aria-label={`Login for ${office.location} office`}
                >
                  {/* Subtle Gradient Hover Overlay */}
                  <div
                    className={clsx(
                      'absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100',
                      'from-accent bg-linear-to-r to-red-900'
                    )}
                  />

                  <span className="relative z-10 whitespace-nowrap">{office.location}</span>
                  <ArrowUpRight
                    size={18}
                    className="relative z-10 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
