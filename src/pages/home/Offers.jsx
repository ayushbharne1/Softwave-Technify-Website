import React, { useEffect, useState } from "react";
import Ranveer from "../../assets/ranveer.png";
import kotak from "../../assets/banks/kotak.png";
import hdfc from "../../assets/banks/hdfc.png";
import icici from "../../assets/banks/icici.jpg";
import axis from "../../assets/banks/axis.png";

const offersData = [
  {
    bank: "Kotak",
    subtitle: "Mahindra Bank",
    title: "PAYOUT INCREASE",
    desc: "Open savings account & earn",
    oldAmount: "₹525",
    newAmount: "₹600",
    image: Ranveer,
    logo: kotak,
    bg: "bg-pink-100",
    badgeBg: "bg-red-600",
    text: "text-red-700",
    btn: "bg-red-700 hover:bg-red-800",
  },
  {
    bank: "HDFC",
    subtitle: "Life Bank",
    title: "SPECIAL OFFER",
    desc: "Zero balance savings account",
    oldAmount: "₹400",
    newAmount: "₹550",
    image: Ranveer,
    logo: hdfc,
    bg: "bg-blue-100",
    badgeBg: "bg-blue-600",
    text: "text-blue-700",
    btn: "bg-blue-700 hover:bg-blue-800",
  },
  {
    bank: "ICICI",
    subtitle: "Trusted Bank",
    title: "LIMIT BOOST",
    desc: "Instant account opening",
    oldAmount: "₹450",
    newAmount: "₹650",
    image: Ranveer,
    logo: icici,
    bg: "bg-purple-100",
    badgeBg: "bg-purple-600",
    text: "text-purple-700",
    btn: "bg-purple-700 hover:bg-purple-800",
  },
  {
    bank: "Axis",
    subtitle: "Fast Banking",
    title: "EXTRA CASH",
    desc: "Open account digitally",
    oldAmount: "₹500",
    newAmount: "₹700",
    image: Ranveer,
    logo: axis,
    bg: "bg-green-100",
    badgeBg: "bg-green-600",
    text: "text-green-700",
    btn: "bg-green-700 hover:bg-green-800",
  },
];

const Offers = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === offersData.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [current]);

  return (
    <div className="relative overflow-hidden rounded-2xl w-full">
      {/* SLIDES */}
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {[...offersData, offersData[0]].map((offer, index) => (
          <div key={index} className="min-w-full px-2 sm:px-3">
            <div
              className={`relative ${offer.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-4`}
            >
              {/* LEFT CONTENT */}
              <div className="w-full sm:max-w-lg">
                {/* BANK LOGO */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center p-1.5 sm:p-2">
                    <img
                      src={offer.logo}
                      alt={`${offer.bank} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className={`font-semibold text-base sm:text-lg ${offer.text}`}>
                      {offer.bank}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {offer.subtitle}
                    </p>
                  </div>
                </div>

                {/* TITLE */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {offer.title}
                </h2>

                <p
                  className={`text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-5 ${offer.text}`}
                >
                  {offer.desc}
                </p>

                {/* AMOUNT */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-sm sm:text-base md:text-lg text-gray-500 line-through">
                    {offer.oldAmount}
                  </span>
                  <span
                    className={`${offer.badgeBg} text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-lg font-semibold text-sm sm:text-base md:text-lg`}
                  >
                    {offer.newAmount} ✓
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  className={`${offer.btn} text-white px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold transition text-sm sm:text-base`}
                >
                  Start Now
                </button>
              </div>

              {/* RIGHT IMAGE - DESKTOP BIGGER */}
              <div className="w-full sm:w-auto flex justify-center sm:block mt-4 sm:mt-0">
                <img
                  src={offer.image}
                  alt="offer"
                  className="
                    w-52 sm:w-60 md:w-64
                    lg:w-[42rem]
                    xl:w-[48rem]
                    2xl:w-[54rem]
                    h-auto object-contain
                  "
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-3 sm:mt-4 gap-1.5 sm:gap-2">
        {offersData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              current === index ||
              (current === offersData.length && index === 0)
                ? "bg-gray-800 w-6 sm:w-8"
                : "bg-gray-300 w-2 sm:w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
