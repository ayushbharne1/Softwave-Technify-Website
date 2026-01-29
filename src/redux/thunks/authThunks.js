import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendOtpApi, verifyOtpApi } from "../../services/authApi";
import api from "../../services/api";
import { toast } from "react-toastify";

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (mobile, { rejectWithValue }) => {
    try {
      const res = await sendOtpApi({
        phone: String(mobile),
      });


      const otp = res?.data?.data?.otp;

      if (otp) {
        toast.success(`Your OTP is: ${otp}`, {
          position: "top-right",
          autoClose: 8000,
        });
      }

      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP send failed");
      return rejectWithValue(
        err.response?.data?.message || "OTP send failed"
      );
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ mobile, otp }, { rejectWithValue }) => {
    try {
      const res = await verifyOtpApi({
        phone: String(mobile),
        otp: String(otp),
      });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
      return rejectWithValue(
        err.response?.data?.message || "Invalid OTP"
      );
    }
  }
);

export const saveProfileDetails = createAsyncThunk(
  "auth/completeRegistration",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(
        "/api/agent/complete-registration",
        {
          name: data.name,
          phone: String(data.phone),
          email: data.email || null,
          occupation: data.occupation,
          gender: data.gender,
          pincode: data.pincode,
          state: data.state,
        }
      );

      toast.success("Registration completed successfully");
      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);