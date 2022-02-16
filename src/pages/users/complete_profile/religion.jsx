import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Submit } from "../../../components";
import Constants from "../../../constants";
import { generateOptions } from "../../../utils";

export const ReligionInfo = () => {
  const navigate = useNavigate();
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      star: "",
      horoscope: "",
      tobHH: "",
      tobMM: "",
      tobAoP: "",
      placeOfBirth: "",
      state: "",
      city: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    //   validationSchema: part4Schema,
    onSubmit: () => navigate("/familyinfo", { replace: true }),
  });

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [districtOptions, setDistrictOptions] = useState([]);
  const [muniOptions, setMuniOptions] = useState([]);

  // GENERATE OPTIONS FOR SELECT INPUTS
  const starOptions = generateOptions(Constants.star);
  const raasiOptions = generateOptions(Constants.raasi);
  const provinceOptions = generateOptions(Constants.provinces);

  useEffect(() => {
    if (province !== "") {
      setDistrictOptions(generateOptions(Object.keys(Constants[province])));
    }
    if (district !== "") {
      setMuniOptions(generateOptions(Constants[province][district]));
    }
  }, [district, province]);

  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Let's know more about you</h2> */}
      <div className="d-flex align-items-center justify-content-between">
        <h1>Religion Information</h1>
        <span
          className="text-primary pointer text-decoration-underline"
          onClick={() => navigate("/familyinfo", { replace: true })}
        >
          Skip
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {/* STAR SELECT INPUT */}
        <Select
          label="Star"
          name="star"
          options={starOptions}
          value={formik.values.star}
          onChange={(v) => formik.setFieldValue("star", v)}
          error={formik.touched.star && formik.errors.star}
        />

        {/* HOROSCOPE SELECT INPUT */}
        <Select
          label="Raasi"
          name="horoscope"
          options={raasiOptions}
          value={formik.values.horoscope}
          onChange={(v) => formik.setFieldValue("horoscope", v)}
          error={formik.touched.horoscope && formik.errors.horoscope}
        />

        {/* PROVINCE SELECT INPUT */}
        <Select
          label="Province"
          name="province"
          options={provinceOptions}
          value={province}
          onChange={(v) => setProvince(v)}
          error={formik.touched.horoscope && formik.errors.horoscope}
        />

        {/* DISTRICT SELECT INPUT */}
        <Select
          label="District"
          name="district"
          options={districtOptions}
          value={district}
          onChange={(v) => setDistrict(v)}
          //   error={formik.touched.dis && formik.errors.district}
        />

        {/* MUNICIPALITY SELECT INPUT */}
        <Select
          label="Municipality"
          name="placeOfBirth"
          options={muniOptions}
          value={formik.values.placeOfBirth}
          onChange={(v) => formik.setFieldValue("placeOfBirth", v)}
          error={formik.touched.placeOfBirth && formik.errors.placeOfBirth}
        />

        <div className="d-flex justify-content-center mt-4">
          {/* {isLoading ? <Spinner /> : <Submit text="Continue" />} */}
          <Submit text="Continue" />
        </div>
      </form>
    </div>
  );
};
