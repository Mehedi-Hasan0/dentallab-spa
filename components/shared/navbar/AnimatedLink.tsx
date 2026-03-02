'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface AnimatedLinkProps {
  href?: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  className?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export default function AnimatedLink({
  href = '#',
  children,
  hasDropdown,
  className = '',
  isActive,
  onClick,
}: AnimatedLinkProps) {
  const content = (
    <>
      {children}
      {hasDropdown && (
        <ChevronDown
          size={20}
          className={clsx(
            'text-white/40 transition-all duration-300 group-hover:text-white',
            isActive && 'rotate-180 text-white'
          )}
        />
      )}

      {/* Animated Underline */}
      <motion.span
        className="absolute right-0 -bottom-1 left-0 h-[1.5px] origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
        initial={false}
      />
    </>
  );

  const baseClassName = clsx(
    'relative flex items-center gap-1 text-sm lg:text-base xl:text-lg tracking-wider font-light text-white/60 hover:text-white transition-colors group cursor-pointer',
    className
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClassName}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={baseClassName}>
      {content}
    </Link>
  );
}
