import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../pages/Home";

interface CartStore {
  addedProducts: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      addedProducts: [],
      
      addToCart: (product: Product) =>
        set((state) => ({ addedProducts: [...state.addedProducts, product] })),

      removeFromCart: (productId: number) =>
        set((state) => ({
          addedProducts: state.addedProducts.filter(
            (product) => product.id !== productId
          ),
        })),
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;
