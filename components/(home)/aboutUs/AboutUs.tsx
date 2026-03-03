'use client';

import { aboutUsContent } from '@/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import AboutHeroCard from './AboutHeroCard';
import GridCard from '@/components/shared/GridCard';

export default function AboutUs() {
  const { title, description, heroCard, columns } = aboutUsContent;

  return (
    <section id="about" className="main-container bg-foreground" aria-labelledby="about-heading">
      <div className="flex flex-col gap-10 lg:gap-16">
        {/* Section Header */}
        <SectionHeader headingId="about-heading" title={title} description={description} />

        {/* Card Grid */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-1 lg:min-h-104 lg:grid-cols-3 xl:min-h-120 2xl:min-h-136"
          role="list"
          aria-label="About us highlights"
        >
          {/* Left - Hero Card */}
          <div className="min-h-80 md:col-span-2 lg:col-span-1 lg:min-h-full" role="listitem">
            <AboutHeroCard data={heroCard} className="h-full w-full rounded-2xl" />
          </div>

          {/* Info Columns - Stacked GridCards */}
          {columns.map((column) => (
            <div
              key={column.id}
              className="group flex flex-col md:col-span-1 lg:min-h-full"
              role="listitem"
            >
              <div className="flex h-full w-full flex-col transition-all duration-300 ease-in-out lg:gap-1 lg:group-hover:gap-0">
                <GridCard
                  feature={column.items[0]}
                  className="h-16! rounded-b-none md:h-20! lg:h-24! lg:rounded-b-2xl lg:group-hover:rounded-b-none"
                />
                <GridCard
                  feature={column.items[1]}
                  className="w-full grow rounded-t-none bg-white/5 lg:rounded-t-2xl lg:group-hover:rounded-t-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
