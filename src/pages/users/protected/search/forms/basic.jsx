import React from "react";
import { Input, Label, Radio, Select } from "../../../../../components";
import Constants from "../../../../../constants";
import { anyValueSetter, generateOptions } from "../../../../../utils";

const BasicSearchInput = ({ formik }) => {
  // GENERATE OPTIONS FOR RELIGION SELECTION
  const religionOptions = generateOptions(Constants.religions, "Any");

  // GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
  const motherTongueOptions = generateOptions(Constants.motherTongues, "Any");

  // GENERATE OPTIONS FOR CASTE SELECTION
  const casteOptions = generateOptions(Constants.caste, "Any");

  // GENERATE OPTIONS FOR STATE SELECTION
  const provincesOptions = generateOptions(Constants.provinces, "Any");

  return (
    <section>
      {/* AGE INPUT */}
      <section className="d-flex align-items-center">
        <Label className="m-2" label="Age from" name="Age" />
        <Input
          className="w-25"
          type="number"
          name="ageFrom"
          placeholder=""
          max={2}
          value={formik.values.ageFrom}
          onChange={(value) =>
            value <= formik.values.ageTo &&
            anyValueSetter(formik, "ageFrom", value)
          }
          error={formik.touched.ageFrom && formik.errors.ageFrom}
        />
        <span className="m-2">To</span>
        <Input
          className="w-25"
          type="number"
          name="ageFrom"
          placeholder=""
          max={2}
          value={formik.values.ageTo}
          onChange={(value) =>
            value >= formik.values.ageFrom &&
            anyValueSetter(formik, "ageTo", value)
          }
          error={formik.touched.ageTo && formik.errors.ageTo}
        />
      </section>

      {/* TODO: GENDER CHECKBOX */}

      {/* RELIGION SELECTOR */}
      <Label className="m-2" label="Religion" name="religion" />
      <Select
        padding={0}
        name="religion"
        // label="Religion"
        options={religionOptions}
        value={formik.values.religion}
        onChange={(value) => anyValueSetter(formik, "religion", value)}
        error={formik.touched.religion && formik.errors.religion}
      />

      {/* MOTHER TONGUE SELECTOR */}
      <Label className="m-2" label="Mother Tongue" name="motherTongue" />
      <Select
        name="motherTongue"
        // label="Mother Tongue"
        options={motherTongueOptions}
        value={formik.values.motherTongue}
        onChange={(value) => anyValueSetter(formik, "motherTongue", value)}
        error={formik.touched.motherTongue && formik.errors.motherTongue}
      />

      {/* TODO: MARRITAL STATUS RADIO FIELD */}
      <Label className="m-2" label="Marital Status" name="maritalStatus" />
      <Radio
        name="maritalStatus"
        // label="Marital Status"
        values={Constants.maritalStatus}
        value={formik.values.maritalStatus}
        onChange={(value) => anyValueSetter(formik, "maritalStatus", value)}
        error={formik.touched.maritalStatus && formik.errors.maritalStatus}
      />

      {/* TODO: CASTE SELECTOR */}
      <Label className="m-2" label="Caste" name="caste" />
      <Select
        name="caste"
        // label="Caste"
        options={casteOptions}
        value={formik.values.caste}
        onChange={(value) => anyValueSetter(formik, "caste", value)}
        error={formik.touched.caste && formik.errors.caste}
      />

      {/* TODO: STATE SELECTOR */}
      <Label className="m-2" label="State" name="state" />
      <Select
        name="state"
        // label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => anyValueSetter(formik, "state", value)}
        error={formik.touched.state && formik.errors.state}
      />
    </section>
  );
};

export default BasicSearchInput;
