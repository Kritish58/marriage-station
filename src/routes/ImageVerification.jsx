import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import API from "../api";
import Constants from "../constants";
import { ImageUpload } from "../pages";
import { toaster } from "../utils";

export function ImageVerification({ children }) {
  const [profilePic, setProfilePic] = useState(false);
  const { user } = useSelector((state) => state.authState);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        let res = await API.get(Constants.apiEndpoint.photo.uploadProfilePic);
        let found = res.data
          ?.map((d) => d.userDetailId === user.UserDetail.userDetail_id)
          .includes(true);
        setProfilePic(found);
      } catch (error) {
        toaster("error", error);
      }
    };
    fetchPhoto();
  }, [profilePic, user]);

  if (!profilePic)
    return (
      <Routes>
        <Route
          path="/uploadPic"
          element={
            <ImageUpload setProfilePic={(value) => setProfilePic(value)} />
          }
        />
        <Route path="*" element={<Navigate replace to="/uploadPic" />} />
      </Routes>
    );
  return children;
}
