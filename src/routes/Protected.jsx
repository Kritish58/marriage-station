import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Constants from "../constants";
import { Error404, ResetPassword } from "../pages";
import { ForgotPasswordPage } from "../pages/users/forgotpassword";
import { LogInPage } from "../pages/users/login";
import { routeConfig } from "../utils";
import { RegistrationRoutes } from "./RegistrationRoutes";

export function AuthProtection({ children }) {
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
        <Route exact path="/a-control" element={<div>Admin</div>} />
        <Route path="/registration/*" element={<RegistrationRoutes />} />
        <Route exact path="/login" element={<LogInPage />} />
        <Route exact path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    );
  return children;
}
