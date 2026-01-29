import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitKyc = createAsyncThunk(
  "kyc/submit",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { kyc } = getState();
      const token = localStorage.getItem("token");

      if (!token) throw new Error("Auth token missing");
      if (!kyc.panDetails || !kyc.bankDetails)
        throw new Error("KYC data incomplete");

      const payload = {
        panDetails: kyc.panDetails,
        bankDetails: kyc.bankDetails,
        aadhaarDetails: kyc.aadhaarDetails,
      };
      const response = await axios.post(
        "https://aryo-be-1.onrender.com/api/agent/submit-kyc",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      // console.log("🎉 API response:", response.data);
      return response.data;
    } catch (error) {
      console.error("🔥 submitKyc error:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
