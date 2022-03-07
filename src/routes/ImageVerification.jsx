import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import API from "../api";
import { Spinner } from "../components";
import Constants from "../constants";
import { ImageUpload } from "../pages";
import { toaster } from "../utils";

export function ImageVerification({ children }) {
  const { user } = useSelector((state) => state.authState);
  const [profilePic, setProfilePic] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    fetchPhoto();
    setLoading(false);
  }, [profilePic, user]);

  if (loading) return <Spinner />;
  if (!profilePic)
    return (
      <Routes>
        <Route
          path="/uploadPic"
          element={
            <ImageUpload setProfilePic={(value) => setProfilePic(value)} />
          }
        />
        {profilePic && (
          <Route path="*" element={<Navigate replace to="/uploadPic" />} />
        )}
      </Routes>
    );
  return children;
}
