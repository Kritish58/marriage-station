import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import authReducer from "./reducers/authSlice";
// import otpReducer from "./reducers/otpSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
    authState: authReducer,
    // otp: otpReducer,
  },
});
