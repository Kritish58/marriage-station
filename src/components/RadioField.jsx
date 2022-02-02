import { ErrorMessage, Field } from "formik";
import { ShowError } from "./ShowError";

export const RadioField = ({
  name = "dosh",
  options = ["No", "Yes", "Don't know"],
}) => {
  return (
    <div className="regis-col2 regis-radio">
      <Field name={name}>
        {({ field }) => {
          return options.map((opt) => (
            <>
              <label
                htmlFor={opt}
                className={field.value === opt ? "checked" : ""}
              >
                <input
                  {...field}
                  type="radio"
                  id={opt}
                  value={opt}
                  checked={field.value === opt}
                />
                {opt}
              </label>
            </>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={ShowError} />
    </div>
  );
};
