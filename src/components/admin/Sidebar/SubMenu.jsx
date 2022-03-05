import { Link } from "react-router-dom";

const SubMenu = ({ label, link, active, changeActive }) => {
  return (
    <Link
      className={`text-decoration-none p-2 admin__submenu d-flex align-items-center gap-2 ${
        active === label ? "text-white" : "text-secondary"
      }`}
      to={link}
      onClick={() => changeActive(label)}
    >
      <CircleIcon active={active === label} />
      <span>{label}</span>
    </Link>
  );
};

const CircleIcon = ({ active }) => (
  <div
    style={{
      width: 8,
      height: 8,
      borderRadius: "50%",
    }}
    className={active ? "bg-white" : "bg-secondary"}
  ></div>
);

export default SubMenu;
