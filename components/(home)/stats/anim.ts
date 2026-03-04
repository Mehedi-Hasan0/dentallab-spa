import { staggerContainer, itemFadeUp, easings } from '@/components/shared/sharedAnim';

export const statsContainerVariants = staggerContainer(0.2, 0);
export const statsItemVariants = itemFadeUp(40, 0.8, easings.secondary);
