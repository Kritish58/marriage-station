import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setProfile } from "../../../../redux/reducers/profileSlice";
import "../styles/completeRegistration.scss";
import { part4Schema } from "../validations/yupSchemas";

const Reg4 = () => {
  const [maritalStatus, setMaritalStatus] = useState("neverMarried");
  const [noOfChildren, setNoOfChildren] = useState("none");
  const [familyStatus, setFamilyStatus] = useState("middleClass");
  const [familyType, setFamilyType] = useState("nuclear");
  const [familyValues, setFamilyValues] = useState("moderate");
  const [disability, setDisability] = useState("none");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.profile);

  const initialValues = useMemo(
    () => ({
      // maritalStatus,
      // noOfChildren,
      // familyStatus,
      // familyType,
      // familyValues,
      // disability,
      height: "",
    }),
    []
  );
  if (!profile) return <Navigate to="/" />;

  const onSubmit = async (values) => {
    await dispatch(
      setProfile({
        ...profile,
        maritalStatus,
        noOfChildren,
        familyStatus,
        familyType,
        familyValues,
        disability,
        ...values,
      })
    );
    await navigate("/completeRegistration5");
  };
  return (
    <div className="rest__parts">
      <div className="regis-level personalform">
        Great! You have completed <span className="fs30">60% </span>{" "}
      </div>
      <div className="regis-container personalform">
        <div className="txt-center regis-left">ADVERTISEMENT</div>
        <div className="regis-right">
          <Formik
            initialValues={initialValues}
            validationSchema={part4Schema}
            onSubmit={onSubmit}
          >
            <Form className="paddl5 paddt35 mob-rgtpadd">
              <div className="paddlh2">
                <h2>Personal details get your friend the right matches</h2>
              </div>
              {/*-MARITAL STATUS ---*/}
              <div className="paddt40">
                <div className="regis-col1 paddt5">Marital Status</div>
                <div className="regis-col4 regis-radio">
                  <label
                    htmlFor="MARITAL_STATUS1"
                    className={
                      maritalStatus === "neverMarried"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="MARITAL_STATUS"
                      id="MARITAL_STATUS1"
                      onClick={() => setMaritalStatus("neverMarried")}
                    />
                    Never Married{" "}
                  </label>
                  <label
                    htmlFor="MARITAL_STATUS2"
                    id="ms_label"
                    className={
                      maritalStatus === "widowed"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="MARITAL_STATUS"
                      id="MARITAL_STATUS2"
                      defaultValue={2}
                      onClick={() => setMaritalStatus("widowed")}
                    />
                    Widowed{" "}
                  </label>
                  <label
                    htmlFor="MARITAL_STATUS3"
                    className={
                      maritalStatus === "divorced"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="MARITAL_STATUS"
                      id="MARITAL_STATUS3"
                      defaultValue={3}
                      onClick={() => setMaritalStatus("divorced")}
                    />
                    Divorced{" "}
                  </label>
                  <label
                    htmlFor="MARITAL_STATUS4"
                    className={
                      maritalStatus === "awaitingDivorce"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="MARITAL_STATUS"
                      id="MARITAL_STATUS4"
                      defaultValue={4}
                      onClick={() => setMaritalStatus("awaitingDivorce")}
                    />
                    Awaiting divorce{" "}
                  </label>
                  <div>
                    <div
                      className="maritalstatusalertfocus1"
                      style={{
                        display: maritalStatus === "neverMarried" ? "" : "none",
                      }}
                    >
                      A change in marital status awaits you{" "}
                    </div>
                    <div
                      className="maritalstatusalertfocus2"
                      style={{
                        display:
                          maritalStatus !== "neverMarried" &&
                          maritalStatus !== ""
                            ? ""
                            : "none",
                      }}
                    >
                      Choose to believe in second chances{" "}
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="ms_err" />
              </div>
              {/*-Number of Children ---*/}
              <div
                className="paddt20"
                id="child_div"
                style={{
                  display: maritalStatus === "neverMarried" ? "none" : "",
                }}
              >
                <div className="regis-col1 paddt5"> No. of Children </div>
                <div className="regis-col4 regis-radio" id="CHILDREN_TIPS">
                  <label
                    htmlFor="NOOFCHILDREN0"
                    className={
                      noOfChildren === "none" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      name="NOOFCHILDREN"
                      id="NOOFCHILDREN0"
                      type="radio"
                      defaultValue={0}
                      className="radio"
                      onClick={() => setNoOfChildren("none")}
                    />
                    None{" "}
                  </label>
                  <label
                    htmlFor="NOOFCHILDREN1"
                    className={
                      noOfChildren === "1" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      name="NOOFCHILDREN"
                      id="NOOFCHILDREN1"
                      type="radio"
                      defaultValue={1}
                      className="radio"
                      onClick={() => setNoOfChildren("1")}
                    />
                    1{" "}
                  </label>
                  <label
                    htmlFor="NOOFCHILDREN2"
                    className={
                      noOfChildren === "2" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      name="NOOFCHILDREN"
                      id="NOOFCHILDREN2"
                      type="radio"
                      defaultValue={2}
                      className="radio"
                      onClick={() => setNoOfChildren("2")}
                    />
                    2{" "}
                  </label>
                  <label
                    htmlFor="NOOFCHILDREN3"
                    className={
                      noOfChildren === "3" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      name="NOOFCHILDREN"
                      id="NOOFCHILDREN3"
                      type="radio"
                      defaultValue={3}
                      className="radio"
                      onClick={() => setNoOfChildren("3")}
                    />
                    3{" "}
                  </label>
                  <label
                    htmlFor="NOOFCHILDREN4"
                    className={
                      noOfChildren === "4andAbove"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      name="NOOFCHILDREN"
                      id="NOOFCHILDREN4"
                      type="radio"
                      defaultValue={4}
                      className="radio"
                      onClick={() => setNoOfChildren("4andAbove")}
                    />
                    4 and above{" "}
                  </label>
                  <div
                    id="childlive_div"
                    className="paddt10"
                    style={{ display: "none" }}
                  >
                    <label htmlFor="CHILDLIVINGWITHME_Y">
                      <input
                        className="radio"
                        name="CHILDLIVINGWITHME"
                        id="CHILDLIVINGWITHME_Y"
                        defaultValue="Y"
                        type="radio"
                      />
                      Children living with me{" "}
                    </label>
                    <label htmlFor="CHILDLIVINGWITHME_N">
                      <input
                        className="radio"
                        name="CHILDLIVINGWITHME"
                        id="CHILDLIVINGWITHME_N"
                        defaultValue="N"
                        type="radio"
                      />
                      Children not living with me{" "}
                    </label>
                  </div>
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="noc_err" />
              </div>
              {/*- Height ---*/}
              <div className="paddt10 h50">
                <div className="regis-col1 paddt7">Height </div>
                <div className="regis-col2 regis-select" id="religion-border">
                  <Field as="select" name="height" id="FEET" tabIndex={-1}>
                    <option value="">Select</option>
                    <option value="4.6">4ft 6in / 137 cms</option>
                    <option value="4.7">4ft 7in / 139 cms</option>
                    <option value="4.8">4ft 8in / 142 cms</option>
                    <option value="4.9">4ft 9in / 144 cms</option>
                    <option value="4.10">4ft 10in / 147 cms</option>
                    <option value="4.11">4ft 11in / 149 cms</option>
                    <option value="5">5ft / 152 cms</option>
                    <option value="5.1">5ft 1in / 154 cms</option>
                    <option value="5.2">5ft 2in / 157 cms</option>
                    <option value="5.3">5ft 3in / 160 cms</option>
                    <option value="5.4">5ft 4in / 162 cms</option>
                    <option value="5.5">5ft 5in / 165 cms</option>
                    <option value="5.6">5ft 6in / 167 cms</option>
                    <option value="5.7">5ft 7in / 170 cms</option>
                    <option value="5.8">5ft 8in / 172 cms</option>
                    <option value="5.9">5ft 9in / 175 cms</option>
                    <option value="5.10">5ft 10in / 177 cms</option>
                    <option value="5.11">5ft 11in / 180 cms</option>
                    <option value="6">6ft / 182 cms</option>
                    <option value="6.1">6ft 1in / 185 cms</option>
                    <option value="6.2">6ft 2in / 187 cms</option>
                    <option value="6.3">6ft 3in / 190 cms</option>
                    <option value="6.4">6ft 4in / 193 cms</option>
                    <option value="6.5">6ft 5in / 195 cms</option>
                    <option value="6.6">6ft 6in / 198 cms</option>
                    <option value="6.7">6ft 7in / 200 cms</option>
                    <option value="6.8">6ft 8in / 203 cms</option>
                    <option value="6.9">6ft 9in / 205 cms</option>
                    <option value="6.10">6ft 10in / 208 cms</option>
                    <option value="6.11">6ft 11in / 210 cms</option>
                    <option value="7">7ft / 213 cms</option>
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
                {/* <div className="regis-errtxt" id="religion-err" /> */}
                <ErrorMessage name="height" id="height-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
              </div>

              {/*- Family Status ---*/}
              <div className="paddt25" id="familystatusval">
                <div className="regis-col1 paddt5">Family Status </div>
                <div className="regis-col4 regis-radio" id="familystatus">
                  <label
                    htmlFor="FAMILYSTATUS1"
                    className={
                      familyStatus === "middleClass"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYSTATUS"
                      id="FAMILYSTATUS1"
                      defaultValue={1}
                      type="radio"
                      onClick={() => setFamilyStatus("middleClass")}
                    />
                    Middle class{" "}
                  </label>
                  <label
                    htmlFor="FAMILYSTATUS2"
                    className={
                      familyStatus === "upperMiddleClass"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYSTATUS"
                      id="FAMILYSTATUS2"
                      defaultValue={2}
                      type="radio"
                      onClick={() => setFamilyStatus("upperMiddleClass")}
                    />
                    Upper middle class{" "}
                  </label>
                  <label
                    htmlFor="FAMILYSTATUS3"
                    className={
                      familyStatus === "rich" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYSTATUS"
                      id="FAMILYSTATUS3"
                      defaultValue={3}
                      type="radio"
                      onClick={() => setFamilyStatus("rich")}
                    />
                    Rich{" "}
                  </label>
                  <label
                    htmlFor="FAMILYSTATUS4"
                    className={
                      familyStatus === "affluent"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYSTATUS"
                      id="FAMILYSTATUS4"
                      defaultValue={4}
                      type="radio"
                      onClick={() => setFamilyStatus("affluent")}
                    />
                    Affluent{" "}
                  </label>
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="familystatuserr" />
              </div>
              {/*- Family Type ---*/}
              <div className="paddt20" id="familytypevalue">
                <div className="regis-col1 paddt5">Family Type </div>
                <div className="regis-col4 regis-radio" id="familytype">
                  <label
                    htmlFor="FAMILYTYPE1"
                    className={
                      familyType === "joint" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYTYPE"
                      id="FAMILYTYPE1"
                      defaultValue={1}
                      type="radio"
                      onClick={() => setFamilyType("joint")}
                    />
                    Joint{" "}
                  </label>
                  <label
                    htmlFor="FAMILYTYPE2"
                    className={
                      familyType === "nuclear" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYTYPE"
                      id="FAMILYTYPE2"
                      defaultValue={2}
                      type="radio"
                      onClick={() => setFamilyType("nuclear")}
                    />
                    Nuclear{" "}
                  </label>
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="famtype_err" />
              </div>
              {/*- Family Values ---*/}
              <div className="paddt20" id="familyvalval">
                <div className="regis-col1 paddt5">Family Values</div>
                <div className="regis-col4 regis-radio" id="familyvalue">
                  <label
                    htmlFor="FAMILYVALUE1"
                    className={
                      familyValues === "orthodox"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYVALUE"
                      id="FAMILYVALUE1"
                      defaultValue={1}
                      type="radio"
                      onClick={() => setFamilyValues("orthodox")}
                    />
                    Orthodox{" "}
                  </label>
                  <label
                    htmlFor="FAMILYVALUE2"
                    className={
                      familyValues === "traditional"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYVALUE"
                      id="FAMILYVALUE2"
                      defaultValue={2}
                      type="radio"
                      onClick={() => setFamilyValues("traditional")}
                    />
                    Traditional{" "}
                  </label>
                  <label
                    htmlFor="FAMILYVALUE3"
                    className={
                      familyValues === "moderate"
                        ? "margb10 checked"
                        : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYVALUE"
                      id="FAMILYVALUE3"
                      defaultValue={3}
                      type="radio"
                      onClick={() => setFamilyValues("moderate")}
                    />
                    Moderate{" "}
                  </label>
                  <label
                    htmlFor="FAMILYVALUE4"
                    className={
                      familyValues === "liberal" ? "margb10 checked" : "margb10"
                    }
                  >
                    <input
                      className="radio"
                      name="FAMILYVALUE"
                      id="FAMILYVALUE4"
                      defaultValue={4}
                      type="radio"
                      onClick={() => setFamilyValues("liberal")}
                    />
                    Liberal{" "}
                  </label>
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="famval_err" />
              </div>
              {/*- Any Disability  ---*/}
              <div className="paddt20">
                <div className="regis-col1 paddt5">Any Disability</div>
                <div className="regis-col4 regis-radio" id="physical_status">
                  <label
                    htmlFor="PHYSICAL_STATUS0"
                    className={disability === "none" ? "checked" : ""}
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="PHYSICAL_STATUS"
                      id="PHYSICAL_STATUS0"
                      defaultValue={0}
                      onClick={() => setDisability("none")}
                    />
                    None{" "}
                  </label>
                  <label
                    htmlFor="PHYSICAL_STATUS1"
                    className={
                      disability === "physicallyChallenged" ? "checked" : ""
                    }
                  >
                    <input
                      type="radio"
                      className="radio"
                      name="PHYSICAL_STATUS"
                      id="PHYSICAL_STATUS1"
                      defaultValue={1}
                      onClick={() => setDisability("physicallyChallenged")}
                    />
                    Physically challenged{" "}
                  </label>
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="physicalstatuserr" />
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

export default Reg4;
