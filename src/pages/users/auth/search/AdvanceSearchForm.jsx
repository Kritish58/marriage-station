import { useFormik } from "formik";
import { useMemo } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../../api";
import { Input, Radio, Select, Submit } from "../../../../components";
import Constants from "../../../../constants";
import { generateOptions, toaster } from "../../../../utils";

export const AdvanceSearchForm = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      age: "",
      religion: "",
      motherTongue: "",
      maritalStatus: "",
      caste: "",
      state: "",
    }),
    []
  );

  // HANDLE FORM SUBMIT
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      let res = await API.get(`${Constants.apiEndpoint.user.getAllUser}`, {
        // params: {
        //   ...values,
        // },
      });
      console.log(res);
    } catch (error) {
      toaster("error", error);
    }
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => handleSubmit(formik.values),
  });

  // GENERATE OPTIONS FOR RELIGION SELECTION
  const religionOptions = generateOptions(Constants.religions);

  // GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
  const motherTongueOptions = generateOptions(Constants.motherTongues);

  // GENERATE OPTIONS FOR CASTE SELECTION
  const casteOptions = generateOptions(Constants.caste);

  // GENERATE OPTIONS FOR STATE SELECTION
  const provincesOptions = generateOptions(Constants.provinces);

  // GENERATE OPTIONS FOR CITY SELECTION
  //   const cityOptions = generateOptions(Constants["Bagmati Province"]);

  // GENERATE OPTIONS FOR RELIGION SELECTION
  //   const religionOptions = generateOptions(Constants.religions);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="rounded-3 basic__search__form"
    >
      <h6>Advance Search</h6>
      {/* AGE INPUT */}
      <Input
        type="text"
        name="age"
        label="Age"
        placeholder="Enter age"
        max={2}
        value={formik.values.age}
        onChange={(value) => formik.setFieldValue("age", value)}
        error={formik.touched.age && formik.errors.age}
      />

      {/* RELIGION SELECTOR */}
      <Select
        name="religion"
        label="Religion"
        options={religionOptions}
        value={formik.values.religion}
        onChange={(value) => formik.setFieldValue("religion", value)}
        error={formik.touched.religion && formik.errors.religion}
      />

      {/* MOTHER TONGUE SELECTOR */}
      <Select
        name="motherTongue"
        label="Mother Tongue"
        options={motherTongueOptions}
        value={formik.values.motherTongue}
        onChange={(value) => formik.setFieldValue("motherTongue", value)}
        error={formik.touched.motherTongue && formik.errors.motherTongue}
      />

      {/* TODO: MARRITAL STATUS RADIO FIELD */}
      <Radio
        name="maritalStatus"
        label="Marital Status"
        values={Constants.maritalStatus}
        value={formik.values.maritalStatus}
        onChange={(value) => formik.setFieldValue("maritalStatus", value)}
        error={formik.touched.maritalStatus && formik.errors.maritalStatus}
      />

      {/* TODO: CASTE SELECTOR */}
      <Select
        name="caste"
        label="Caste"
        options={casteOptions}
        value={formik.values.caste}
        onChange={(value) => formik.setFieldValue("caste", value)}
        error={formik.touched.caste && formik.errors.caste}
      />

      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => formik.setFieldValue("state", value)}
        error={formik.touched.state && formik.errors.state}
      />
      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => formik.setFieldValue("state", value)}
        error={formik.touched.state && formik.errors.state}
      />
      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => formik.setFieldValue("state", value)}
        error={formik.touched.state && formik.errors.state}
      />
      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => formik.setFieldValue("state", value)}
        error={formik.touched.state && formik.errors.state}
      />
      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => formik.setFieldValue("state", value)}
        error={formik.touched.state && formik.errors.state}
      />
      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => formik.setFieldValue("state", value)}
        error={formik.touched.state && formik.errors.state}
      />
      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => formik.setFieldValue("state", value)}
        error={formik.touched.state && formik.errors.state}
      />
    </form>
  );
};
