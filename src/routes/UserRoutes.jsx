import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Sidebar } from "../components/Sidebar";
import Constants from "../constants";
import { useEffect } from "react";
import "./main.scss";

export function UserRoutes() {
  const { user } = useSelector((state) => state.authState);
  const routes = useMemo(() => {
    return routeConfig.filter((c) =>
      c.roles.some((idx) => idx === Constants.roles.NormalUser)
    );
  }, []);

  useEffect(() => {}, []);

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

        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </div>
  );
}
