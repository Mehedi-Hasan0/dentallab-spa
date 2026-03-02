"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NavCardItem } from "@/types";

export default function NavProductCard({ item }: { item: NavCardItem }) {
  return (
    <Link
      href={item.href}
      className="nav-card group"
      aria-label={`View ${item.title}`}
    >
      {/* Title */}
      <h3 className="nav-card-title">{item.title}</h3>

      {/* Bottom content: description + reveal button */}
      <div className="flex flex-col gap-6">
        {item.description && (
          <p className="text-sm text-white/40 leading-relaxed translate-y-16 group-hover:translate-y-2 transition-transform duration-500 ease-out">
            {item.description}
          </p>
        )}

        <div
          aria-hidden="true"
          className="flex items-center gap-2 py-2 px-4 w-fit rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white translate-y-16 opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-500 ease-out"
        >
          See Details
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Subtle hover overlay */}
      <div className="nav-card-overlay" />
    </Link>
  );
}
