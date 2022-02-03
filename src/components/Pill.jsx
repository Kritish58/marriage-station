export const Pill = ({ text, active, className }) => {
  return (
    <span
      className={`${className} rounded-pill shadow-sm px-4 py-2 cursor-pointer`}
      style={{
        cursor: "pointer",
        color: active ? "white" : "black",
        background: active ? "#239488" : "white",
      }}
    >
      {text}
    </span>
  );
};
