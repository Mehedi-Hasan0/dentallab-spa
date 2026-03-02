"use client";

import { socialLinks, offices } from "@/constants";
import SocialIcon from "../SocialIcon";

export default function MenuFooter() {
  return (
    <footer className="mt-auto pt-20 lg:grid grid-cols-1 md:grid-cols-3 gap-12 hidden">
      {/* Socials */}
      <section className="flex flex-col gap-8" aria-label="Social media links">
        <ul className="flex gap-6">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white transition-all flex items-center justify-center w-11 h-11"
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} size={20} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-white/20 text-xs uppercase tracking-widest">Follow us for daily updates</p>
      </section>

      {/* Offices */}
      {offices.map((office) => (
        <section key={office.location} className="flex flex-col gap-4" aria-labelledby={`office-${office.location.toLowerCase()}`}>
          <h4 id={`office-${office.location.toLowerCase()}`} className="text-lg font-medium text-white/90">{office.location}</h4>
          <div className="flex flex-col gap-1">
            <a href={`tel:${office.phone}`} className="text-sm text-white/40 hover:text-white transition-colors w-fit">
              {office.phone}
            </a>
            <a href={`mailto:${office.email}`} className="text-sm text-white/40 hover:text-white transition-colors w-fit">
              {office.email}
            </a>
          </div>
        </section>
      ))}
    </footer>
  );
}
