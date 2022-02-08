import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { Sidebar } from "../../../components/Sidebar";

export const Homepage = () => {
  const { user } = useSelector((state) => state.authState);
  if (!user) return <Navigate replace to="/privacy-policies" />;
  return (
    <div>
      {/* <Sidebar user={user} /> */}
      <h2>Hello, {user.firstName} </h2>
    </div>
  );
};
