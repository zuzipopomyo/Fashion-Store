import GiftCard from "../components/GiftCard";
import InformationCard from "../components/InformationCard";
import OrderItemsCard from "../components/OrderItemsCard";
import PaymentCard from "../components/PaymentCard";
import ShippingCard from "../components/ShippingCard";
const PurchaseOrder = () => {
  return (
    <div className=" px-[120px] py-10">
      <div className="flex gap-10 justify-around">
        <div>
          <OrderItemsCard />
        </div>
        <div>
          <GiftCard />
        </div>
      </div>
      <InformationCard/>
      <PaymentCard/>
      <ShippingCard/>
    </div>
  );
};
export default PurchaseOrder;
