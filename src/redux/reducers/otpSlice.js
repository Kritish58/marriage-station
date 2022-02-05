import { createSlice } from "@reduxjs/toolkit";

export const otpSlice = createSlice({
  name: "otp",
  initialState: {
    verified: false,
    otp: null,
    isLoading: false,
  },
  reducers: {
    verificationPending: (state) => {
      state.isLoading = true;
    },
    verificationSuccess: (state) => {
      state.otp = null;
      state.verified = true;
      state.isLoading = false;
    },
    verificationFailure: (state) => {
      state.otp = null;
      state.verified = false;
      state.isLoading = false;
    },
    setOTP: (state, { payload }) => {
      state.isLoading = false;
      state.otp = payload;
    },
  },
});

export const {
  verificationPending,
  verificationSuccess,
  verificationFailure,
  setOTP,
} = otpSlice.actions;

export default otpSlice.reducer;
