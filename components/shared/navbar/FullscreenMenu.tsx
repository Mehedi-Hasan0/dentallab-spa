"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Portal from "../Portal";
import FocusTrap from "../FocusTrap";
import MenuProductsColumn from "./MenuProductsColumn";
import MenuInfoColumn from "./MenuInfoColumn";
import MenuFooter from "./MenuFooter";

import useEscapePress from "@/hooks/useEscapePress";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  // Handle Escape key to close menu
  useEscapePress(onClose, isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <FocusTrap active={isOpen}>
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-40 bg-black overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/bg-pattern-2.webp"
                  alt=""
                  fill
                  className="object-cover opacity-50"
                  priority
                />
              </div>

              <div className="relative z-10 min-h-screen flex flex-col p-6 lg:p-12 xl:p-20">
                {/* Header Space filler to align with Navbar */}
                <div className="h-(--nav-height-mobile) md:h-(--nav-height-desktop)" />

                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-1 grow lg:max-h-100">
                  <MenuProductsColumn onClose={onClose} />
                  <MenuInfoColumn onClose={onClose} />
                </div>

                <MenuFooter />
              </div>
            </motion.div>
          </FocusTrap>
        </Portal>
      )}
    </AnimatePresence>
  );
}
