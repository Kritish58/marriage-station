import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error404, ResetPassword, VerifyOTP } from "../pages";
import AdminLogInPage from "../pages/admin/auth/Login";
import { ForgotPasswordPage } from "../pages/users/forgotpassword";
import { LogInPage } from "../pages/users/login";
import { routeConfig } from "../utils";
import { RegistrationRoutes } from "./RegistrationRoutes";

export function AuthProtection({ children }) {
  const { isAuthenticated } = useSelector((state) => state.authState);
  const { mobileNumber } = useSelector((state) => state.otpLogin);
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
        <Route exact path="/a-control" element={<AdminLogInPage />} />
        <Route path="/registration/*" element={<RegistrationRoutes />} />
        <Route exact path="/login" element={<LogInPage />} />
        <Route exact path="/register" element={<Navigate replace to="/" />} />
        <Route exact path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        {mobileNumber && (
          <Route exact path="/verifyOTP" element={<VerifyOTP />} />
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    );
  return children;
}
