import { useState } from "react";
import SelectField from "react-select";
import { Input, Error, Label } from "..";

export const Select = ({
  placeholder,
  className,
  padding,
  name,
  label,
  value,
  isMulti,
  options,
  onChange,
  error,
}) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted #23948844",
      color: state.isSelected ? "white" : "",
      background: state.isSelected ? "#239488" : "",
    }),
    control: () => ({
      width: "100%",
      padding: `${padding * 0.3}rem ${padding * 0.4}rem !important`,
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

  const [others, setOthers] = useState(false);
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  const handleChange = (value) => {
    if (value.value === "Others") {
      setOthers(!others);
      if (isMulti) {
        onChange(value.map((v) => ""));
      } else {
        onChange("");
      }
    } else {
      if (others) {
        setOthers(!others);
      }
      if (isMulti) {
        onChange(value.map((v) => v.value));
      } else {
        onChange(value.value === "Any" ? "" : value.value);
      }
    }
    // ? setOthers(!others)
    // : isMulti
  };
  return (
    <div className={`input select__with__search my-2 ${className}`}>
      {label && <Label name={name} label={label} />}
      <SelectField
        placeholder={placeholder}
        isMulti={isMulti}
        styles={customStyles}
        value={defaultValue(options, value)}
        onChange={handleChange}
        options={options}
        className="shadow-sm"
      />
      {others && (
        <Input
          className={`my-2 ${className}`}
          type="text"
          name={name}
          placeholder={`Enter ${label}`}
          onChange={(value) => onChange(value)}
        />
      )}
      {error && <Error>{error}</Error>}
    </div>
  );
};
