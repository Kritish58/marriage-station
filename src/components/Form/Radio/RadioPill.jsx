export const RadioPill = ({ name, option, value, onChange }) => {
  return (
    <label
      htmlFor={`${option}-${name}`}
      className={`m-2 rounded-pill shadow-sm px-4 py-2 cursor-pointer`}
      style={{
        cursor: "pointer",
        color: option === value ? "white" : "black",
        background: option === value ? "#239488" : "white",
      }}
    >
      <input
        name={name}
        className="d-none"
        type="radio"
        id={`${option}-${name}`}
        checked={value === option}
        onChange={() => onChange(option)}
      />
      {option}
    </label>
  );
};
