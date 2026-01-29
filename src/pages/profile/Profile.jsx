import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ArrowLeft,
  CreditCard,
  Building2,
  Globe,
  Users,
  UserPlus,
  Building,
  DollarSign,
  MessageCircle,
  FileText,
  Shield,
  Trash2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, logoutAgent } from "../../redux/thunks/profileThunks";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { agent, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
    AOS.refresh();
  }, [dispatch]);

  if (location.pathname === "/profile") {
    return <Navigate to="/profile/personalinfo" replace />;
  }

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutAgent()).then(() => {
          Swal.fire({
            title: "Logged Out!",
            text: "You have been logged out successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate("/login", { replace: true });
        });
      }
    });
  };

  const menuItems = [
    {
      icon: <CreditCard className="w-5 h-5 text-blue-500" />,
      label: "PAN DETAILS",
      path: "pancarddetails",
      hasAlert: true,
      alertColor: "bg-red-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Building2 className="w-5 h-5 text-blue-500" />,
      label: "BANK DETAILS",
      path: "bankdetails",
      hasAlert: true,
      alertColor: "bg-red-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      label: "MY WEBSITE",
      path: "myweb",
      bgColor: "bg-white",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      label: "MY TEAM",
      path: "myteam",
      bgColor: "bg-white",
    },
    {
      icon: <UserPlus className="w-5 h-5 text-blue-500" />,
      label: "MY REFERRALS",
      path: "myreferal",
      bgColor: "bg-white",
    },
    {
      icon: <Building className="w-5 h-5 text-blue-500" />,
      label: "BECOME AN AGENCY",
      path: "agency",
      labelColor: "text-blue-500",
      bgColor: "bg-white",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-green-600" />,
      label: "EARNINGS",
      path: "earn",
      highlight: true,
      bgColor: "bg-lime-300",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-blue-500" />,
      label: "CUSTOMER SUPPORT",
      path: "customer",
      bgColor: "bg-white",
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      label: "TERMS & CONDITIONS",
      path: "terms&con",
      bgColor: "bg-white",
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      label: "PRIVACY POLICY",
      path: "policy",
      bgColor: "bg-white",
    },
    {
      icon: <Trash2 className="w-5 h-5 text-blue-500" />,
      label: "DELETE ACCOUNT",
      path: "deleteaccount",
      bgColor: "bg-white",
    },
    {
      icon: <LogOut className="w-5 h-5 text-blue-500" />,
      label: "LOGOUT",
      path: "logout",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden relative">
      {/* Sidebar toggle button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600 transition-colors"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0  bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sideclr fixed lg:relative inset-y-0 left-0 w-full lg:w-80 xl:w-96 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 sm:p-8 flex mt-15 lg:mt-0 flex-col h-full">
          <button
            onClick={() => navigate("/")}
            className="p-1 mb-2 mt-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Profile info */}
          <div
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-3 sm:p-6 mb-6 shadow-sm border border-blue-200"
            data-aos="fade-up"
          >
            {loading ? (
              <p className="text-center py-4">Loading profile...</p>
            ) : error ? (
              <p className="text-center py-4 text-red-500">{error}</p>
            ) : agent ? (
              <>
                <div className="flex items-start justify-between mb-4 sm:mb-6 gap-2">
                  <div className="flex items-start gap-2 sm:gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white flex-shrink-0">
                      <span className="text-xl sm:text-3xl font-bold text-white">
                        {agent.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm sm:text-lg font-bold text-gray-800 mb-0.5 sm:mb-1 truncate">
                        {agent.name || "Unknown Name"}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 mb-0.5 truncate">
                        {agent.email || "Email not provided"}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                        {agent.phone
                          ? `+91 ${agent.phone}`
                          : "Phone not provided"}
                      </p>
                      <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-200 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        {agent.occupation || "Role"}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigate("personalinfo");
                      setIsSidebarOpen(false);
                    }}
                    className="p-1 sm:p-1.5 hover:bg-blue-200 rounded-full transition-colors flex-shrink-0"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  </button>
                </div>

                {/* Visiting Card Button */}
                <button
                  onClick={() => {
                    navigate("visitcard");
                    setIsSidebarOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-gray-700 bg-white hover:bg-gray-50 rounded-xl py-2.5 sm:py-3 shadow-sm transition-all hover:shadow-md border border-gray-200"
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-semibold">
                    Visiting Card
                  </span>
                </button>
              </>
            ) : (
              <p className="text-center py-4">No profile data available</p>
            )}
          </div>

          {/* Menu Items */}
          <div className="space-y-2 mt-auto" data-aos="fade-left">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.label === "LOGOUT" ? "#" : item.path}
                onClick={(e) => {
                  setIsSidebarOpen(false);

                  if (item.label === "LOGOUT") {
                    e.preventDefault();
                    handleLogout();
                  }
                }}
                className={({ isActive }) =>
                  `${item.bgColor} rounded-xl p-3 sm:p-4 flex items-center justify-between cursor-pointer border border-gray-100 transition-all ${
                    isActive ? "shadow-md bg-blue-50" : "hover:shadow-md"
                  }`
                }
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  {item.icon}
                  <span
                    className={`text-xs sm:text-sm font-medium truncate ${
                      item.labelColor || "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {item.hasAlert && (
                    <div
                      className={`w-2 h-2 ${item.alertColor} rounded-full`}
                    />
                  )}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Outlet for child routes */}
      <div
        className="flex-1 flex flex-col bg-gray-50 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent relative"
        data-aos="fade-up"
      >
        <Outlet context={{ openSidebar: () => setIsSidebarOpen(true) }} />
      </div>
    </div>
  );
};

export default Profile;
