import { createSlice } from "@reduxjs/toolkit";

export const newUserSlice = createSlice({
  name: "newUser",
  initialState: {
    isNew: false,
  },
  reducers: {
    initializeNewUser: (state) => {
      state.isNew = true;
    },
    updateNewUser: (state) => {
      state.isNew = false;
    },
  },
});

export const { initializeNewUser, updateNewUser } = newUserSlice.actions;

export default newUserSlice.reducer;
