import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import authReducer from "./reducers/authSlice";
import newUserSlice from "./reducers/newUserSlice";
import otpLoginSlice from "./reducers/otpLoginSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
    authState: authReducer,
    newUser: newUserSlice,
    otpLogin: otpLoginSlice,
  },
});
