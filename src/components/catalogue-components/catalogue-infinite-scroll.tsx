"use client";

import * as motion from "motion/react-client";
import { Progress } from "../ui/progress";
import { TProduct } from "@/types/product-type";

type CatalogueInfiniteScrollProps = {
  TotalShownedProducts: number;
  filteredProducts: TProduct[];
};

export default function CatalogueInfiniteScroll({
  TotalShownedProducts,
  filteredProducts,
}: CatalogueInfiniteScrollProps) {
  const start = filteredProducts.length > 0 ? 1 : 0;
  const end = filteredProducts.length;

  const progressValue =
    TotalShownedProducts > 0 ? Math.min((end / TotalShownedProducts) * 100, 100) : 0;

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col justify-center items-center mt-30 text-black"
      >
        <p>
          Showing {start}-{end} of {TotalShownedProducts} items
        </p>

        <Progress className="max-w-3xl w-[600px] h-0.5 mt-5" value={progressValue} />
      </motion.div>
    </section>
  );
}
