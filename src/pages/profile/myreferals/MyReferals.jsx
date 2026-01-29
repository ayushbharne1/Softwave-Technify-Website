import React from "react";
import { ArrowLeft, Users, IndianRupee, Share2, X } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* ---------------- MAIN PAGE ---------------- */
const MyReferrals = () => {
  const navigate = useNavigate();

  // 👉 sidebar open function from layout
  const { openSidebar } = useOutletContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 pb-32">
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-7 mt-10">
          {/* Arrow → Hamburger opener */}
          <button
            onClick={openSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h1 className="text-xl font-bold">My Referrals</h1>
        </div>

        {/* STATS */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-white rounded-2xl p-5 shadow flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-500 text-sm">Total Referrals</span>
            <p className="text-lg font-bold">0</p>
          </div>

          <div className="flex-1 bg-white rounded-2xl p-5 shadow flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <IndianRupee className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-500 text-sm">Total Earning</span>
            <p className="text-lg font-bold">0.0</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search referrals"
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10"
          />
          <ArrowLeft className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400" />
        </div>

        {/* EMPTY */}
        <div className="text-center mt-16 mb-8 text-gray-400">
          You haven't referred anyone yet.
        </div>

        {/* REFER BUTTON */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/profile/pancarddetails")}
            className="bg-blue-600 text-white flex items-center gap-2 px-8 py-3 rounded-full shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            Refer now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReferrals;
