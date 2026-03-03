'use client';

import { navLinks } from '@/constants';
import MenuLink from './MenuLink';
import SplitLoginButton from './SplitLoginButton';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface MenuInfoColumnProps {
  onClose: () => void;
}

export default function MenuInfoColumn({ onClose }: MenuInfoColumnProps) {
  const otherLinks = navLinks.filter((l) => l.name !== 'Products' && l.name !== 'Contact');

  return (
    <section
      className={clsx(
        'flex grow flex-col justify-between rounded-2xl lg:col-span-2',
        'glass-card-2',
        'p-8'
      )}
    >
      <ul className="flex flex-col items-start gap-6 md:items-end lg:gap-5">
        {otherLinks.map((link) => (
          <li key={link.name}>
            <MenuLink href={link.href} onClick={onClose}>
              {link.name}
            </MenuLink>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row md:items-center">
        <div className="group/cta hidden flex-col gap-2 md:flex">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg text-white/90 transition-colors group-hover/cta:text-white lg:text-xl">
              Send Case Digitally
            </p>
            <ArrowRight
              size={20}
              className="text-white/40 transition-all group-hover/cta:translate-x-1 group-hover/cta:text-white"
            />
          </div>
          <div className="h-px w-full bg-white/20 transition-colors group-hover/cta:bg-white/40" />
        </div>

        <SplitLoginButton onClose={onClose} />
      </div>
    </section>
  );
}
