import { TProduct } from "@/types/product-type";
import { create } from "zustand";

type StoreProduct = {
  products: TProduct[];
  filteredProduct: TProduct[];
  search: string;
  currentPage: number;
  itemsPerPage: number;
  visibleCount: () => number;
  setProduct: (product: TProduct[]) => void;
  setSearch: (query: string) => void;
  addProducts: (product: TProduct[]) => void;
};

export const useCatalogueStore = create<StoreProduct>((set, get) => ({
  products: [],
  filteredProduct: [],
  search: "",
  currentPage: 1,
  itemsPerPage: 9,
  visibleCount: () => get().filteredProduct.length,

  addProducts: newProducts =>
    set(state => ({
      filteredProduct: [...state.filteredProduct, ...newProducts],
      currentPage: state.currentPage + 1,
    })),

  setProduct: products => set({ products, filteredProduct: products.slice(0, 9) }),
  setSearch: query =>
    set(state => {
      if (!query.trim()) {
        return { search: "", filteredProduct: state.products };
      }
      return {
        search: query,
        filteredProduct: state.products.filter(p =>
          p.name.toLowerCase().includes(query.toLowerCase())
        ),
      };
    }),
}));
