import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  savePanDetails,
  saveAadhaarDetails,
} from "../../../redux/slices/kycSlice";
import { toast } from "react-toastify";

import { ArrowLeft } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";

const PanCardDetails = () => {
  const navigate = useNavigate();
  const { openSidebar } = useOutletContext() || {};

  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [dob, setDob] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  // Format Aadhaar number with spaces (XXXX XXXX XXXX)
  const formatAadhaar = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 12);
    if (cleaned.length <= 4) return cleaned;
    if (cleaned.length <= 8)
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
  };

  // Handle Aadhaar input change
  const handleAadhaarChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "").slice(0, 12);
    setAadhaar(inputValue);
  };

  const handleSubmit = () => {
    setError("");

    if (!fullName || !panNumber || !dob || !aadhaar) {
      setError("All fields are required");
      return;
    }

    if (aadhaar.length !== 12) {
      setError("Aadhaar number must be 12 digits");
      return;
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panNumber)) {
      setError("Invalid PAN number");
      return;
    }

    if (!consent) {
      setError("Please accept the consent");
      return;
    }

    dispatch(
      savePanDetails({
        fullName,
        panNumber,
        dob,
      }),
    );

    dispatch(
      saveAadhaarDetails({
        aadhaarNumber: aadhaar,
      }),
    );

    toast.success("PAN and Aadhaar details saved successfully", {
      position: "top-right",
      autoClose: 4000,
    });

    navigate("/profile/bankdetails");
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-gray-50 relative">
      {/* Back Arrow */}
      <div
        className="absolute top-4 left-4 md:hidden cursor-pointer"
        onClick={() => {
          if (openSidebar) openSidebar();
          else navigate(-1);
        }}
      >
        <ArrowLeft className="w-5  h-5 text-blue-600" />
      </div>

      <div className="w-full mx-auto mt-4  mb-2 px-4">
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
          <p className="text-sm text-blue-700 leading-relaxed">
            <span className="font-semibold">Note:</span> Please complete your{" "}
            <span className="font-medium">PAN details</span> first. Then fill in
            your <span className="font-medium">bank details</span>. Once both
            are completed, your <span className="font-medium">KYC details</span>{" "}
            will be submitted for verification.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-8 mb-10">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            PAN Verification
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Complete instant KYC using PAN details
          </p>
        </div>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Full Name (as per PAN)
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm text-gray-900 border border-gray-200 
            focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* PAN */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            PAN Number
          </label>
          <input
            type="text"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
            placeholder="Enter your PAN number"
            maxLength={10}
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm tracking-widest uppercase 
            border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* DOB */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm border border-gray-200 
            focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Aadhaar Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="XXXX XXXX 1234"
            value={formatAadhaar(aadhaar)}
            onChange={handleAadhaarChange}
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm tracking-widest
            border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 mb-6">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 accent-blue-600"
          />
          <p className="text-xs text-gray-600 leading-relaxed">
            I confirm that the information matches my PAN records and authorize
            KYC verification.
          </p>
        </div>

        {/* Button */}
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 active:scale-[0.98]
  transition text-white text-base font-semibold rounded-lg shadow"
        >
          Verify PAN
        </button>

        {/* Footer */}
        <p className="text-[11px] text-gray-400 text-center mt-4">
          Your data is securely encrypted and used only for verification
        </p>
      </div>
    </div>
  );
};

export default PanCardDetails;
