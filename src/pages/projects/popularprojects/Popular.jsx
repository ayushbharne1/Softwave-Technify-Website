import React from "react";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const navigate = useNavigate();
  const cards = [
    {
      title: "Website Development",
      subtitle: "Web Services",
      price: "₹ 25000",
      icon: "WD",
      bg: "bg-blue-600",
    },
    {
      title: "Mobile App Development",
      subtitle: "App Services",
      price: "₹ 22000",
      icon: "APP",
      bg: "bg-indigo-600",
    },
    {
      title: "E-commerce Development",
      subtitle: "Online Store",
      price: "₹ 18000",
      icon: "EC",
      bg: "bg-sky-600",
    },
  ];

  const handleViewDetails = () => {
    navigate("/detailsproject");
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">POPULAR PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={handleViewDetails}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {/* Price Badge */}
            <span className="absolute top-4 right-4 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {card.price}
            </span>

            {/* Icon */}
            <div
              className={`w-14 h-14 ${card.bg} text-white flex items-center justify-center rounded-xl font-bold`}
            >
              {card.icon}
            </div>

            {/* Content */}
            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;