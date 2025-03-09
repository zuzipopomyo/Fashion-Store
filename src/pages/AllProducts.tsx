import { useParams } from "react-router-dom";
import CategoryHeadImg from "../assets/images/category-head.png";
import useProductStore from "../store/useProductStore";
import { Product } from "./Home";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
const departments = [
  { name: "Men", count: 230 },
  { name: "Kids", count: 45 },
  { name: "Women", count: 102 },
  { name: "Big and Tall", count: 10 },
];

const ProductCategory = () => {
  const { name: categoryName } = useParams();
  const { categorizedProducts, allProducts } = useProductStore();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [filters, setFilters] = useState<{ category: string[]; price: string }>(
    { category: [], price: "" }
  );

  useEffect(() => {
    const filteredProducts = filters.category.length
      ? allProducts.filter((product) =>
          filters.category.includes(product.category)
        )
      : allProducts;
    setProducts(filteredProducts);
  }, [filters.category, allProducts]);

  useEffect(() => {
    categoryName && setFilters({ ...filters, category: [categoryName] });
  }, [categoryName]);

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
          {Object.keys(categorizedProducts).map((category) => (
            <label
              key={category}
              className="flex items-center gap-4 capitalize"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onClick={() => {
                  let newCategories = [...filters.category];

                  if (filters.category.includes(category)) {
                    newCategories = newCategories.filter((i) => i !== category);
                  } else newCategories.push(category);

                  setFilters({
                    ...filters,
                    category: newCategories,
                  });
                }}
              />
              {category}
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

  return (
    <div className="h-full w-full my-6">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="font-bold text-4xl mb-3 capitalize">
            New Arrival
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
            <span>Home/New Arrival</span>
            <span>Sort by: Featured</span>
          </div>

          <div className="flex gap-5 flex-wrap justify-evenly m-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productInfo={product}
                isShowFooter
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
