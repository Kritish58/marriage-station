import SelectField from "react-select";
import { Error, Label } from "..";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted #23948844",
    color: state.isSelected ? "white" : "",
    background: state.isSelected ? "#239488" : "",
  }),
  control: () => ({
    width: "100%",
    padding: ".3rem .4rem !important",
    border: "2px solid white",
    borderRadius: "8px",
    display: "flex",
    background: "white",
    boxShadow: "0 0 40px rgba(0,0,0, .1),0 4px 8px -4px rgba(0,0,0, .2)",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
export const Select = ({ name, label, value, options, onChange, error }) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <div className="select__with__search my-2">
      <Label name={name} label={label} />
      <SelectField
        styles={customStyles}
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
        className="shadow-sm"
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};