import { useFormik } from "formik";
import { useMemo } from "react";
import { Radio, Select, Submit } from "../../../components";
import "./styles/RegCont.scss";
import Constants from "../../../constants";
import { part4Schema } from "../../../validations/yupSchemas";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../../../redux/reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Reg4 = () => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      maritalStatus: "",
      noOfChildren: "",
      height: "",
      familyStatus: "",
      familyType: "",
      familyValues: "",
      disability: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: part4Schema,
    onSubmit: () => {
      dispatch(setProfile({ ...profile, ...formik.values }));
      navigate("/registration/80");
    },
  });
  const heightOptions = Constants.height.map((c) => {
    return { label: c, value: c };
  });
  return (
    <div className="main reg2 p-4">
      <h2 style={{ textAlign: "end" }}>60% completed</h2>
      <div className="d-flex flex-row-reverse flex__box">
        <form
          onSubmit={formik.handleSubmit}
          className="m-4 p-4 container-lg rounded-3 flex__form"
        >
          {/* MARRITAL STATUS RADIO FIELD */}
          <Radio
            name="maritalStatus"
            label="Marital Status"
            values={Constants.maritalStatus}
            value={formik.values.maritalStatus}
            onChange={(value) => formik.setFieldValue("maritalStatus", value)}
            error={formik.touched.maritalStatus && formik.errors.maritalStatus}
          />

          {/* NO OF CHILDREN RADIO FIELD */}
          <Radio
            name="noOfChildren"
            label="No of children"
            values={Constants.noOfChildren}
            value={formik.values.noOfChildren}
            onChange={(value) => formik.setFieldValue("noOfChildren", value)}
            error={formik.touched.noOfChildren && formik.errors.noOfChildren}
          />

          {/* HEIGHT SELECTOR */}
          {/* <InputLabel name="religion" label="Religion" className="float" /> */}
          <Select
            name="height"
            label="Height"
            options={heightOptions}
            value={formik.values.height}
            onChange={(value) => formik.setFieldValue("height", value.value)}
            error={formik.touched.height && formik.errors.height}
          />

          {/* FAMILY STATUS RADIO FIELD */}
          <Radio
            name="familyStatus"
            label="Family Status"
            values={Constants.familyStatus}
            value={formik.values.familyStatus}
            onChange={(value) => formik.setFieldValue("familyStatus", value)}
            error={formik.touched.familyStatus && formik.errors.familyStatus}
          />

          {/* FAMILY TYPE RADIO FIELD */}
          <Radio
            name="familyType"
            label="Family Type"
            values={Constants.familyType}
            value={formik.values.familyType}
            onChange={(value) => formik.setFieldValue("familyType", value)}
            error={formik.touched.familyType && formik.errors.familyType}
          />

          {/* FAMILY VALUES RADIO FIELD */}
          <Radio
            name="familyValues"
            label="Family Values"
            values={Constants.familyValues}
            value={formik.values.familyValues}
            onChange={(value) => formik.setFieldValue("familyValues", value)}
            error={formik.touched.familyValues && formik.errors.familyValues}
          />

          {/* DISABILITY RADIO FIELD */}
          <Radio
            name="disability"
            label="Any disability"
            values={Constants.disability}
            value={formik.values.disability}
            onChange={(value) => formik.setFieldValue("disability", value)}
            error={formik.touched.disability && formik.errors.disability}
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
