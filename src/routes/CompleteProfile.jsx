import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterVerification } from "../pages";
import {
  BasicInfo,
  FamilyInfo,
  LifestyleInfo,
  ReligionInfo,
} from "../pages/users/complete_profile";

export function CompleteProfile({ children }) {
  const profilePic = null;

  if (!profilePic)
    return (
      <Routes>
        <Route path="/verifyNumber" element={<RegisterVerification />} />
        <Route path="/basicinfo" element={<BasicInfo />} />
        <Route path="/familyinfo" element={<FamilyInfo />} />
        <Route path="/religioninfo" element={<ReligionInfo />} />
        <Route path="/lifestyleinfo" element={<LifestyleInfo />} />
        <Route path="*" element={<Navigate replace to="/verifyNumber" />} />
      </Routes>
    );
  return children;
}