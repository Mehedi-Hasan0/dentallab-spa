import { Variants } from 'motion/react';

const primaryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const heroContainerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: primaryEase },
  },
};

export const heroBenefitVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.5 + i * 0.1,
      ease: primaryEase,
    },
  }),
};

export const heroCtaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 1, ease: primaryEase },
  },
};
