import { useState } from "react";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import IconButton from "./IconButton";
import { Product } from "../pages/Home";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  productInfo,
  isShowFooter = false,
  middleSection,
  height = '300px'
}: {
  productInfo: Product;
  isShowFooter?: boolean;
  middleSection?: React.ReactNode;
  height?: string;
}) => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-3 w-45">
      <div
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        className={`relative w-64 !min-h-[${height}] !h-[${height}] bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden group`
}      >
        <img
          className="w-full h-full overflow-hidden object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          src={productInfo.image}
          alt="product image"
        />

        {middleSection ? (
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-100 group-hover:!opacity-100">
            {middleSection}
          </div>
        ) : (
          isShow && (
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-100 bg-transparent group-hover:!opacity-100 hover:bg-black hover:bg-opacity-30">
              <IconButton
                onClick={() => navigate(`/product-detail/${productInfo.id}`)}
                icon={<FaSearch />}
              />
              <IconButton icon={<FaRegHeart />} />
            </div>
          )
        )}
      </div>

      {isShowFooter && (
        <div className="flex flex-col items-center gap-1 text-center">
          <h4 className="font-semibold text-[16px] truncate w-40">
            {productInfo.title}
          </h4>
          <span className="text-purple-600 font-bold text-[16px]">
            ${productInfo.price}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
