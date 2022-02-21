import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RegisterVerification } from "../pages";

export function MobileVerification() {
  const { user } = useSelector((state) => state.authState);
  let verified = user && user.UserDetail.verified === "true";

  if (!verified)
    return (
      <Routes>
        <Route path="/verifyNumber" element={<RegisterVerification />} />
      </Routes>
    );
}
