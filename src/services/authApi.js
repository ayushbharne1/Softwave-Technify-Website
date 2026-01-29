import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendOtpApi = (data) =>
  API.post("/api/agent/send-otp", data);

export const verifyOtpApi = (data) =>
  API.post("/api/agent/verify-otp", data);
