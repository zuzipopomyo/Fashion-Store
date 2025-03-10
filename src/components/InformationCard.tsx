import { useForm } from "react-hook-form";

const InformationCard = ({
  onReturn,
  onContinue,
}: {
  onReturn: () => void;
  onContinue: () => void;
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex item-center justify-between pb-8">
        <div className="font-semibold text-lg">Contract Information </div>
        <div className="font-thin">
          Already have an acc? <span className="text-blue-700">Login</span>
        </div>
      </div>
      <div className="relative mb-4">
        <select className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option selected={true}>Indonesia</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="flex space-x-4 mb-4">
        <input
          {...register("firstName", { required: true })}
          type="text"
          required
          placeholder="First name"
          className="w-1/2 p-2 border border-gray-300 bg-transparent"
        />

        <input
          {...register("lastName")}
          type="text"
          placeholder="Last name"
          className="w-1/2 p-2 border border-gray-300 bg-transparent"
        />
      </div>
      <input
        {...register("address", { required: true })}
        type="text"
        required
        placeholder="Address"
        className="w-full p-2 border border-gray-300 bg-transparent mb-4"
      />
      <input
        {...register("city")}
        type="text"
        placeholder="City"
        className="w-full p-2 border border-gray-300 bg-transparent mb-4"
      />
      <div className="relative mb-4">
        <select className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option selected={true}>Province</option>
        </select>
      </div>
      <input
        {...register("postalCode", { required: true })}
        type="text"
        required
        placeholder="Postal Code"
        className="w-full p-2 border border-gray-300 bg-transparent mb-4"
      />
      <input
        {...register("phone")}
        type="text"
        placeholder="Phone"
        className="w-full p-2 border border-gray-300 bg-transparent mb-4"
      />

      <div className="flex justify-between gap-9 items-center mb-4">
        <button
          onClick={onReturn}
          type="button"
          className="p-2 text-black border border-gray-300"
        >
          Return
        </button>
        <button type="submit" className="bg-purple-600 text-white p-2">
          Continue
        </button>
      </div>
    </form>
  );
};
export default InformationCard;
