import { useFormik } from "formik";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { Input, Label, Radio, Select, Submit } from "../../../components";
import Constants from "../../../constants";
import {
  addAnyOption,
  anyValueSetter,
  generateOptions,
  toaster,
} from "../../../utils";

export const PartnerPreferences = ({ setFound }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authState);
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      lookingFor: "female",
      complexion: "",
      ageFrom: "21",
      ageTo: "23",
      motherTongue: "",
      heightFrom: "21",
      heightTo: "25",
      bodyType: "",
      smoke: "",
      diet: "",
      drink: "",
      expectations: "",
      religion: "",
      manglik: "",
      caste: "",
      star: "",
      education: "",
      designation: "",
      occupation: "",
      annualIncome: "",
      employedIn: "",
      country: "",
      city: "",
      state: "",
      residenceStatus: "",
      userDetailId: "ee0c08e2-a7b4-49a6-8c1b-85281241536d",
    }),
    []
  );

  // HANDLE FORM SUBMIT
  const handleSubmit = async (values) => {
    console.table(formik.values);
    try {
      let response = await API.post(
        Constants.apiEndpoint.partnerPreferences.getPartnerPreferences,
        {
          ...values,
          userDetailId: user.UserDetail.userDetail_id,
        }
      );
      console.log(response);
      setFound(true);
      navigate("/", { replace: true });
    } catch (error) {
      toaster("error", error);
    }
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  // GENERATE OPTIONS
  const provinceOptions = generateOptions(Constants.provinces, "Any");
  const religionOptions = generateOptions(Constants.religions, "Any");
  const motherTongueOptions = generateOptions(Constants.motherTongues, "Any");
  const casteOptions = generateOptions(Constants.caste, "Any");
  const starOptions = generateOptions(Constants.star, "Any");
  const educationOptions = generateOptions(Constants.education, "Any");
  const incomeOptions = generateOptions(Constants.income, "Any");
  const [districtOptions, setDistrictOptions] = useState([]);

  const setProvince = (value) => {
    console.log(value);
    formik.setFieldValue("state", value);
    setDistrictOptions(generateOptions(Object.keys(Constants[value]), "Any"));
  };

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
          {/* LOOKING FOR FIELD */}
          <Radio
            name="lookingFor"
            label="Looking For"
            values={["male", "female"]}
            value={formik.values.lookingFor}
            onChange={(value) => formik.setFieldValue("lookingFor", value)}
            error={formik.touched.lookingFor && formik.errors.lookingFor}
          />

          {/* AGE INPUT */}
          <Label className="d-block" label="Age" name="Age" />
          <section className="d-flex align-items-center justify-content-between">
            <Input
              className="w-25 d-block"
              type="number"
              name="ageFrom"
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
              max={2}
              value={formik.values.ageTo}
              onChange={(value) =>
                value >= formik.values.ageFrom &&
                formik.setFieldValue("ageTo", value)
              }
              error={formik.touched.ageTo && formik.errors.ageTo}
            />
          </section>

          {/* HEIGHT INPUT */}
          <Label className="d-block" label="Height" name="height" />
          <section className="d-flex align-items-center justify-content-between">
            <Input
              className="w-25 d-block"
              type="number"
              name="heightFrom"
              placeholder=""
              max={2}
              value={formik.values.heightFrom}
              onChange={(value) =>
                value <= formik.values.heightTo &&
                formik.setFieldValue("heightFrom", value)
              }
              error={formik.touched.heightFrom && formik.errors.heightFrom}
            />
            <span>To</span>
            <Input
              className="w-25"
              type="number"
              name="heightFrom"
              placeholder=""
              max={2}
              value={formik.values.heightTo}
              onChange={(value) =>
                value >= formik.values.heightFrom &&
                formik.setFieldValue("heightTo", value)
              }
              error={formik.touched.heightTo && formik.errors.heightTo}
            />
          </section>

          {/* BODY TYPE RADIO FIELD */}
          <Radio
            name="bodyType"
            label="Body Type"
            values={addAnyOption(Constants.bodyType)}
            value={
              formik.values.bodyType === "" ? "Any" : formik.values.bodyType
            }
            onChange={(value) => anyValueSetter(formik, "bodyType", value)}
            error={formik.touched.bodyType && formik.errors.bodyType}
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

          {/* RELIGION SELECTOR */}
          <Select
            padding={1}
            name="religion"
            label="Religion"
            options={religionOptions}
            value={
              formik.values.religion === "" ? "Any" : formik.values.religion
            }
            initiallySelected="Any"
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
            value={
              formik.values.motherTongue === ""
                ? "Any"
                : formik.values.motherTongue
            }
            initiallySelected="Any"
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
            value={formik.values.caste === "" ? "Any" : formik.values.caste}
            initiallySelected="Any"
            onChange={(value) =>
              formik.setFieldValue("caste", value === "Any" ? "" : value)
            }
            error={formik.touched.caste && formik.errors.caste}
          />

          {/* STAR SELECT INPUT */}
          <Select
            padding={1}
            label="Star"
            name="star"
            options={starOptions}
            value={formik.values.star === "" ? "Any" : formik.values.star}
            onChange={(v) => formik.setFieldValue("star", v === "Any" ? "" : v)}
            error={formik.touched.star && formik.errors.star}
          />

          {/* MANGLIK RADIO FIELD */}
          <Radio
            name="manglik"
            label="Manglik"
            values={addAnyOption(Constants.manglik)}
            value={formik.values.manglik === "" ? "Any" : formik.values.manglik}
            initiallySelected="Any"
            onChange={(value) => anyValueSetter(formik, "manglik", value)}
            error={formik.touched.manglik && formik.errors.manglik}
          />

          {/* HIGHEST EDUCATION SELECTOR */}
          <Select
            padding={1}
            name="highestEducation"
            label="Highest Education"
            options={educationOptions}
            value={
              formik.values.highestEducation === ""
                ? "Any"
                : formik.values.highestEducation
            }
            initiallySelected="Any"
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
          <Select
            padding={1}
            name="annualIncome"
            label="Annual Income"
            options={incomeOptions}
            value={
              formik.values.annualIncome === ""
                ? "Any"
                : formik.values.annualIncome
            }
            initiallySelected="Any"
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

          {/* PROVINCE SELECT INPUT */}
          <Select
            padding={1}
            label="Province"
            name="state"
            options={provinceOptions}
            value={formik.values.state === "" ? "Any" : formik.values.state}
            onChange={(v) => setProvince(v)}
            error={formik.touched.state && formik.errors.state}
          />

          {/* DISTRICT SELECT INPUT */}
          <Select
            padding={1}
            label="District"
            name="city"
            placeholder="Select province first"
            options={districtOptions}
            value={formik.values.city === "" ? "Any" : formik.values.city}
            onChange={(v) => formik.setFieldValue("city", v)}
            error={formik.touched.city && formik.errors.city}
          />
          <div className="d-flex justify-content-center mt-4">
            <Submit text="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
};
