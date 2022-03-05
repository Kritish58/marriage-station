import Constants from "../constants";
import { Landing } from "../pages";
import Homepage from "../pages/users/protected/home/Hompage";
import SearchPage from "../pages/users/protected/search/SearchPage";
import SearchResults from "../pages/users/protected/search/SearchResults";
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
    element: SearchResults,
    roles: [Constants.roles.NormalUser],
  },
];
