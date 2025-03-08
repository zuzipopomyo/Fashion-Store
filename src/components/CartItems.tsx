import useCartStore from "../store/useCartStore";
import IconButton from "./IconButton";
import ProductCard from "./ProductCard";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export const CartItems = () => {
  const { addedProducts, increaseQuantity, removeFromCart, decreaseQuantity } =
    useCartStore();

  return (
    <div className="flex flex-col gap-5 h-full overflow-auto pb-40">
      {addedProducts.map((product) => (
        <div className="flex gap-2 items-center">
          <ProductCard
            key={product.id}
            productInfo={product}
            middleSection={<></>}
          />
          <div className="flex flex-col justify-between items-center">
            <div>
              <h2>{product.title}</h2>
              <span>${product.price}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <IconButton
                  onClick={() => decreaseQuantity(product.id)}
                  icon={<FaMinus />}
                />
                <span>{product.quantity}</span>
                <IconButton
                  onClick={() => increaseQuantity(product.id)}
                  icon={<FaPlus />}
                />
              </div>

              <IconButton
                onClick={() => removeFromCart(product.id)}
                icon={<FaTrash />}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
