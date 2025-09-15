"use client";

import { TProduct } from "@/types/product-type";

type Props = {
  TotalShownedProducts: number;
  filteredProducts: TProduct[];
};

export default function CatalogueGridInfos({
  TotalShownedProducts,
  filteredProducts,
}: Props) {
  const start = filteredProducts.length > 0 ? 1 : 0;
  const end = Math.min(filteredProducts.length, TotalShownedProducts);

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="font-bold">
        Showing {start}-{end} of {TotalShownedProducts} items
      </h2>
      <p className="mt-2 text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magnam esse, rem
        praesentium quod natus numquam?
      </p>
    </div>
  );
}
