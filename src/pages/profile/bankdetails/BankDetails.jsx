import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveBankDetails } from "../../../redux/slices/kycSlice";
import { submitKyc } from "../../../redux/thunks/kycThunks";
import { toast } from "react-toastify";

import { ArrowLeft } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";

const BankDetails = () => {
  const navigate = useNavigate();
  const { openSidebar } = useOutletContext() || {};

  const dispatch = useDispatch();
  const [ifscCode, setIfscCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    if (!ifscCode || !bankName || !accountHolderName || !accountNumber) {
      setError("All fields are required");
      return;
    }

    if (accountNumber !== confirmAccountNumber) {
      setError("Account numbers do not match");
      return;
    }

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
      setError("Invalid IFSC code");
      return;
    }

    dispatch(
      saveBankDetails({
        ifscCode,
        bankName,
        accountHolderName,
        accountNumber,
      })
    );
    toast.success("Bank details saved successfully", {
      position: "top-right",
      autoClose: 4000,
    });

    dispatch(submitKyc());
  };


  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-gray-50 relative">

      {/* Back Arrow */}
      <div
        className="absolute top-4 left-4 md:hidden cursor-pointer z-50"
        onClick={() => {
          if (openSidebar) openSidebar();
          else navigate(-1);
        }}
      >
        <ArrowLeft className="w-5 h-5 text-blue-600" />
      </div>

      <div className="w-full mx-auto mt-4 mb-2 px-4">
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
          <p className="text-sm text-blue-700 leading-relaxed">
            <span className="font-semibold">Note:</span>{" "}
            Please complete your <span className="font-medium">PAN details</span> first. Then fill in your{" "}
            <span className="font-medium">bank details</span>. Once both are completed, your{" "}
            <span className="font-medium">KYC details</span> will be submitted for verification.
          </p>
        </div>
      </div>


      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-8 mb-10">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Bank Account Details
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Payout will be made to the bank account mentioned below
          </p>
        </div>

        {/* IFSC */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            IFSC Code
          </label>
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
            placeholder="Enter IFSC Code"
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm uppercase tracking-widest
            border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Bank Name */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Bank Name
          </label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="Enter Bank Name"
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm
            border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Account Holder */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Account Holder Name
          </label>
          <input
            type="text"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            placeholder="Enter Account Holder Name"
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm
            border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Account Number */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Account Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter Account Number"
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm tracking-widest
            border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Confirm Account */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Confirm Account Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={confirmAccountNumber}
            onChange={(e) => setConfirmAccountNumber(e.target.value)}
            placeholder="Re-enter Account Number"
            className="w-full h-11 rounded-lg bg-gray-50 px-4 text-sm tracking-widest
            border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 mb-3">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 active:scale-[0.98]
          transition text-white text-base font-semibold rounded-lg shadow"
        >
          Save
        </button>

        {/* Footer */}
        <p className="text-[11px] text-gray-400 text-center mt-4">
          Your bank details are securely stored and encrypted
        </p>

      </div>
    </div>
  );
};

export default BankDetails;
