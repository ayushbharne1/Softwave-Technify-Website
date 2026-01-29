import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProjects = createAsyncThunk(
  "projects/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://aryo-be-1.onrender.com/api/project/get-all"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getProjectByType = createAsyncThunk(
  "projects/getByType",
  async (projectType, { rejectWithValue }) => {
    try {
      const encodedType = encodeURIComponent(projectType);

      const res = await fetch(
        `https://aryo-be-1.onrender.com/api/project/type/${encodedType}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch projects by type");
      }

      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
