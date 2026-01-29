import React from "react";
import { Phone, Mail, MapPin, Share2, ArrowLeft } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

const VisitingCard = () => {
  const { openSidebar } = useOutletContext();
  const { agent, loading, error } = useSelector((state) => state.profile);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 bg-gray-50">
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white hover:shadow-3xl transition-shadow duration-300">
        <div className="absolute inset-0">
          <div className="absolute -right-24 -top-20 w-64 md:w-80 h-64 md:h-80 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 opacity-20"></div>
          <div className="absolute -left-24 -bottom-20 w-64 md:w-80 h-64 md:h-80 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-15"></div>
        </div>

        <div className="relative p-6 md:p-10 flex flex-col items-center text-center">
          <div
            className="absolute top-4 left-4 md:hidden cursor-pointer"
            onClick={openSidebar}
          >
            <ArrowLeft className="w-6 h-6 text-blue-600" />
          </div>

          <div className="mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20">
              <svg viewBox="0 0 100 100" fill="none">
                <path d="M50 0L90 80H50L10 80L50 0Z" fill="#2b6ee8" />
              </svg>
            </div>
          </div>

          {loading ? (
            <p className="text-gray-500 mb-6">Loading...</p>
          ) : error ? (
            <p className="text-red-500 mb-6">{error}</p>
          ) : agent ? (
            <>
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-1">
                {agent.name || "Unknown Name"}
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-6 font-medium">
                {agent.occupation || "Role"}
              </p>

              <div className="w-16 md:w-24 h-[2px] bg-blue-200 mb-6 rounded-full"></div>

              <div className="space-y-3 md:space-y-4 w-full">
                <div className="flex items-center gap-3 md:gap-4 justify-center">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {agent.phone ? `+91 ${agent.phone}` : "Phone not provided"}
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {agent.email || "Email not provided"}
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  <span className="uppercase font-semibold text-gray-800 text-sm md:text-base">
                    {agent.state || "Maharashtra"}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500 mb-6">No profile data available</p>
          )}

          <div className="mt-6 md:mt-8 text-gray-700 text-xs md:text-sm font-medium flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="px-2 py-1 md:px-3 md:py-1.5 bg-blue-50 rounded-full">
              Credit Card
            </span>
            <span className="px-2 py-1 md:px-3 md:py-1.5 bg-blue-50 rounded-full">
              Loan
            </span>
            <span className="px-2 py-1 md:px-3 md:py-1.5 bg-blue-50 rounded-full">
              Demat Account
            </span>
            <span className="px-2 py-1 md:px-3 md:py-1.5 bg-blue-50 rounded-full">
              Savings Account
            </span>
            <span className="px-2 py-1 md:px-3 md:py-1.5 bg-blue-50 rounded-full">
              Current Account
            </span>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col items-center gap-1 md:gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Share2 className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
            <p className="text-sm md:text-lg font-semibold text-blue-800">
              Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitingCard;
