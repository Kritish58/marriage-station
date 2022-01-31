import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    setProfile: (state, { payload }) => {
      state.profile = payload;
    },
    updateProfile: (state, { payload }) => {
      state.profile = { ...state.profile, ...payload };
    },
  },
});

export const { setProfile, updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
