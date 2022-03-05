import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Input, Radio, Select } from "../../../../../components";
import Constants from "../../../../../constants";
import { generateOptions } from "../../../../../utils";

const AdvanceSearchInput = ({ formik }) => {
  const navigate = useNavigate();
  // GENERATE OPTIONS FOR RELIGION SELECTION
  const religionOptions = generateOptions(Constants.religions);

  // GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
  const motherTongueOptions = generateOptions(Constants.motherTongues);

  // GENERATE OPTIONS FOR CASTE SELECTION
  const casteOptions = generateOptions(Constants.caste);

  // GENERATE OPTIONS FOR STATE SELECTION
  const provincesOptions = generateOptions(Constants.provinces);

  const handleSubmit = (values) => {
    navigate({
      pathname: "/search",
      search: `?${createSearchParams(values)}`,
    });
  };
  return (
    <section>
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
        padding={0}
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
    </section>
  );
};

export default AdvanceSearchInput;
