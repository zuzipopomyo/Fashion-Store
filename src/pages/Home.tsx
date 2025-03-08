import TopBannerImg from "../assets/images/Frame 5.png";
import MiddleBanner from "../assets/images/Frame 33.png";
import MiddleBanner2 from "../assets/images/Frame 34.png";
import ProductCard from "../components/ProductCard";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import useProductStore from "../store/useProductStore";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

const Home = () => {
  const {
    allProducts,
    categorizedProducts,
    setAllProducts,
    setCategorizedProducts,
  } = useProductStore();
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(4);
  const navigate = useNavigate()

  function groupProductsByCategory(products: Product[]) {
    return products.reduce((acc: any, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  }

  const fetchProducts = async () => {
    try {
      const res: { data: Product[] } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setAllProducts(res.data);
      const categorizeProducts = groupProductsByCategory(res.data);
      setCategorizedProducts(categorizeProducts);
    } catch (error) {
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col gap-10 items-center">
      <div>
        <img className="w-screen" src={TopBannerImg} />
      </div>
      <div>
        <img className="w-screen" src={MiddleBanner} />
      </div>

      <div>
        <h3 className="text-center font-bold text-3xl mb-10"> New Arrivals</h3>

        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="duration-700 ease-in-out">
              <div className="flex gap-3 items-center justify-center">
                {allProducts &&
                  allProducts.slice(prev, next).map((product) => {
                  return (
                    <>
                      <ProductCard isShowFooter productInfo={product} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (prev > 4) {
                setPrev(prev - 1);
                setNext(next - 1);
              }
            }}
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={() => {
              if (next < allProducts.length - 4) {
                setNext(next + 1);
                setPrev(prev + 1);
              }
            }}
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black  rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 items-center flex-wrap mt-8 mb-8 justify-center">
        {categorizedProducts &&
          Object.entries(categorizedProducts).map(([category, product]) => {
            return (
              <>
                <ProductCard
                  productInfo={(product as any)[0] as any}
                  middleSection={
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <span className="text-[22px] text-red-700 font-bold capitalize">
                        {category}
                      </span>
                      <button
                        onClick={()=>navigate('product-category/'+ category)}
                        type="button"
                        className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                      >
                        <FaSearch />
                        Shop Now
                      </button>
                    </div>
                  }
                />
              </>
            );
          })}
      </div>

      <div>
        <img className="w-screen" src={MiddleBanner2} />
      </div>

      <div>
        <h3 className="text-center font-bold text-3xl mb-10">
          Best Weekend Seller
        </h3>
        <div className="flex gap-3 items-center flex-wrap justify-center">
          {allProducts &&
            allProducts.slice(0, 4).map((product) => {
            return (
              <>
                <ProductCard productInfo={product} isShowFooter />
              </>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-center font-bold text-3xl mb-10 ">Brand</h3>
        <div className="flex items-center flex-wrap justify-center">
          {allProducts &&
            allProducts.slice(0, 4).map((product) => {
            return (
              <ProductCard
                productInfo={product}
                middleSection={<span className="font-bold">Brand</span>}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
