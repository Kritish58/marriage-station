import { Route, Routes } from "react-router-dom";
import { ImageUpload } from "../pages";

export function ImageVerification() {
  return (
    <Routes>
      <Route path="/uploadPic" element={<ImageUpload />} />
    </Routes>
  );
}
