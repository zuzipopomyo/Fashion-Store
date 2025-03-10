import { useNavigate, useParams } from "react-router-dom";
import CategoryHeadImg from "../assets/images/category-head.png";
import useProductStore from "../store/useProductStore";
import { Product } from "./Home";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
const departments = [
  { name: "Men", count: 0 },
  { name: "Kids", count: 0 },
  { name: "Women", count: 0 },
  { name: "Big and Tall", count: 0 },
];

interface IFilters {
  category: string[];
  startPrice: string;
  endPrice: string;
}

const initialFilters = {
  category: [],
  startPrice: "",
  endPrice: "",
};

const ProductCategory = () => {
  const { name: categoryName } = useParams();
  const { allProducts } = useProductStore();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [filters, setFilters] = useState<IFilters>(initialFilters);
  const navigate = useNavigate();

  const onApply = (filters: IFilters) => {
    let filteredProducts = [...allProducts];

    // Category filter
    if (filters.category.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.category.includes(product.category)
      );
    }
    // Price filter
    if (!!filters.startPrice && !!filters.endPrice) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= +filters.startPrice &&
          product.price <= +filters.endPrice
      );
    }
    navigate("/products");
    setProducts(filteredProducts);
  };

  useEffect(() => {
    if (categoryName) {
      setFilters({ ...filters, category: [categoryName] });
      onApply({ ...filters, category: [categoryName] });
    }
  }, [categoryName]);

  return (
    <div className="h-full w-full my-6">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="font-bold text-4xl mb-3 capitalize">New Arrival</h1>
          <p>
            Category Description: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum excepturi aut earum ad laudantium eveniet
            iure officiis laborum facere nihil?
          </p>
        </div>
        <img src={CategoryHeadImg} className="w-screen h-[464px]" alt="" />
      </div>

      <div className="flex gap-10 px-[120px] py-4 justify-around">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          onApply={onApply}
        />

        <div style={{ flex: 7 }}>
          <div className="px-6 flex items-center justify-between">
            <span>Home/New Arrival</span>
            <span>Sort by: Featured</span>
          </div>

          <div className="flex gap-5 flex-wrap justify-evenly m-4">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  productInfo={product}
                  isShowFooter
                />
              ))
            ) : (
              <div className="text-center text-gray-500 text-4xl mt-20 flex-col flex gap-8">
                No products found? 🙁 <br />{" "}
                <span>Have you tried to reset the filters? 🤔</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;

const FilterSidebar = ({
  filters,
  setFilters,
  onApply,
}: {
  onApply: (filters: IFilters) => void;
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}) => {
  const { categorizedProducts } = useProductStore();

  const onCategoryCheck = (category: string) => {
    let newCategories = [...filters.category];

    if (filters.category.includes(category)) {
      newCategories = newCategories.filter((i) => i !== category);
    } else newCategories.push(category);

    setFilters({
      ...filters,
      category: newCategories,
    });
  };

  return (
    <div style={{ flex: 3 }} className="h-full w-full text-lg">
      <h1 className="text-xl font-bold pb-3 ">Filter</h1>
      {/* Selected Filters */}
      <div className="flex justify-between items-start">
        <div className="flex gap-2 mb-4 border-b pb-7 flex-wrap capitalize">
          {filters.category.map((c: string) => (
            <span
              key={c}
              className="px-2 py-1 bg-gray-200 text-sm rounded flex items-center gap-1 radius-5"
            >
              {c} <button>×</button>
            </span>
          ))}
          {filters.startPrice && filters.endPrice && (
            <span className="px-2 py-1 bg-gray-200 text-sm rounded flex items-center gap-1 radius-5">
              ${filters.startPrice} - ${filters.endPrice} <button>×</button>
            </span>
          )}
        </div>

        <button
          onClick={() => {
            setFilters(initialFilters);
            setTimeout(() => {
              onApply(initialFilters);
            }, 100);
          }}
          className="border-0 p-0 underline text-purple-600 w-40"
        >
          Reset All
        </button>
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
        {Object.entries(categorizedProducts).map(
          ([category, products]: any) => (
            <label
              key={category}
              className="flex items-center gap-4 capitalize"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onClick={() => onCategoryCheck(category)}
              />
              {category}
              <span className="ml-auto">{products?.length}</span>
            </label>
          )
        )}
      </div>
      {/* Size Filter */}
      <div className="mb-4 border-b pb-7">
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
            <button
              key={size}
              className="border p-2 text-sm rounded hover:bg-gray-100 focus:border-purple-600"
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
              className={`w-8 h-8 rounded-full border focus:border-purple-600 focus:border-2 ${
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
            onChange={(e) =>
              setFilters({ ...filters, startPrice: e.target.value })
            }
            value={filters.startPrice}
            type="number"
            className="border p-2 w-full rounded"
            placeholder="$10.00"
          />
          <input
            onChange={(e) =>
              setFilters({ ...filters, endPrice: e.target.value })
            }
            value={filters.endPrice}
            type="number"
            className="border p-2 w-full rounded"
            placeholder="$350.00"
          />
        </div>
        <button
          onClick={() => onApply(filters)}
          className="w-full mt-2 p-2 bg-purple-500 text-white rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};
