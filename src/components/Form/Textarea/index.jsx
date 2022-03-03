import { Error, Label } from "..";
import "./index.scss";

export const Textarea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="input inputField my-4">
      <Label label={label} name={name} />
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="input__field textarea"
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};
