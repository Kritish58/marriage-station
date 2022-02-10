import { Navigate, Route, Routes } from "react-router-dom";
import { ImageUpload } from "../pages/private/users/verify";

export function ImageVerification({ children }) {
  const profilePic = "null";

  if (!profilePic)
    return (
      <Routes>
        <Route path="/uploadPic" element={<ImageUpload />} />
        <Route path="*" element={<Navigate replace to="/uploadPic" />} />
      </Routes>
    );
  return children;
}
