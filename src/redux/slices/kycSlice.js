import { createSlice } from "@reduxjs/toolkit";
import { submitKyc } from "../thunks/kycThunks";
import { toast } from "react-toastify";

const initialState = {
  panDetails: null,
  bankDetails: null,
  aadhaarDetails: null,
  loading: false,
  success: false,
  error: null,
  kycStatus: null,
};

const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    savePanDetails: (state, action) => {
      state.panDetails = { ...state.panDetails, ...action.payload };
    },
    saveBankDetails: (state, action) => {
      state.bankDetails = { ...state.bankDetails, ...action.payload };
    },
    saveAadhaarDetails: (state, action) => {
      state.aadhaarDetails = { ...state.aadhaarDetails, ...action.payload };
    },
    resetKyc: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitKyc.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(submitKyc.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        state.kycStatus = action.payload?.data?.agent?.kycStatus;

        toast.success(action.payload?.message || "KYC submitted successfully", {
          position: "top-right",
          autoClose: 4000,
        });
      })

      .addCase(submitKyc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        if (action.payload) {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 4000,
          });
        }
      });
  },
});

export const { savePanDetails, saveBankDetails, saveAadhaarDetails, resetKyc } =
  kycSlice.actions;

export default kycSlice.reducer;
