import purchaseCart from "../assets/images/purchase-cart.png";
const PurchaseCompletion = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <img
        src={purchaseCart}
        alt="Order Confirmed"
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-2xl font-bold">Thank you for your order!</h1>
      <p className="text-gray-600 text-center max-w-md mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200">Go back shopping</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Go back shopping</button>
      </div>
    </div>
    );
};
export default PurchaseCompletion;