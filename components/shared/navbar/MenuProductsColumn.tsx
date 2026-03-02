"use client";

import { navLinks } from "@/constants";
import MenuLink from "./MenuLink";
import clsx from "clsx";

interface MenuProductsColumnProps {
  onClose: () => void;
}

export default function MenuProductsColumn({ onClose }: MenuProductsColumnProps) {
  const products = navLinks.find(l => l.name === "Products")?.dropdownItems;

  return (
    <section 
      className={clsx("flex flex-col gap-1 h-full lg:col-span-1 transition-all duration-300 hover:gap-0 group/card")}
      aria-labelledby="menu-products-heading"
    >
      <div className={clsx("glass-card-2 p-8", "group-hover/card:rounded-b-none")}>
        <h2 id="menu-products-heading" className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white/90">
          Products
        </h2>
      </div>
      <div className={clsx("glass-card-2 px-8 py-6 grow flex flex-col justify-end", "group-hover/card:rounded-t-none")}>
        <ul className="grid grid-cols-2 gap-y-6 gap-x-12">
          {products?.map((product) => (
            <li key={product.title}>
              <MenuLink href={product.href} onClick={onClose}>
                {product.title}
              </MenuLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
