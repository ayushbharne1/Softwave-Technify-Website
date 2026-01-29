import React from "react";
import { ChevronRight, ExternalLink, Share2, HelpCircle, Users, ArrowLeft } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import web from "../../../assets/mywebsite.png";

const MyWebsite = () => {
  const navigate = useNavigate();
  const { openSidebar } = useOutletContext() || {};

  return (
    <div className="min-h-screen overflow-y-auto bg-gray-50">

      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 md:px-8">

        {/* Header with Back Arrow */}
        <div className="flex items-center mb-6 sm:mb-8">
          {/* Back Arrow for small devices */}
          <div
            className="mr-2 md:hidden cursor-pointer"
            onClick={() => {
              if (openSidebar) {
                openSidebar();
              } else {
                navigate(-1);
              }
            }}
          >
            <ArrowLeft className="w-6 h-6 text-blue-600" />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            My Website
          </h1>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src={web}
            alt="My Website Illustration"
            className="w-64 sm:w-80"
          />
        </div>

        {/* How It Works Section */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            How 'My website' works for you as your personal website
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p><span className="font-semibold text-gray-700">1.</span> Share link of 'My Website' with anyone and everyone on Whatsapp, Telegram etc.</p>
            <p><span className="font-semibold text-gray-700">2.</span> The website will 'Look' & 'Work' like your personal website</p>
            <p><span className="font-semibold text-gray-700">3.</span> There will be multiple financial products on the website which your customers can apply. You will be eligible for payouts for all successful leads received from the website</p>
            <p><span className="font-semibold text-gray-700">4.</span> Customers can also submit queries in case they require any assistance</p>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Dashboard
          </h3>
          <p className="text-sm sm:text-base text-gray-500">
            for your website
          </p>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4 mb-8">
          {/* Total Enquiries Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-1 sm:gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">0</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    Total Enquiries
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    View customers who need your help and convert their queries into successful leads
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1 sm:mt-2" />
            </div>
          </div>

          {/* Total Leads Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-1 sm:gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">0</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    Total leads from website
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    View customers who have submitted leads through your website
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1 sm:mt-2" />
            </div>
          </div>
        </div>

        {/* Action Buttons (Responsive) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10">
          {/* Full-width button on small screens */}
          <button className="w-full sm:flex-1 h-14 sm:h-14 rounded-xl bg-white border-2 border-blue-600 text-blue-600 font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition shadow-sm">
            Open website <ExternalLink size={18} />
          </button>

          <button className="w-full sm:flex-1 h-14 sm:h-14 rounded-xl bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-md">
            Share website <Share2 size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default MyWebsite;
