import "./index.scss";
import { Error, Label } from "..";
import { useEffect, useRef } from "react";

export const Input = ({
  focus,
  name,
  label,
  type,
  placeholder,
  value,
  max,
  onChange,
  error,
}) => {
  const ref = useRef();
  useEffect(() => {
    focus && ref.current.focus();
  }, [focus]);
  return (
    <div className="inputField my-4">
      <Label label={label} name={name} />
      <input
        ref={ref}
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        maxLength={max}
        onChange={(event) => onChange(event.target.value)}
        className="input__field"
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};
