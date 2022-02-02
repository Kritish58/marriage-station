import Constants from "../constants";
import { Dashboard, Homepage, Landing } from "../pages";

export const routeConfig = [
  {
    path: "/",
    title: "Marriage Station",
    element: Landing,
    roles: [],
  },
  {
    path: "/",
    title: "Homepage",
    element: Homepage,
    roles: [Constants.roles.NormalUser],
  },
  {
    path: "/viewProfile/:id",
    title: "View profile",
    element: Homepage,
    roles: [Constants.roles.NormalUser],
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    element: Dashboard,
    roles: [Constants.roles.Admin],
  },
];
