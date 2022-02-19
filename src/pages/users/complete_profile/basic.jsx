import { useFormik } from "formik";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { Input, Radio, Select, Submit } from "../../../components";
import Constants from "../../../constants";
import { generateOptions, toaster } from "../../../utils";
import { basicInfoSchema } from "../../../validations/yupSchemas";

// GENERATE OPTIONS FOR HOBBIES
const hobbiesOptions = generateOptions(Constants.hobbies);

// GENERATE OPTIONS FOR WEIGHTS
const weightOptions = generateOptions(Constants.weight);

export const BasicInfo = () => {
  const { user } = useSelector((state) => state.authState);
  const navigate = useNavigate();
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      hobby: "",
      weight: "",
      bodyType: "",
      college: "",
    }),
    []
  );

  const handleSubmit = async (values) => {
    console.log(values); //FIXME:
    try {
      await API.put(
        `${Constants.apiEndpoint.user.updateDetails}/${
          user && user.UserDetail.userDetail_id
        }`,
        values
      );
      navigate("/lifestyleinfo", { replace: true });
    } catch (error) {
      toaster("error", error);
    }
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: basicInfoSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Let's know more about you</h2> */}
      <div className="d-flex align-items-center justify-content-between">
        <h1>Basic Information</h1>
        <span
          className="text-primary pointer text-decoration-underline"
          onClick={() => navigate("/lifestyleinfo", { replace: true })}
        >
          Skip
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {/* HOBBIES SELECT FIELD */}
        <Select
          isMulti={true}
          label="Hobbies"
          name="hobby"
          options={hobbiesOptions}
          value={formik.values.hobby}
          onChange={(value) => formik.setFieldValue("hobby", value.toString())}
          error={formik.touched.hobby && formik.errors.hobby}
        />

        {/* WEIGHT SELECT INPUT */}
        <Select
          label="Weight"
          name="weight"
          options={weightOptions}
          value={formik.values.weight}
          onChange={(value) => formik.setFieldValue("weight", value)}
          error={formik.touched.weight && formik.errors.weight}
        />

        {/* BODY TYPE RADIO FIELD */}
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
          placeholder="Enter college name"
          onChange={(value) => formik.setFieldValue("college", value)}
        />

        <div className="d-flex justify-content-center mt-4">
          {/* {isLoading ? <Spinner /> : <Submit text="Continue" />} */}
          <Submit text="Continue" />
        </div>
      </form>
    </div>
  );
};
