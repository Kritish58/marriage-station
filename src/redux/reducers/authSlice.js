import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    authPending: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = payload;
      state.error = null;
    },
    authFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = null;
      state.error = payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = null;
    },
    authFinish: (state) => {
      state.isLoading = false;
    },
  },
});

export const { authPending, authSuccess, authFailure, authFinish, logout } =
  authSlice.actions;

export default authSlice.reducer;
