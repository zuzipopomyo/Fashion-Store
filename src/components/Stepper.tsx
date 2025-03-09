import { FaCheck } from "react-icons/fa";

const Stepper = ({ step }: { step: number }) => {
  return (
    <ol className="flex items-center w-full">
      <li className="w-full">
        <div
          className={`flex items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${
            step >= 2 ? "after:border-orange-300" : "after:border-gray-100"
          }`}
        >
          <span className="flex text-white font-bold items-center justify-center w-8 h-8 bg-orange-300 rounded-full lg:h-12 lg:w-12 shrink-0">
            {step > 1 ? <FaCheck /> : 1}
          </span>
        </div>
        <span className="font-light text-sm">My Bag</span>
      </li>
      <div className="w-full">
        <li
          className={`flex items-center after:content-[''] after:w-full after:h-1 after:border-b ${
            step >= 3 ? "after:border-orange-300" : "after:border-gray-100"
          } after:border-4 after:inline-block`}
        >
          <span
            className={`flex items-center font-bold justify-center w-8 h-8 ${
              step >= 2 ? "bg-orange-300 text-white" : "bg-gray-100"
            } rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            {step > 2 ? <FaCheck /> : 2}
          </span>
        </li>
        <span className="font-light text-sm">Gift Card</span>
      </div>
      <div className="w-full">
        <li
          className={`flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b ${
            step >= 4 ? "after:border-orange-300" : "after:border-gray-100"
          } after:border-4 after:inline-block `}
        >
          <span
            className={`flex items-center font-bold justify-center w-8 h-8 ${
              step >= 3 ? "bg-orange-300 text-white" : "bg-gray-100"
            }  rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            {step > 3 ? <FaCheck /> : 3}
          </span>
        </li>
        <span className="font-light text-sm">Information</span>
      </div>

      <div className="w-full">
        <li className="flex items-center w-full">
          <span
            className={`flex items-center justify-center w-8 h-8 font-bold ${
              step >= 4 ? "bg-orange-300 text-white" : "bg-gray-100"
            } rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            {step > 4 ? <FaCheck /> : 4}
          </span>
        </li>
        <span className="font-light text-sm">Payment</span>
      </div>
    </ol>
  );
};

export default Stepper;
