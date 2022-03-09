import { useFormik } from "formik";
import { useMemo } from "react";
import { Input, Select, Submit } from "../../../components";
import "./styles/RegCont.scss";
import Constants from "../../../constants";
import { part5Schema } from "../../../validations/yupSchemas";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../../../redux/reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Reg5 = () => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      education: "",
      occupation: "",
      annualIncome: "",
      workLocation: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: part5Schema,
    onSubmit: () => {
      dispatch(setProfile({ ...profile, ...formik.values }));
      navigate("/registration/90");
    },
  });
  const educationOptions = Constants.education.map((e) => {
    return { label: e, value: e };
  });
  const incomeOptions = Constants.income.map((i) => {
    return { label: i, value: i };
  });
  return (
    <div className="main reg2 p-4">
      <h2 style={{ textAlign: "end" }}>80% completed</h2>
      <div className="d-flex flex-row-reverse flex__box">
        <form
          onSubmit={formik.handleSubmit}
          className="m-4 p-4 container-lg rounded-3 flex__form"
        >
          {/* HIGHEST EDUCATION SELECTOR */}
          <Select
            padding={1}
            name="education"
            label="Highest Education"
            options={educationOptions}
            value={formik.values.education}
            onChange={(value) => formik.setFieldValue("education", value)}
            error={formik.touched.education && formik.errors.education}
          />

          {/* OCCUPATION INPUT */}
          <Input
            type="text"
            name="occupation"
            label="Occupation"
            placeholder="Enter your occupation field"
            value={formik.values.occupation}
            onChange={(value) => formik.setFieldValue("occupation", value)}
            error={formik.touched.occupation && formik.errors.occupation}
          />

          {/* ANNUAL INCOME SELECTOR */}
          {/* <InputLabel name="religion" label="Religion" className="float" /> */}
          <Select
            padding={1}
            name="annualIncome"
            label="Annual Income"
            options={incomeOptions}
            value={formik.values.annualIncome}
            onChange={(value) => formik.setFieldValue("annualIncome", value)}
            error={formik.touched.annualIncome && formik.errors.annualIncome}
          />

          {/* WORK LOCATION INPUT */}
          <Input
            type="text"
            name="workLocation"
            label="Work Location"
            placeholder="Enter your work location"
            value={formik.values.workLocation}
            onChange={(value) => formik.setFieldValue("workLocation", value)}
            error={formik.touched.workLocation && formik.errors.workLocation}
          />

          <div className="d-flex justify-content-center mt-4">
            <Submit text="Continue" />
          </div>
        </form>
        <div className="adbox flex-grow-1 bg-success">ADVERTISEMENT</div>
      </div>
    </div>
  );
};
