import { useState } from "react";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import IconButton from "./IconButton";

const ProductCard1 = ({
  isShowFooter = false,
  middleSection,
}: {
  isShowFooter?: boolean;
  middleSection?: React.ReactNode;
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        className="relative h-80 w-80 hover:opacity-40 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        {/* TODO: make iconbotton visible on hover, try to avoid using state , use css instead */}
        {middleSection ? (
          <div className="flex align-items-center gap-2 absolute top-[45%] left-[35%] opacity-100 group-hover:!opacity-100">
            {middleSection}
          </div>
        ) : (
          isShow && (
            <div className="flex align-items-center gap-2 absolute top-[45%] left-[35%] opacity-100 group-hover:!opacity-100">
              <IconButton icon={<FaSearch />} />{" "}
              <IconButton icon={<FaRegHeart />} />
            </div>
          )
        )}

        <a href="#">
          <img
            className="p-8 rounded-t-lg w-full h-full object-cover"
            src="https://d1it09c4puycyh.cloudfront.net/920x1300/catalog/product/8/9/8907884363547_1.jpg"
            alt="product image"
          />
        </a>
      </div>

      {isShowFooter && (
        <div className="flex-col flex items-center gap-2">
          <h4 className="font-bold">Woman in Red Coat</h4>
          <span className="text-purple-500 font-bold">$89</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard1;
