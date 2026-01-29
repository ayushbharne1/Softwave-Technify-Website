import React, { useState, useEffect } from "react";
import { Bell, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAgent } from "../redux/thunks/profileThunks";
import Swal from "sweetalert2";
import logo from "../assets/newlogo.png";

/* Logo */
const Logo = () => <img src={logo} alt="logo" className="w-28 md:w-40" />;

/* Nav Links */
const NavLinks = ({ onClick }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `${
      isActive(path)
        ? "text-blue-600 font-semibold"
        : "text-gray-600 font-medium hover:text-gray-900"
    } text-base md:text-lg relative pb-2 transition-colors`;

  const handleClick = () => {
    window.scrollTo(0, 0);
    onClick?.();
  };

  return (
    <nav className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
      {["/", "/team", "/lead", "/training", "/help"].map((path, i) => {
        const labels = ["Home", "My Team", "Leads", "Trainings", "Help"];
        return (
          <Link
            key={i}
            to={path}
            onClick={handleClick}
            className={linkClasses(path)}
          >
            {labels[i]}
            <span
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 rounded-full transition-all duration-300 hidden md:block ${
                isActive(path) ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

/* User Section */
const UserSection = ({ open, setOpen, onLogout }) => {
  const navigate = useNavigate();
  const { agent } = useSelector((state) => state.profile);
  const isLoggedIn = Boolean(agent);
  const userInitial = agent?.name?.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn && (
        <>
          {/* Avatar */}
          <Link to="/profile">
            <div className="w-9 h-9 rounded-full ring-2 ring-purple-200 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 text-white font-semibold">
              {userInitial}
            </div>
          </Link>

          {/* Bell */}
          <div
            onClick={() => navigate("/notify")}
            className="relative cursor-pointer"
          >
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">
              4
            </span>
          </div>
        </>
      )}

      {/* Desktop Button */}
      <div className="hidden md:block">
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-700"
      >
        {open ? <X /> : <Menu />}
      </button>
    </div>
  );
};

/* Navbar */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { agent } = useSelector((state) => state.profile);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
          navigate("/login");
          setOpen(false);
        });
      }
    });
  };

  return (
    <header className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-10">
          <NavLinks />
          <UserSection open={open} setOpen={setOpen} onLogout={handleLogout} />
        </div>

        <div className="md:hidden">
          <UserSection open={open} setOpen={setOpen} onLogout={handleLogout} />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-5 bg-white rounded-xl shadow-lg p-5 border">
          <NavLinks onClick={() => setOpen(false)} />

          {agent ? (
            <button
              onClick={handleLogout}
              className="mt-6 w-full bg-red-500 text-white px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-6 block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg text-center"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;