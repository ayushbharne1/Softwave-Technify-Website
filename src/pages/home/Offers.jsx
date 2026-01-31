import React, { useEffect, useState } from "react";

// Banners
import websiteImg from "../../assets/banner1.png";
import appImg from "../../assets/banner2.png";
import techImg from "../../assets/banner3.png";

const sliderImages = [websiteImg, appImg, techImg];

const Offers = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Infinite loop fix
  useEffect(() => {
    if (current === sliderImages.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-white">
      {/* SLIDER */}
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {[...sliderImages, sliderImages[0]].map((img, index) => (
          <div key={index} className="min-w-full px-3">
            {/* ✅ HEIGHT INCREASED */}
            <div
              className="
                h-[220px]
                sm:h-[260px]
                md:h-[300px]
                lg:h-[340px]
                xl:h-[380px]
                flex items-center justify-center
                rounded-2xl
                bg-blue-50
                overflow-hidden
              "
            >
              <img
                src={img}
                alt="offer banner"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-3 pb-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ||
              (current === sliderImages.length && index === 0)
                ? "bg-blue-600 w-6"
                : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
