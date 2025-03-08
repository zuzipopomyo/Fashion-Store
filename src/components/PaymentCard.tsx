import { FaPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
const PaymentCard = () => {
  return (
    <div className="w-[500px] p-6 border rounded-md">
      <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
      <div className="p-4 border rounded-md text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <input type="radio" name="payment" className="accent-purple-500" />
            <span className="text-black">Credit/Debit Card</span>
          </div>
          <div className="flex space-x-2">
            <FaCcVisa className="h-6 w-10 text-blue-700 text-xl" />
            <FaCcMastercard className="h-6 w-10 text-blue-700 text-xl" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-2 border border-gray-300 bg-transparent mb-4 text-white"
        />
        <input
          type="text"
          placeholder="Name on card"
          className="w-full p-2 border border-gray-300 bg-transparent mb-4 text-white"
        />
        <div className="flex gap-4 mb-4">
          <select className="p-2 border border-gray-300 bg-transparent w-1/3 text-black">
            <option value="" disabled selected>
              Month
            </option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="p-2 border border-gray-300 bg-transparent w-1/3 text-black">
            <option value="" disabled selected>
              Year
            </option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={new Date().getFullYear() + i}>
                {new Date().getFullYear() + i}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="CCV"
            className="p-2 border border-gray-300 bg-transparent w-1/3 text-white"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button type="button" className="p-2 text-black border border-gray-300">
          Return
        </button>
        <button className="bg-purple-600 text-white p-2">Continue</button>
      </div>
      <div className="flex items-center space-x-2 justify-between pt-5">
        <div>
          <input type="radio" name="payment" className="accent-purple-500" />
          <span className="p-5">Paypal</span>
        </div>
        <FaPaypal className="h-6 w-10 text-blue-700 text-xl" />
      </div>
    </div>
  );
};
export default PaymentCard;
