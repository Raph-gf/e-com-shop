"use client";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";
import { Progress } from "../ui/progress";
import { useCatalogueStore } from "@/store/useCatalogueStore";
import { getProducts } from "@/actions/actions";

export default function CatalogueMoreBtn() {
  const {
    filteredProduct,
    products,
    visibleCount,
    currentPage,
    itemsPerPage,
    addProducts,
    search,
  } = useCatalogueStore();

  const loadMoreProduct = async () => {
    const nextPage = currentPage + 1;
    const { products: newProducts } = await getProducts(nextPage, itemsPerPage);
    if (!newProducts || newProducts.length === 0) return;

    addProducts(newProducts);
  };

  const totalItems = search ? filteredProduct.length : products.length;

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=" flex flex-col justify-center items-center mt-50 text-black"
      >
        <p>
          Showing 1-{visibleCount()} of {totalItems} items
        </p>
        <Progress
          className="max-w-3xl h-0.5 mt-5"
          value={
            filteredProduct.length > 0
              ? Math.min((visibleCount() / totalItems) * 100, 100)
              : 0
          }
        />

        <Button
          className="mt-5"
          onClick={loadMoreProduct}
          disabled={totalItems === visibleCount() || filteredProduct.length === 0}
        >
          {totalItems === visibleCount() ? (
            "All products are displayed"
          ) : (
            <>
              Load more <ChevronRightIcon />
            </>
          )}
        </Button>
      </motion.div>
    </section>
  );
}
