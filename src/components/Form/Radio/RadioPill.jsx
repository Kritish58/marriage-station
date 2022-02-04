export const RadioPill = ({ option, value, onChange }) => {
  return (
    <label
      key={option}
      htmlFor={option}
      className={`m-2 rounded-pill shadow-sm px-4 py-2 cursor-pointer`}
      style={{
        cursor: "pointer",
        color: option === value ? "white" : "black",
        background: option === value ? "#239488" : "white",
      }}
    >
      <input
        className="d-none"
        type="radio"
        id={option}
        value={option}
        checked={value === option}
        onChange={() => onChange(option)}
      />
      {option}
    </label>
  );
};
