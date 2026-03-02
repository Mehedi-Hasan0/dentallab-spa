'use client';

import { featuresContent } from '@/constants';
import FeatureCard from './FeatureCard';
import { motion } from 'motion/react';
import clsx from 'clsx';

export default function Feature() {
  const { title, description, items } = featuresContent;

  return (
    <section
      id="features"
      className="main-container bg-foreground"
      aria-labelledby="features-heading"
    >
      <div className="flex flex-col gap-12 lg:gap-20">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={clsx('title-text', 'text-center')}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="desc-text max-w-md text-center md:text-right"
          >
            {description}
          </motion.p>
        </div>

        <ul
          className="grid min-h-fit grid-cols-1 gap-1 md:grid-cols-2 lg:min-h-100 lg:grid-cols-4 lg:gap-1 xl:min-h-124"
          role="list"
        >
          {/* Column 1: Large Card */}
          <li className="lg:col-span-1">
            <FeatureCard feature={items[0]} className="h-full w-full" />
          </li>

          {/* Column 2 */}
          <li className="group/card-1 flex h-full w-full">
            <div className="flex h-full min-h-65 w-full flex-col transition-all duration-300 ease-in-out md:min-h-74 lg:min-h-auto lg:gap-1 lg:group-hover/card-1:gap-0">
              <FeatureCard
                feature={items[1]}
                className="h-20! rounded-b-none! md:h-25! lg:h-36! lg:rounded-2xl lg:group-hover/card-1:rounded-b-none"
              />
              <FeatureCard
                feature={items[4]}
                className="w-full grow rounded-t-none! lg:group-hover/card-1:rounded-t-none"
              />
            </div>
          </li>

          {/* Column 3*/}
          <li className="group/card-2 flex h-full w-full">
            <div className="flex h-full min-h-65 w-full flex-col transition-all duration-300 ease-in-out md:min-h-74 lg:min-h-auto lg:gap-1 lg:group-hover/card-2:gap-0">
              <FeatureCard
                feature={items[2]}
                className="w-full grow rounded-b-none! lg:group-hover/card-2:rounded-b-none"
              />
              <FeatureCard
                feature={items[5]}
                className="h-20! rounded-t-none! md:h-25! lg:h-36! lg:group-hover/card-2:rounded-t-none"
              />
            </div>
          </li>

          {/* Column 4 */}
          <li className="group/card-3 flex h-full w-full">
            <div className="flex h-full min-h-65 w-full flex-col transition-all duration-300 ease-in-out md:min-h-74 lg:min-h-auto lg:gap-1 lg:group-hover/card-3:gap-0">
              <FeatureCard
                feature={items[3]}
                className="h-20! rounded-b-none! md:h-25! lg:h-36! lg:rounded-2xl lg:group-hover/card-3:rounded-b-none"
              />
              <FeatureCard
                feature={items[6]}
                className="w-full grow rounded-t-none! lg:group-hover/card-3:rounded-t-none"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
