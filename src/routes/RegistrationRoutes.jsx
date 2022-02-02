import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Reg2, Reg3, Reg4, Reg5, Reg6 } from "../pages";

export function RegistrationRoutes() {
  const { profile } = useSelector((state) => state.profile);
  if (!profile) return <Navigate replace to="/" />;
  return (
    <Routes>
      <Route exact path="2" element={<Reg2 />} />
      <Route exact path="3" element={<Reg3 />} />
      <Route exact path="4" element={<Reg4 />} />
      <Route exact path="5" element={<Reg5 />} />
      <Route exact path="6" element={<Reg6 />} />
    </Routes>
  );
}
