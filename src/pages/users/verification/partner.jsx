import { useFormik } from "formik";
import { useMemo } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Error,
  Input,
  Label,
  Radio,
  Select,
  Submit,
} from "../../../components";
import Constants from "../../../constants";
import { generateOptions } from "../../../utils";

export const PartnerPreferences = () => {
  const { profile } = useSelector((state) => state.profile);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      age: "",
      religion: "",
      motherTongue: "",
      email: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );

  // HANDLE FORM SUBMIT
  const handleSubmit = ({ confirmPassword, ...rest }) => {
    // navigate("/registration/40");
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => handleSubmit(formik.values),
  });

  // GENERATE OPTIONS
  const religionOptions = generateOptions(Constants.religions, "any");
  const motherTongueOptions = generateOptions(Constants.motherTongues, "any");
  const casteOptions = generateOptions(Constants.caste, "any");
  const heightOptions = generateOptions(Constants.height, "any");
  const educationOptions = generateOptions(Constants.education, "any");
  const incomeOptions = generateOptions(Constants.income, "any");

  return (
    <div className="main reg2 p-4">
      <h2 style={{ textAlign: "center" }}>Partner Preferences</h2>
      <p style={{ textAlign: "center", color: "red" }}>
        **Note: You might not be able to change it later.
      </p>
      <div className="d-flex flex-row-reverse flex__box">
        <form
          onSubmit={formik.handleSubmit}
          className="m-4 p-4 container-lg rounded-3 flex__form"
        >
          {/* AGE INPUT */}
          <Label className="d-block" label="Age" name="Age" />
          <section className="d-flex align-items-center justify-content-between">
            <Input
              className="w-25 d-block"
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
          {/* <InputLabel name="religion" label="Religion" className="float" /> */}
          <Select
            padding={1}
            name="religion"
            label="Religion"
            options={religionOptions}
            value={formik.values.religion}
            onChange={(value) =>
              formik.setFieldValue("religion", value === "any" ? "" : value)
            }
            error={formik.touched.religion && formik.errors.religion}
          />

          {/* MOTHER TONGUE SELECTOR */}
          <Select
            padding={1}
            name="motherTongue"
            label="Mother Tongue"
            options={motherTongueOptions}
            value={formik.values.motherTongue}
            onChange={(value) =>
              formik.setFieldValue("motherTongue", value === "any" ? "" : value)
            }
            error={formik.touched.motherTongue && formik.errors.motherTongue}
          />

          {/* CASTE SELECTOR */}
          <Select
            padding={1}
            name="caste"
            label="Caste"
            options={casteOptions}
            value={formik.values.caste}
            onChange={(value) =>
              formik.setFieldValue("caste", value === "any" ? "" : value)
            }
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
          {formik.values.maritalStatus !== "Never married" &&
            formik.values.maritalStatus !== "" && (
              <Radio
                name="noOfChildren"
                label="No of children"
                values={Constants.noOfChildren}
                value={formik.values.noOfChildren}
                onChange={(value) =>
                  formik.setFieldValue("noOfChildren", value)
                }
                error={
                  formik.touched.noOfChildren && formik.errors.noOfChildren
                }
              />
            )}

          {/* HEIGHT SELECTOR */}
          {/* <InputLabel name="religion" label="Religion" className="float" /> */}
          <Select
            padding={1}
            name="height"
            label="Height"
            options={heightOptions}
            value={formik.values.height}
            onChange={(value) => formik.setFieldValue("height", value)}
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
          {/* HIGHEST EDUCATION SELECTOR */}
          {/* <InputLabel name="religion" label="Religion" className="float" /> */}
          <Select
            padding={1}
            name="highestEducation"
            label="Highest Education"
            options={educationOptions}
            value={formik.values.highestEducation}
            onChange={(value) =>
              formik.setFieldValue("highestEducation", value)
            }
            error={
              formik.touched.highestEducation && formik.errors.highestEducation
            }
          />

          {/* OCCUPATION INPUT */}
          <Input
            type="text"
            name="occupation"
            label="Occupation"
            placeholder="Enter your occupation field"
            value={formik.values.occupation}
            onChange={(value) => formik.setFieldValue("occupation", value)}
            error={formik.touched.occupation && formik.errors.occupation}
          />

          {/* ANNUAL INCOME SELECTOR */}
          {/* <InputLabel name="religion" label="Religion" className="float" /> */}
          <Select
            padding={1}
            name="annualIncome"
            label="Annual Income"
            options={incomeOptions}
            value={formik.values.annualIncome}
            onChange={(value) => formik.setFieldValue("annualIncome", value)}
            error={formik.touched.annualIncome && formik.errors.annualIncome}
          />

          {/* WORK LOCATION INPUT */}
          <Input
            type="text"
            name="workLocation"
            label="Work Location"
            placeholder="Enter your work location"
            value={formik.values.workLocation}
            onChange={(value) => formik.setFieldValue("workLocation", value)}
            error={formik.touched.workLocation && formik.errors.workLocation}
          />

          <div className="d-flex justify-content-center mt-4">
            <Submit text="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
};
