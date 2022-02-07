import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Reg2, Reg3, Reg4, Reg5, Reg6, Retry } from "../pages";

export function RegistrationRoutes() {
  const { profile } = useSelector((state) => state.profile);
  if (!profile) return <Navigate replace to="/" />;
  return (
    <Routes>
      <Route exact path="20" element={<Reg2 />} />
      <Route exact path="40" element={<Reg3 />} />
      <Route exact path="60" element={<Reg4 />} />
      <Route exact path="80" element={<Reg5 />} />
      <Route exact path="90" element={<Reg6 />} />
      <Route exact path="retry" element={<Retry />} />
    </Routes>
  );
}
