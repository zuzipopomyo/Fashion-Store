const GiftCard = () => {
  return (
    <div className="w-[450px] mx-auto bg-gray-100 p-6">
      <h2 className="text-lg font-semibold mb-2">Gift card or discount code</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter gift card or discount code"
          className="flex-grow p-2 border rounded-l-md outline-none"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md">
          Apply
        </button>
      </div>
      <hr className="my-4" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">$49.40</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span className="font-semibold">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-semibold">$0.00</span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>$62.40</span>
      </div>
    </div>
  );
};

export default GiftCard;
