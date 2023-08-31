import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJob: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});

export const { handleChange } = jobSlice.actions;

export default jobSlice.reducer;