import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import authReducer from "./reducers/authSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
    authState: authReducer,
  },
});
