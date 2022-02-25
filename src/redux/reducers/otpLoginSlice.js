import { createSlice } from "@reduxjs/toolkit";

export const otpLoginSlice = createSlice({
  name: "OTPLogin",
  initialState: {
    isNew: false,
  },
  reducers: {
    setMobileNumber: (state, { payload }) => {
      console.log(payload);
      state.mobileNumber = payload;
    },
    removeMobileNumber: (state) => {
      state.mobileNumber = "";
    },
  },
});

export const { setMobileNumber, removeMobileNumber } = otpLoginSlice.actions;

export default otpLoginSlice.reducer;
