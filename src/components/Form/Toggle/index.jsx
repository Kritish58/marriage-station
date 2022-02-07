import React, { useState } from "react";
import "./index.scss";

export const Toggle = ({ left, right, value, onClick }) => {
  const [active, setActive] = useState(value);
  const handleClick = () => {
    setActive(!active);
    onClick();
  };
  return (
    <div className="d-flex justify-content-center toggle">
      <div className="d-flex bg-secondary rounded-3 togglebar user-select-none">
        <div
          className={`${
            active && "active"
          } p-2  rounded-start user-select-none`}
          onClick={handleClick}
        >
          {left}
        </div>
        <div
          className={`${!active && "active"} p-2  rounded-end user-select-none`}
          onClick={handleClick}
        >
          {right}
        </div>
      </div>
    </div>
  );
};
