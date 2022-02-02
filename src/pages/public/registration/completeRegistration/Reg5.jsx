import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Constants from "../../../../constants";
import { setProfile } from "../../../../redux/reducers/profileSlice";
import "../styles/completeRegistration.scss";
import { part5Schema } from "../validations/yupSchemas";

export const Reg5 = () => {
  const [employedIn, setEmployedIn] = useState("notWorking");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const initialValues = useMemo(
    () => ({
      heightestEducation: "",
      occupation: "",
      annualIncome: "",
      workLocation: "",
    }),
    []
  );
  const onSubmit = async (values) => {
    await dispatch(setProfile({ ...profile, employedIn, ...values }));
    await navigate("/registration/6");
  };

  return (
    <div className="rest__parts">
      <div className="regis-level professionalform">
        Great! You have completed <span className="fs30">80% </span>{" "}
      </div>
      <div className="regis-container professionalform">
        <div className="txt-center regis-left">ADVERTISEMENT</div>
        <div className="regis-right">
          <Formik
            initialValues={initialValues}
            validationSchema={part5Schema}
            onSubmit={onSubmit}
          >
            <Form className="paddl5 paddt35 mob-rgtpadd">
              <div className="paddlh2">
                <h2>
                  Professional details help your friend get relevant matches
                </h2>
              </div>
              {/*-Highest Education ---*/}
              <div className="paddt40 h50">
                <div className="regis-col1 paddt5">Highest Education</div>
                <div className="regis-col2 regis-select">
                  <Field
                    as="select"
                    name="heightestEducation"
                    id="EDUCATION"
                    className="paddl5"
                    tabIndex={-1}
                  >
                    <option value=""> Select</option>
                    {/* <option value="noDegree"> No Degree </option> */}
                    {Constants.education.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="clear" />
                <ErrorMessage name="heightestEducation" id="edu_err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* -Education in Detail --- */}
              <div className="paddt20 h50" id="educationindet">
                <div className="regis-col1 paddt5">Education in Detail</div>
                <div className="regis-col2">
                  <input
                    className="regis-input"
                    maxLength={80}
                    id="OTHEREDUCATION"
                    name="OTHEREDUCATION"
                    style={{ color: "rgb(0, 0, 0)" }}
                  />
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="othereducation_err">
                  Please enter other education details
                </div>
              </div>
              {/*-Employed in ---*/}
              <div className="paddt10" id="subcaste_div">
                <div className="regis-col1 paddt5">Employed in </div>
                <div className="regis-col4 regis-radio">
                  <label
                    htmlFor="OCCUPATIONCATEGORY1"
                    className={employedIn === "government-psu" ? "checked" : ""}
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="OCCUPATIONCATEGORY"
                      id="OCCUPATIONCATEGORY1"
                      onClick={() => setEmployedIn("government-psu")}
                    />
                    Government/PSU
                  </label>
                  <label
                    htmlFor="OCCUPATIONCATEGORY3"
                    className={employedIn === "private" ? "checked" : ""}
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="OCCUPATIONCATEGORY"
                      id="OCCUPATIONCATEGORY3"
                      onClick={() => setEmployedIn("private")}
                    />
                    Private
                  </label>
                  <label
                    htmlFor="OCCUPATIONCATEGORY4"
                    className={employedIn === "business" ? "checked" : ""}
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="OCCUPATIONCATEGORY"
                      id="OCCUPATIONCATEGORY4"
                      onClick={() => setEmployedIn("business")}
                    />
                    Business
                  </label>
                  <label
                    htmlFor="OCCUPATIONCATEGORY2"
                    className={employedIn === "defence" ? "checked" : ""}
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="OCCUPATIONCATEGORY"
                      id="OCCUPATIONCATEGORY2"
                      onClick={() => setEmployedIn("defence")}
                    />
                    Defence
                  </label>
                  <label
                    htmlFor="OCCUPATIONCATEGORY6"
                    className={employedIn === "selfEmployed" ? "checked" : ""}
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="OCCUPATIONCATEGORY"
                      id="OCCUPATIONCATEGORY6"
                      onClick={() => setEmployedIn("selfEmployed")}
                    />
                    Self Employed
                  </label>
                  <label
                    htmlFor="OCCUPATIONCATEGORY5"
                    className={employedIn === "notWorking" ? "checked" : ""}
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="OCCUPATIONCATEGORY"
                      id="OCCUPATIONCATEGORY5"
                      onClick={() => setEmployedIn("notWorking")}
                    />
                    Not working
                  </label>
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="occ_cat_err">
                  {" "}
                </div>
              </div>
              {/*-Occupation ---*/}
              <div
                className="paddt10 h50"
                style={{ display: employedIn !== "notWorking" ? "" : "none" }}
              >
                <div className="regis-col1 paddt5">Occupation</div>
                <div className="regis-col2 pos-relative">
                  {/* <span id="OCC_SEL"> */}
                  <Field
                    type="text"
                    name="occupation"
                    className="paddl5 regis-input"
                    placeholder="Your occupation field"
                  />
                  {/* </span> */}
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="occ_err" />
              </div>
              {/*-Annual Income ---*/}
              <div
                className="paddt10"
                id="body1"
                style={{
                  display: employedIn !== "notWorking" ? "block" : "none",
                }}
              >
                <div className="regis-col1 paddt5">Annual Income</div>
                <div className="regis-col2 regis-select" id="INCOME_TIPS">
                  <Field
                    as="select"
                    style={{
                      display: employedIn !== "notWorking" ? "" : "none",
                    }}
                    className="reg-selectcol incomeclr"
                    name="annualIncome"
                    size={1}
                    id="OPTIONALINCOME"
                    tabIndex={-1}
                  >
                    <option value={0}> Select </option>
                    <option value={3}>0 - 1 Lakh</option>
                    <option value={4}>1 - 2 Lakhs</option>
                    <option value={5}>2 - 3 Lakhs</option>
                    <option value={6}>3 - 4 Lakhs</option>
                    <option value={7}>4 - 5 Lakhs</option>
                    <option value={8}>5 - 6 Lakhs</option>
                    <option value={9}>6 - 7 Lakhs</option>
                    <option value={10}>7 - 8 Lakhs</option>
                    <option value={11}>8 - 9 Lakhs</option>
                    <option value={12}>9 - 10 Lakhs</option>
                    <option value={13}>10 - 12 Lakhs</option>
                    <option value={14}>12 - 14 Lakhs</option>
                    <option value={15}>14 - 16 Lakhs</option>
                    <option value={16}>16 - 18 Lakhs</option>
                    <option value={17}>18 - 20 Lakhs</option>
                    <option value={18}>20 - 25 Lakhs</option>
                    <option value={19}>25 - 30 Lakhs</option>
                    <option value={20}>30 - 35 Lakhs</option>
                    <option value={21}>35 - 40 Lakhs</option>
                    <option value={22}>40 - 45 Lakhs</option>
                    <option value={23}>45 - 50 Lakhs</option>
                    <option value={24}>50 - 60 Lakhs</option>
                    <option value={25}>60 - 70 Lakhs</option>
                    <option value={26}>70 - 80 Lakhs</option>
                    <option value={27}>80 - 90 Lakhs</option>
                    <option value={28}>90 Lakhs - 1 Crore</option>
                    <option value={29}>1 Crore &amp; Above</option>{" "}
                  </Field>
                </div>
                <div className="regis-radiocol2">
                  <div id="incomepermonth" />
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="income_err" />
                <div
                  className="regis-errtxt"
                  id="income_val_err"
                  style={{ marginLeft: 370 }}
                ></div>
              </div>
              {/*-Location ---*/}
              {/*--country -*/}
              <div id="worklocation">
                <div
                  className="paddt20"
                  style={{ display: employedIn !== "notWorking" ? "" : "none" }}
                >
                  <div className="regis-col1 paddt5" id="location">
                    Work Location
                  </div>
                  <div className="regis-col2">
                    <Field
                      type="text"
                      className="paddl5 countryclr regis-input"
                      name="workLocation"
                      id="COUNTRY"
                      placeholder="Your work location"
                    />
                  </div>
                  <div className="clear" />
                  <div className="regis-errtxt" id="country_err" />
                </div>
              </div>
              <div className="paddt30 paddb30 txt-center">
                <button className="hp-button" alt="Continue" type="submit">
                  Continue
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="clear" />
      </div>
      {/* Container End*/}
      <div align="center" className="paddt20 paddb20">
        Copyright © 2021. All rights reserved.
      </div>
    </div>
  );
};
