import { createSlice } from "@reduxjs/toolkit";
import Constants from "../../constants";

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
      state.user = payload.user;
      localStorage.setItem(Constants.keys.session, JSON.stringify(payload));
    },
    authFailure: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem(Constants.keys.session);
    },
    logout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem(Constants.keys.session);
    },
  },
});

export const { authPending, authSuccess, authFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
