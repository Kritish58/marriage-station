import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Input, Label, Radio, Select } from "../../../../../components";
import Constants from "../../../../../constants";
import { addAnyOption, generateOptions } from "../../../../../utils";
import { anyValueSetter } from "../../../../../utils";

const AdvanceSearchInput = ({ formik }) => {
  const navigate = useNavigate();
  // GENERATE OPTIONS FOR RELIGION SELECTION
  const religionOptions = generateOptions(Constants.religions, "Any");

  // GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
  const motherTongueOptions = generateOptions(Constants.motherTongues, "Any");

  // GENERATE OPTIONS FOR CASTE SELECTION
  const casteOptions = generateOptions(Constants.caste, "Any");

  // GENERATE OPTIONS FOR STATE SELECTION
  const provincesOptions = generateOptions(Constants.provinces, "Any");

  // GENERATE OPTIONS FOR EDUCATION SELECTION
  const educationOptions = generateOptions(Constants.education, "Any");

  // GENERATE OPTIONS FOR INCOME SELECTION
  const incomeOptions = generateOptions(Constants.income, "Any");

  // GENERATE OPTIONS FOR STAR SELECTION
  const starOptions = generateOptions(Constants.star, "Any");

  // const anyValueSetter = (name, value) => {
  //   value === "Any"
  //     ? formik.setFieldValue(name, "")
  //     : formik.setFieldValue(name, value);
  //   console.log(name, formik.values[name]);
  // };

  const handleSubmit = (values) => {
    navigate({
      pathname: "/search",
      search: `?${createSearchParams(values)}`,
    });
  };
  return (
    <section>
      {/* AGE INPUTS */}
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
            formik.setFieldValue("ageFrom", value)
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
            formik.setFieldValue("ageTo", value)
          }
          error={formik.touched.ageTo && formik.errors.ageTo}
        />
      </section>

      {/* RELIGION SELECTOR */}
      <Label className="m-2" label="Religion" name="Religion" />
      <Select
        className="my-0"
        padding={0}
        name="religion"
        options={religionOptions}
        value={formik.values.religion}
        onChange={(value) => anyValueSetter(formik, "religion", value)}
        error={formik.touched.religion && formik.errors.religion}
      />

      {/* MOTHER TONGUE SELECTOR */}
      <Label className="m-2" label="Mother Tongue" name="Mother Tongue" />
      <Select
        name="motherTongue"
        // label="Mother Tongue"
        options={motherTongueOptions}
        value={formik.values.motherTongue}
        onChange={(value) => anyValueSetter(formik, "motherTongue", value)}
        error={formik.touched.motherTongue && formik.errors.motherTongue}
      />

      {/* TODO: MARRITAL STATUS RADIO FIELD */}
      <Radio
        name="maritalStatus"
        label="Marital Status"
        values={Constants.maritalStatus}
        value={formik.values.maritalStatus}
        onChange={(value) => anyValueSetter(formik, "maritalStatus", value)}
        error={formik.touched.maritalStatus && formik.errors.maritalStatus}
      />

      {/* TODO: CASTE SELECTOR */}
      <Select
        name="caste"
        label="Caste"
        options={casteOptions}
        value={formik.values.caste}
        onChange={(value) => anyValueSetter(formik, "caste", value)}
        error={formik.touched.caste && formik.errors.caste}
      />

      {/* TODO: STATE SELECTOR */}
      <Select
        name="state"
        label="State"
        options={provincesOptions}
        value={formik.values.state}
        onChange={(value) => anyValueSetter(formik, "state", value)}
        error={formik.touched.state && formik.errors.state}
      />

      {/* TODO: COUNTRY */}
      {/* TODO: CITY */}
      {/*  EDUCATION SELECTOR */}
      <Select
        // padding={1}
        name="education"
        label="Highest Education"
        options={educationOptions}
        value={formik.values.education}
        onChange={(value) => anyValueSetter(formik, "education", value)}
        error={formik.touched.education && formik.errors.education}
      />
      {/* TODO: OCCUPATION */}
      {/* TODO: DESIGNATION */}
      {/* ANNUAL INCOME SELECTOR */}
      <Select
        // padding={1}
        name="annualIncome"
        label="Annual Income"
        options={incomeOptions}
        value={formik.values.annualIncome}
        onChange={(value) => anyValueSetter(formik, "annualIncome", value)}
        error={formik.touched.annualIncome && formik.errors.annualIncome}
      />
      {/* EATING HABIT RADIO FIELD */}
      <Radio
        name="diet"
        label="Eating Habit"
        values={addAnyOption(Constants.diet)}
        value={formik.values.diet === "" ? "Any" : formik.values.diet}
        onChange={(value) => anyValueSetter(formik, "diet", value)}
        error={formik.touched.diet && formik.errors.diet}
      />

      {/* DRINKING HABIT RADIO FIELD */}
      <Radio
        name="drink"
        label="Drinking Habit"
        values={addAnyOption(Constants.drink)}
        value={formik.values.drink === "" ? "Any" : formik.values.drink}
        onChange={(value) => anyValueSetter(formik, "drink", value)}
        error={formik.touched.drink && formik.errors.drink}
      />

      {/* SMOKING HABIT RADIO FIELD */}
      <Radio
        name="smoke"
        label="Smoking Habit"
        values={addAnyOption(Constants.smoke)}
        value={formik.values.smoke === "" ? "Any" : formik.values.smoke}
        onChange={(value) => anyValueSetter(formik, "smoke", value)}
        error={formik.touched.smoke && formik.errors.smoke}
      />

      {/* TODO: BODY TYPE */}
      {/* TODO: SKIN TONE */}
      {/* STAR SELECT INPUT */}
      <Select
        label="Star"
        name="star"
        options={starOptions}
        value={formik.values.star}
        onChange={(v) => anyValueSetter(formik, "star", v)}
        error={formik.touched.star && formik.errors.star}
      />

      {/* MANGLIK RADIO FIELD */}
      <Radio
        name="manglik"
        label="Manglik"
        values={addAnyOption(Constants.manglik)}
        value={formik.values.manglik === "" ? "Any" : formik.values.manglik}
        onChange={(value) => anyValueSetter(formik, "manglik", value)}
        error={formik.touched.manglik && formik.errors.manglik}
      />
    </section>
  );
};

export default AdvanceSearchInput;
