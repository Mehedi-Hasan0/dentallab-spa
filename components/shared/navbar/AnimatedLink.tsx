"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  className?: string;
}

export default function AnimatedLink({
  href,
  children,
  hasDropdown,
  className = "",
}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={`relative flex items-center gap-1 text-sm lg:text-base xl:text-lg tracking-wider font-light text-white/60 hover:text-white transition-colors group ${className}`}
    >
      {children}
      {hasDropdown && (
        <ChevronDown size={20} className="text-white/40 group-hover:text-white transition-colors text-sm lg:text-base xl:text-lg 2xl:text-xl" />
      )}
      
      {/* Animated Underline */}
      <motion.span
        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
        initial={false}
      />
    </Link>
  );
}
