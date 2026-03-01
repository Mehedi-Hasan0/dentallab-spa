"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";
import Image from "next/image";
import { navLinks } from "@/constants";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Navbar() {
  const isVisible = useScrollDirection();

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between nav-spacing backdrop-blur-md bg-white/5 border-b border-white/10"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center overflow-hidden">
             <Image 
               src="/icons/logo.svg" 
               alt="Dental Lab Logo" 
               width={184} 
               height={48}
               className="object-contain"
               priority={true}
             />
          </div>
        </Link>

        {/* Nav Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-8 font-work-sans">
          {navLinks.map((link) => (
            <li key={link.name}>
              <AnimatedLink href={link.href} hasDropdown={link.hasDropdown}>
                {link.name}
              </AnimatedLink>
            </li>
          ))}
        </ul>

        {/* Menu Button */}
        <div className="flex items-center gap-4">
          <button 
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="text-sm lg:text-base xl:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-200 ease-in-out hidden sm:block">Menu</span>
            <div className="flex flex-col gap-1.5 items-end">
              <div className="w-6 h-0.5 bg-white/80 group-hover:bg-white transition-all" />
              <div className="w-4 h-0.5 bg-white/80 group-hover:bg-white transition-all" />
            </div>
          </button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
