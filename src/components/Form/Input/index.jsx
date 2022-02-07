import "./index.scss";
import { Error, Label } from "..";

export const Input = ({
  className,
  name,
  label,
  style,
  type,
  placeholder,
  value,
  max,
  onChange,
  error,
}) => {
  return (
    <div className={`inputField my-4 ${className}`}>
      {label && <Label label={label} name={name} />}
      <input
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        maxLength={max}
        onChange={(event) => onChange(event.target.value)}
        className="input__field"
        style={style}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};
