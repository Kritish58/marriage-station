import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import authReducer from "./reducers/authSlice";
import newUserSlice from "./reducers/newUserSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
    authState: authReducer,
    newUser: newUserSlice,
  },
});
