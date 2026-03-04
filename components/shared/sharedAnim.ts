import { Variants } from 'motion/react';

/**
 * Shared Easing Functions
 */
export const easings = {
  primary: [0.22, 1, 0.36, 1] as [number, number, number, number],
  secondary: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

/**
 * Standard Stagger Container
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Standard Fade Up Item
 */
export const itemFadeUp = (y = 30, duration = 0.6, easing = easings.primary): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: easing,
    },
  },
});

/**
 * Simple Fade/Slide for headers
 */
export const simpleFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Horizontal Fades
 */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
