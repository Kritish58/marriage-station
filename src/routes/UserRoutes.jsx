import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../components";
import Constants from "../constants";
import { routeConfig } from "../utils";
import "./main.scss";
import { Error404 } from "../pages";

export const UserRoutes = () => {
  const { user } = useSelector((state) => state.authState);
  const routes = useMemo(() => {
    return routeConfig.filter((c) =>
      c.roles.some((idx) => idx === Constants.roles.NormalUser)
    );
  }, []);

  return (
    <div className="d-flex user__main">
      <Sidebar user={user} />
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

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};