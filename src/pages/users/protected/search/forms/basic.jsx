import React from "react";
import { Input, Label, Radio, Select } from "../../../../../components";
import Constants from "../../../../../constants";
import { generateOptions } from "../../../../../utils";

const BasicSearchInput = ({ formik }) => {
  // GENERATE OPTIONS FOR RELIGION SELECTION
  const religionOptions = generateOptions(Constants.religions, "any");

  // GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
  const motherTongueOptions = generateOptions(Constants.motherTongues, "any");

  // GENERATE OPTIONS FOR CASTE SELECTION
  const casteOptions = generateOptions(Constants.caste, "any");

  // GENERATE OPTIONS FOR STATE SELECTION
  const provincesOptions = generateOptions(Constants.provinces, "any");

  return (
    <section>
      <section className="d-flex align-items-center">
        <Label label="Age" name="Age" />
        <Input
          className="w-25"
          type="number"
          name="ageFrom"
          placeholder=""
          max={2}
          value={formik.values.ageFrom}
          onChange={(value) =>
            value <= formik.values.ageTo &&
            formik.setFieldValue("ageFrom", value)
          }
          error={formik.touched.ageFrom && formik.errors.ageFrom}
        />
        <span>To</span>
        <Input
          className="w-25"
          type="number"
          name="ageFrom"
          placeholder=""
          max={2}
          value={formik.values.ageTo}
          onChange={(value) =>
            value >= formik.values.ageFrom &&
            formik.setFieldValue("ageTo", value)
          }
          error={formik.touched.ageTo && formik.errors.ageTo}
        />
      </section>
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
    </section>
  );
};

export default BasicSearchInput;
