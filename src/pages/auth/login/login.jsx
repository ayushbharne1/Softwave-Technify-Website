import logo from "../../../assets/newlogo.png";
import img from "../../../assets/Privacypolicy-rafiki.png";
import india from "../../../assets/india.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../../redux/thunks/authThunks";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [mode, setMode] = useState("login");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetOtp = async () => {
    if (mobile.length !== 10) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    setError("");
    setLoading(true);

    const res = await dispatch(sendOtp(mobile));
    setLoading(false);

    if (sendOtp.fulfilled.match(res)) {
      const data = res.payload;

      // DEV ONLY: show OTP
      if (data?.otp) {
        alert(`OTP: ${data.otp}`);
      }

      if (mode === "login" && data?.isRegistered === false) {
        setError("This number is not registered. Please sign up first.");
        return;
      }

      navigate("/verify-otp", {
        state: { mode, mobile },
      });
    } else {
      setError(res.payload || "Failed to send OTP");
    }
  };

  return (
    <div className="min-h-screen bg-[#2E65B7] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Illustration */}
        <div className="hidden md:flex items-center justify-center">
          <img src={img} alt="Login Illustration" className="max-w-md w-full" />
        </div>

        {/* Right Card */}
        <div className="bg-[#DFE9FB] rounded-2xl shadow-lg p-6 md:p-8 max-w-md w-full mx-auto">

          {/* 🔵 LOGO (UI Improved) */}
          <div className="flex justify-center items-center h-[140px] mb-4">
            <img
              src={logo}
              alt="Logo"
              className="h-[280px] w-auto object-contain"
            />
          </div>

          <p className="text-center text-gray-700 font-medium mb-6">
            <span
              className={`cursor-pointer ${
                mode === "login" ? "font-semibold text-blue-600" : ""
              }`}
              onClick={() => {
                setMode("login");
                setError("");
              }}
            >
              SIGN IN
            </span>
            &nbsp;or&nbsp;
            <span
              className={`cursor-pointer ${
                mode === "signup" ? "font-semibold text-blue-600" : ""
              }`}
              onClick={() => {
                setMode("signup");
                setError("");
              }}
            >
              SIGN UP
            </span>
          </p>

          {/* Mobile Input */}
          <div className="mb-6">
            <div
              className={`flex items-center bg-white rounded-lg overflow-hidden border ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            >
              <div className="px-3 flex items-center gap-2">
                <img src={india} alt="IN" className="h-4 w-4" />
                <span className="text-sm">+91</span>
              </div>

              <input
                type="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setMobile(value);
                  if (error) setError("");
                }}
                placeholder="Enter Mobile Number"
                className="w-full px-3 py-3 outline-none text-sm bg-transparent"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
          </div>

          <button
            onClick={handleGetOtp}
            disabled={mobile.length !== 10 || loading}
            className={`w-full py-3 rounded-lg font-semibold transition
            ${
              mobile.length === 10 && !loading
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-400 cursor-not-allowed text-white"
            }`}
          >
            {loading ? "Sending OTP..." : "GET OTP"}
          </button>
        </div>
      </div>
    </div>
  );
}
