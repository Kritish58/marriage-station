import { Error, Label } from "..";
import { RadioPill } from "./RadioPill";

export const Radio = ({ name, label, value, values, onChange, error }) => {
  return (
    <div className="radioField py-2">
      <Label name={name} label={label} />
      <div className="radios">
        {values.map((option) => (
          <RadioPill
            key={option}
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
