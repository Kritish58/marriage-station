import { ErrorMessage, Field } from "formik";
import { ShowError } from "./ShowError";

export const SelectField = ({ name, options }) => {
  return (
    <div className="paddt10 h50">
      <div className="regis-col1 paddt7">Religion</div>
      <div className="regis-col2 regis-select">
        <Field as="select" name={name}>
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMessage name={name} component={ShowError} />
    </div>
  );
};
