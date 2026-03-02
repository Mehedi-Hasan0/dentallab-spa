"use client";

import { navLinks } from "@/constants";
import MenuLink from "./MenuLink";
import SplitLoginButton from "./SplitLoginButton";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface MenuInfoColumnProps {
  onClose: () => void;
}

export default function MenuInfoColumn({ onClose }: MenuInfoColumnProps) {
  const otherLinks = navLinks.filter(l => l.name !== "Products" && l.name !== "Contact");

  return (
    <section className={clsx("flex flex-col justify-between lg:col-span-2 grow", "glass-card-2", "p-8")}>
      <ul className="flex flex-col items-start md:items-end gap-6 lg:gap-5">
        {otherLinks.map((link) => (
          <li key={link.name}>
            <MenuLink href={link.href} onClick={onClose}>
              {link.name}
            </MenuLink>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row items-start md:items-center justify-between gap-8">
        <div className="md:flex hidden flex-col gap-2 group/cta">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg lg:text-xl text-white/90 group-hover/cta:text-white transition-colors">Send Case Digitally</p>
            <ArrowRight size={20} className="text-white/40 group-hover/cta:text-white group-hover/cta:translate-x-1 transition-all" />
          </div>
          <div className="h-px bg-white/20 w-full group-hover/cta:bg-white/40 transition-colors" />
        </div>
        
        <SplitLoginButton onClose={onClose} />
      </div>
    </section>
  );
}
