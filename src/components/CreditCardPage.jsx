import BankFilter from "./BankFilter";
import CreditCardCard from "./CreditCardCard";
import { FaSearch } from "react-icons/fa";

const cards = [
  {
    id: 1,
    bank: "Axis",
    title: "Axis Bank Credit Card",
    benefits: [
      "Benefits like cashback, edge reward points etc.",
      "Convert to EMI Feature",
    ],
    earn: 1700,
    status: "Active",
  },
  {
    id: 2,
    bank: "HDFC",
    title: "HDFC Credit Card",
    benefits: [
      "Completely digital process",
      "Cashback offers on online shopping",
    ],
    earn: 2200,
    status: "Active",
  },
  {
    id: 3,
    bank: "SBI",
    title: "SBI SimplySAVE Credit Card",
    benefits: [
      "Get 2,000 Bonus Reward Points on spends of Rs. 2000",
      "Enjoy 10X Reward Points on Dining, Grocery & Movies",
    ],
    earn: 2200,
    status: "Active",
  },
  {
    id: 4,
    bank: "HDFC",
    title: "HDFC Bank Biz First Credit Card",
    benefits: [
      "Earn cash points on business spends",
      "Get up to 5% cashback on travel and online shopping via SmartBuy",
    ],
    earn: 2200,
    status: "Hold",
  },
  {
    id: 5,
    bank: "YES",
    title: "YES Bank POP Club Credit Card",
    benefits: [
      "3-month Zomato Gold & 6-month PharmEasy Plus",
      "10 POP coins per Rs.100 spent online",
    ],
    earn: 2000,
    status: "Active",
  },
  {
    id: 6,
    bank: "SBI",
    title: "SBI Cashback Credit Card",
    benefits: [
      "Get 5% cashback on all online purchases",
      "Annual fee waived on Rs.2 Lakh spends",
    ],
    earn: 2200,
    status: "Hold",
  },
  {
    id: 7,
    bank: "Kotak",
    title: "Kotak League Platinum Credit Card",
    benefits: [
      "Lifetime free credit card",
      "Easy EMI options available",
    ],
    earn: 1800,
    status: "Hold",
  },
  {
    id: 8,
    bank: "RBL",
    title: "RBL Bank Shoprite Credit Card",
    benefits: [
      "10% discount on BookMyShow",
      "5% value back on grocery",
    ],
    earn: 1400,
    status: "Active",
  },
  {
    id: 9,
    bank: "IndusInd",
    title: "IndusInd Bank Credit Card",
    benefits: [
      "Multiple online shopping offers",
      "Lifetime platinum card",
    ],
    earn: 1700,
    status: "Active",
  },
  {
    id: 10,
    bank: "HDFC",
    title: "HDFC RuPay Credit Card",
    benefits: [
      "Link RuPay card with UPI apps",
      "Earn rewards on UPI spends",
    ],
    earn: 2100,
    status: "Hold",
  },
  {
    id: 11,
    bank: "ICICI",
    title: "ICICI Bank Credit Card",
    benefits: [
      "Wide range of cards",
      "Flexible EMI & low interest",
    ],
    earn: 1800,
    status: "Active",
  },
  {
    id: 12,
    bank: "YES",
    title: "YES Bank POP Club Credit Card",
    benefits: [
      "Accelerated rewards on dining, travel and international spending",
      "Exclusive deals on brands, movie tickets and online shopping",
    ],
    earn: 1200,
    status: "Active",
  },
];


export default function CreditCardPage() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-6 animate-fadeIn">
      <div className="bg-gray-200 rounded-lg py-3 text-center font-medium mb-6">
        Live Projects: 12
      </div>

      <BankFilter />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 my-4">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter Pincode to check availability"
            className="w-full pl-11 pr-4 py-3 rounded-xl border
                 focus:outline-none focus:ring-2 focus:ring-blue-400
                 bg-white shadow-sm transition"
          />
        </div>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-gray-200 text-gray-800 
               px-5 py-3 rounded-xl hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="animate-slideUp"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <CreditCardCard
              {...card}
              category="credit-card"
              id={card.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
