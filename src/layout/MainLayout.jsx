import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="relative px-4  bg-blue-50 font-poppins">
        <div className="sticky top-0 z-50">
            <Navbar />
        </div>
        <div >
            <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;
