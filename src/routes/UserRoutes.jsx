import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../components";
import { routeConfig } from "../utils";
import "./main.scss";
import { Error404 } from "../pages";
import AdminSidebar from "../components/admin/Sidebar";

export const UserRoutes = () => {
  const { user } = useSelector((state) => state.authState);
  const routes = useMemo(() => {
    return routeConfig.filter((c) =>
      c.roles.some((idx) => idx === user.Roles[0].role)
    );
  }, [user.Roles]);

  return user.Roles[0].role === "user" ? (
    <div className="d-flex user__main">
      <Sidebar />
      <aside style={{ flexGrow: "1" }}>
        <Routes>
          {routes.map((idx) => {
            let Element = idx.element;
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
      </aside>
    </div>
  ) : (
    <div className="d-flex user__main">
      <aside
        className="admin__submenu"
        style={{ height: "100vh", width: "16vw", overflow: "auto" }}
      >
        <AdminSidebar />
      </aside>
      <aside className="flex-grow">
        <Routes>
          {routes.map((idx) => {
            let Element = idx.element;
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
      </aside>
    </div>
  );
};
