import React, { useState, useEffect } from "react";
import {
  Bell,
  Menu,
  X,
  User,
  Home,
  Users,
  Zap,
 PhoneCall,
  HelpCircle,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAgent } from "../redux/thunks/profileThunks";
import Swal from "sweetalert2";
import logo from "../assets/newlogo.png";

/* ================= LOGO ================= */
const Logo = () => (
  <Link to="/" className="relative flex items-center group overflow-hidden">
    <img
      src={logo}
      alt="logo"
      className="h-25 sm:h-23 md:h-22 lg:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />

    {/* Glass Shine */}
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
  </Link>
);

/* ================= NAV LINKS ================= */
const NavLinks = ({ onClick, isMobile = false }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const links = [
    { label: "Home", path: "/", icon: Home },
    { label: "My Team", path: "/team", icon: Users },
    { label: "Leads", path: "/lead", icon: Zap },
    { label: "Contact", path: "/contact", icon: PhoneCall },
    { label: "Help", path: "/help", icon: HelpCircle },
  ];

  const linkClasses = (active) =>
    `group relative overflow-hidden flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg"
        : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600 hover:shadow-lg"
    }`;

  return (
    <nav className={`flex flex-col xl:flex-row gap-3 ${isMobile ? "p-4" : ""}`}>
      {links.map(({ label, path, icon: Icon }) => (
        <Link
          key={path}
          to={path}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClick?.();
          }}
          className={linkClasses(isActive(path))}
        >
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="relative z-10">{label}</span>

          {/* Glass shine */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
        </Link>
      ))}
    </nav>
  );
};

/* ================= USER SECTION ================= */
const UserSection = ({ open, setOpen, onLogout }) => {
  const navigate = useNavigate();
  const { agent } = useSelector((state) => state.profile);
  const userInitial = agent?.name?.charAt(0).toUpperCase() || "A";

  return (
    <div className="flex items-center gap-4">
      {agent && (
        <>
          {/* Profile Avatar */}
          <Link 
            to="/profile" 
            className="relative group overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 p-1 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center font-bold text-orange-600 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                {userInitial}
              </div>
            </div>

            {/* Glass Shine Effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl pointer-events-none" />
            
            {/* Active Status */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm">
              <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
            </span>
          </Link>

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => navigate("/notify")}
              className="relative group overflow-hidden p-3 bg-white rounded-2xl shadow-md hover:bg-gradient-to-br hover:from-orange-500 hover:to-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Bell className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
              
              {/* Glass Shine Effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl pointer-events-none" />
            </button>
            
            {/* Notification Badge */}
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md border-2 border-white z-20">
              4
            </span>
          </div>
        </>
      )}

      {/* Desktop Actions */}
      <div className="hidden xl:block">
        {agent ? (
          <button
            onClick={onLogout}
            className="relative group overflow-hidden px-7 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:from-orange-600 hover:to-blue-700 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Logout</span>
            {/* Glass Shine Effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl pointer-events-none" />
          </button>
        ) : (
          <Link
            to="/login"
            className="relative group overflow-hidden inline-block px-7 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:from-orange-600 hover:to-blue-700 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Get Started</span>
            {/* Glass Shine Effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl pointer-events-none" />
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden relative group overflow-hidden p-3 rounded-2xl bg-gradient-to-r from-orange-200 to-blue-200 shadow-md hover:shadow-lg hover:from-orange-500 hover:to-blue-600 hover:scale-105 transition-all duration-300"
      >
        {open ? (
          <X className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors duration-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors duration-300" />
        )}
        
        {/* Glass Shine Effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl pointer-events-none" />
      </button>
    </div>
  );
};

/* ================= NAVBAR ================= */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { agent } = useSelector((state) => state.profile);

  useEffect(() => setOpen(false), [location.pathname]);

  const handleLogout = () => {
    Swal.fire({
      title: "Confirm Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f97316",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(logoutAgent()).then(() => {
          Swal.fire({
            title: "Logged Out!",
            text: "You have been successfully logged out.",
            icon: "success",
            confirmButtonColor: "#f97316",
            timer: 2000,
            showConfirmButton: false,
          });
          navigate("/login");
        });
      }
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-white/95 backdrop-blur-xl shadow-lg border-b border-orange-100/50 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 xl:h-28 flex items-center justify-between">
          <Logo />

          <div className="hidden xl:flex items-center gap-12">
            <NavLinks />
            <UserSection open={open} setOpen={setOpen} onLogout={handleLogout} />
          </div>

          <div className="xl:hidden">
            <UserSection open={open} setOpen={setOpen} onLogout={handleLogout} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden bg-gradient-to-b from-white via-orange-50/30 to-blue-50/30 backdrop-blur-xl shadow-lg rounded-b-3xl border-b border-orange-100/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <NavLinks isMobile onClick={() => setOpen(false)} />

            <div className="mt-6">
              {agent ? (
                <button
                  onClick={handleLogout}
                  className="relative group overflow-hidden w-full py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:from-orange-600 hover:to-blue-700 hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Logout</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="relative group overflow-hidden block w-full py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold rounded-2xl text-center shadow-md hover:shadow-lg hover:from-orange-600 hover:to-blue-700 hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Login</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;