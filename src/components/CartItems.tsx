import useCartStore from "../store/useCartStore";
import { IAddedOrder } from "./CartDrawer";
import IconButton from "./IconButton";
import ProductCard from "./ProductCard";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export const CartItems = ({ addedOrders }: { addedOrders: IAddedOrder[] }) => {
  const { addToCart, removeFromCart, removeOneQuantity } =
    useCartStore();

  return (
    <div className="flex flex-col gap-5 h-full overflow-auto pb-40">
      {addedOrders.map((product) => (
        <div className="flex gap-2 items-center">
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
                  onClick={() => removeOneQuantity(product.productId)}
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
  );
};
