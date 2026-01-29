import { useState, useEffect } from "react";
import {
  Share2,
  Users,
  CheckCircle,
  Clock,
  Wallet,
  Calendar,
  Download,
  X,
  Smartphone,
  IndianRupee,
  ArrowLeft,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import kyc from "../../assets/kyc.png";
import TeamImage from "../../assets/teamimage.png";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";

/* ---------- STAT CARD ---------- */
const StatCard = ({ title, value, icon, bgColor, iconColor }) => (
  <div className={`${bgColor} rounded-2xl p-4 sm:p-5 shadow-sm`}>
    <div className="flex items-center justify-between mb-2">
      <span className="text-gray-600 text-xs sm:text-sm font-medium">
        {title}
      </span>
      <div
        className={`${iconColor} w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
    <p className="text-xl sm:text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

/* ---------- BENEFIT ITEM ---------- */
const BenefitItem = ({ icon, text }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="mt-1 shrink-0">{icon}</div>
    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
  </div>
);

/* ---------- FAQ MODAL ---------- */
const TeamFaqModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-3 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Team FAQ
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 sm:p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold underline mb-3">
                  Create Your Team
                </h1>
                <p className="mb-6 text-base sm:text-lg">
                  Steps to create team
                </p>

                <div className="space-y-4 text-sm sm:text-base">
                  <div className="flex items-center gap-4">
                    <span className="font-bold">1.</span>
                    <span>Add Team members by sharing team link</span>
                    <Share2 className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-bold">2.</span>
                    <span>
                      Ask the Team members to register with their Mobile no
                    </span>
                    <Smartphone className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-bold">3.</span>
                    <span>
                      Team members can start working by sharing project links
                    </span>
                    <IndianRupee className="w-5 h-5" />
                  </div>
                </div>

                <p className="mt-6 text-yellow-300 underline">
                  Your Team will see only your name
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  src={TeamImage}
                  alt="Team Illustration"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 text-gray-700">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  How to add Team Members
                </h2>
                <ol className="list-decimal ml-6 space-y-3 text-sm sm:text-base">
                  <li>Share your Team Link via WhatsApp</li>
                  <li>Ask them to login with Name & Contact number</li>
                  <li>Member starts selling products</li>
                  <li>Team reports visible on Team page</li>
                  <li>Each member sees own report</li>
                  <li>Earnings mapped to you</li>
                  <li>You manage agent quality</li>
                </ol>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Benefits of creating your Team
                  </h2>
                  <ol className="list-decimal ml-6 space-y-3 text-sm sm:text-base">
                    <li>Your name visible as team owner</li>
                    <li>You get payout of all team sales</li>
                    <li>Aryo not visible to team members</li>
                    <li>Easy dashboard tracking</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Important Points
                  </h2>
                  <ol className="list-decimal ml-6 space-y-3 text-sm sm:text-base">
                    <li>KYC mandatory to create team</li>
                    <li>KYC not required for members</li>
                    <li>No referrer commission</li>
                    <li>Payout cycle varies</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- KYC MODAL ---------- */
const KycModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 text-center relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center"
        >
          <X size={18} />
        </button>

        <img src={kyc} alt="KYC" className="mx-auto mb-6 max-h-40 sm:max-h-48" />

        <h2 className="text-xl sm:text-2xl font-bold mb-6">
          Kindly complete your KYC!!
        </h2>

        <NavLink
          to="/profile/pancarddetails"
          className="block bg-blue-500 text-white text-lg font-semibold px-8 py-3 rounded-xl"
        >
          START NOW
        </NavLink>
      </div>
    </div>
  );
};

/* ---------- MAIN PAGE ---------- */
export default function MyTeam() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isKycOpen, setIsKycOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const teamSize = 0;

  const blur = isFaqOpen || isKycOpen;
  const navigate = useNavigate();
  const { openSidebar } = useOutletContext() || {};

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className={`flex-1 bg-gray-50 ${blur ? "blur-sm pointer-events-none" : ""}`}>
        {/* HEADER */}
        <div 
          className="flex items-center justify-between px-4 sm:px-6 h-16"
          data-aos="fade-down"
        >
          {/* Back Arrow only on small devices */}
          <div
            className="mr-2 md:hidden cursor-pointer"
            onClick={() => {
              if (openSidebar) openSidebar();
              else navigate(-1);
            }}
          >
            <ArrowLeft className="w-6 h-6 text-blue-600" />
          </div>

          <h1 className="text-lg sm:text-xl font-bold flex-1 text-center md:text-left">
            My Team
          </h1>

          {/* FAQ button visible always */}
          <button
            onClick={() => setIsFaqOpen(true)}
            className="text-blue-600 font-semibold"
          >
            FAQ
          </button>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <StatCard title="Total Leads" value="0" icon={<Users />} bgColor="bg-blue-100" iconColor="bg-blue-200" />
            </div>
            <div data-aos="fade-up" data-aos-delay="150">
              <StatCard title="Approved Leads" value="0" icon={<CheckCircle />} bgColor="bg-yellow-100" iconColor="bg-yellow-200" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <StatCard title="Pending Earning" value="₹0" icon={<Clock />} bgColor="bg-orange-100" iconColor="bg-orange-200" />
            </div>
            <div data-aos="fade-up" data-aos-delay="250">
              <StatCard title="Paid Earning" value="₹0" icon={<Wallet />} bgColor="bg-red-100" iconColor="bg-red-200" />
            </div>
          </div>

          <div 
            className="bg-white p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between gap-3 mb-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <p>Add team members by sharing the link</p>
            <button
              onClick={() => setIsKycOpen(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg flex gap-2 justify-center"
            >
              <Share2 /> Share link
            </button>
          </div>

          <div 
            className="bg-white p-6 rounded-2xl shadow-sm mb-6"
            data-aos="zoom-in"
            data-aos-delay="350"
          >
            <h2 className="text-center text-xl font-bold text-blue-600 mb-4">
              Create Your Team Now!
            </h2>
            <Users className="mx-auto w-20 h-20 sm:w-24 sm:h-24 text-blue-600 mb-4" />
            <BenefitItem icon="📊" text="Track all team leads in one dashboard" />
            <BenefitItem icon="📋" text="Team members get product access" />
            <BenefitItem icon="🔒" text="Only your name visible to team" />
          </div>

          <div 
            className="bg-white p-4 rounded-2xl shadow-sm mb-4 flex items-center gap-3"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search with name"
              className="flex-1 border rounded-xl px-4 py-2"
            />
            <Calendar />
            <Download />
          </div>

          <div 
            className="bg-white p-4 rounded-xl shadow-sm mb-4"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Team Size: <span className="text-blue-600">{teamSize}</span>
          </div>

          {teamSize === 0 && (
            <div 
              className="text-center py-10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Users className="mx-auto w-16 h-16 text-gray-300" />
              <p>No team members yet</p>
            </div>
          )}
        </div>
      </div>

      <TeamFaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <KycModal isOpen={isKycOpen} onClose={() => setIsKycOpen(false)} />
    </div>
  );
}