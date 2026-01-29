import React, { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import agency from "../../../assets/agency.png";

const Agency = () => {
  const [teamSize, setTeamSize] = useState("");
  const [teamType, setTeamType] = useState("");
  const [products, setProducts] = useState("");

  // 👉 sidebar open function
  const { openSidebar } = useOutletContext();

  const teamSizeOptions = ["1-10", "11-50", "51-100", "100+"];
  const teamTypeOptions = [
    "Sales Team",
    "Marketing Team",
    "Technical Team",
    "Support Team",
  ];
  const productOptions = [
    "Credit Card",
    "Demat Account",
    "Savings Account",
    "Instant Loan",
    "All Products",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="flex items-center gap-3 p-4 mt-10">
        {/* Arrow only on small devices */}
        <button
          onClick={openSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-xl font-bold">Become An Agency</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 max-w-3xl mx-auto">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <img
            src={agency}
            alt="Team collaboration"
            className="w-full max-w-xs sm:max-w-sm"
          />
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            If you can deliver numbers in bulk kindly fill the below form. Our
            team will connect with you
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-6">
          {/* Team Size */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Team Size
            </label>
            <div className="relative">
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="w-full bg-gray-100 rounded-lg py-4 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled />
                {teamSizeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>

          {/* Type Of Team */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Type Of Team
            </label>
            <div className="relative">
              <select
                value={teamType}
                onChange={(e) => setTeamType(e.target.value)}
                className="w-full bg-gray-100 rounded-lg py-4 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled />
                {teamTypeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>

          {/* Products */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Which products are you interested and have expertise in?
            </label>
            <div className="relative">
              <select
                value={products}
                onChange={(e) => setProducts(e.target.value)}
                className="w-full bg-gray-100 rounded-lg py-4 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled />
                {productOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-12 mb-8">
          <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agency;
