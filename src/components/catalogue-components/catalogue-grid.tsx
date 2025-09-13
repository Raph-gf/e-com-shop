"use client";

import * as motion from "motion/react-client";
import CatalogueCard from "./catalogue-card";
import { TProduct } from "@/types/product-type";
import { useCatalogueStore } from "@/store/useCatalogueStore";
import { useEffect } from "react";
import PriceSlider from "../price-slider";

type TCatalogueGridProps = {
  initialProducts: TProduct[];
};

export default function CatalogueGrid({ initialProducts }: TCatalogueGridProps) {
  const { filteredProduct, products, setProduct, visibleCount, search } =
    useCatalogueStore();

  const totalItems = search ? filteredProduct.length : products.length;

  useEffect(() => {
    if (products.length === 0) {
      setProduct(initialProducts);
    }
  }, [initialProducts, products, setProduct]);

  return (
    <section className="mt-10 px-5 text-black max-w-[1440px] mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-bold">
          Showing 1-{visibleCount()} of {totalItems} items
        </h2>
        <p className="mt-2 text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magnam esse,
          rem praesentium quod natus numquam?
        </p>
      </div>

      <div className="flex justify-center items-center mt-8 mb-10 space-x-7 text-white">
        <h2 className="text-black font-bold">Price range</h2>

        <PriceSlider />
      </div>

      <div className="">
        {filteredProduct.length === 0 ? (
          <div className=" mt-10 w-full flex justify-center items-center">
            <h1 className="text-xl font-bold">No Product Found</h1>
          </div>
        ) : (
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
            {filteredProduct.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.003 }}
                whileTap={{ scale: 0.95 }}
              >
                <CatalogueCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
