import { useFormik } from "formik";
import { useMemo } from "react";
import { Radio, Select, Submit } from "../../../components";
import Constants from "../../../constants";
import { generateOptions } from "../../../utils";

export const FamilyInfo = () => {
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      fatherStatus: "",
      motherStatus: "",
      noOfBrothers: "",
      marriedBrother: "None",
      noOfSisters: "",
      marriedSister: "None",
      familyLocation: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    //   validationSchema: part4Schema,
    onSubmit: () => console.log(formik.values),
  });

  // GENERATE OPTIONS FOR SELECT INPUTS
  const fatherStatusOptions = generateOptions(Constants.fatherStatus);
  const motherStatusOptions = generateOptions(Constants.motherStatus);

  const handleNumbers = (parent, child, value) => {
    if (value === "None") {
      formik.setFieldValue(child, value);
    }
    formik.setFieldValue(parent, value);
  };

  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Let's know more about you</h2> */}
      <div className="d-flex align-items-center justify-content-between">
        <h1>Family Information</h1>
        <span
          className="text-primary pointer text-decoration-underline"
          // onClick={() => navigate("/lifestyleinfo")}
        >
          Skip
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {/* FATHER STATUS SELECT INPUT */}
        <Select
          label="Father Status"
          name="fatherStatus"
          options={fatherStatusOptions}
          value={formik.values.fatherStatus}
          onChange={(v) => formik.setFieldValue("fatherStatus", v)}
          error={formik.touched.fatherStatus && formik.errors.fatherStatus}
        />

        {/* MOTHER STATUS SELECT INPUT */}
        <Select
          label="Mother Status"
          name="motherStatus"
          options={motherStatusOptions}
          value={formik.values.motherStatus}
          onChange={(v) => formik.setFieldValue("motherStatus", v)}
          error={formik.touched.motherStatus && formik.errors.motherStatus}
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

        {/* FAMILY LOCATION RADIO FIELD */}
        <Radio
          name="familyLocation"
          label="Family Location"
          values={Constants.familyLocation}
          value={formik.values.familyLocation}
          onChange={(value) => formik.setFieldValue("familyLocation", value)}
          error={formik.touched.familyLocation && formik.errors.familyLocation}
        />

        <div className="d-flex justify-content-center mt-4">
          {/* {isLoading ? <Spinner /> : <Submit text="Continue" />} */}
          <Submit text="Continue" />
        </div>
      </form>
    </div>
  );
};
