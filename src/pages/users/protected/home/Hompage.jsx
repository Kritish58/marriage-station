import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./styles.scss";

export default function Homepage() {
  const { user } = useSelector((state) => state.authState);
  if (!user) return <Navigate replace to="/privacy-policies" />;
  return (
    <div className="user__pages">
      <h2 className="user__pages__title">
        Hello, {user.firstName} -
        {user.UserDetail.verified === "verified" ? " Verified" : " Unverified"}
      </h2>
    </div>
  );
}
