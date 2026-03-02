'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { PartnerLogo } from '@/types';

interface PartnerLogosProps {
  logos: PartnerLogo[];
}

/**
 * PartnerLogos component - Renders an infinite marquee of partner logos.
 */
export const PartnerLogos = ({ logos }: PartnerLogosProps) => {
  if (!logos || logos.length === 0) return null;

  return (
    <div
      className="relative w-full border-y-2 border-white/15 py-4 md:py-6 lg:py-8 xl:py-10"
      aria-label="Our Trusted Partners"
    >
      <Marquee speed={80} autoFill={true} gradient={false} className="flex items-center">
        <div className="flex items-center gap-12 px-6 md:gap-20 md:px-10 lg:gap-24 xl:gap-32">
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-10 max-w-sm shrink-0 items-center justify-center md:h-12 xl:h-14"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={200}
                height={60}
                className="h-8 w-auto object-contain md:h-10 xl:h-12"
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
