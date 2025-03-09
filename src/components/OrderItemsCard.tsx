import useCartStore from "../store/useCartStore";

const OrderItemsCard = () => {
  const {addedProducts: orderItems} = useCartStore()

  return (
    <div className="max-h-[400px] overflow-auto p-6 w-full bg-gray-100 flex flex-col items-start gap-4">
      <div>Shopping Bag ({orderItems.length} items)</div>
      {orderItems.map((item) => (
        <div key={item.id} className="flex text-white rounded-lg">
          <div className="w-[140px] h-[140px] p-3">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex-grow items-center">
              <h1 className="text-black font-semibold pb-2 w-80 truncate">{item.title}</h1>
              <p className="text-purple-500 text-sm font-bold">${item.price}</p>
            </div>
            <div className="text-black font-light text-sm flex flex-col gap-1">
              <span>Color: Black</span>
              <span>Size: XL</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderItemsCard;
