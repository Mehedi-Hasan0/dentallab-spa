"use client";

import { Phone, Mail } from "lucide-react";
import { NavCardItem } from "@/types";

export default function NavContactCard({ item }: { item: NavCardItem }) {
  return (
    <div className="nav-card group" aria-label={item.title}>
      <h3 className="nav-card-title">{item.title}</h3>

      <div className="flex flex-col gap-3">
        {item.description && (
          <p className="text-sm text-white/40 leading-relaxed">
            {item.description}
          </p>
        )}

        {item.phone && (
          <a
            href={`tel:${item.phone}`}
            className="nav-contact-link"
            aria-label={`Call ${item.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            <span className="text-sm">{item.phone}</span>
          </a>
        )}

        {item.email && (
          <a
            href={`mailto:${item.email}`}
            className="nav-contact-link"
            aria-label={`Email ${item.email}`}
          >
            <Mail size={16} aria-hidden="true" />
            <span className="text-sm">{item.email}</span>
          </a>
        )}
      </div>

      {/* Subtle hover overlay */}
      <div className="nav-card-overlay" />
    </div>
  );
}
