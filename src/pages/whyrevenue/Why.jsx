import React, { useState } from "react";
import { Link2, Smartphone, Chrome, MessageCircle, Link } from "lucide-react";
import { FaWordpress } from "react-icons/fa";

const features = [
  {
    icon: <Link2 className="w-10 h-10 sm:w-12 sm:h-12 text-red-300" />,
    title: "Revenue Hub",
    description:
      "Centralized platform to manage and track all your monetization efforts efficiently.",
    moreInfo:
      "Revenue Hub lets you see all your monetization tools in one place. Track performance, generate reports, and optimize your revenue streams effectively.",
    bullets: [
      "Centralized dashboard for all tools",
      "Detailed analytics & reports",
      "Optimize revenue streams in real-time",
    ],
  },
  {
    icon: <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300" />,
    title: "HubApps",
    description: "Mobile apps to monetize your content on the go.",
    moreInfo:
      "CueApps provides mobile applications for iOS and Android to manage your content monetization on the move.",
    bullets: ["iOS & Android apps", "Push notifications", "Track earnings anywhere"],
  },
  {
    icon: <Chrome className="w-10 h-10 sm:w-12 sm:h-12 text-pink-300" />,
    title: "Chrome Extension",
    description: "Quickly monetize links directly from your browser.",
    moreInfo:
      "Monetize links directly from Chrome, track clicks, and boost revenue instantly.",
    bullets: ["Instant link monetization", "Click tracking", "Easy browser usage"],
  },
  {
    icon: <FaWordpress className="w-10 h-10 sm:w-12 sm:h-12 text-green-300" />,
    title: "WordPress Plugins",
    description: "Seamless WordPress monetization integration.",
    moreInfo:
      "Easily integrate monetization tools directly into your WordPress site.",
    bullets: ["Auto monetization", "WP dashboard analytics", "No coding needed"],
  },
  {
    icon: <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300" />,
    title: "Telegram Bot",
    description: "Automated monetization alerts.",
    moreInfo:
      "Get alerts, updates, and automation tools directly via Telegram.",
    bullets: ["Real-time alerts", "Automation", "Stay connected"],
  },
  {
    icon: <Link className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300" />,
    title: "Link Kit",
    description: "Generate smart links easily.",
    moreInfo:
      "Create smart links, track clicks, and improve conversions effortlessly.",
    bullets: ["Smart links", "Analytics", "Higher conversions"],
  },
];

const WhyRevenueHub = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 mb-5 rounded-full bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold">
          🚀 Monetization Ecosystem
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Why Choose{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Revenue Hub</span>
            <span className="absolute left-0 bottom-1 w-full h-3 bg-sky-300/70 rounded-md -z-0"></span>
          </span>
          ?
        </h2>

        <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          A complete monetization suite designed to help creators, publishers,
          and businesses maximize their revenue with ease.
        </p>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <span className="w-24 sm:w-28 h-1 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"></span>
        </div>

        {/* ✅ MOBILE PROFESSIONAL GRID */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className="bg-white rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              <div className="mb-4 p-3 sm:p-4 rounded-full bg-yellow-50 relative inline-flex">
                <span className="absolute inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-sky-200 opacity-60 animate-ping" />
                {feature.icon}
              </div>

              <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ STABLE CENTER MODAL */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0  backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          />

          <div className="relative z-10 w-full max-w-lg animate-fadeInScale">
            <div className="rounded-3xl bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-[1.5px] shadow-2xl">
              <div className="bg-white rounded-3xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                <button
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
                  onClick={() => setSelectedFeature(null)}
                >
                  &times;
                </button>

                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-gray-100">
                      {selectedFeature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {selectedFeature.title}
                  </h3>

                  <p className="text-gray-600 mb-5 text-sm sm:text-base">
                    {selectedFeature.moreInfo}
                  </p>

                  <ul className="text-left space-y-2 text-gray-500 text-sm">
                    {selectedFeature.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 bg-blue-500 rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fadeInScale {
            animation: fadeInScale 0.25s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default WhyRevenueHub;
