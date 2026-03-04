import { FeatureItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { MoveUpRight } from 'lucide-react';
import MagneticFramer from './MagneticFramer';

interface GridCardProps {
  feature: FeatureItem;
  className?: string;
}

export default function GridCard({ feature, className }: GridCardProps) {
  const isLarge = feature.variant === 'large';
  const isGraphic = feature.variant === 'graphic';
  const isText = feature.variant === 'text';

  return (
    <article
      className={clsx(
        'group glass-card-2 relative flex h-full flex-col overflow-hidden rounded-2xl p-4 transition-all duration-300 lg:p-5 xl:p-6',
        (isGraphic || isText) && 'justify-end',
        !isLarge && !isGraphic && !isText && 'items-center justify-center text-center',
        className
      )}
      aria-labelledby={
        feature.title ? `feature-title-${feature.title.replace(/\s+/g, '-')}` : undefined
      }
    >
      {/* background pattern */}
      <div
        className='absolute inset-0 z-0 bg-[url("/images/bg-img/bg-pattern-2.webp")] bg-cover bg-center bg-no-repeat opacity-30 blur-xs transition-transform duration-500 group-hover:scale-110'
        aria-hidden="true"
      />

      {/* Background Image for Graphic Variant */}
      {isGraphic && feature.image && (
        <Image
          src={feature.image}
          alt={feature.imageAlt || feature.title || 'Dental laboratory feature image'}
          fill
          className="object-scale-down"
          quality={60}
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 50vw, (max-width: 1535px) 25vw, 384px"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {isLarge ? (
          <div className="flex h-full flex-col justify-between gap-12">
            <h3
              id={`feature-title-${feature.title?.replace(/\s+/g, '-')}`}
              className="text-xl font-medium whitespace-pre-line text-white/90 md:text-xl lg:text-2xl"
            >
              {feature.title}
            </h3>

            <div className="flex flex-col gap-8">
              {feature.description && (
                <p className="max-w-xs text-xs leading-relaxed text-white/60 md:text-sm">
                  {feature.description}
                </p>
              )}

              {feature.cta && (
                <MagneticFramer strength={0.1}>
                  <Link
                    href={feature.cta.href}
                    aria-label={feature.cta.ariaLabel}
                    className="flex w-fit items-center gap-1 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 md:px-8 md:py-4 lg:px-3 lg:py-2.5 lg:text-xs xl:gap-2 xl:px-6 xl:py-3 xl:text-base"
                  >
                    {feature.cta.text}
                    <MoveUpRight className="h-4 w-4" />
                  </Link>
                </MagneticFramer>
              )}
            </div>
          </div>
        ) : (
          <div
            className={clsx(
              'flex h-full flex-col',
              isGraphic || isText ? 'justify-end' : 'items-center justify-center'
            )}
          >
            {feature.title && (
              <h3
                id={`feature-title-${feature.title.replace(/\s+/g, '-')}`}
                className={clsx('font-medium text-white/90 md:whitespace-pre-line', 'feature-text')}
              >
                {feature.title}
              </h3>
            )}
            {isText && feature.description && (
              <p className="text-xs leading-relaxed text-white/55 md:text-sm">
                {feature.description}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
