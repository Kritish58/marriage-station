import { Navigate, Route, Routes } from "react-router-dom";
import Constants from "../constants";
import { ResetPassword } from "../pages/ResetPassword";

export function RegistrationRoutes() {
  const token = localStorage.getItem(Constants.keys.session);
  if (!token) return <Navigate replace to="/" />;
  return (
    <Routes>
      <Route exact path="password" element={<ResetPassword />} />
    </Routes>
  );
}
