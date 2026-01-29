import { ArrowLeft, Info, Coins, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, amount, desc, bg, Icon }) => (
  <div className={`${bg} rounded-2xl shadow-sm p-4 flex gap-4 items-start`}>
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>

    <div className="flex-1">
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-lg font-semibold text-black mt-1">{amount}</p>
      <p className="text-sm text-gray-500 mt-1 leading-snug">
        {desc}
      </p>
    </div>
  </div>
);

const PendingEarnings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold">Pending Earnings</h1>
        </div>
        <Info className="w-5 h-5 text-blue-500" />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-4">
        <Card
          title="Self"
          amount="0.00"
          Icon={Coins}
          bg="bg-purple-100"
          desc="Self pending earning is the amount will be credited against the approved leads which were submitted by you"
        />

        <Card
          title="My Team"
          amount="0.0"
          Icon={Users}
          bg="bg-yellow-100"
          desc="Teams pending earning is the amount will be credited for the approved leads submitted by your team"
        />
      </div>
    </div>
  );
};

export default PendingEarnings;