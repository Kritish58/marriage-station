import { useFormik } from "formik";
import { useMemo } from "react";
import { Radio, Select, Submit } from "../../../components";
import Constants from "../../../constants";
import { generateOptions } from "../../../utils";

// GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
const hobbiesOptions = generateOptions(Constants.hobbies);

export const Hobbies = () => {
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      hobbies: "",
      noOfBrothers: "",
      marriedBrother: "None",
      noOfSisters: "",
      marriedSister: "None",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    //   validationSchema: part4Schema,
    onSubmit: () => console.log(formik.values),
  });

  const handleNumbers = (parent, child, value) => {
    if (value === "None") {
      formik.setFieldValue(child, value);
    }
    formik.setFieldValue(parent, value);
  };

  return (
    <div className="main reg2 p-4">
      <h2 style={{ textAlign: "end" }}>Let's know more about you</h2>
      <div className="d-flex flex-row-reverse flex__box"></div>
      <form onSubmit={formik.handleSubmit}>
        {/* HOBBIES SELECT FIELD */}
        <Select
          isMulti={true}
          label="Hobbies"
          name="hobbies"
          options={hobbiesOptions}
          value={formik.values.hobbies}
          onChange={(value) =>
            formik.setFieldValue(
              "hobbies",
              value.map((v) => v.value)
            )
          }
          error={formik.touched.hobbies && formik.errors.hobbies}
        />

        {/* NO OF BROTHERS RADIO FIELD */}
        <Radio
          name="noOfBrothers"
          label="No of brothers"
          values={Constants.noOfChildren}
          value={formik.values.noOfBrothers}
          onChange={(value) =>
            handleNumbers("noOfBrothers", "marriedBrother", value)
          }
          error={formik.touched.noOfBrothers && formik.errors.noOfBrothers}
        />

        {/* NO OF MARRIED BROTHERS RADIO FIELD */}
        {formik.values.noOfBrothers !== "None" &&
          formik.values.noOfBrothers !== "" && (
            <Radio
              name="marriedBrother"
              label="No of married brothers"
              values={Constants.noOfMarriedBrothers}
              value={formik.values.marriedBrother}
              onChange={(value) =>
                formik.setFieldValue("marriedBrother", value)
              }
              error={
                formik.touched.marriedBrother && formik.errors.marriedBrother
              }
            />
          )}

        {/* NO OF SISTERS RADIO FIELD */}
        <Radio
          name="noOfSisters"
          label="No of sisters"
          values={Constants.noOfSisters}
          value={formik.values.noOfSisters}
          onChange={(value) =>
            handleNumbers("noOfSisters", "marriedSister", value)
          }
          error={formik.touched.noOfSisters && formik.errors.noOfSisters}
        />

        {/* NO OF MARRIED SISTERS RADIO FIELD */}
        {formik.values.noOfSisters !== "None" &&
          formik.values.noOfSisters !== "" && (
            <Radio
              name="marriedSister"
              label="No of married sisters"
              values={Constants.noOfMarriedSisters}
              value={formik.values.marriedSister}
              onChange={(value) => formik.setFieldValue("marriedSister", value)}
              error={
                formik.touched.marriedSister && formik.errors.marriedSister
              }
            />
          )}
        <Submit text="Continue" />
      </form>
    </div>
  );
};
