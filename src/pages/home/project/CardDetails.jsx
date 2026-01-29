import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axisLogo from "../../../assets/banks/axis.png";

const tabs = [
  { key: "payouts", label: "Payouts" },
  { key: "guide", label: "Guide" },
  { key: "eligibility", label: "Eligibility & Documents" },
  { key: "product", label: "Product Details" },
];

export default function ProjectDetail() {
  const [activeTab, setActiveTab] = useState("payouts");
  const navigate = useNavigate();

  return (
   <div className="min-h-screen px-4 md:px-8 py-4">

      <div className="max-w-4xl mx-auto">

        {/* Glass Container */}
        <div className="backdrop-blur-xl 
                bg-gradient-to-br from-white via-slate-100 to-blue-200
                rounded-3xl shadow-xl p-6 md:p-8">


          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white shadow flex items-center justify-center">
              <img src={axisLogo} alt="Axis" className="h-8 object-contain" />
            </div>

              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Axis Credit Card
                </h1>
                <p className="text-sm text-gray-500">Credit Card Product</p>
              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="h-11 w-11 rounded-full bg-white shadow
                         flex items-center justify-center
                         hover:scale-105 transition"
            >
              ←
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <StatCard title="Approved" value="0" />
            <StatCard title="Paid" value="₹ 0.0" />
            <StatCard title="Pending" value="₹ 0.0" />
          </div>

          {/* Goals */}
          <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-blue-600 to-indigo-300 text-white shadow">
            <p className="font-medium mb-1">Goals</p>
            <p className="text-sm flex items-center gap-2 opacity-90">
              ▶ Dispatch & Transaction
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b mb-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-sm font-medium whitespace-nowrap relative transition ${
                  activeTab === tab.key
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-6 shadow-inner mb-4">
            {activeTab === "payouts" && <Payouts />}
            {activeTab === "guide" && <Guide />}
            {activeTab === "eligibility" && <Eligibility />}
            {activeTab === "product" && <ProductDetails />}
          </div>

          {/* CTA */}
          <button
            className="w-full py-3 rounded-2xl font-semibold text-white
                       bg-gradient-to-r from-blue-600 to-indigo-400
                       hover:shadow-lg hover:scale-[1.02]
                       transition"
          >
            SHARE
          </button>

        </div>
      </div>
    </div>
  );
}

/* ---------------- UI Blocks ---------------- */

const StatCard = ({ title, value }) => (
  <div className="rounded-2xl p-4 text-center
                  bg-gradient-to-br from-white to-slate-100
                  shadow hover:shadow-md transition">
    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
      {title}
    </p>
    <p className="text-lg font-semibold text-gray-900">
      {value}
    </p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="mb-4 text-sm font-semibold text-gray-800">
      {title}
    </h3>
    <ul className="space-y-3">
      {children}
    </ul>
  </div>
);

const Item = ({ children, delay = 0 }) => (
  <li
    className="flex items-start gap-3 text-sm text-gray-700 animate-slideUp"
    style={{ animationDelay: `${delay * 80}ms` }}
  >
    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
    <span>{children}</span>
  </li>
);

/* ---------------- TAB CONTENT ---------------- */

const Payouts = () => (
  <Section title="Payout Rules">
    <Item delay={0}>Earn ₹1700 for every dispatched credit card</Item>
    <Item delay={1}>Customer must not hold an Axis credit card</Item>
    <Item delay={2}>Payout credited within 15 working days</Item>
    <Item delay={3}>Fraud leads will block earnings</Item>
  </Section>
);

const Guide = () => (
  <Section title="How It Works">
    <Item delay={0}>Share application link with customer</Item>
    <Item delay={1}>Customer submits form online</Item>
    <Item delay={2}>Documents uploaded digitally</Item>
    <Item delay={3}>Application ID generated</Item>
  </Section>
);

const Eligibility = () => (
  <Section title="Eligibility Criteria">
    <Item delay={0}>CIBIL score ≥ 720</Item>
    <Item delay={1}>PAN & Aadhaar mandatory</Item>
    <Item delay={2}>Minimum income required</Item>
  </Section>
);

const ProductDetails = () => (
  <Section title="Product Highlights">
    <Item delay={0}>Airport lounge access</Item>
    <Item delay={1}>Fuel surcharge waiver</Item>
    <Item delay={2}>Welcome benefits</Item>
    <Item delay={3}>Paperless process</Item>
  </Section>
);
