import React from "react";
import { MessageSquare, Send, DollarSign } from "lucide-react";

const QuickAccessIcon = ({ icon: Icon, label, bgColor }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
      <div
        className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center shadow-md`}
      >
        <Icon className="w-8 h-8 text-white" fill="white" />
      </div>
    </div>
    <span className="text-sm font-semibold text-gray-700">{label}</span>
  </div>
);

const QuickAccessIcons = () => (
  <div className="flex gap-6 justify-center bg-gradient-to-br from-blue-100 to-purple-100 py-6 rounded-lg">
    <QuickAccessIcon
      icon={MessageSquare}
      label="Community"
      bgColor="bg-green-500"
    />
    <QuickAccessIcon icon={Send} label="Telegram" bgColor="bg-blue-400" />
    <QuickAccessIcon icon={DollarSign} label="Earnings" bgColor="bg-blue-600" />
  </div>
);

export default QuickAccessIcons;
