import { useParams } from "react-router-dom";
import CategoryHeadImg from "../assets/images/category-head.png";
import useProductStore from "../store/useProductStore";
import { Product } from "./Home";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
const {name: categoryName} = useParams();
const {categorizedProducts}= useProductStore()
const products: Product[] = categorizedProducts[`${categoryName}`] || []

  return (
    <div className="h-full w-full">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="font-bold text-4xl mb-3 capitalize">{categoryName || ''}</h1>
          <p>
            Category Description: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum excepturi aut earum ad laudantium eveniet
            iure officiis laborum facere nihil?
          </p>
        </div>
        <img src={CategoryHeadImg} className="w-screen h-[464px]" />
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
              <ProductCard key={product.id} productInfo={product} isShowFooter middleSection={<></>} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
