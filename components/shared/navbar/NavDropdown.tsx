import { motion } from 'motion/react';
import NavProductCard from './NavProductCard';
import NavContactCard from './NavContactCard';
import { NavCardItem } from '@/types';

interface NavDropdownProps {
  items: NavCardItem[];
}

export default function NavDropdown({ items }: NavDropdownProps) {
  const gridCols = items.length <= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4';

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute top-0 right-0 left-0 z-30 px-5 pt-28 pb-16 xl:px-10 xl:pt-32 2xl:px-20"
    >
      <ul className={`mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 ${gridCols}`}>
        {items.map((item, index) => (
          <li key={item.title}>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.1 + index * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {item.phone || item.email ? (
                <NavContactCard item={item} />
              ) : (
                <NavProductCard item={item} />
              )}
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
