import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../pages/Home";
interface CartStore {
  addedProducts: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  showCartDrawer: boolean;
  setShowCartDrawer: (show: boolean) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      showCartDrawer: false,
      addedProducts: [],

      setShowCartDrawer: (show: boolean) => set({ showCartDrawer: show }),

      addToCart: (product: Product, quantity = 1) =>
        set((state) => {
          const updatedProducts = [
            ...state.addedProducts,
            { ...product, quantity },
          ];
          return {
            addedProducts: updatedProducts,
          };
        }),

      removeFromCart: (productId: number) =>
        set((state) => ({
          addedProducts: state.addedProducts.filter(
            (product) => product.id !== productId
          ),
        })),

      decreaseQuantity: (productId: number) =>
        set((state) => {
          const updatedProducts = state.addedProducts.map((product) =>
            product.id === productId
              ? { ...product, quantity: Math.max(1, product.quantity - 1) }
              : product
          );

          return {
            addedProducts: updatedProducts,
          };
        }),

      increaseQuantity: (productId: number) =>
        set((state) => {
          const updatedProducts = state.addedProducts.map((product) =>
            product.id === productId
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );

          return {
            addedProducts: updatedProducts,
          };
        }),

        updateQuantity: (productId: number, newQuantity: number) =>
          set((state) => {
            const updatedProducts = state.addedProducts.map((product) =>
              product.id === productId
                ? { ...product, quantity: newQuantity }
                : product
            );
  
            return {
              addedProducts: updatedProducts,
            };
          }),

    }),
    { name: "cart-store" }
  )
);

export default useCartStore;
