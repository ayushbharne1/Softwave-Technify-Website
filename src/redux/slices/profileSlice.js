import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile, logoutAgent,updateProfile,initProfile } from "../thunks/profileThunks";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    agent: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateGender: (state, action) => {
      if (state.agent) {
        state.agent.gender = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder

     .addCase(initProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(initProfile.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.agent = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // UPDATE PROFILE
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.agent = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logoutAgent.fulfilled, (state) => {
        state.agent = null;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { updateGender } = profileSlice.actions;
export default profileSlice.reducer;
