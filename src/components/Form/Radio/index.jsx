import { Error, Label } from "..";
import { RadioPill } from "./RadioPill";

export const Radio = ({
  className,
  name,
  label,
  value,
  values,
  onChange,
  error,
}) => {
  return (
    <div className={`input radioField py-2 ${className}`}>
      <Label name={name} label={label} />
      <div className="radios">
        {values.map((option) => (
          <RadioPill
            key={option}
            name={name}
            label={label}
            value={value}
            option={option}
            onChange={onChange}
          />
        ))}
      </div>
      {error && <Error>{error}</Error>}
    </div>
  );
};
