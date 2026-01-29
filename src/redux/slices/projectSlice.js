import { createSlice } from "@reduxjs/toolkit";
import { getAllProjects, getProjectByType } from "../thunks/projectThunks";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    allProjects: [],
    projectsByType: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* ================= GET ALL PROJECTS ================= */
      .addCase(getAllProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.allProjects = action.payload?.data || [];
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= GET PROJECT BY TYPE ================= */
      .addCase(getProjectByType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectByType.fulfilled, (state, action) => {
        state.loading = false;
        state.projectsByType = action.payload?.data || [];
      })
      .addCase(getProjectByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
