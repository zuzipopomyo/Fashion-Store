import { useParams } from "react-router-dom";
import CategoryHeadImg from "../assets/images/category-head.png";
import useProductStore from "../store/useProductStore";
import { Product } from "./Home";
import ProductCard from "../components/ProductCard";
import useCartStore from "../store/useCartStore";
const departments = [
  { name: "Men", count: 230 },
  { name: "Kids", count: 45 },
  { name: "Women", count: 102 },
  { name: "Big and Tall", count: 10 },
];

const ProductCategory = () => {
  const { name: categoryName } = useParams();
  const { categorizedProducts } = useProductStore();
  const products: Product[] = categorizedProducts[`${categoryName}`] || [];
  const { addToCart } = useCartStore();

  return (
    <div className="h-full w-full my-6">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="font-bold text-4xl mb-3 capitalize">
            {categoryName || ""}
          </h1>
          <p>
            Category Description: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum excepturi aut earum ad laudantium eveniet
            iure officiis laborum facere nihil?
          </p>
        </div>
        <img src={CategoryHeadImg} className="w-screen h-[464px]" alt="" />
      </div>

      <div className="flex gap-10 px-[120px] py-4 justify-around">
        <FilterSidebar />

        <div style={{ flex: 7 }}>
          <div className="flex items-center justify-between">
            <span>Home/{categoryName}</span>
            <span>Sort by: Featured</span>
          </div>

          <div className="flex gap-5 flex-wrap justify-evenly m-4">
            {products.map((product) => (
              <div className="flex flex-col gap-2 items-center justify-center">
                <ProductCard
                  key={product.id}
                  productInfo={product}
                  isShowFooter
                  middleSection={<></>}
                />
                <button
                  onClick={() => addToCart(product)}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                >
                  <svg
                    className="w-3.5 h-3.5 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;

const FilterSidebar = () => {
  return (
    <div style={{ flex: 3 }} className="h-full w-full text-lg">
      <h1 className="text-xl font-bold pb-3 ">Filter</h1>
      {/* Selected Filters */}
      <div className="flex gap-2 mb-4 border-b pb-7">
        <span className="px-2 py-1 bg-gray-200 text-sm rounded flex items-center gap-1 radius-5">
          Men <button>×</button>
        </span>
        <span className="px-2 py-1 bg-gray-200 text-sm rounded flex items-center gap-1">
          Women <button>×</button>
        </span>
      </div>
      {/* {deperment} */}
      <div className="mb-4 border-b pb-7 ">
        <h3 className="font-semibold mb-2">Department</h3>
        <div className="mb-4">
          {departments.map(({ name, count }) => (
            <label key={name} className="flex items-center gap-2 text-lg">
              <input type="checkbox" /> {name}{" "}
              <span className="ml-auto">{count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-4 border-b pb-7">
        <h3 className="font-semibold mb-2">Category</h3>
        {[
          "Tees",
          "Accessories",
          "Polos",
          "Sweatshirts and Hoodies",
          "Pants",
          "Jackets",
          "Sweaters",
          "Shorts",
          "Swimwear",
          "Casual Shirt",
          "Lounge and Underwear",
        ].map((category) => (
          <label key={category} className="flex items-center gap-4">
            <input type="checkbox" /> {category}
          </label>
        ))}
      </div>
      {/* Size Filter */}
      <div className="mb-4 border-b pb-7">
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
      {/* Color Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-2">
          {[
            "black",
            "white",
            "red",
            "blue",
            "purple",
            "green",
            "brown",
            "gray",
            "yellow",
          ].map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full border ${
                color === "white" ? "border-gray-400" : ""
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex gap-2">
          <input
            type="number"
            className="border p-2 w-full rounded"
            placeholder="$10.00"
          />
          <input
            type="number"
            className="border p-2 w-full rounded"
            placeholder="$350.00"
          />
        </div>
        <button className="w-full mt-2 p-2 bg-purple-500 text-white rounded">
          Save
        </button>
      </div>
    </div>
  );
};
