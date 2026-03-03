'use client';

import { featuresContent } from '@/constants';
import GridCard from '@/components/shared/GridCard';
import { motion } from 'motion/react';
import clsx from 'clsx';
import SectionHeader from '@/components/shared/SectionHeader';

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
        <SectionHeader headingId="features-heading" title={title} description={description} />

        <ul
          className="grid min-h-fit grid-cols-1 gap-1 md:grid-cols-2 lg:min-h-100 lg:grid-cols-4 lg:gap-1 xl:min-h-114"
          role="list"
        >
          {/* Column 1: Large Card */}
          <li className="lg:col-span-1">
            <GridCard feature={items[0]} className="h-full w-full" />
          </li>

          {/* Column 2 */}
          <li className="group/card-1 flex h-full w-full">
            <div className="flex h-full min-h-65 w-full flex-col transition-all duration-300 ease-in-out md:min-h-74 lg:min-h-auto lg:gap-1 lg:group-hover/card-1:gap-0">
              <GridCard
                feature={items[1]}
                className="h-20! rounded-b-none md:h-25! lg:h-36! lg:rounded-b-2xl lg:group-hover/card-1:rounded-b-none"
              />
              <GridCard
                feature={items[4]}
                className="w-full grow rounded-t-none lg:rounded-t-2xl lg:group-hover/card-1:rounded-t-none"
              />
            </div>
          </li>

          {/* Column 3*/}
          <li className="group/card-2 flex h-full w-full">
            <div className="flex h-full min-h-65 w-full flex-col transition-all duration-300 ease-in-out md:min-h-74 lg:min-h-auto lg:gap-1 lg:group-hover/card-2:gap-0">
              <GridCard
                feature={items[2]}
                className="w-full grow rounded-b-none lg:rounded-b-2xl lg:group-hover/card-2:rounded-b-none"
              />
              <GridCard
                feature={items[5]}
                className="h-20! rounded-t-none md:h-25! lg:h-36! lg:rounded-t-2xl lg:group-hover/card-2:rounded-t-none"
              />
            </div>
          </li>

          {/* Column 4 */}
          <li className="group/card-3 flex h-full w-full">
            <div className="flex h-full min-h-65 w-full flex-col transition-all duration-300 ease-in-out md:min-h-74 lg:min-h-auto lg:gap-1 lg:group-hover/card-3:gap-0">
              <GridCard
                feature={items[3]}
                className="h-20! rounded-b-none md:h-25! lg:h-36! lg:rounded-b-2xl lg:group-hover/card-3:rounded-b-none"
              />
              <GridCard
                feature={items[6]}
                className="w-full grow rounded-t-none lg:rounded-t-2xl lg:group-hover/card-3:rounded-t-none"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
