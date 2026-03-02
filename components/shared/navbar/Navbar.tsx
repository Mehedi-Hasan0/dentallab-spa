'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import AnimatedLink from './AnimatedLink';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { useState, useCallback } from 'react';
import useNavDropdown from '@/hooks/useNavDropdown';
import NavDropdown from './NavDropdown';
import FullscreenMenu from './FullscreenMenu';
import { useScrollLock } from '@/hooks/useScrollLock';
import clsx from 'clsx';

export default function Navbar() {
  const { openDropdown, isVisible, navRef, toggleDropdown, closeDropdown } = useNavDropdown();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    // Close dropdown if menu opens
    if (!isMenuOpen) closeDropdown();
  }, [isMenuOpen, closeDropdown]);

  // Lock body scroll when menu is open
  useScrollLock(isMenuOpen);

  return (
    <header ref={navRef} className="fixed top-0 right-0 left-0 z-50">
      <AnimatePresence>
        <motion.nav
          initial={{ y: 0 }}
          animate={{
            y: isVisible || isMenuOpen ? 0 : 'calc(-1 * var(--nav-height-desktop) - 2rem)',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={clsx(
            'nav-spacing relative z-50 flex items-center justify-between backdrop-blur-md transition-all duration-300',
            openDropdown || isMenuOpen
              ? 'border-b-transparent bg-black/40'
              : 'border-b border-white/10 bg-black/20'
          )}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Dental Lab Home"
          >
            <div className="relative flex items-center justify-center overflow-hidden">
              <Image
                src="/icons/logo.svg"
                alt="Dental Lab Logo"
                width={184}
                height={48}
                className="h-10 object-contain md:h-12"
                fetchPriority="high"
              />
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <ul className="font-work-sans hidden items-center gap-5 lg:flex xl:gap-9 2xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.hasDropdown ? (
                  <AnimatedLink
                    href={link.href}
                    hasDropdown={true}
                    isActive={openDropdown === link.name}
                    className={openDropdown === link.name ? 'text-white!' : ''}
                    onClick={(e) => {
                      toggleDropdown(e, link.name);
                      if (isMenuOpen) setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </AnimatedLink>
                ) : (
                  <AnimatedLink href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </AnimatedLink>
                )}
              </li>
            ))}
          </ul>

          {/* Menu Button */}
          <div className="flex items-center gap-4">
            <button
              className="group relative z-120 flex cursor-pointer items-center gap-2"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="hidden text-sm font-medium text-white/80 transition-colors duration-200 ease-in-out group-hover:text-white sm:block lg:text-base xl:text-lg">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
              <div
                className="flex h-4 w-6 flex-col items-end justify-center gap-1.5"
                aria-hidden="true"
              >
                <motion.div
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 4 : 0,
                  }}
                  className="h-0.5 w-6 origin-center transform bg-white/80 transition-all group-hover:bg-white"
                />
                <motion.div
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -4 : 0,
                    width: isMenuOpen ? '100%' : '66%',
                  }}
                  className="h-0.5 origin-center transform bg-white/80 transition-all group-hover:bg-white"
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Dropdowns */}
      <AnimatePresence mode="wait">
        {(() => {
          const activeLink = navLinks.find(
            (link) => link.name === openDropdown && link.dropdownItems
          );
          return activeLink ? (
            <NavDropdown key={activeLink.name} items={activeLink.dropdownItems!} />
          ) : null;
        })()}
      </AnimatePresence>

      {/* Fullscreen Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Overlay backdrop to close dropdown */}
      {openDropdown && !isMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-transparent"
          onClick={closeDropdown}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
