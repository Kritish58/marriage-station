import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    authPending: (state) => {
      state.isLoading = true;
    },
    checkAuth: (state) => {
      let _token = localStorage.getItem("_t");
      if (_token) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
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

export const {
  authPending,
  checkAuth,
  authSuccess,
  authFailure,
  authFinish,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
