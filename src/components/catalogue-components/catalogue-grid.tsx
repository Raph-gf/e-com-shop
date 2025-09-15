"use client";

import * as motion from "motion/react-client";
import CatalogueCard from "./catalogue-card";
import PriceSlider from "../price-slider";
import CatalogueSearch from "./catalogue-search";
import CatalogueGridInfos from "./catalogue-grid-infos";
import CatalogueInfiniteScroll from "./catalogue-infinite-scroll";
import NoProduct from "../no-product";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TProduct } from "@/types/product-type";
import { getProducts } from "@/actions/actions";
import { useInView } from "react-intersection-observer";
import { Bars } from "../ui/shadcn-io/spinner";
import { sleep } from "@/lib/utils";
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

  const [currentPage, setCurrentPage] = useState<number>(() => {
    const pageParam = searchParams.get("page");
    return pageParam ? parseInt(pageParam, 10) : 1;
  });

  const [priceRange, setPriceRange] = useState<[number, number]>([0, highestPrice]);
  const [search, setSearch] = useState<string>("");

  const [productsState, setProductsState] = useState<{
    allProducts: TProduct[];
    filteredProducts: TProduct[];
    TotalProducts: number;
  }>({
    allProducts: initialProducts,
    filteredProducts: initialProducts,
    TotalProducts: totalProducts,
  });

  const [infiniteScrolling, setInfiniteScrolling] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInfinite, setIsLoadingInfinite] = useState(false);

  const debouncedSearch = useDebounce(search, 200);
  const debouncedPriceRange = useDebounce(priceRange, 200);

  const isFiltering =
    search !== "" || priceRange[0] !== 0 || priceRange[1] !== highestPrice;

  const productToShow = isFiltering
    ? productsState.filteredProducts
    : productsState.allProducts;

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
    skip: productToShow.length >= productsState.TotalProducts,
    onChange: visible => {
      if (visible && !infiniteScrolling) {
        setInfiniteScrolling(true);
        setCurrentPage(prev => prev + 1);
      }
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("search", search);
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());
    params.set("page", currentPage.toString());
    router.replace(`/products?${params.toString()}`, { scroll: false });
  }, [currentPage, search, priceRange]);

  useEffect(() => {
    if (isFiltering) {
      setCurrentPage(1);
      setProductsState(prev => ({
        ...prev,
        filteredProducts: [],
      }));
    }
  }, [debouncedSearch, debouncedPriceRange, isFiltering]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoadingInfinite(true);

      if (productToShow.length >= productsState.TotalProducts) return;

      const { products, totalProducts } = await getProducts(currentPage, 9, {
        priceRange,
        search: debouncedSearch,
      });

      if (isFiltering) {
        setProductsState(prev => ({
          ...prev,
          filteredProducts:
            currentPage === 1 ? products : [...prev.filteredProducts, ...products],
          TotalProducts: totalProducts,
        }));
      } else {
        if (infiniteScrolling) {
          setProductsState(prev => ({
            ...prev,
            allProducts:
              currentPage === 1 ? products : [...prev.allProducts, ...products],
            TotalProducts: totalProducts,
          }));
        }
      }

      setIsLoadingInfinite(false);
      setInfiniteScrolling(false);
    };

    fetchProducts();
  }, [currentPage, debouncedPriceRange, debouncedSearch]);

  return (
    <section className="mt-10 px-5 text-black max-w-[1440px] mx-auto">
      <CatalogueSearch search={search} setSearch={setSearch} />

      <CatalogueGridInfos
        filteredProducts={productToShow}
        TotalShownedProducts={productsState.TotalProducts}
      />

      <PriceSlider
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        highestPrice={highestPrice}
        setCurrentPage={setCurrentPage}
        setFilteredProducts={filteredProductsArray =>
          setProductsState(prev => ({
            ...prev,
            filteredProducts: Array.isArray(filteredProductsArray)
              ? filteredProductsArray
              : prev.filteredProducts,
          }))
        }
      />

      {isLoading && <Bars />}
      {!isLoading || (productsState.filteredProducts.length === 0 && <NoProduct />)}

      {!isLoading && productsState.filteredProducts.length > 0 && (
        <div className="mt-20 mb-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
          {productToShow.map((product, index) => (
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
        {isLoadingInfinite && <Bars />}
        <CatalogueInfiniteScroll
          TotalShownedProducts={productsState.TotalProducts}
          filteredProducts={productToShow}
        />
      </div>
    </section>
  );
}
