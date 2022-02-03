import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useMemo } from "react";
import { setProfile } from "../../../../redux/reducers/profileSlice";
import { useNavigate } from "react-router-dom";
import "../styles/completeRegistration.scss";
import "../styles/responsive.scss";
import { part2Schema } from "../validations/yupSchemas";
import { useDispatch, useSelector } from "react-redux";
import Constants from "../../../../constants";

import { Form as FormBS } from "react-bootstrap";
import Select from "react-select";
export const Reg5 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [DOB, setDOB] = useState("");
  // const [age, setAge] = useState(18);
  // const [religion, setReligion] = useState("");
  // const [motherTongue, setMotherTongue] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const profile = useSelector((state) => state.profile.profile);
  const initialValues = useMemo(
    () => ({
      // dateOfBirth: new Date(),
      age: "",
      religion: "",
      motherTongue: "",
      email: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );

  const onSubmit = async (values) => {
    await dispatch(setProfile({ ...profile, ...values }));
    await navigate("/registration/3");
  };

  return (
    <div className="rest__parts">
      <div className="regis-level">
        Great! You have completed <span className="fs30">20%</span>{" "}
      </div>
      <div className="regis-container">
        <div className="txt-center regis-left">ADVERTISEMENT</div>
        <div className="regis-right">
          <Formik
            initialValues={initialValues}
            validationSchema={part2Schema}
            onSubmit={onSubmit}
          >
            <Form className="paddl5 paddt35 mob-rgtpadd">
              <div className="paddlh2">
                <h2>Please provide us with your basic details </h2>
              </div>
              <FormBS.Select>
                <option>Disabled select</option>
              </FormBS.Select>
              {/* DATE OF BIRTH */}
              <div className="paddt40 h50">
                <div className="regis-col1 paddt7">Date Of Birth</div>
                <div className="regis-col2 posrelative" id="dob-border">
                  <Field
                    type="date"
                    id="DOBVALUE"
                    className="DOBVALUE1 regis-input hasDatepicker"
                    data-date-inline-picker="true"
                    name="dateOfBirth"
                  />
                  <ErrorMessage name="datOfBirth" id="dob-err">
                    {(msg) => <div className="regis-errtxt">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="clear" />
              </div>

              {/* AGE */}
              <div className="paddt10 h50">
                <div className="regis-col1 paddt7">Age</div>
                <div className="regis-col2 posrelative" id="age-border">
                  <Field
                    type="text"
                    name="age"
                    placeholder="Enter your age"
                    maxLength={2}
                    className="regis-input"
                  />
                </div>
                <div className="clear" />
                <ErrorMessage name="age" id="dob-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>

              {/* RELIGION */}
              <div className="paddt10 h50">
                <div className="regis-col1 paddt7">Religion </div>
                <div className="regis-col2 regis-select" id="religion-border">
                  <Field
                    as="select"
                    name="religion"
                    id="RELIGION"
                    size={1}
                    // value={religion}
                    // onChange={(e) => setReligion(e.target.value)}
                  >
                    <option value="">Select</option>
                    {Constants.religions.map((religion) => (
                      <option key={religion} value={religion}>
                        {religion}
                      </option>
                    ))}
                    {/* <option value="Hindu">Hindu</option>
                    <option value="Muslim - Shia">Muslim - Shia</option>
                    <option value="Muslim - Sunni">Muslim - Sunni</option>
                    <option value="Muslim - Others">Muslim - Others</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain - Digambar">Jain - Digambar</option>
                    <option value="Jain - Shwetambar">Jain - Shwetambar</option>
                    <option value="Jain - Others">Jain - Others</option>
                    <option value="Parsi">Parsi</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Inter-Religion">Inter-Religion</option> */}
                  </Field>
                </div>
                <div
                  className="regis-col3"
                  style={{ display: "none" }}
                  id="religionalert"
                >
                  <div className="paddl25 regis-protxt dobalert-txt">
                    Great! We have
                    <br /> <span id="religioncount" />{" "}
                    <span id="religionvalues" /> profiles
                  </div>
                </div>
                <div className="clear" />
                <ErrorMessage name="religion" id="religion-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* <SelectField name={"religion"} options={Constants.religions} />
              <SelectField
                name={"motherTongue"}
                options={Constants.motherTongues}
              /> */}

              {/* MOTHER TONGUE */}
              <div className="paddt10 h50">
                <div className="regis-col1 paddt7">Mother Tongue</div>
                <div
                  className="regis-col2 regis-select"
                  id="mothertongue-border"
                >
                  <Field
                    as="select"
                    name="motherTongue"
                    id="MOTHERTONGUE"
                    size={1}
                    className="paddl5"
                    // value={motherTongue}
                    // onChange={(e) => setMotherTongue(e.target.value)}
                  >
                    <option value="">Select</option>
                    {Constants.motherTongues.map((mt) => (
                      <option key={mt} value={mt}>
                        {mt}
                      </option>
                    ))}
                    {/* <optgroup label="    --Frequently used--">
                      <option value="Bengali">Bengali</option>
                      <option value="Gujarati">Gujarati</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Kannada">Kannada</option>
                      <option value="Malayalam">Malayalam</option>
                      <option value="Marathi">Marathi</option>
                      <option value="Marwari">Marwari</option>
                      <option value="Oriya">Oriya</option>
                      <option value="Punjabi">Punjabi</option>
                      <option value="Sindhi">Sindhi</option>
                      <option value="Tamil">Tamil</option>
                      <option value="Telugu">Telugu</option>
                      <option value="Urdu">Urdu</option>
                    </optgroup>
                    <optgroup label="    --More--">
                      <option value="Arunachali">Arunachali</option>
                      <option value="Assamese">Assamese</option>
                      <option value="Awadhi">Awadhi</option>
                      <option value="Bhojpuri">Bhojpuri</option>
                      <option value="Brij">Brij</option>
                      <option value="Bihari">Bihari</option>
                      <option value="Badaga">Badaga</option>
                      <option value="Chatisgarhi">Chatisgarhi</option>
                      <option value="Dogri">Dogri</option>
                      <option value="English">English</option>
                      <option value="French">French</option>
                      <option value="Garhwali">Garhwali</option>
                      <option value="Garo">Garo</option>
                      <option value="Haryanvi">Haryanvi</option>
                      <option value="Himachali/Pahari">Himachali/Pahari</option>
                      <option value="Kanauji">Kanauji</option>
                      <option value="Kashmiri">Kashmiri</option>
                      <option value="Khandesi">Khandesi</option>
                      <option value="Khasi">Khasi</option>
                      <option value="Konkani">Konkani</option>
                      <option value="Koshali">Koshali</option>
                      <option value="Kumaoni">Kumaoni</option>
                      <option value="Kutchi">Kutchi</option>
                      <option value="Lepcha">Lepcha</option>
                      <option value="Ladacki">Ladacki</option>
                      <option value="Magahi">Magahi</option>
                      <option value="Maithili">Maithili</option>
                      <option value="Manipuri">Manipuri</option>
                      <option value="Miji">Miji</option>
                      <option value="Mizo">Mizo</option>
                      <option value="Monpa">Monpa</option>
                      <option value="Nicobarese">Nicobarese</option>
                      <option value="Nepali">Nepali</option>
                      <option value="Rajasthani">Rajasthani</option>
                      <option value="Sanskrit">Sanskrit</option>
                      <option value="Santhali">Santhali</option>
                      <option value="Sourashtra">Sourashtra</option>
                      <option value="Tripuri">Tripuri</option>
                      <option value="Tulu">Tulu</option>
                      <option value="Angika">Angika</option>
                      <option value="Bagri Rajasthani">Bagri Rajasthani</option>
                      <option value="Dhundhari/Jaipuri">
                        Dhundhari/Jaipuri
                      </option>
                      <option value="Gujari/Gojari">Gujari/Gojari</option>
                      <option value="Harauti">Harauti</option>
                      <option value="Lambadi">Lambadi</option>
                      <option value="Malvi">Malvi</option>
                      <option value="Mewari">Mewari</option>
                      <option value="Mewati/Ahirwati">Mewati/Ahirwati</option>
                      <option value="Nimadi">Nimadi</option>
                      <option value="Shekhawati">Shekhawati</option>
                      <option value="Wagdi">Wagdi</option>
                    </optgroup> */}
                  </Field>
                </div>
                {/* <div
                  className="regis-col3"
                  style={{ display: "none" }}
                  id="mothertonguealert"
                >
                  <div className="paddl25 dobalert-txt">
                    Go <span id="mothertonguevalues" />!
                  </div>
                </div> */}
                <div className="clear" />

                {/* <div className="regis-errtxt" id="mothertongue-err" /> */}
                <ErrorMessage name="motherTongue" id="mothertongue-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>

              {/* EMAIL */}
              <div className="paddt10 h50">
                <div className="regis-col1 paddt7">Email ID</div>
                <div className="regis-col2 posrelative" id="email-border">
                  <Field
                    type="input"
                    name="email"
                    id="EMAIL"
                    placeholder="Enter your email"
                    maxLength={50}
                    autoComplete="email"
                    className="regis-input"
                  />
                </div>
                <div
                  className="regis-col3"
                  style={{ display: "none" }}
                  id="emailalert"
                >
                  <div className="paddl25 dobalert-txt">
                    Remember to check your <br /> e-mail for matches{" "}
                  </div>
                </div>
                {/* <div
                    className="regis-col3 emailalertfocus"
                    style={{ display: "none" }}
                  >
                    <div className="paddl25 dobalert-txt">
                      We send you matches on your e-mail ID{" "}
                    </div>
                  </div> */}
                <div className="clear" />
                {/* <div id="email-err" className="regis-errtxt"> */}
                <ErrorMessage name="email" id="email-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>

              {/* PASSWORD */}
              <div className="paddt10 h50">
                <div className="regis-col1 paddt7">Password </div>
                <div className="regis-col2 posrelative" id="pass-border">
                  <Field
                    type="password"
                    className="regis-input"
                    placeholder="Enter password"
                    name="password"
                    id="PASSWORD"
                    maxLength={20}
                    autoComplete="off"
                    // value={values.password}
                    // onChange={handleChange}
                  />
                </div>
                {/* <div className="regis-col3 passwordalertfocus">
                    <div className="paddl25 dobalert-txt"></div>
                  </div> */}
                <div className="clear" />
                <ErrorMessage name="password" id="pass-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="paddt10 h50">
                <div className="regis-col1 paddt7">Re-enter Password</div>
                <div className="regis-col2 posrelative" id="pass-border">
                  <Field
                    type="password"
                    className="regis-input"
                    placeholder="Re-enter password"
                    name="confirmPassword"
                    id="PASSWORD2"
                    maxLength={20}
                    autoComplete="off"
                    // value={values.confirmPassword}
                    // onChange={handleChange}
                  />
                </div>
                {/* <div className="regis-col3 passwordalertfocus">
                    <div className="paddl25 dobalert-txt"></div>
                  </div> */}
                <div className="clear" />
                <ErrorMessage name="confirmPassword" id="pass-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="paddt30 paddb30 txt-center">
                <button className="hp-button" type="submit">
                  Continue
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="clear" />
      </div>

      <div align="center" className="paddt20 paddb30">
        Copyright © 2021. All rights reserved.
      </div>
    </div>
  );
};
