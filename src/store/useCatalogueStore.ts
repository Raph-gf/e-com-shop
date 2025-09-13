import { TProduct } from "@/types/product-type";
import { create } from "zustand";

type StoreProduct = {
  products: TProduct[];
  filtered: TProduct[];
  search: string;
  currentPage: number;
  itemsPerPage: number;
  visibleCount: () => number;
  setProduct: (product: TProduct[]) => void;
  setSearch: (query: string) => void;
};

export const useCatalogueStore = create<StoreProduct>((set, get) => ({
  products: [],
  filtered: [],
  search: "",
  currentPage: 1,
  itemsPerPage: 9,
  visibleCount: () =>
    Math.min(get().filtered.length, get().currentPage * get().itemsPerPage),

  setProduct: products => set({ products, filtered: products }),
  setSearch: query =>
    set(state => {
      if (!query.trim()) {
        return { search: "", filtered: state.products };
      }
      return {
        search: query,
        filtered: state.products.filter(p =>
          p.name.toLowerCase().includes(query.toLowerCase())
        ),
      };
    }),
}));
