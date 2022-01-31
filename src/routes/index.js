import React from "react";
import roles from "./roles";

const routeConfig = [
  {
    path: "/",
    title: "Home",
    component: HomePage,
    roles: [],
  },
  {
    path: "/home",
    title: "Home",
    component: HomePage,
    roles: [roles.NormalUser],
  },
];

export default routeConfig;
