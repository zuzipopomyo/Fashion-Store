import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import AddRemoveButtons from "./AddRemoveButtons";
import ProductCard from "./ProductCard";

export const CartItems = () => {
  const { addedProducts, increaseQuantity, removeFromCart, decreaseQuantity } =
    useCartStore();
  const navigate = useNavigate();

  return addedProducts.length ? (
    <div className="flex flex-col flex-[8] gap-5 h-full overflow-auto">
      {addedProducts.map((product) => (
        <div className="flex gap-2 items-center">
          <ProductCard
            // height="200px"
            key={product.id}
            productInfo={product}
            middleSection={<></>}
          />
          <div className="flex flex-col justify-between h-full w-full p-5">
            <div className="flex-grow items-center">
              <h1 className="text-black text-2xl font-semibold pb-5">
                {product.title}
              </h1>
              <p className="text-purple-500 text-xl font-bold">
                ${product.price}
              </p>
            </div>
            <div>
              <div className="text-black font-light">{`Black/XL`}</div>
              <AddRemoveButtons
                onPlus={() => increaseQuantity(product.id)}
                onMinus={() => decreaseQuantity(product.id)}
                onDelete={() => removeFromCart(product.id)}
                quantity={product.quantity}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="h-full flex-col gap-4 flex items-center justify-center">
      <h3 className="text-xl font-light text-gray-400">No Products in Cart, Shop Now 👇</h3>
      <button
        onClick={() => navigate("/products")}
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        Shop Now
      </button>
    </div>
  );
};
