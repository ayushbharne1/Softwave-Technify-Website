import React from "react";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({
  id,
  logo,
  title,
  subtitle,
  amount,
  category,
  isLarge = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!id) {
      console.warn("Project ID missing for navigation");
      return;
    }
    navigate(`/projects/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative bg-white rounded-2xl border border-gray-200
        ${isLarge ? "p-6" : "p-5"}
        shadow-sm cursor-pointer
        transition-all duration-200 ease-in-out
        hover:-translate-y-1
        hover:shadow-md
      `}
    >
      {/* Amount Badge */}
      {amount && (
        <span
          className="
            absolute top-3 right-3
            bg-green-500 text-white
            px-4 py-1
            rounded-full
            text-sm font-semibold
          "
        >
          ₹ {amount}
        </span>
      )}

      {/* Logo */}
      <div
        className={`
          flex items-center justify-center
          ${
            isLarge
              ? "w-16 h-16 rounded-xl bg-blue-600"
              : "w-12 h-12 rounded-full bg-blue-100"
          }
          mb-4
        `}
      >
        {logo}
      </div>

      {/* Text */}
      <h4 className="font-semibold text-gray-900">{title}</h4>

      {subtitle && (
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      )}
    </div>
  );
};
