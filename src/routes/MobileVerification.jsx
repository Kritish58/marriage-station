import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterVerification } from "../pages/private/users/verify";

export function MobileVerification({ children }) {
  let verified = true;

  if (!verified)
    return (
      <Routes>
        <Route path="/verifyNumber" element={<RegisterVerification />} />
        <Route path="*" element={<Navigate replace to="/verifyNumber" />} />
      </Routes>
    );
  return children;
}
