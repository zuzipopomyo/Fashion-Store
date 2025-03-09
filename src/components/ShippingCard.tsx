const ShippingCard = ({ value, setValue }: any) => {
  const shippingMethods = [
    {
      id: 1,
      name: "Standard Shipping",
      description: "Delivery in 1-2 working days",
      price: "11.00",
    },
    {
      id: 2,
      name: "Express Shipping",
      description: "Delivery in 24 hours",
      price: "20.00",
    },
    {
      id: 3,
      name: "Overnight Shipping",
      description: "Guaranteed next-day delivery",
      price: "30.00",
    },
    {
      id: 4,
      name: "Pickup Station",
      description: "Pick up from nearest location",
      price: "5.00",
    },
    {
      id: 5,
      name: "Free Shipping",
      description: "5-7 working days",
      price: "0.00",
    },
  ];
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Shipping Method</h2>
      {shippingMethods.map((method) => (
        <div
          key={method.id}
          className="p-4 border rounded-md flex justify-between items-center mb-2"
        >
          <div>
            <input
              checked={value === method.price}
              onChange={() => setValue(method.price)}
              type="radio"
              name="shipping"
              className="mr-2"
            />
            <p className="font-medium inline">{method.name}</p>
            <p className="text-sm text-gray-600">{method.description}</p>
          </div>
          <span className="font-bold">${method.price}</span>
        </div>
      ))}
    </div>
  );
};
export default ShippingCard;
