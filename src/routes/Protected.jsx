import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Constants from "../constants";
import { Error404, ResetPassword } from "../pages";
import { routeConfig } from "../utils";
import { RegistrationRoutes } from "./RegistrationRoutes";

export function AuthProtection({ children }) {
  let token = localStorage.getItem(Constants.keys.resetToken);
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
        {token && (
          <Route
            exact
            path="/reset"
            element={<ResetPassword token={token} />}
          />
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    );
  return children;
}
