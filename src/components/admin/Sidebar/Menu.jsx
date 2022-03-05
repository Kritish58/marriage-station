import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import SubMenu from "./SubMenu";

export const Menu = ({
  label,
  submenus,
  active,
  changeActive,
  open,
  setOpen,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ cursor: "pointer" }} className="d-flex flex-column noselect">
      <div
        className="d-flex justify-content-between text-white w-full p-2 admin__menu"
        onClick={() => setShow(!show)}
      >
        {label}
        {show ? <ChevronDownIcon width={16} /> : <ChevronLeftIcon width={16} />}
      </div>
      {show &&
        submenus.map((submenu) => (
          <SubMenu
            key={submenu.label}
            label={submenu.label}
            link={submenu.link}
            active={active}
            changeActive={(value) => changeActive(value)}
          />
        ))}
    </div>
  );
};
