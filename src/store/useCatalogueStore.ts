import { TProduct } from "@/types/product-type";
import { create } from "zustand";

type StoreProduct = {
  products: TProduct[];
  filteredProduct: TProduct[];
  search: string;
  currentPage: number;
  itemsPerPage: number;
  hasLoadedMore: boolean;

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
  hasLoadedMore: false,
  itemsPerPage: 9,

  visibleCount: () => get().filteredProduct.length,

  addProducts: newProducts =>
    set(state => ({
      filteredProduct: [...state.filteredProduct, ...newProducts],
      currentPage: state.currentPage + 1,
      hasLoadedMore: true,
    })),

  setProduct: products =>
    set(state => ({
      products,
      filteredProduct: products.slice(0, state.itemsPerPage),
    })),

  setSearch: query =>
    set(state => {
      if (!query.trim()) {
        const restoredProducts = state.hasLoadedMore
          ? state.products
          : state.products.slice(0, state.itemsPerPage);
        return { search: "", filteredProduct: restoredProducts };
      }
      return {
        search: query,
        filteredProduct: state.products
          .slice(0, state.currentPage * state.itemsPerPage)
          .filter(p => p.name.toLowerCase().includes(query.toLowerCase())),
      };
    }),
}));
