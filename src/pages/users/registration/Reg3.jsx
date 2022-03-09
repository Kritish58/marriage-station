import { useFormik } from "formik";
import { useMemo } from "react";
import { Form } from "react-bootstrap";
import { Error, Input, Radio, Select, Submit } from "../../../components";
import "./styles/RegCont.scss";
import Constants from "../../../constants";
import { part3Schema } from "../../../validations/yupSchemas";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../../../redux/reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Reg3 = () => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      caste: "",
      marryAnotherCommunity: false,
      subcaste: "",
      gothra: "",
      manglik: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: part3Schema,
    onSubmit: () => {
      dispatch(setProfile({ ...profile, ...formik.values }));
      navigate("/registration/60");
    },
  });
  const casteOptions = Constants.caste.map((c) => {
    return { label: c, value: c };
  });
  return (
    <div className="main reg2 p-4">
      <h2 style={{ textAlign: "end" }}>40% completed</h2>
      <div className="d-flex flex-row-reverse flex__box">
        <form
          onSubmit={formik.handleSubmit}
          className="m-4 p-4 container-lg rounded-3 flex__form"
        >
          {/* CASTE SELECTOR */}
          <Select
            padding={1}
            name="caste"
            label="Caste"
            options={casteOptions}
            value={formik.values.caste}
            onChange={(value) => formik.setFieldValue("caste", value)}
            error={formik.touched.caste && formik.errors.caste}
          />

          {/* MARRY ANOTHER COMMUNITY CHECKBOX */}
          <div className="singleCheckbox m-3">
            <Form.Check
              type="checkbox"
              label="Willing to marry from another communities too"
              value={formik.values.marryAnotherCommunity}
              onChange={(event) =>
                formik.setFieldValue(
                  "marryAnotherCommunity",
                  event.target.checked
                )
              }
            />
            {formik.touched.marryAnotherCommunity &&
              formik.errors.marryAnotherCommunity && (
                <Error className="d-inline mx-4">
                  {formik.errors.marryAnotherCommunity}
                </Error>
              )}
          </div>

          {/* SUBCASTE FIELD */}
          <Input
            type="subcaste"
            name="subcaste"
            label="Sub-caste - (Optional)"
            placeholder="Enter subcaste"
            value={formik.values.subcaste}
            onChange={(value) => formik.setFieldValue("subcaste", value)}
            error={formik.touched.subcaste && formik.errors.subcaste}
          />

          {/* GOTHRA FIELD */}
          <Input
            type="gothra"
            name="gothra"
            label="Gothra - (Optional)"
            placeholder="Enter gothra"
            value={formik.values.gothra}
            onChange={(value) => formik.setFieldValue("gothra", value)}
            error={formik.touched.gothra && formik.errors.gothra}
          />

          {/* MANGLIK RADIO FIELD */}
          <Radio
            name="manglik"
            label="Manglik"
            values={Constants.manglik}
            value={formik.values.manglik}
            onChange={(value) => formik.setFieldValue("manglik", value)}
            error={formik.touched.manglik && formik.errors.manglik}
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
