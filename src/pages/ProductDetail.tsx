import { useEffect, useState } from "react";
import CustomerReview from "../components/CustomerReview";
import axios from "axios";
import { Product } from "./Home";
import { useParams } from "react-router-dom";
import IconButton from "../components/IconButton";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
  const { id: productId } = useParams();
  const [productDetail, setProductDetail] = useState<Product | null>(null);

  const fetchProductDetail = async () => {
    try {
      const res: { data: Product } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProductDetail(res.data);
    } catch (error) {
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  const ImgSection = () => (
    <div style={{ flex: 1 }} className="flex flex-col gap-8">
      {/*image view  */}
      <div className="flex gap-0 h-[480px] w-[580px] overflow-hidden">
        <img
          className="h-full w-full"
          src={productDetail?.image}
          alt="product"
        />
        <div className="flex flex-col gap-0 h-[480px]">
          <img
            className="h-full w-full"
            src={productDetail?.image}
            alt="product"
          />
          <img
            className="h-full w-full"
            src={productDetail?.image}
            alt="product"
          />
        </div>
      </div>

      {/* description */}
      <div>
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <span
              aria-current="page"
              className="inline-flex border-b items-center justify-center px-4 py-2 group"
            >
              Description
            </span>
          </li>
          <li className="me-2">
            <span className="inline-flex items-center justify-center px-4 py-2  group">
              Size & Fit
            </span>
          </li>
          <li className="me-2">
            <span className="inline-flex items-center justify-center px-4 py-2 group">
              Shipping & Return
            </span>
          </li>
        </ul>
      </div>

      <p>{productDetail?.description}</p>
    </div>
  );

  const InfoSection = () => (
    <div style={{ flex: 1 }} className="flex flex-col gap-4">
      <span className="capitalize font-semibold">
        {productDetail?.category}
      </span>

      <span className="font-bold text-3xl truncate w-3/4">
        {productDetail?.title}
      </span>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-purple-600">
          ${productDetail?.price}
        </span>
        <span>In Stock</span>
      </div>

      {/* color */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Color (Black)</h3>
        <div className="flex gap-2">
          {["black", "white", "brown", "gray"].map((color) => (
            <button
              key={color}
              className={`w-10 h-10 rounded-full border ${
                color === "white" ? "border-gray-400" : ""
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* size */}
      <div className="mt-4 border-b pb-7">
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
            <button
              key={size}
              className="border p-2 text-sm rounded hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* quantity */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">Quantity</span>
        <div className="flex gap-2 items-center">
          <IconButton
            //   onClick={() => removeOneQuantity(product.productId)}
            icon={<FaMinus />}
          />
          <span>{10}</span>
          <IconButton
            //   onClick={() => addToCart(product.productInfo)}
            icon={<FaPlus />}
          />
        </div>
      </div>

      <div className="border p-3 my-8 bg-gray-100">
        4-interest free payments of $18.75 with Klama.{" "}
        <span className="text-purple-600 hover:underline">Learn More</span>
      </div>

      <button
        type="button"
        className="text-white w-full bg-purple-600 hover:bg-purple-800 px-5 py-4 flex justify-center items-center"
      >
        Add To Cart
      </button>
      <button
        type="button"
        className="border w-ful hover:bg-gray-100 px-5 py-4 gap-3 flex justify-center items-center"
      >
        <FaRegHeart />
        <span>Favourite</span>
      </button>

      {/* find in store */}
      <div className="flex gap-10 items-center">
        <div className="bg-purple-200 w-full h-40 p-4">
          <h6 className="mb-2 font-semibold">Find In Store</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ea.
          </p>
        </div>
        <div className="bg-purple-200 w-full h-40 p-4">
          <h6 className="mb-2 font-semibold">Deliver To Home</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ea.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-20 px-24 !pb-0 pt-10">
        <ImgSection />
        <InfoSection />
      </div>

      <CustomerReview />
    </div>
  );
};
export default ProductDetail;
