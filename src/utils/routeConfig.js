import Constants from "../constants";
import { Homepage, Landing, Search, SearchPage } from "../pages";
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
    title: "Search Page",
    element: SearchPage,
    roles: [Constants.roles.NormalUser],
  },
  {
    path: "/search/account",
    title: "List User",
    element: Search,
    roles: [Constants.roles.NormalUser],
  },
  {
    path: "/viewProfile/:id",
    title: "View profile",
    element: Homepage,
    roles: [Constants.roles.NormalUser],
  },
];
