import { SidebarItem } from "./Item";
import {
  HomeIcon,
  MailIcon,
  SearchIcon,
  UsersIcon,
  CogIcon,
  LoginIcon,
} from "@heroicons/react/outline";
// import {
//   HomeIcon as HomeIconSolid,
//   MailIcon as MailIconSolid,
//   SearchIcon as SearchIconSolid,
//   UsersIcon as UsersIconSolid,
//   CogIcon as CogIconSolid,
//   LoginIcon as LoginIconSolid,
// } from "@heroicons/react/solid";
import "./index.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

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
    route: "/",
  },
  {
    label: "Mailbox",
    icon: MailIcon,
    route: "/",
  },
  {
    label: "Settings",
    icon: CogIcon,
    route: "/",
  },
];

export const Sidebar = ({ user }) => {
  const [active, setActive] = useState("Home");
  const checkActive = (value) => active === value;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  return (
    <div className="p-4 sidebar d-flex flex-column justify-content-between align-tems-center">
      <div className="d-flex flex-column sidebar__icons__box">
        <CircularAvatar image="image" color="color" />
        {/* <h4 className=" d-flex align-self-center">
          {user.firstName} {user.lastName}
        </h4> */}
        {menus.map((menu) => (
          <SidebarItem
            key={menu.label}
            active={checkActive(menu.label)}
            icon={menu.icon}
            label={menu.label}
            onClick={() => {
              setActive(menu.label);
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
