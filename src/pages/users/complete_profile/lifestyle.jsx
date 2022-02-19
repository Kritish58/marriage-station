import { useFormik } from "formik";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { Radio, Submit } from "../../../components";
import Constants from "../../../constants";
import { toaster } from "../../../utils";

export const LifestyleInfo = () => {
  const { user } = useSelector((state) => state.authState);
  const navigate = useNavigate();
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      diet: "",
      drink: "",
      smoke: "",
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
      navigate("/religioninfo", { replace: true });
    } catch (error) {
      toaster("error", error);
    }
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    //   validationSchema: part4Schema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Let's know more about you</h2> */}
      <div className="d-flex align-items-center justify-content-between">
        <h1>Lifestyle Information</h1>
        <span
          className="text-primary pointer text-decoration-underline"
          onClick={() => navigate("/religioninfo", { replace: true })}
        >
          Skip
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {/* EATING HABIT RADIO FIELD */}
        <Radio
          name="diet"
          label="Eating Habit"
          values={Constants.diet}
          value={formik.values.diet}
          onChange={(value) => formik.setFieldValue("diet", value)}
          error={formik.touched.diet && formik.errors.diet}
        />

        {/* DRINKING HABIT RADIO FIELD */}
        <Radio
          name="drink"
          label="Drinking Habit"
          values={Constants.drink}
          value={formik.values.drink}
          onChange={(value) => formik.setFieldValue("drink", value)}
          error={formik.touched.drink && formik.errors.drink}
        />

        {/* SMOKING HABIT RADIO FIELD */}
        <Radio
          name="smoke"
          label="Smoking Habit"
          values={Constants.smoke}
          value={formik.values.smoke}
          onChange={(value) => formik.setFieldValue("smoke", value)}
          error={formik.touched.smoke && formik.errors.smoke}
        />

        <div className="d-flex justify-content-center mt-4">
          {/* {isLoading ? <Spinner /> : <Submit text="Continue" />} */}
          <Submit text="Continue" />
        </div>
      </form>
    </div>
  );
};
