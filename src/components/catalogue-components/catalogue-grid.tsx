"use client";

import * as motion from "motion/react-client";
import CatalogueCard from "./catalogue-card";
import PriceSlider from "../price-slider";
import CatalogueSearch from "./catalogue-search";
import CatalogueGridInfos from "./catalogue-grid-infos";

import { useEffect, useState } from "react";
import { TProduct } from "@/types/product-type";
import { getProducts } from "@/actions/actions";
import { useInView } from "react-intersection-observer";
import CatalogueInfiniteScroll from "./catalogue-infinite-scroll";
import { Bars } from "../ui/shadcn-io/spinner";
import { sleep } from "@/lib/utils";
import { useDebounce } from "@/hooks/custom-hooks";
import NoProduct from "../no-product";

type TCatalogueGridProps = {
  initialProducts: TProduct[];
  totalProducts: number;
};

export default function CatalogueGrid({
  initialProducts,
  totalProducts,
}: TCatalogueGridProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [search, setSearch] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>(initialProducts);
  const [filteredTotalProducts, setFilteredTotalProducts] =
    useState<number>(totalProducts);

  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInfinite, setIsLoadingInfinite] = useState(false);

  const debouncedSearch = useDebounce(search, 500);
  const debouncedPriceRange = useDebounce(priceRange, 1000);

  useEffect(() => {
    setCurrentPage(1);
    setFilteredProducts([]);
  }, [search, priceRange]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setIsLoadingInfinite(true);

      await sleep(700);
      const { products, totalProducts } = await getProducts(currentPage, 9, {
        priceRange: debouncedPriceRange,
        search: debouncedSearch,
      });

      if (currentPage === 1) {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(prev => [...prev, ...products]);
      }
      setIsLoadingInfinite(false);

      setFilteredTotalProducts(totalProducts);
    };
    fetchFilteredProducts();
  }, [currentPage, debouncedPriceRange, debouncedSearch]);

  useEffect(() => {
    const loading = async () => {
      if (inView && filteredProducts.length < filteredTotalProducts) {
        setCurrentPage(prev => prev + 1);
      }
    };
    loading();
  }, [inView]);

  return (
    <section className="mt-10 px-5 text-black max-w-[1440px] mx-auto">
      <CatalogueSearch search={search} setSearch={setSearch} />

      <CatalogueGridInfos
        filteredProducts={filteredProducts}
        filteredTotalProducts={filteredTotalProducts}
      />

      <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />

      {isLoading && <Bars />}
      {!isLoading || (filteredProducts.length === 0 && <NoProduct />)}

      {!isLoading && filteredProducts.length > 0 && (
        <div className="mt-20 mb-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
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

      <div ref={ref} className="flex justify-center mt-15">
        {isLoadingInfinite && <Bars />}
      </div>

      <CatalogueInfiniteScroll
        filteredTotalProducts={filteredTotalProducts}
        filteredProducts={filteredProducts}
      />
    </section>
  );
}
