import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { Select, Submit } from "../../../components";
import Constants from "../../../constants";
import { generateOptions, toaster } from "../../../utils";

export const ReligionInfo = () => {
  const { user } = useSelector((state) => state.authState);
  const navigate = useNavigate();
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      star: "",
      horoscope: "",
      tobHH: "",
      tobMM: "",
      tobAoP: "",
      birthPlace: "",
      state: "",
      city: "",
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
      navigate("/familyinfo", { replace: true });
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
      formik.setFieldValue("state", province);
    }
    if (district !== "") {
      setMuniOptions(generateOptions(Constants[province][district]));
      formik.setFieldValue("city", district);
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
          name="birthPlace"
          options={muniOptions}
          value={formik.values.birthPlace}
          onChange={(v) => formik.setFieldValue("birthPlace", v)}
          error={formik.touched.birthPlace && formik.errors.birthPlace}
        />

        <div className="d-flex justify-content-center mt-4">
          {/* {isLoading ? <Spinner /> : <Submit text="Continue" />} */}
          <Submit text="Continue" />
        </div>
      </form>
    </div>
  );
};
