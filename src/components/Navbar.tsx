import { FaUser as I2, FaSearch as I3, FaShoppingCart as I4} from "react-icons/fa";
import useCartStore from "../store/useCartStore";
import IconButton from "./IconButton";
import CartDrawer from "./CartDrawer";
import useProductStore from "../store/useProductStore";
import { IoStorefrontSharp as I1 } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const IoStorefrontSharp = I1 as any;
const FaUser = I2 as any;
const FaSearch = I3 as any;
const FaShoppingCart = I4 as any;

const Navbar = () => {
  const { addedProducts, showCartDrawer, setShowCartDrawer } = useCartStore();
  const { categorizedProducts } = useProductStore();
  const { pathname } = useLocation();

  return (
    <div className="relative mb-[74px]">
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse hover:text-purple-600"
          >
            <span className="flex gap-3 items-center text-2xl font-semibold whitespace-nowrap ">
              <IoStorefrontSharp /> <span> Fashion Store</span>
            </span>
          </Link>
          <div className="flex items-center justify-between gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FaSearch style={{ fontSize: "20px" }} />
            <div className="relative">
              <IconButton
                isShadow={false}
                onClick={() => setShowCartDrawer(true)}
                icon={
                  <>
                    <FaShoppingCart style={{ fontSize: "20px" }} />
                    <span className="absolute h-5 w-5 top-0 right-0 rounded-full bg-red-600 text-white">
                      {addedProducts.length}
                    </span>
                  </>
                }
              />
            </div>

            <FaUser style={{ fontSize: "20px" }} />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {[
                // { name: "Home", link: "/home" },
                ...Object.keys(categorizedProducts).map((category) => ({
                  name: category,
                  link: `/products/${category}`,
                })),
                { name: "About", link: "/aboutUs" },
              ].map((item, index) => (
                <li>
                  <Link
                    to={item.link}
                    key={index}
                    className={`capitalize block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                      decodeURIComponent(pathname).includes(item.link) && "!text-blue-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {showCartDrawer && (
        <CartDrawer onClose={() => setShowCartDrawer(false)} />
      )}
    </div>
  );
};

export default Navbar;
