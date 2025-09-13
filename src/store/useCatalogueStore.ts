import { TProduct } from "@/types/product-type";
import { create } from "zustand";

type StoreProduct = {
  products: TProduct[];
  filteredProduct: TProduct[];
  search: string;
  currentPage: number;
  itemsPerPage: number;
  hasLoadedMore: boolean;
  priceRange: [number, number];

  setPriceRange: (range: [number, number]) => void;
  visibleCount: () => number;
  setProduct: (product: TProduct[]) => void;
  setSearch: (query: string) => void;
  addProducts: (product: TProduct[]) => void;
  applyFilters: () => void;
};

export const useCatalogueStore = create<StoreProduct>((set, get) => ({
  products: [],
  filteredProduct: [],
  search: "",
  currentPage: 1,
  hasLoadedMore: false,
  itemsPerPage: 9,
  priceRange: [0, 1000],

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

  setSearch: query => {
    set({ search: query });

    get().applyFilters();
  },

  setPriceRange: range => {
    set({ priceRange: range });

    get().applyFilters();
  },

  applyFilters: () => {
    const { products, search, priceRange, itemsPerPage, hasLoadedMore } = get();

    let filtered = products;

    if (search.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (!hasLoadedMore) {
      filtered = filtered.slice(0, itemsPerPage);
    }

    set({ filteredProduct: filtered });
  },
}));
