import { useParams } from "react-router-dom";
import CategoryHeadImg from "../assets/images/category-head.png";
import useProductStore from "../store/useProductStore";
import { Product } from "./Home";
import ProductCard from "../components/ProductCard";
import useCartStore from "../store/useCartStore";

const ProductCategory = () => {
  const { name: categoryName } = useParams();
  const { categorizedProducts } = useProductStore();
  const products: Product[] = categorizedProducts[`${categoryName}`] || [];
  const { addToCart } = useCartStore();

  return (
    <div className="h-full w-full">
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

      <div className="flex gap-4 px-[120px] py-4">
        <div
          style={{ flex: 3, border: "1px solid red" }}
          className="h-full w-full"
        >
          Left
        </div>
        <div style={{ flex: 7 }}>
          <div className="flex items-center justify-between">
            <span>Home/{categoryName}</span>
            <span>Sort by: Featured</span>
          </div>

          <div className="flex gap-5 flex-wrap m-4">
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
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
