import { useFormik } from "formik";
import { useMemo } from "react";
import { Radio, Submit } from "../../../components";
import Constants from "../../../constants";

export const LifestyleInfo = () => {
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      eatingHabit: "",
      drinkingHabit: "",
      smokingHabit: "",
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
      <h1>Lifestyle Information</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* EATING HABIT RADIO FIELD */}
        <Radio
          name="eatingHabit"
          label="Eating Habit"
          values={Constants.eatingHabit}
          value={formik.values.eatingHabit}
          onChange={(value) => formik.setFieldValue("eatingHabit", value)}
          error={formik.touched.eatingHabit && formik.errors.eatingHabit}
        />

        {/* DRINKING HABIT RADIO FIELD */}
        <Radio
          name="drinkingHabit"
          label="Drinking Habit"
          values={Constants.drinkingHabit}
          value={formik.values.drinkingHabit}
          onChange={(value) => formik.setFieldValue("drinkingHabit", value)}
          error={formik.touched.drinkingHabit && formik.errors.drinkingHabit}
        />

        {/* SMOKING HABIT RADIO FIELD */}
        <Radio
          name="smokingHabit"
          label="Smoking Habit"
          values={Constants.smokingHabit}
          value={formik.values.smokingHabit}
          onChange={(value) => formik.setFieldValue("smokingHabit", value)}
          error={formik.touched.smokingHabit && formik.errors.smokingHabit}
        />

        <Submit text="Continue" />
      </form>
    </div>
  );
};
