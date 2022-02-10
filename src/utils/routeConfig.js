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
  // {
  //   path: "/search",
  //   title: "Search",
  //   element: Search,
  //   roles: [Constants.roles.NormalUser],
  // },
  {
    path: "/",
    title: "Dashboard",
    element: Dashboard,
    roles: [Constants.roles.Admin],
  },
  {
    path: "/viewProfile/:id",
    title: "View profile",
    element: Homepage,
    roles: [Constants.roles.NormalUser],
  },
];
