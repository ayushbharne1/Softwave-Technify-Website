import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProfile,
  logoutApi,
  updateProfileApi,
} from "../../services/profileService";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, thunkAPI) => {
    try {
      const data = await getProfile();
      return data.data.agent;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

//  INIT PROFILE 
export const initProfile = createAsyncThunk(
  "profile/initProfile",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    await thunkAPI.dispatch(fetchProfile());
    return true;
  }
);

//LOGOUT THUNK
export const logoutAgent = createAsyncThunk(
  "profile/logout",
  async (_, thunkAPI) => {
    try {
      const data = await logoutApi();
      localStorage.removeItem("token");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (payload, thunkAPI) => {
    try {
      const data = await updateProfileApi(payload);
      return data.data.agent;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
