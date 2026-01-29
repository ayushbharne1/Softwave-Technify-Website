import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Kyc = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-start 
      pt-16 sm:pt-20 lg:pt-24 
      px-4 sm:px-6 lg:px-8 
      bg-gray-50">

      {/* Card */}
      <div className="
        w-full max-w-3xl 
        bg-white rounded-2xl sm:rounded-3xl
        shadow-xl border border-gray-100
        px-6 sm:px-10 lg:px-12
        py-8 sm:py-12 lg:py-14
      ">

        {/* Header */}
        <div className="flex items-start gap-3 sm:gap-4 mb-10 sm:mb-14">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
              Complete KYC
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Provide your PAN details to complete instant KYC
            </p>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-8 sm:mb-10">
          <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
            Full Name (as per PAN)
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="
              w-full h-12 sm:h-14
              rounded-xl bg-gray-50 px-4 sm:px-5
              text-gray-900 border border-gray-200
              focus:outline-none focus:border-blue-600
              focus:ring-4 focus:ring-blue-100 transition
            "
          />
        </div>

        {/* PAN Number */}
        <div className="mb-8 sm:mb-10">
          <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
            PAN Number
          </label>
          <input
            type="text"
            placeholder="ABCDE1234F"
            maxLength={10}
            className="
              w-full h-12 sm:h-14
              rounded-xl bg-gray-50 px-4 sm:px-5
              text-gray-900 tracking-widest uppercase
              border border-gray-200
              focus:outline-none focus:border-blue-600
              focus:ring-4 focus:ring-blue-100 transition
            "
          />
        </div>

        {/* DOB */}
        <div className="mb-10 sm:mb-12">
          <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
            Date of Birth
          </label>
          <input
            type="date"
            className="
              w-full h-12 sm:h-14
              rounded-xl bg-gray-50 px-4 sm:px-5
              text-gray-900 border border-gray-200
              focus:outline-none focus:border-blue-600
              focus:ring-4 focus:ring-blue-100 transition
            "
          />
        </div>

        {/* Declaration */}
        <div className="flex items-start gap-3 sm:gap-4 mb-10 sm:mb-14">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 sm:h-5 sm:w-5 accent-blue-600"
          />
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            I hereby declare that the details and information given above are
            complete and true to the best of my knowledge.
          </p>
        </div>

        {/* Button */}
        <button
          className="
            w-full h-12 sm:h-14
            bg-blue-600 hover:bg-blue-700
            active:scale-[0.99]
            transition
            text-white text-base sm:text-lg font-semibold
            rounded-xl shadow-lg
          "
        >
          Verify PAN
        </button>

        <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-5 sm:mt-6">
          Your data is securely encrypted and used only for verification
        </p>
      </div>
    </div>
  );
};

export default Kyc;
