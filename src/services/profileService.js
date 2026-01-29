import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/api/agent/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

//  LOGOUT API
export const logoutApi = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/api/agent/logout", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

//  UPDATE PROFILE API (NEW)
export const updateProfileApi = async (payload) => {
  const token = localStorage.getItem("token");

  const response = await API.put("/api/agent/profile", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};