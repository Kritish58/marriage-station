import { Navigate, Route, Routes } from "react-router-dom";
import { ResetPassword } from "../pages/ResetPassword";

export function RegistrationRoutes() {
  const token = localStorage.getItem("_t");
  if (!token) return <Navigate replace to="/" />;
  return (
    <Routes>
      <Route exact path="password" element={<ResetPassword />} />
    </Routes>
  );
}
