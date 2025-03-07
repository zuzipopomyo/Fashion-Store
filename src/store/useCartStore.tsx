import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../pages/Home";

interface CartStore {
  addedProducts: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeOneQuantity: (productId: number) => void;
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

        removeOneQuantity: (productId: number) =>
          set((state) => {
              const productIndToRemove = state.addedProducts.findIndex(
                  (product) => product.id === productId
              );
              if (productIndToRemove !== -1) {
                  const updatedProducts = [...state.addedProducts];
                  updatedProducts.splice(productIndToRemove, 1);
      
                  return { addedProducts: updatedProducts };
              }
              return state; 
          }),
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;
