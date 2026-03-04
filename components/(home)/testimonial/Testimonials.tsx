'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonialsContent } from '@/constants';
import { Quote } from 'lucide-react';
import { TESTIMONIAL_CONFIG } from './testimonial-config';
import TestimonialHeader from './TestimonialHeader';
import TestimonialCard from './TestimonialCard';
import AvatarThumb from './AvatarThumb';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = testimonialsContent.items;

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, TESTIMONIAL_CONFIG.AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextTestimonial, isPaused]);

  return (
    <section id="testimonials" className="bg-black" aria-labelledby="testimonial-heading">
      <div className="main-container">
        <TestimonialHeader
          title={testimonialsContent.title}
          description={testimonialsContent.description}
        />

        <div className="relative border-t border-white/10 pt-14 pb-12 sm:pt-10 sm:pb-12 md:pt-10 md:pb-12 lg:pt-16 lg:pb-20 2xl:pt-24">
          <div className="absolute top-0 right-0 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Quote Side */}
            <div className="relative pb-5 md:pb-7 lg:col-span-8 lg:pb-0">
              <div className="absolute -top-9 -left-4 opacity-10 sm:-top-2 md:-top-3 lg:-top-14 lg:-left-8 xl:-top-12 2xl:-top-12">
                <Quote size={80} className="text-white/60 lg:size-100 xl:size-110" />
              </div>

              <TestimonialCard testimonial={testimonials[activeIndex]} activeIndex={activeIndex} />
            </div>

            {/* Avatar Navigation Side */}
            <nav className="lg:col-span-4" aria-label="Testimonial navigation">
              <ul
                role="tablist"
                className="flex flex-row flex-wrap justify-center gap-6 md:gap-7 lg:flex-col lg:items-center lg:gap-8 2xl:gap-10"
              >
                {testimonials.map((item, index) => (
                  <AvatarThumb
                    key={index}
                    item={item}
                    index={index}
                    isActive={index === activeIndex}
                    onSelect={(i) => {
                      setActiveIndex(i);
                      setIsPaused(true);
                    }}
                    onHover={setIsPaused}
                  />
                ))}
              </ul>
            </nav>
          </div>

          <div className="absolute right-0 bottom-0 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
