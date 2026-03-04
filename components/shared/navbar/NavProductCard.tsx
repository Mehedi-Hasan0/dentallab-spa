import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { NavCardItem } from '@/types';
import MagneticFramer from '../MagneticFramer';

export default function NavProductCard({ item }: { item: NavCardItem }) {
  return (
    <Link href={item.href} className="nav-card group" aria-label={`View ${item.title}`}>
      {/* Title */}
      <h3 className="nav-card-title">{item.title}</h3>

      {/* Bottom content: description + reveal button */}
      <div className="flex flex-col gap-6">
        {item.description && (
          <p className="translate-y-16 text-sm leading-relaxed text-white/40 transition-transform duration-500 ease-out group-hover:translate-y-2">
            {item.description}
          </p>
        )}

        <MagneticFramer strength={0.1}>
          <div
            aria-hidden="true"
            className="flex w-fit translate-y-16 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-2 group-hover:opacity-100"
          >
            See Details
            <ArrowUpRight size={14} />
          </div>
        </MagneticFramer>
      </div>

      {/* Subtle hover overlay */}
      <div className="nav-card-overlay" />
    </Link>
  );
}
