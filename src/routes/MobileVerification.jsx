import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterVerification } from "../pages";

export function MobileVerification({ children }) {
  const { user } = useSelector((state) => state.authState);
  let verified = user && user.UserDetail.verified === "true";

  if (!verified)
    return (
      <Routes>
        <Route path="/verifyNumber" element={<RegisterVerification />} />
        <Route path="*" element={<Navigate replace to="/verifyNumber" />} />
      </Routes>
    );
  return children;
}
