import { SidebarItem } from "./Item";
import {
  HomeIcon,
  MailIcon,
  SearchIcon,
  UsersIcon,
  CogIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import "./index.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers";
import { useLocation, useNavigate } from "react-router-dom";

const menus = [
  {
    label: "Home",
    icon: HomeIcon,
    route: "/",
  },
  {
    label: "Search",
    icon: SearchIcon,
    route: "/search",
  },
  {
    label: "Matches",
    icon: UsersIcon,
    route: "/matches",
  },
  {
    label: "Mailbox",
    icon: MailIcon,
    route: "/mailbox",
  },
  {
    label: "Settings",
    icon: CogIcon,
    route: "/settings",
  },
];

export const Sidebar = ({ user }) => {
  const [active, setActive] = useState("");
  const checkActive = (value) => active === value;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  useEffect(() => {
    menus.map(
      (menu) =>
        location.pathname.startsWith(menu.route) && setActive(menu.label)
    );
  }, [location.pathname]);
  return (
    <div className="sidebar d-flex flex-column justify-content-between align-tems-center">
      <div className="d-flex flex-column sidebar__icons__box">
        <CircularAvatar image="image" color="color" />
        {menus.map((menu) => (
          <SidebarItem
            key={menu.label}
            active={checkActive(menu.label)}
            icon={menu.icon}
            label={menu.label}
            onClick={() => {
              navigate(menu.route);
            }}
          />
        ))}
      </div>
      <div className="logout">
        <SidebarItem
          highlight
          icon={LoginIcon}
          label="Log Out"
          onClick={handleLogout}
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
