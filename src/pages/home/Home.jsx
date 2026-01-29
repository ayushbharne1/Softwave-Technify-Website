import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OffersCarousel from "./Offers";
import BalanceCards from "./BalanceCards";
import { PopularProjects, AllProjects } from "./project/Projects";
import Sidebar from "./Sidebar";
import WhyRevenueHub from "../whyrevenue/Why";
import Joinus from "../whyrevenue/Joinus";
import Testimonials from "./Testimonials";
import { useDispatch } from "react-redux"; 
import { getAllProjects } from "../../redux/thunks/projectThunks";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      once: true,
      offset: 50,
      mirror: false,
    });
    dispatch(getAllProjects());

  }, [dispatch]);



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-x-hidden">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            {/* OFFERS CAROUSEL */}
            <div
              data-aos="fade-down"
              data-aos-duration="1200"
              className="transform transition-all hover:scale-[1.01]"
            >
              <OffersCarousel />
            </div>

            {/* BALANCE CARDS */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="transform transition-all"
            >
              <BalanceCards />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div
            data-aos="fade-left"
            data-aos-delay="350"
            data-aos-duration="1200"
            className="lg:sticky lg:top-0 h-fit transform transition-all"
          >
            <Sidebar />
          </div>
        </div>

        {/* POPULAR PROJECTS - FULL WIDTH */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="mt-8 transform transition-all"
        >
          <PopularProjects />
        </div>

        {/* ALL PROJECTS */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="mt-12 transform transition-all "
        >
          <AllProjects />
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="450"
          className="mt-12 transform transition-all"
        >
          <WhyRevenueHub />
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="450"
          className="mt-12 transform transition-all"
        >
          <Joinus />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="450"
          className="mt-12 transform transition-all"
        >
          <Testimonials />
        </div>
      </main>
    </div>
  );
};

export default Home;
