import { FaTrash } from "react-icons/fa";

const AddRemoveButtons = ({
  onPlus,
  onMinus,
  onDelete,
  quantity,
  hideDelete = false,
}: {
  onPlus: () => void;
  onMinus: () => void;
  onDelete?: () => void;
  quantity: number;
  hideDelete?: boolean;
}) => {
  return (
    <div className="flex mt-4 justify-between items-center w-full">
      <div className="inline-flex rounded-md shadow-xs" role="group">
        <button
          onClick={onMinus}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          -
        </button>

        <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
          {quantity}
        </div>

        <button
          onClick={onPlus}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          +
        </button>
      </div>

      {!hideDelete && (
        <button
          onClick={onDelete}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          <FaTrash />
        </button>
      )}
    </div>
  );
};

export default AddRemoveButtons;
