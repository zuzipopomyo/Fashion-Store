import TopBannerImg from "../assets/images/Frame 5.png";
import MiddleBanner from "../assets/images/Frame 33.png";
import MiddleBanner2 from "../assets/images/Frame 34.png";
import ProductCard1 from "../components/ProductCard1";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string; 
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(4);

  const fetchProducts = async () => {
    try {
      const res: { data: Product[] } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(res.data);
    } catch (error) {
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col gap-10">
      <div>
        <img src={TopBannerImg} />
      </div>
      <div>
        <img src={MiddleBanner} />
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
              <div className="flex gap-3 items-center">
                {products.slice(prev, next).map((product) => {
                  return (
                    <>
                      <ProductCard1 isShowFooter productInfo={product} />
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
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
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
              if (next < products.length - 4) {
                setNext(next + 1);
                setPrev(prev + 1);
              }
            }}
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
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

      <div className="flex gap-3 items-center flex-wrap mt-8 mb-8">
        {products.map((product) => {
          return (
            <>
              <ProductCard1
                productInfo={product}
                isShowFooter
                middleSection={
                  <div className="flex flex-col gap-2 items-center">
                    <span className="text-[20px] text-purple-400 font-bold">
                      {" "}
                      {product.category}
                    </span>
                    <button
                      type="button"
                      className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <img src={MiddleBanner2} />
      </div>

      <div>
        <h3 className="text-center font-bold text-3xl mb-10">
          Best Weekend Seller
        </h3>
        <div className="flex gap-3 items-center flex-wrap">
          {products.map((product) => {
            return (
              <>
                <ProductCard1 productInfo={product} isShowFooter />
              </>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-center font-bold text-3xl mb-10">Brand</h3>
        <div className="flex items-center flex-wrap">
          {products.map((product) => {
            return (
              <>
                <ProductCard1
                  productInfo={product}
                  middleSection={<span className="font-bold">Brand</span>}
                />
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
