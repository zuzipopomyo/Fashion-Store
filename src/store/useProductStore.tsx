import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../pages/Home";

interface ProductStore {
  allProducts: Product[];
  categorizedProducts: any;
  setAllProducts: (products: Product[]) => void;
  setCategorizedProducts: (products: any) => void;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      allProducts: [],
      categorizedProducts: {},
      setAllProducts: (products) => set({ allProducts: products }),
      setCategorizedProducts: (products) =>
        set({ categorizedProducts: products }),
    }),
    { name: "product-store" }
  )
);

export default useProductStore;
