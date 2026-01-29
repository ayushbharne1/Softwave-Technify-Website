import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import creditCardImg from "../../../assets/creditcard.svg";
import dematImg from "../../../assets/demataccount.svg";
import savingsimg from "../../../assets/savings.svg";
import loanimg from "../../../assets/loan.svg";
import payimg from "../../../assets/pay.svg";
import investimg from "../../../assets/invest.svg";
import upi from "../../../assets/upi.svg";
import businessaccimg from "../../../assets/businessacc.svg";
import businessloanimg from "../../../assets/businessloan.svg";
import personalimg from "../../../assets/personalaccount.svg";

import {
  CreditCard,
  Wallet,
  Landmark,
  Gift,
  BadgeDollarSign,
} from "lucide-react";

/* ---------------- NAV ITEMS ---------------- */
const navItems = [
  { key: "credit-card", label: "Credit Card", icon: CreditCard },
  { key: "demat-account", label: "Demat Account", icon: Landmark },
  { key: "savings-account", label: "Savings Account", icon: Wallet },
  { key: "instant-loan", label: "Instant Loan", icon: BadgeDollarSign },
  { key: "bnpl", label: "BNPL", icon: Gift },
  { key: "investment-account", label: "Investment Account", icon: Landmark },
  { key: "upi", label: "UPI", icon: CreditCard },
  { key: "business-account", label: "Business Account", icon: Landmark },
  { key: "personal-loan", label: "Personal Loan", icon: Wallet },
  { key: "business-loan", label: "Business Loan", icon: BadgeDollarSign },
];

/* ---------------- ROUTES ---------------- */
const routeMap = {
  "credit-card": "/projects/credit-card",
  "demat-account": "/projects/demat-account",
  "savings-account": "/projects/savings-account",
  "instant-loan": "/projects/instant-loan",
  bnpl: "/projects/bnpl",
  "investment-account": "/projects/investment-account",
  upi: "/projects/upi",
  "business-account": "/projects/business-account",
  "personal-loan": "/projects/personal-loan",
  "business-loan": "/projects/business-loan",
};

/* ---------------- BACKEND PROJECT TYPE MAP ---------------- */
const projectTypeMap = {
  "credit-card": "Credit Card",
  "demat-account": "Demat Account",
  "savings-account": "Savings Account",
  "instant-loan": "Instant Loan",
  bnpl: "BNPL",
  "investment-account": "Investment Account",
  upi: "UPI",
  "business-account": "Business Account",
  "personal-loan": "Personal Loan",
  "business-loan": "Business Loan",
};

/* ================= MAIN ================= */
export const AllProjects = () => {
  const [activeTab, setActiveTab] = useState("credit-card");
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate();

  // 🔐 TOKEN FROM REDUX
  const token = useSelector((state) => state.auth?.token);

  /* ---------------- API CALL ---------------- */
  useEffect(() => {
    const fetchProjectsByType = async () => {
      try {
        const projectType = projectTypeMap[activeTab];

        const res = await fetch(
          `https://aryo-be-1.onrender.com/api/project/type/${encodeURIComponent(
            projectType
          )}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );

        const data = await res.json();

        console.log(" API Response:", data);
        console.log(" Project Type:", projectType);

        if (data?.success) {
          setApiData(data.data);
        }
      } catch (error) {
        console.error("❌ API Error:", error);
      }
    };

    fetchProjectsByType();
  }, [activeTab, token]);

  /* ---------------- VIEW MORE ---------------- */
  const handleViewMore = () => {
    const route = routeMap[activeTab];
    if (route) navigate(route);
  };

  return (
    <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 text-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 mt-4 sm:mt-6">
      {/* Tabs */}
      <div className="border-b border-slate-300 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex overflow-x-auto py-3 sm:py-4 justify-start lg:justify-center scrollbar-hide">
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 min-w-max">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`relative flex flex-col items-center space-y-1.5 sm:space-y-2 transition whitespace-nowrap
                      ${
                        isActive
                          ? "text-indigo-700"
                          : "text-slate-500 hover:text-indigo-600"
                      }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                    <span className="text-[10px] sm:text-xs font-semibold uppercase">
                      {item.label}
                    </span>

                    {isActive && (
                      <span className="absolute -bottom-2 w-10 h-[3px] bg-indigo-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          {renderContent(activeTab, handleViewMore)}
        </div>
      </div>
    </section>
  );
};

/* ================= CONTENT SWITCH ================= */
const renderContent = (tab, onViewMore) => {
  const content = {
    "credit-card": {
      badge: "Premium Financial Products",
      title: "Credit Cards",
      subtitle: "Smart spending starts here",
      desc: "Unlock premium rewards, travel privileges, and flexible repayment options.",
      img: creditCardImg,
    },
    "demat-account": {
      badge: "Invest with Confidence",
      title: "Demat Account",
      subtitle: "Your gateway to the stock market",
      desc: "Seamlessly invest in stocks, ETFs, and mutual funds securely.",
      img: dematImg,
    },
    "savings-account": {
      badge: "Everyday Banking",
      title: "Savings Account",
      subtitle: "Simple, secure & rewarding",
      desc: "High interest savings accounts with top banks.",
      img: savingsimg,
    },
    "instant-loan": {
      badge: "Quick Financing",
      title: "Instant Loans",
      subtitle: "Funds when you need them",
      desc: "Fast approvals, minimal paperwork, flexible EMIs.",
      img: loanimg,
    },
    bnpl: {
      badge: "Flexible Payments",
      title: "BNPL",
      subtitle: "Buy now, pay later",
      desc: "Split payments into easy installments.",
      img: payimg,
    },
    "investment-account": {
      badge: "Wealth Building",
      title: "Investment Account",
      subtitle: "Grow your money",
      desc: "Diversify your portfolio smartly.",
      img: investimg,
    },
    upi: {
      badge: "Instant Payments",
      title: "UPI",
      subtitle: "Fast & secure",
      desc: "Quick UPI payments across all banks.",
      img: upi,
    },
    "business-account": {
      badge: "For Enterprises",
      title: "Business Account",
      subtitle: "Power your business",
      desc: "Manage business finances efficiently.",
      img: businessaccimg,
    },
    "personal-loan": {
      badge: "Personal Finance",
      title: "Personal Loan",
      subtitle: "Designed for you",
      desc: "Instant personal loans with clarity.",
      img: personalimg,
    },
    "business-loan": {
      badge: "Business Growth",
      title: "Business Loan",
      subtitle: "Fuel expansion",
      desc: "Capital to scale your business.",
      img: businessloanimg,
    },
  };

  const c = content[tab];
  if (!c) return null;

  return (
    <Hero
      badge={c.badge}
      title={c.title}
      subtitle={c.subtitle}
      description={c.desc}
      image={c.img}
      onViewMore={onViewMore}
    />
  );
};

/* ================= HERO ================= */
const Hero = ({ badge, title, subtitle, description, image, onViewMore }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-5">
      <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
        {badge}
      </span>

      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="text-indigo-700 font-medium text-lg">{subtitle}</p>
      <p className="text-slate-600 max-w-xl">{description}</p>

      <button
        onClick={onViewMore}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg"
      >
        View More
      </button>
    </div>

    <img src={image} alt={title} className="max-h-80 mx-auto" />
  </div>
);
