import { Product } from "../pages/Home";
import useCartStore from "../store/useCartStore";
import IconButton from "./IconButton";
import ProductCard from "./ProductCard";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartDrawer = ({ onClose }: { onClose: () => void }) => {
  const { addedProducts, addToCart, removeFromCart } = useCartStore();

  function convertAddedProductsToOrder(addedProducts: Product[]) {
    const productMap = new Map();

    addedProducts.forEach((item) => {
      if (productMap.has(item.id)) {
        productMap.get(item.id).quantity += 1;
      } else {
        productMap.set(item.id, {
          productId: productMap.size + 1,
          productInfo: item,
          quantity: 1,
        });
      }
    });

    return Array.from(productMap.values());
  }

  const addedOrders: {
    productId: number;
    quantity: number;
    productInfo: Product;
  }[] = convertAddedProductsToOrder(addedProducts);

  return (
    <div
      className="fixed top-0 right-[720px] z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-[720px] "
      aria-labelledby="drawer-right-label"
    >
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 "
      >
        <svg
          className="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        Shopping Bag
      </h5>
      <button
        onClick={onClose}
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center "
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      <div className="flex flex-col gap-5">
        {addedOrders.map((product) => (
          <div className="flex gap-2 items-center justify-center">
            <ProductCard
              key={product.productId}
              productInfo={product.productInfo}
              middleSection={<></>}
            />
            <div className="flex flex-col justify-between items-center">
              <div>
                <h2>{product.productInfo.title}</h2>
                <span>${product.productInfo.price}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <IconButton
                    // onClick={() => removeFromCart(product.productId)}
                    icon={<FaMinus />}
                  />
                  <span>{product.quantity}</span>
                  <IconButton
                    onClick={() => addToCart(product.productInfo)}
                    icon={<FaPlus />}
                  />
                </div>

                <IconButton
                  onClick={() => removeFromCart(product.productId)}
                  icon={<FaTrash />}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
