'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface ProductPreviewProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProductPreview({ images }: ProductPreviewProps) {
  // Expect up to 3 images: 1 large on the right, 2 small stacked on the left
  const [img1, img2, img3] = images;

  return (
    <div
      id="product-preview-area"
      className="grid h-100 grid-cols-1 gap-4 md:h-124 md:grid-cols-3 md:gap-1"
      aria-live="polite"
      aria-atomic="true"
    >
      <h3 className="sr-only">Product Visual Previews</h3>

      {/* Left Column: Stacked items */}
      <div className="grid h-full grid-rows-2 gap-4 md:col-span-1 md:gap-1">
        <div className="relative overflow-hidden rounded-2xl bg-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={img1?.src}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {img1 && (
                <Image
                  src={img1.src}
                  alt={img1.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={60}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={img2?.src}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.05 }}
              className="absolute inset-0"
            >
              {img2 && (
                <Image
                  src={img2.src}
                  alt={img2.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={60}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column: Large item */}
      <div className="relative h-full overflow-hidden rounded-2xl bg-white/5 md:col-span-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={img3?.src}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
            className="absolute inset-0"
          >
            {img3 && (
              <Image
                src={img3.src}
                alt={img3.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
                quality={60}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
