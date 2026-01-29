import img from "../../../assets/Privacypolicy-rafiki.svg";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, sendOtp } from "../../../redux/thunks/authThunks";

export default function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mobile = location.state?.mobile;
  const mode = location.state?.mode || "login";

  const { loading } = useSelector((state) => state.auth);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [localError, setLocalError] = useState("");
  const inputsRef = useRef([]);

  const [timeLeft, setTimeLeft] = useState(50);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (!mobile) {
      navigate("/login", { replace: true });
    }
  }, [mobile, navigate]);

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setLocalError("");

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newOtp.every((d) => d !== "")) {
      submitOtp(newOtp.join(""));
    }
  };

  const submitOtp = async (finalOtp) => {
    const res = await dispatch(verifyOtp({ mobile, otp: finalOtp }));

    if (!verifyOtp.fulfilled.match(res)) {
      setLocalError(res.payload || "OTP verification failed");
      return;
    }

    const { agent, token } = res.payload?.data || {};

    if (!agent || !token) {
      setLocalError("Invalid server response");
      return;
    }

    localStorage.setItem("token", token);

    if (agent.isNewUser || agent.registrationStep === "basic_details") {
      navigate("/profiledetails", { replace: true });
      return;
    }

    if (mode === "signup") {
      setLocalError(
        "You are already registered with this number. Please sign in."
      );
      return;
    }

    navigate("/", { replace: true });
  };

  const handleResendOtp = async () => {
    if (!canResend) return;

    const res = await dispatch(sendOtp(mobile));
    if (sendOtp.fulfilled.match(res)) {
      setOtp(["", "", "", "", "", ""]);
      setTimeLeft(50);
      setCanResend(false);
      setLocalError("");
      inputsRef.current[0]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#2E65B7] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Image */}
        <div className="hidden md:flex justify-center">
          <img
            src={img}
            alt="OTP Illustration"
            className="max-w-md w-full"
          />
        </div>

        {/* OTP Card */}
        <div className="bg-[#DFE9FB] rounded-2xl shadow-lg p-6 sm:p-8 text-center w-full max-w-md mx-auto">

          <div className="flex justify-center mb-4">
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-blue-200 flex items-center justify-center">
              <TbPasswordMobilePhone className="text-xl sm:text-2xl" />
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold mb-1">
            Verify OTP
          </h2>

          <p className="text-sm text-gray-600 mb-6 break-all">
            OTP sent to <b>{mobile}</b>
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="h-11 w-11 sm:h-12 sm:w-12 rounded-lg border text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>

          {/* Timer */}
          <p className="text-base sm:text-lg font-medium text-gray-600 mb-4">
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}s
          </p>

          {loading && (
            <p className="text-sm text-blue-600">Verifying...</p>
          )}

          {localError && (
            <p className="text-red-500 text-sm mt-2">{localError}</p>
          )}

          {/* Resend */}
          <p className="text-sm text-gray-600 mt-4">
            Didn’t receive the code?{" "}
            <button
              onClick={handleResendOtp}
              disabled={!canResend}
              className={`font-medium ${
                canResend
                  ? "text-blue-600 hover:underline"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Resend OTP
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
