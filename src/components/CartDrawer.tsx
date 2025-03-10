import { useNavigate } from "react-router";
import useCartStore from "../store/useCartStore";
import { CartItems } from "./CartItems";
import IconButton from "./IconButton";
export interface IAddedOrder {
  productId: number;
  quantity: number;
}

const CartDrawer = ({ onClose }: { onClose: () => void }) => {
  const { addedProducts } = useCartStore();
  const navigate = useNavigate();

  return (
    <div
      className="fixed flex flex-col justify-between top-0 right-[720px] z-40 h-screen p-4 overflow-hidden transition-transform translate-x-full bg-gray-100 w-[720px] shadow-gray-400 shadow-2xl"
      aria-labelledby="drawer-right-label"
    >
      <div className="flex flex-[1] justify-between items-center">
        <h5
          id="drawer-right-label"
          className="inline-flex text-2xl items-center mb-4 font-bold text-black "
        >
          Shopping Bag ({addedProducts.length} items)
        </h5>
        <IconButton
          onClick={onClose}
          icon={
            <svg
              className="w-4 h-4"
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
          }
        />
      </div>

      <CartItems />

      {addedProducts.length > 0 && (
        <div>
          <button
            onClick={() => {
              navigate("/purchaseOrder");
              onClose();
            }}
            type="button"
            className="text-white w-full bg-purple-600 hover:bg-purple-800 px-5 py-4 flex justify-center items-center"
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
            <span>
              Checkout - $
              {addedProducts
                .reduce((a, b) => a + b.price * (b?.quantity || 1), 0)
                .toFixed(2)}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
