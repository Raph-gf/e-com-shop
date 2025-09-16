"use client";

import * as motion from "motion/react-client";
import CatalogueCard from "./catalogue-card";
import PriceSlider from "../price-slider";
import CatalogueSearch from "./catalogue-search";
import CatalogueGridInfos from "./catalogue-grid-infos";
import CatalogueInfiniteScroll from "./catalogue-infinite-scroll";
import NoProduct from "../no-product";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TProduct } from "@/types/product-type";
import { getProducts } from "@/actions/actions";
import { useInView } from "react-intersection-observer";
import { Bars } from "../ui/shadcn-io/spinner";
import { useDebounce } from "@/hooks/custom-hooks";

type TCatalogueGridProps = {
  initialProducts: TProduct[];
  totalProducts: number;
  highestPrice: number;
};

export default function CatalogueGrid({
  initialProducts,
  totalProducts,
  highestPrice,
}: TCatalogueGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // pagination
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const pageParam = searchParams.get("page");
    return pageParam ? parseInt(pageParam, 10) : 1;
  });

  console.log(currentPage);
  // filtres
  const [priceRange, setPriceRange] = useState<[number, number]>([0, highestPrice]);
  const [search, setSearch] = useState<string>("");

  // produits
  const [products, setProducts] = useState<TProduct[]>(initialProducts);
  const [totalCount, setTotalCount] = useState<number>(totalProducts);

  // loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // debounces
  const debouncedSearch = useDebounce(search, 600);
  const debouncedPriceRange = useDebounce(priceRange, 700);

  // slider handler
  const handleSliderChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };

  // products handler
  const fetchProducts = useCallback(
    async (page: number, shouldReset = false) => {
      setIsLoading(true);

      try {
        const { products: newProducts, totalProducts } = await getProducts(page, 9, {
          search: debouncedSearch,
          priceRange: debouncedPriceRange,
        });

        setProducts(prev => (shouldReset ? newProducts : [...prev, ...newProducts]));
        setTotalCount(totalProducts);
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [debouncedSearch, debouncedPriceRange]
  );

  // mise à jour URL
  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("search", debouncedSearch);
    params.set("minPrice", debouncedPriceRange[0].toString());
    params.set("maxPrice", debouncedPriceRange[1].toString());
    params.set("page", currentPage.toString());

    router.push(`/products?${params.toString()}`, { scroll: false });
  }, [debouncedPriceRange, debouncedSearch]);

  // fetch produits

  useEffect(() => {
    setCurrentPage(1);
    fetchProducts(1, true);
  }, [debouncedSearch, debouncedPriceRange]);

  // infinite scroll
  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: false,
    skip: isLoading || products.length >= totalCount,
    onChange: async visible => {
      if (visible && !isLoading && products.length < totalCount) {
        const nextPage = currentPage + 1;
        await fetchProducts(nextPage, false);
        setCurrentPage(nextPage);
      }
    },
  });

  return (
    <section className="mt-10 px-5 text-black max-w-[1440px] mx-auto">
      <CatalogueSearch search={search} setSearch={setSearch} />

      <CatalogueGridInfos filteredProducts={products} TotalShownedProducts={totalCount} />

      <PriceSlider
        priceRange={priceRange}
        handleSliderChange={handleSliderChange}
        setPriceRange={setPriceRange}
        highestPrice={highestPrice}
        setCurrentPage={setCurrentPage}
        setFilteredProducts={setProducts}
        setAllProducts={setProducts}
      />

      {isLoading ||
        (products.length === 0 && (
          <div className="mt-10 mb-10">
            <NoProduct />
          </div>
        ))}

      {!isLoading && products.length > 0 && (
        <div className="mt-20 mb-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.003 }}
            >
              <CatalogueCard product={product} />
            </motion.div>
          ))}
        </div>
      )}

      <div
        ref={ref}
        className="flex flex-col justify-center items-center mt-30 text-black"
      >
        {isLoading && <Bars />}
        <CatalogueInfiniteScroll
          TotalShownedProducts={totalCount}
          filteredProducts={products}
        />
      </div>
    </section>
  );
}
