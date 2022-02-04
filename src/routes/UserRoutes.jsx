import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export function UserRoutes() {
  const { user } = useSelector((state) => state.authState);
  const routes = useMemo(() => {
    return routeConfig.filter((c) => c.roles.some((idx) => idx === user.role));
  }, [user.role]);
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
      <Route path="*" element={<h1>Not available</h1>} />
    </Routes>
  );
}
