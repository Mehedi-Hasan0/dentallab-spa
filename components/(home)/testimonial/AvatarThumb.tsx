'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { TestimonialItem } from '@/types';
import { TESTIMONIAL_CONFIG } from './testimonial-config';

interface AvatarThumbProps {
  item: TestimonialItem;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
  onHover: (paused: boolean) => void;
}

const AvatarThumb: FC<AvatarThumbProps> = ({ item, index, isActive, onSelect, onHover }) => (
  <li role="none">
    <button
      id={`testimonial-tab-${index}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`testimonial-panel-${index}`}
      onClick={() => onSelect(index)}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="group relative focus:outline-none"
      aria-label={`Show ${item.author}'s testimonial`}
    >
      <motion.div
        animate={{
          scale: isActive ? TESTIMONIAL_CONFIG.AVATAR_SCALE_ACTIVE : 1,
          opacity: isActive ? 1 : 0.3,
          borderColor: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className={cn(
          'relative h-8 w-8 overflow-hidden rounded-full border md:h-9 md:w-9 lg:h-12 lg:w-12 xl:h-12 xl:w-12',
          isActive ? 'z-20' : 'z-10 group-hover:opacity-60'
        )}
      >
        <Image
          src={item.image}
          alt={`Portrait of ${item.author}`}
          fill
          priority={index < 5}
          className="object-cover"
          sizes="(max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"
        />
      </motion.div>
    </button>
  </li>
);

export default AvatarThumb;
