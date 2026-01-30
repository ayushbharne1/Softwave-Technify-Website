import React, { useState, useEffect } from "react";
import img from "../../../assets/Sign up.png";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/google.png";
import { useDispatch, useSelector } from "react-redux";
import { saveProfileDetails } from "../../../redux/thunks/authThunks";

export default function Profiledetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.auth);

  const [gender, setGender] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occupation: "",
    pincode: "",
    state: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        phone: user.phone || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (!formData.phone) {
      alert("Phone number is required");
      return;
    }

    if (!formData.email) {
      alert("Email is required");
      return;
    }

    if (!gender) {
      alert("Please select gender");
      return;
    }

    if (
      !formData.name ||
      !formData.occupation ||
      !formData.pincode ||
      !formData.state
    ) {
      alert("Please fill all fields");
      return;
    }

    const payload = {
      ...formData,
      gender,
    };

    const res = await dispatch(saveProfileDetails(payload));

    if (saveProfileDetails.fulfilled.match(res)) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#2E65B7] flex items-center justify-center px-4 py-6 sm:py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={img}
            alt="Profile Illustration"
            className="max-w-md w-full"
          />
        </div>

        <div className="bg-[#DFE9FB] rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 w-full max-w-md mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-center mb-1">
            Welcome to <span className="text-blue-600">SoftWave Technify</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 text-center mb-4 sm:mb-6">
            Please enter Your Credentials
          </p>

          <div className="mb-3 sm:mb-4">
            <label className="block text-sm sm:text-base mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-3 sm:mb-4">
            <label className="block text-sm sm:text-base mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              readOnly={!!user?.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-sm sm:text-base mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* OCCUPATION */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-sm sm:text-base mb-1">
              Occupation
            </label>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select</option>
              {[
                "Freelancer",
                "Sales Agent",
                "DSA",
                "Credit/Insurance Agent",
                "Loan Agent",
                "Stock Trader",
                "Retail Shop",
                "Salaried",
                "Housewife",
                "Retail/Telecom Outlet",
                "Influencer",
                "CSC/Suvidha Kendra",
                "Telecom Sales Agent",
                "Retired Person",
                "Defence Personnel",
                "Student",
                "Others",
              ].map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* GENDER */}
          <div className="mb-3 sm:mb-4">
            <label className="block mb-2">Gender</label>
            <div className="flex gap-3">
              {["male", "female", "other"].map((g) => {
                const activeColor =
                  g === "male"
                    ? "bg-blue-300 text-black"
                    : g === "female"
                      ? "bg-pink-300 text-black"
                      : "bg-red-300 text-black";

                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`flex-1 border rounded-lg py-2 capitalize
            ${gender === g ? activeColor : "bg-blue"}`}
                  >
                    {g}
                  </button>
                );
              })}
            </div>
          </div>

          <input
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mb-3"
          />

          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mb-4"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Please wait..." : "SIGN UP"}
          </button>

          <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-2 bg-white mt-3">
            <img src={googleIcon} alt="Google" className="h-5 w-5" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
