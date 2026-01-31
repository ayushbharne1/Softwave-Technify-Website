import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";
import kycReducer from "./slices/kycSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    kyc: kycReducer,
    
  },
});
