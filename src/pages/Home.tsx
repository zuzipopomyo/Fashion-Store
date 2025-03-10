import TopBannerImg from "../assets/images/Frame 5.jpeg";
import MiddleBanner from "../assets/images/Frame 33.png";
import MiddleBanner2 from "../assets/images/Frame 34.jpeg";
import SaleImage from "../assets/images/50off.png";
import GirlImg from "../assets/images/girl.png";
import ProductCard from "../components/ProductCard";
import { FaArrowRight as I1, FaSearch as I2 } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import useProductStore from "../store/useProductStore";
import { useNavigate } from "react-router-dom";
import IconButton from "../components/IconButton";
import { RiArrowRightSLine as I3, RiArrowLeftSLine as I4 } from "react-icons/ri";

const FaArrowRight = I1 as any;
const FaSearch = I2 as any;
const RiArrowRightSLine = I3 as any;
const RiArrowLeftSLine = I4 as any;

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
  const navigate = useNavigate();

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
      {/* Top Section */}
      <div>
        <div className="relative max-h-[800px]">
          <h1 className="text-[300px] absolute top-0 left-[-100px] text-slate-300 font-bold">
            2025
          </h1>
          <h1 className="text-3xl absolute top-[180px] left-[200px] font-bold -rotate-12">
            Mid Season
          </h1>
          <img
            className="w-screen max-h-[800px] object-cover"
            alt="top-banner"
            src={TopBannerImg}
          />
          <img
            className="w-[270px] h-[154px] absolute top-[300px] left-[300px] object-cover"
            alt="top-banner"
            src={SaleImage}
          />
          <button
            onClick={() => navigate("products")}
            className="rounded-md absolute flex items-center gap-2 top-[480px] left-[180px] bg-purple-600 text-white px-12 py-3 text-xl"
          >
            Shop Now <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div>
          <img className="w-screen" src={MiddleBanner} alt="middle-banner" />
        </div>
      </div>
      {/* New Arrivals Section */}
      <div>
        <h3 className="text-center font-semibold text-2xl mb-10 pt-6">
          New Arrivals
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex-[1]">
            <IconButton
              onClick={() => {
                if (prev > 0) {
                  setNext(next - 1);
                  setPrev(prev - 1);
                }
              }}
              icon={<RiArrowLeftSLine size={20} />}
            />
          </div>

          <div className="flex gap-3 items-center justify-center flex-[8]">
            {allProducts &&
              allProducts.slice(prev, next).map((product) => {
                return (
                  <>
                    <ProductCard isShowFooter productInfo={product} />
                  </>
                );
              })}
          </div>

          <div className="flex-[1]">
            <IconButton
              onClick={() => {
                if (next < allProducts.length - 4) {
                  setNext(next + 1);
                  setPrev(prev + 1);
                }
              }}
              icon={<RiArrowRightSLine size={20} />}
            />
          </div>
        </div>
      </div>
      {/* Category Section */}
      <div className="flex items-center flex-wrap mt-8 mb-8 justify-center">
        {categorizedProducts &&
          Object.entries(categorizedProducts)
            .slice(0, 3)
            .map(([category, product]) => {
              return (
                <>
                  <ProductCard
                    productInfo={(product as any)[0] as any}
                    height="490px"
                    width="360px"
                    middleSection={
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <span className="text-[32px] text-purple-400 font-bold capitalize text-center">
                          {category}
                        </span>
                        <button
                          onClick={() => navigate("products/" + category)}
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
      {/* New Collection Image */}
      <div className="max-h-[500px] relative">
        <h1 className="text-[54px] absolute top-[100px] left-[200px] text-black font-bold">
          New <span className="!text-purple-600">2025</span> <br />
          Clothes Collection
        </h1>
        <button
          onClick={() => navigate("products")}
          className="flex gap-2 items-center rounded-md absolute top-[300px] left-[200px] bg-purple-600 text-white px-12 py-3 text-xl"
        >
          Shop Now <FaArrowRight className="ml-2" />
        </button>
        <img
          className="w-[500px] h-[500px] object-cover absolute top-0 right-[120px]"
          alt="girl"
          src={GirlImg}
        />
        <img
          className="w-screen max-h-[500px] object-cover"
          alt="middle-banner"
          src={MiddleBanner2}
        />
      </div>
      {/* Best Weekend Seller */}
      <div>
        <h3 className="text-center font-bold text-3xl mb-10">
          Best Weekend Seller
        </h3>
        <div className="flex gap-3 items-center flex-wrap justify-center">
          {allProducts &&
            allProducts.sort(() => Math.random() - 0.5).slice(8, 12).map((product) => {
              return (
                <>
                  <ProductCard productInfo={product} isShowFooter />
                </>
              );
            })}
        </div>
      </div>
      {/* Brand Section */}
      <div className="mb-10 px-[100px]">
        <h3 className="text-center font-bold text-3xl mb-10 ">Brand</h3>
        <div className="flex items-center flex-wrap justify-center">
          {allProducts &&
            allProducts.sort(() => Math.random() - 0.5).slice(0, 8).map((product) => {
              return (
                <ProductCard
                  width="285px"
                  height="340px"
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
