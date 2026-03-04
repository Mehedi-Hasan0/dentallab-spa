'use client';

import { motion } from 'motion/react';
import { contactInfoVariants } from './anim';
import clsx from 'clsx';
import { contactContent } from '@/constants';
import { Check, Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
}

export default function ContactInfo({ className }: ContactInfoProps) {
  return (
    <motion.div
      variants={contactInfoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={clsx('flex flex-col justify-center gap-10 text-white lg:gap-16', className)}
    >
      <h2 className="mb-5 text-3xl font-medium tracking-tight md:mb-6 md:text-4xl lg:mb-7 lg:text-5xl xl:mb-8 xl:text-6xl 2xl:mb-10 2xl:text-7xl">
        {contactContent.title}
      </h2>

      {/* Checklist */}
      <ul
        className="mb-10 space-y-4 md:mb-12 lg:mb-14 2xl:mb-16"
        aria-label="Benefits of connecting with us"
      >
        {contactContent.checklist.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-2 text-sm text-white/80 md:text-base lg:gap-3 lg:text-lg"
          >
            <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-black lg:h-5 lg:w-5">
              <Check size={14} strokeWidth={3} />
            </div>
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Office Locations */}
      <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-10 md:pt-12 lg:gap-12 lg:pt-14 2xl:pt-16">
        {contactContent.offices.map((office, index) => (
          <div key={index} className="space-y-4 md:space-y-5 lg:space-y-6">
            <h3 className="text-base leading-tight font-medium text-white/90 md:text-lg lg:text-xl">
              {office.title}
            </h3>

            <div className="space-y-2.5 text-white/60 md:space-y-3 lg:space-y-4">
              <a
                href={`tel:${office.phone}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-white md:text-base"
              >
                <Phone size={18} className="text-base md:text-lg" />
                <span>{office.phone}</span>
              </a>
              <a
                href={`mailto:${office.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-white md:text-base"
              >
                <Mail size={18} className="text-base md:text-lg" />
                <span>{office.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-base md:text-lg" />
                <span>{office.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
