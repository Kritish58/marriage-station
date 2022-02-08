import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { Select, Submit } from "../../../components";
import Constants from "../../../constants";
import { generateOptions } from "../../../utils";

export const ReligionInfo = () => {
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
    onSubmit: () => console.log(formik.values),
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
      console.log(Object.keys(Constants["Bagmati Province"]));
      setDistrictOptions(generateOptions(Object.keys(Constants[province])));
    }
    if (district !== "") {
      setMuniOptions(generateOptions(Constants[province][district]));
    }
  }, [district, province]);

  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Let's know more about you</h2> */}
      <div className="d-flex flex-row-reverse flex__box"></div>
      <h1>Religion Information</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* STAR SELECT INPUT */}
        <Select
          label="Star"
          name="star"
          options={starOptions}
          value={formik.values.star}
          onChange={(v) => formik.setFieldValue("star", v.value)}
          error={formik.touched.star && formik.errors.star}
        />

        {/* HOROSCOPE SELECT INPUT */}
        <Select
          label="Raasi"
          name="horoscope"
          options={raasiOptions}
          value={formik.values.horoscope}
          onChange={(v) => formik.setFieldValue("horoscope", v.value)}
          error={formik.touched.horoscope && formik.errors.horoscope}
        />

        {/* PROVINCE SELECT INPUT */}
        <Select
          label="Province"
          name="province"
          options={provinceOptions}
          value={province}
          onChange={(v) => setProvince(v.value)}
          error={formik.touched.horoscope && formik.errors.horoscope}
        />

        {/* DISTRICT SELECT INPUT */}
        <Select
          label="District"
          name="district"
          options={districtOptions}
          value={district}
          onChange={(v) => setDistrict(v.value)}
          //   error={formik.touched.dis && formik.errors.district}
        />

        {/* MUNICIPALITY SELECT INPUT */}
        <Select
          label="Municipality"
          name="placeOfBirth"
          options={muniOptions}
          value={formik.values.placeOfBirth}
          onChange={(v) => formik.setFieldValue("placeOfBirth", v.value)}
          error={formik.touched.placeOfBirth && formik.errors.placeOfBirth}
        />

        <Submit text="Continue" />
      </form>
    </div>
  );
};
