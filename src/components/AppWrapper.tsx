import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppWrapper = ({ chid }: any) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppWrapper;
