export const anyValueSetter = (formik, name, value) => {
  value === "Any"
    ? formik.setFieldValue(name, "")
    : formik.setFieldValue(name, value);
};
