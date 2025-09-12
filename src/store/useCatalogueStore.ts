import { TProduct } from "@/types/product-type";
import { create } from "zustand";

type StoreProduct = {
  products: TProduct[];
  filtered: TProduct[];
  search: string;
  setProduct: (product: TProduct[]) => void;
  setSearch: (query: string) => void;
};

export const useCatalogueStore = create<StoreProduct>(set => ({
  products: [],
  filtered: [],
  search: "",
  setProduct: products => set({ products, filtered: products }),
  setSearch: query =>
    set(state => ({
      search: query,
      filtered: state.products.filter(p => {
        p.name.toLowerCase().includes(query.toLowerCase());
      }),
    })),
}));
