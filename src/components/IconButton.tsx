const IconButton = ({
  icon,
  onClick,
  isShadow = true,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
  isShadow?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-black bg-white font-medium rounded-full text-sm p-2.5 text-center ${
        isShadow ? "shadow-md" : "shadow-none"
      } inline-flex items-center`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
