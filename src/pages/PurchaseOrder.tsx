import { useState } from "react";
import { CartItems } from "../components/CartItems";
import GiftCard from "../components/GiftCard";
import InformationCard from "../components/InformationCard";
import PaymentCard from "../components/PaymentCard";
import ShippingCard from "../components/ShippingCard";
import Stepper from "../components/Stepper";
import OrderItemsCard from "../components/OrderItemsCard";
import { useNavigate } from "react-router";
import useCartStore from "../store/useCartStore";
import axios from "axios";

const PurchaseOrder = () => {
  const [step, setStep] = useState(1);
  const { addedProducts } = useCartStore();
  const [shippingPrice, setShippingPrice] = useState("0.00");

  const onContinue = async () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      try {
        const cart = {
          userId: 1,
          products: addedProducts.map((product) => ({ id: product.id })),
        };
        await axios
          .post("https://fakestoreapi.com/carts", cart)
          .then((response) => navigate("/purchase-completion"));
      } catch (error) {
        alert("Something went wrong please try again later!");
      }
    }
  };
  const onReturn = () => step > 1 && setStep(step - 1);
  const navigate = useNavigate();

  return (
    <div className="px-[120px] py-10">
      <div className="flex gap-12 justify-around">
        <div className="flex flex-col gap-5 flex-[6]">
          <Stepper step={step} />

          <div className="max-h-[580px] overflow-auto">
            {step === 1 && <CartItems />}
            {step === 2 && (
              <InformationCard onContinue={onContinue} onReturn={onReturn} />
            )}
            {step === 3 && (
              <PaymentCard onContinue={onContinue} onReturn={onReturn} />
            )}
            {step === 4 && (
              <ShippingCard value={shippingPrice} setValue={setShippingPrice} />
            )}
          </div>

          {addedProducts.length > 0 && (step === 1 || step === 4) && (
            <div className="flex justify-between gap-9 items-center mt-8 mb-4">
              {step !== 1 ? (
                <button
                  onClick={onReturn}
                  type="button"
                  className="p-2 text-black border border-gray-300"
                >
                  Return
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={onContinue}
                className="bg-purple-600 text-white p-2"
              >
                Continue
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-0 flex-[4]">
          {step > 1 && <OrderItemsCard />}
          <GiftCard shippingPrice={shippingPrice} />
        </div>
      </div>
    </div>
  );
};
export default PurchaseOrder;
