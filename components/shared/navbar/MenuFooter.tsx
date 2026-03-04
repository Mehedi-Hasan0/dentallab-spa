'use client';

import { socialLinks, offices } from '@/constants';
import SocialIcon from '../SocialIcon';
import MagneticFramer from '../MagneticFramer';

export default function MenuFooter() {
  return (
    <footer className="mt-auto hidden grid-cols-1 gap-12 pt-20 md:grid-cols-3 lg:grid">
      {/* Socials */}
      <section className="flex flex-col gap-8" aria-label="Social media links">
        <ul className="flex gap-6">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <MagneticFramer strength={0.9}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 p-3 text-white/60 transition-all hover:border-white hover:text-white"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} size={20} />
                </a>
              </MagneticFramer>
            </li>
          ))}
        </ul>
        <p className="text-xs tracking-widest text-white/20 uppercase">
          Follow us for daily updates
        </p>
      </section>

      {/* Offices */}
      {offices.map((office) => (
        <section
          key={office.location}
          className="flex flex-col gap-4"
          aria-labelledby={`office-${office.location.toLowerCase()}`}
        >
          <h4
            id={`office-${office.location.toLowerCase()}`}
            className="text-lg font-medium text-white/90"
          >
            {office.location}
          </h4>
          <div className="flex flex-col gap-1">
            <a
              href={`tel:${office.phone}`}
              className="w-fit text-sm text-white/40 transition-colors hover:text-white"
            >
              {office.phone}
            </a>
            <a
              href={`mailto:${office.email}`}
              className="w-fit text-sm text-white/40 transition-colors hover:text-white"
            >
              {office.email}
            </a>
          </div>
        </section>
      ))}
    </footer>
  );
}
