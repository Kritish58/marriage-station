import { useFormik } from "formik";
import { useMemo } from "react";
import { Input, Radio, Select, Submit } from "../../../../components";
import Constants from "../../../../constants";

// GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
const weightOptions = Constants.weight.map((mt) => {
  return { label: mt, value: mt };
});

export const BasicInfo = () => {
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      bodyType: "",
      weight: "",
      college: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    //   validationSchema: part4Schema,
    onSubmit: () => console.log(formik.values),
  });

  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Let's know more about you</h2> */}
      <div className="d-flex flex-row-reverse flex__box"></div>
      <h1>Basic Information</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* WEIGHT SELECT INPUT */}
        <Select
          label="Weight"
          name="weight"
          options={weightOptions}
          value={formik.values.weight}
          onChange={(v) => formik.setFieldValue("weight", v.value)}
          error={formik.touched.weight && formik.errors.weight}
        />

        {/* NO OF BROTHERS RADIO FIELD */}
        <Radio
          name="bodyType"
          label="Body Type"
          values={Constants.bodyType}
          value={formik.values.bodyType}
          onChange={(value) => formik.setFieldValue("bodyType", value)}
          error={formik.touched.bodyType && formik.errors.bodyType}
        />

        <Input
          type="text"
          label="College/Institution"
          name="college"
          value={formik.values.college}
          onChange={(value) => formik.setFieldValue("college", value)}
        />

        <Submit text="Continue" />
      </form>
    </div>
  );
};
