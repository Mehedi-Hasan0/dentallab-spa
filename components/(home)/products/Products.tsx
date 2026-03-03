'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/components/shared/SectionHeader';
import { productsContent } from '@/constants';
import ProductCard from './ProductCard';
import ProductPreview from './ProductPreview';

export default function Products() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  const defaultImages = productsContent.items.slice(0, 3).map((item) => item.previewImages[0]);

  const activeProduct = productsContent.items.find((item) => item.id === activeProductId);
  const previewImages = activeProduct ? activeProduct.previewImages : defaultImages;

  return (
    <section
      id="products"
      className="section-spacing-1 main-container bg-background-dark overflow-hidden text-white"
      aria-labelledby="products-heading"
    >
      <motion.div
        className="container-custom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader
          headingId="products-heading"
          title={productsContent.title}
          description={productsContent.description}
        />

        <div className="mt-10 mb-1 grid grid-cols-1 gap-1.5 md:gap-2 lg:mt-16 lg:grid-cols-4 lg:gap-1">
          {productsContent.items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isActive={activeProductId === product.id}
              onHover={() => setActiveProductId(product.id)}
              onLeave={() => setActiveProductId(null)}
            />
          ))}
        </div>

        <div className="hidden lg:block">
          <ProductPreview images={previewImages} />
        </div>
      </motion.div>
    </section>
  );
}
