import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ResetPassword } from "../pages/public/verification";
import { RegistrationRoutes } from "./RegistrationRoutes";
import { routeConfig } from "./routeConfig";

export function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useSelector((state) => state.authState);
  const routes = useMemo(() => {
    return routeConfig.filter((c) => c.roles.length === 0);
  }, []);
  if (!isAuthenticated)
    return (
      <Routes>
        {routes.map((idx) => {
          const Element = idx.element;
          return (
            <Route
              path={idx.path}
              element={<Element />}
              title={idx.title}
              key={`page-${idx.path}`}
            />
          );
        })}
        <Route exact path="/reset" element={<ResetPassword />} />
        <Route exact path="/a-control" element={<div>Admin</div>} />
        <Route path="/registration/*" element={<RegistrationRoutes />} />
        {/*TODO: ERROR 404 PAGE */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  return children;
}
