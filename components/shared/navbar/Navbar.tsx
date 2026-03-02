"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";
import Image from "next/image";
import { navLinks } from "@/constants";
import { useState, useCallback } from "react";
import useNavDropdown from "@/hooks/useNavDropdown";
import NavDropdown from "./NavDropdown";
import FullscreenMenu from "./FullscreenMenu";
import { useScrollLock } from "@/hooks/useScrollLock";
import clsx from "clsx";

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
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <AnimatePresence>
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: isVisible || isMenuOpen ? 0 : "calc(-1 * var(--nav-height-desktop) - 2rem)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={clsx(
            "relative z-50 flex items-center justify-between nav-spacing backdrop-blur-md transition-all duration-300",
            openDropdown || isMenuOpen ? "bg-black/40 border-b-transparent" : "bg-black/20 border-b border-white/10"
          )}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)} aria-label="Dental Lab Home">
            <div className="relative flex items-center justify-center overflow-hidden">
               <Image 
                 src="/icons/logo.svg" 
                 alt="Dental Lab Logo" 
                 width={184} 
                 height={48}
                 className="object-contain h-10 md:h-12"
                 fetchPriority="high"
               />
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-9 2xl:gap-10 font-work-sans">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.hasDropdown ? (
                  <AnimatedLink 
                    href={link.href} 
                    hasDropdown={true} 
                    isActive={openDropdown === link.name}
                    className={openDropdown === link.name ? "text-white!" : ""}
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
              className="flex items-center gap-2 group cursor-pointer relative z-120"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="text-sm lg:text-base xl:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-200 ease-in-out hidden sm:block">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
              <div className="flex flex-col gap-1.5 items-end w-6 h-4 justify-center" aria-hidden="true">
                <motion.div 
                  animate={{ 
                    rotate: isMenuOpen ? 45 : 0, 
                    y: isMenuOpen ? 4 : 0,
                  }}
                  className="w-6 h-0.5 bg-white/80 group-hover:bg-white transition-all transform origin-center" 
                />
                <motion.div 
                  animate={{ 
                    rotate: isMenuOpen ? -45 : 0, 
                    y: isMenuOpen ? -4 : 0,
                    width: isMenuOpen ? "100%" : "66%" 
                  }}
                  className="h-0.5 bg-white/80 group-hover:bg-white transition-all transform origin-center" 
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Dropdowns */}
      <AnimatePresence mode="wait">
        {(() => {
          const activeLink = navLinks.find(link => link.name === openDropdown && link.dropdownItems);
          return activeLink ? (
            <NavDropdown 
              key={activeLink.name}
              items={activeLink.dropdownItems!} 
            />
          ) : null;
        })()}
      </AnimatePresence>

      {/* Fullscreen Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Overlay backdrop to close dropdown */}
      {openDropdown && !isMenuOpen && (
        <div 
          className="fixed inset-0 bg-transparent z-20" 
          onClick={closeDropdown}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
