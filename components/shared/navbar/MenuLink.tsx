'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import clsx from 'clsx';

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MenuLink({ href, children, className, onClick }: MenuLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'group relative h-fit w-fit transition-colors duration-300',
        'md:text-md text-sm text-white/60 hover:text-white lg:text-base xl:text-lg',
        className
      )}
    >
      {children}

      {/* Animated Underline */}
      <motion.span
        className={clsx(
          'absolute right-0 -bottom-1 left-0 origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100',
          'h-[2px]'
        )}
        initial={false}
      />
    </Link>
  );
}
