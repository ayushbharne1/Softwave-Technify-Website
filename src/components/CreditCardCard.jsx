import { getBankLogo } from "./bankLogos";
import { LuSend } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function CreditCardCard({
  bank,
  title,
  benefits,
  earn,
  status,
  category,
  id,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`./${id}`)}
      className="relative bg-white rounded-2xl p-6
                 border border-gray-100
                 shadow-sm hover:shadow-xl
                 transition-all duration-300
                 cursor-pointer group"
    >
      <span
        className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium
          ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
      >
        {status}
      </span>

      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
          <img
            src={getBankLogo(bank)}
            alt={bank}
            className="h-8 object-contain"
          />
        </div>

        <h3 className="font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 mb-5">
        {benefits.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-700">Goals</p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
            <LuSend className="text-blue-500" />
            Dispatch & Transaction
          </p>
        </div>

        <div className="text-right">
          <div className="text-xs text-gray-500 mb-1">You Earn</div>
          <div className="text-lg font-bold text-blue-600">
            ₹ {earn}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent 
                      group-hover:ring-blue-400 transition" />
    </div>
  );
}
