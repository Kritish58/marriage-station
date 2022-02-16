import { Navigate, Route, Routes } from "react-router-dom";
import {
  BasicInfo,
  FamilyInfo,
  Hobbies,
  LifestyleInfo,
  ReligionInfo,
} from "../pages/users/complete_profile";

export function CompleteProfile({ children }) {
  const profilePic = null;

  if (!profilePic)
    return (
      <Routes>
        <Route path="/basicinfo" element={<BasicInfo />} />
        <Route path="/familyinfo" element={<FamilyInfo />} />
        <Route path="/religioninfo" element={<ReligionInfo />} />
        <Route path="/lifestyleinfo" element={<LifestyleInfo />} />
        <Route path="*" element={<Navigate replace to="/basicinfo" />} />
      </Routes>
    );
  return children;
}
