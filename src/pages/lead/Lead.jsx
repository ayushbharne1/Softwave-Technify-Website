import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { HiUsers, HiCheckCircle } from "react-icons/hi";
import { MdPendingActions } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Leads() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const handleCreateLead = () => {
    // Add your create lead logic here
    console.log("Create Lead clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* PAGE CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* CREATE LEAD BUTTON - TOP RIGHT */}
        <div className="flex justify-end mb-6" data-aos="fade-left">
          <button
            onClick={handleCreateLead}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FiPlus size={20} />
            <span>Create Lead</span>
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <StatCard
              title="Total Leads"
              value="0"
              bg="bg-blue-100"
              iconBg="bg-blue-200"
              icon={<HiUsers className="text-blue-700" size={22} />}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <StatCard
              title="Approved Leads"
              value="0"
              bg="bg-yellow-100"
              iconBg="bg-yellow-200"
              icon={<HiCheckCircle className="text-yellow-700" size={22} />}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <StatCard
              title="Pending Earning"
              value="₹0"
              bg="bg-orange-100"
              iconBg="bg-orange-200"
              icon={<MdPendingActions className="text-orange-700" size={22} />}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="250">
            <StatCard
              title="Paid Earning"
              value="₹0"
              bg="bg-red-100"
              iconBg="bg-red-200"
              icon={<FaWallet className="text-red-700" size={20} />}
            />
          </div>
        </div>

        {/* SEARCH BAR */}
        <div
          className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 sm:px-5 py-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center">
            <FiSearch className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search leads"
              className="ml-3 w-full outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- STAT CARD ---------- */

function StatCard({ title, value, bg, iconBg, icon }) {
  return (
    <div
      className={`${bg} rounded-2xl px-5 sm:px-10 py-6 sm:py-8 flex items-center justify-between shadow-sm`}
    >
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-lg sm:text-xl font-semibold text-black mt-2">
          {value}
        </p>
      </div>

      <div className={`${iconBg} rounded-full p-3`}>{icon}</div>
    </div>
  );
}