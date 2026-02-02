// ReferEarn.jsx
import React from "react";
import { Send, Instagram, Facebook, Linkedin } from "lucide-react";
import Referal from "../../assets/referal.png";

const ReferHeader = () => (
  <>
    <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 text-center">
      Refer & Earn
    </h2>
    <p className="text-center text-gray-700 text-sm sm:text-base">
      Refer your friends to SoftWave Technify & earn 10% payouts for life
    </p>
  </>
);

const ReferImage = () => (
  <div className="flex justify-center my-4 flex-1 items-center">
    <img src={Referal} className="w-40 sm:w-48 md:w-52 rounded-lg" alt="Refer" />
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-center gap-4 mt-4">
    <Send className="w-8 h-8 text-blue-600 bg-blue-50 rounded-md p-1 cursor-pointer hover:bg-blue-100 transition" />
    <Instagram className="w-8 h-8 text-blue-600 bg-blue-50 rounded-md p-1 cursor-pointer hover:bg-blue-100 transition" />
    <Facebook className="w-8 h-8 text-blue-600 bg-blue-50 rounded-md p-1 cursor-pointer hover:bg-blue-100 transition" />
    <Linkedin className="w-8 h-8 text-blue-700 bg-blue-50 rounded-md p-1 cursor-pointer hover:bg-blue-100 transition" />
  </div>
);

const ReferEarn = () => (
  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-5 flex flex-col justify-between h-full">
    <div>
      <ReferHeader />
      <ReferImage />
    </div>
    <div>
      <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
        Refer Now
      </button>
      <SocialLinks />
    </div>
  </div>
);

export default ReferEarn;