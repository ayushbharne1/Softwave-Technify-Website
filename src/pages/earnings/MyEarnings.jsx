import { useState } from "react";
import {
  Info,
  Coins,
  Users,
  Share2,
  ChevronUp,
  ChevronDown,
  X,
  ArrowLeft,
} from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";

/* ---------- CARD ---------- */
const Card = ({ title, amount, desc, Icon }) => (
  <div className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 items-start">
    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>

    <div className="flex-1">
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-lg font-semibold text-black mt-1">₹{amount}</p>
      <p className="text-sm text-gray-500 mt-1 leading-snug">{desc}</p>
    </div>
  </div>
);

/* ---------- FAQ ITEM ---------- */
const FaqItem = ({ q, a, open, onClick }) => (
  <div className="border-b py-4">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left gap-3"
    >
      <p className="font-medium text-gray-900">{q}</p>
      {open ? <ChevronUp /> : <ChevronDown />}
    </button>

    {open && (
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{a}</p>
    )}
  </div>
);

/* ---------- MAIN ---------- */
const MyEarnings = () => {
  const [showFaq, setShowFaq] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  /* ✅ SAFE CONTEXT ACCESS */
  const outletContext = useOutletContext() || {};
  const openSidebar = outletContext.openSidebar;

  const faqs = [
    {
      q: "Why there is a deduction of 2% in the amount which I have received?",
      a: "As per Govt rules 2% TDS has to be deducted on the commission income.",
    },
    {
      q: "Where do I receive my commissions?",
      a: "Commissions are directly transferred to the Bank Account provided by the user in the Bank Account Section of the app.",
    },
    {
      q: "When are the commissions released?",
      a: "Commissions are released within 7-10 working days from the date of lead approval. Generally released on Wednesdays or Thursdays.",
    },
    {
      q: "Why I have not received the commissions for the approved leads?",
      a: "This may happen if KYC is not completed, bank details are incorrect, or fraud is detected.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-gray-50 z-10">
        <div className="flex items-center gap-3">
          {/* Arrow only on small devices */}
          <button
            onClick={() => openSidebar && openSidebar()}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:scale-95"
          >
            <ArrowLeft onClick={() => navigate("/")} className="w-6 h-6" />
          </button>

          <h1 className="text-xl font-bold">My Earnings</h1>
        </div>

        <button
          onClick={() => setShowFaq(true)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Info className="w-5 h-5 text-blue-500" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-4">
        <Card
          title="Self"
          amount="0.0"
          Icon={Coins}
          desc="Self earning is the amount paid against the approved leads which were submitted by you"
        />

        <Card
          title="My Team"
          amount="0.0"
          Icon={Users}
          desc="Teams earning is the amount paid for the approved leads submitted by your team"
        />

        <Card
          title="Referral"
          amount="0.0"
          Icon={Share2}
          desc="Referral earning is the amount paid against the earnings of your referrals"
        />
      </div>

      {/* FAQ MODAL */}
      {showFaq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-blue-600">FAQ</h2>
              <button onClick={() => setShowFaq(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEarnings;