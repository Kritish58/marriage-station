import Constants from "../constants";
import { Dashboard, Homepage, Landing } from "../pages";
import Search from "../pages/users/auth/search/Search";
import {
  BasicInfo,
  FamilyInfo,
  LifestyleInfo,
  ReligionInfo,
} from "../pages/users/complete_profile";

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
    path: "/basicinfo",
    title: "Basic Information",
    element: BasicInfo,
    roles: [Constants.roles.NormalUser],
  },
  {
    path: "/lifestyleinfo",
    title: "Lifestyle Information",
    element: LifestyleInfo,
    roles: [Constants.roles.NormalUser],
  },
  {
    path: "/religioninfo",
    title: "Religion Information",
    element: ReligionInfo,
    roles: [Constants.roles.NormalUser],
  },
  {
    path: "/familyinfo",
    title: "Family Information",
    element: FamilyInfo,
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
];
