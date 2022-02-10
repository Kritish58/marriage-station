import Constants from "../constants";
import { Dashboard, Error404, Homepage, Landing } from "../pages";
import Search from "../pages/private/users/search/Search";

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
    path: "/search",
    title: "Search",
    element: Search,
    roles: [Constants.roles.NormalUser],
  },
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
  {
    path: "*",
    title: "Page not found",
    element: Error404,
    roles: [],
  },
];
