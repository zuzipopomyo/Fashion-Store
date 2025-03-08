import { FaTrash } from "react-icons/fa";
import CardImg from "../assets/images/01 1.png";
import IconButton from "./IconButton";

const OrderItemsCard = () => {
  const orderItems = [
    {
      id: 1,
      name: "Vote New T-shirt",
      price: "$12.00",
      color: "black",
      size: "Xl",
      quantity: 1,
      image: CardImg,
    },
    {
      id: 2,
      name: "Vote New T-shirt",
      price: "$12.00",
      color: "black",
      size: "Xl",
      quantity: 1,
      image: CardImg,
    },
  ];

  return (
    <div className="h-[600px] flex flex-col gap-4">
      {orderItems.map((item) => (
        <div
          key={item.id}
          className="flex w-[600px] text-white rounded-lg overflow-hidden mx-20"
        >
          <div className="w-1/2 p-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 p-4 flex flex-col gap-6">
            <div className="flex-grow items-center">
              <h1 className="text-black text-2xl font-semibold pb-5">
                {item.name}
              </h1>
              <p className="text-purple-500 text-xl font-bold">{item.price}</p>
            </div>
            <h3 className="text-black">{`${item.color}/${item.size}`}</h3>

            <div className="flex justify-between items-center mt-auto">
              <div className="inline-flex rounded-md shadow-xs" role="group">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                >
                  +
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                >
                  {item.quantity}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  -
                </button>
              </div>
              <IconButton icon={<FaTrash />} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderItemsCard;
