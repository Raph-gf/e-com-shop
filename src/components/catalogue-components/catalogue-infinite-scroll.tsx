"use client";

import * as motion from "motion/react-client";
import { Progress } from "../ui/progress";
import { TProduct } from "@/types/product-type";

type CatalogueMoreBtnProps = {
  filteredTotalProducts: number;
  filteredProducts: TProduct[];
};

export default function CatalogueInfiniteScroll({
  filteredTotalProducts,
  filteredProducts,
}: CatalogueMoreBtnProps) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=" flex flex-col justify-center items-center mt-50 text-black"
      >
        <p>
          Showing 1-{filteredProducts.length} of {filteredTotalProducts} items
        </p>

        <Progress
          className="max-w-3xl h-0.5 mt-5"
          value={
            filteredProducts.length > 0
              ? Math.min((filteredProducts.length / filteredTotalProducts) * 100, 100)
              : 0
          }
        />
      </motion.div>
    </section>
  );
}
