"use client";

import React from "react";
import { motion } from "motion/react";
import NavProductCard from "./NavProductCard";
import NavContactCard from "./NavContactCard";
import { NavCardItem } from "@/types";

interface NavDropdownProps {
  items: NavCardItem[];
  isOpen: boolean;
}

export default function NavDropdown({ items, isOpen }: NavDropdownProps) {
  const gridCols = items.length <= 2 ? "lg:grid-cols-2" : "lg:grid-cols-4";

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ 
        y: isOpen ? "0%" : "-100%", 
        opacity: isOpen ? 1 : 0 
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className="absolute top-0 left-0 right-0 z-30 pt-28 xl:pt-32 pb-16 px-5 xl:px-10 2xl:px-20"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <ul className={`mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 ${gridCols}`}>
        {items.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isOpen ? 0 : 20, 
              opacity: isOpen ? 1 : 0 
            }}
            transition={{ 
              delay: isOpen ? 0.1 + index * 0.05 : 0,
              duration: 0.5 
            }}
          >
            {item.phone || item.email
              ? <NavContactCard item={item} />
              : <NavProductCard item={item} />
            }
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
