import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Clock, Wallet } from "lucide-react";

const BalanceCards = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-2 gap-6">
        <div
          onClick={() => navigate("/pending-earnings")}
          className="bg-yellow-100 px-6 py-5 rounded-2xl cursor-pointer hover:shadow-md transition"
        >
          <p className="text-sm text-gray-500">Pending</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-semibold text-gray-900">₹0.00</p>
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Clock className="text-yellow-600 w-5 h-5" />
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/my-earnings")}
          className="bg-red-200 px-6 py-5 rounded-2xl cursor-pointer hover:shadow-md transition"
        >
          <p className="text-sm text-gray-500">Paid</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-semibold text-gray-900">₹0.00</p>
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Wallet className="text-red-600 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCards;
