import React, { useState } from "react";
import { Menu } from "./Menu";
import "./style.scss";

const AdminSidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState("Dashboard");
  return (
    <aside className="admin">
      {menus.map((menu) => (
        <Menu
          key={menu.label}
          label={menu.label}
          submenus={menu.submenus}
          active={active}
          open={open}
          setOpen={(value) => setOpen(value)}
          changeActive={(value) => setActive(value)}
        />
      ))}
    </aside>
  );
};

const menus = [
  {
    label: "Dashboard",
    submenus: [
      {
        label: "Dashboard",
        link: "/",
      },
    ],
  },
  {
    label: "Add details",
    submenus: [
      {
        label: "Add education",
        link: "/education",
      },
      {
        label: "Add caste",
        link: "/caste",
      },
      {
        label: "Add religion",
        link: "/religion",
      },
      {
        label: "Add country",
        link: "/country",
      },
    ],
  },
];

export default AdminSidebar;
