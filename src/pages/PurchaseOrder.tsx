import { useState } from "react";
import { CartItems } from "../components/CartItems";
import GiftCard from "../components/GiftCard";
import InformationCard from "../components/InformationCard";
import PaymentCard from "../components/PaymentCard";
import ShippingCard from "../components/ShippingCard";
import Stepper from "../components/Stepper";
import OrderItemsCard from "../components/OrderItemsCard";

const PurchaseOrder = () => {
  const [step, setStep] = useState(1);

  const onContinue = () => step < 4 && setStep(step + 1);
  const onReturn = () => step > 1 && setStep(step - 1);

  return (
    <div className="px-[120px] py-10">
      <div className="flex gap-12 justify-around">
        <div className="flex flex-col gap-5 flex-[6]">
          <Stepper step={step} />

          <div className="max-h-[580px] overflow-auto">
            {step === 1 && <CartItems />}
            {step === 2 && <InformationCard />}
            {step === 3 && <PaymentCard />}
            {step === 4 && <ShippingCard />}
          </div>
          <div className="flex justify-between gap-9 items-center mb-4">
            <button
              onClick={onReturn}
              type="button"
              className="p-2 text-black border border-gray-300"
            >
              Return
            </button>
            <button
              onClick={onContinue}
              type="submit"
              className="bg-purple-600 text-white p-2"
            >
              Continue
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-0 flex-[4]">
          {step > 1 && <OrderItemsCard />}
          <GiftCard />
        </div>
      </div>
    </div>
  );
};
export default PurchaseOrder;
