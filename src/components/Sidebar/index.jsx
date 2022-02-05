import { SidebarItem } from "./Item";
import {
  HomeIcon,
  MailIcon,
  SearchIcon,
  UsersIcon,
  CogIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon as HomeIconSolid,
  MailIcon as MailIconSolid,
  SearchIcon as SearchIconSolid,
  UsersIcon as UsersIconSolid,
  CogIcon as CogIconSolid,
  LoginIcon as LoginIconSolid,
} from "@heroicons/react/solid";
import "./index.scss";
import { useState } from "react";

const menus = [
  {
    label: "Home",
    icon: HomeIcon,
  },
  {
    label: "Search",
    icon: SearchIcon,
  },
  {
    label: "Matches",
    icon: UsersIcon,
  },
  {
    label: "Mailbox",
    icon: MailIcon,
  },
  {
    label: "Settings",
    icon: CogIcon,
  },
];

export const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const checkActive = (value) => active === value;
  return (
    <div className="p-4 sidebar d-flex flex-column justify-content-between align-tems-center">
      <div className="d-flex flex-column">
        <CircularAvatar image="image" color="color" />
        {menus.map((menu) => (
          <SidebarItem
            key={menu.label}
            active={checkActive(menu.label)}
            icon={menu.icon}
            label={menu.label}
            onClick={() => setActive(menu.label)}
          />
        ))}
      </div>
      <div>
        <SidebarItem
          highlight
          icon={LoginIcon}
          label="Log Out"
          onClick={() => console.log("Logout")}
        />
      </div>
    </div>
  );
};

const CircularAvatar = () => {
  return (
    <div className="circular__container rounded-circle align-self-center bg-success">
      <img
        className="rounded-circle avatar__image"
        width="100%"
        height="100%"
        src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="profile"
      />
    </div>
  );
};
