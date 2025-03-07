import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import useCartStore from "../store/useCartStore";
import IconButton from "./IconButton";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const { addedProducts } = useCartStore();
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  return (
    <div className="relative mb-[74px]">
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Fashion Store
            </span>
          </a>
          <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FaSearch />
            <IconButton
              onClick={() => setShowCartDrawer(true)}
              icon={
                <>
                  <FaShoppingCart />
                  {addedProducts.length}
                </>
              }
            />

            <FaUser />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {[
                { name: "New", link: "new" },
                { name: "Top", link: "top" },
                { name: "Kids", link: "kids" },
                { name: "bottom", link: "bottom" },
                { name: "Accessories", link: "accessories" },
                { name: "Collections", link: "collections" },
                { name: "Sale", link: "sale" },
              ].map((item, index) => (
                <li>
                  <a
                    // href={item.link}
                    href="#"
                    key={index}
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    {item.name}
                  </a>
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
