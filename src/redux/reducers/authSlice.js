import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
  },
  reducers: {
    authPending: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = payload;
    },
    authFailure: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
});

export const { authPending, authSuccess, authFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
