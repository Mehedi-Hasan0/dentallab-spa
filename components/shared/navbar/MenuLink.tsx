"use client";

import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MenuLink({
  href,
  children,
  className,
  onClick,
}: MenuLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "group relative w-fit h-fit transition-colors duration-300",
        "text-sm md:text-md lg:text-base xl:text-lg text-white/60 hover:text-white",
        className
      )}
    >
      {children}
      
      {/* Animated Underline */}
      <motion.span
        className={clsx(
          "absolute -bottom-1 left-0 right-0 bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out",
          "h-[2px]"
        )}
        initial={false}
      />
    </Link>
  );
}
