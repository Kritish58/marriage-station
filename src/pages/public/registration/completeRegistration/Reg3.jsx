import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Constants from "../../../../constants";
import { setProfile } from "../../../../redux/reducers/profileSlice";
import "../styles/completeRegistration.scss";
import "../styles/responsive.scss";
import { part3Schema } from "../validations/yupSchemas";
import selectarw from "../../../../assets/selectarw.png";

const Reg3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ifDosh, setIfDosh] = useState("no");
  const [marryAnotherCommunity, setMarryAnotherCommunity] = useState(false);
  const [manglik, setManglik] = useState(false);
  const [sarpaDosh, setSarpaDosh] = useState(false);
  const [kalaSarpaDosh, setKalaSarpaDosh] = useState(false);
  const [rahuDosh, setRahuDosh] = useState(false);
  const [kethuDosh, setKethuDosh] = useState(false);
  const [kalathraDosh, setKalathraDosh] = useState(false);
  const profile = useSelector((state) => state.profile.profile);

  const initialValues = useMemo(
    () => ({
      caste: "",
      subCaste: "",
      gothra: "",
    }),
    []
  );
  if (!profile) return <Navigate to="/" />;

  const onSubmit = async (values) => {
    await dispatch(
      setProfile({
        ...profile,
        ifDosh,
        marryAnotherCommunity,
        manglik,
        sarpaDosh,
        kalaSarpaDosh,
        rahuDosh,
        kethuDosh,
        kalathraDosh,
        ...values,
      })
    );
    await navigate("/completeRegistration4");
  };
  return (
    <div className="rest__parts">
      {/* Container Start*/}
      {/*- FORM 1 START ---*/}
      <div className="regis-level religionform" style={{ display: "block" }}>
        Great! You have completed <span className="fs30">40% </span>
      </div>
      <div
        className="regis-container religionform"
        style={{ display: "block" }}
      >
        <div className="txt-center regis-left">ADVERTISEMENT</div>
        <div className="regis-right" style={{ minHeight: 490 }}>
          <Formik
            className="paddl5 paddt35 mob-rgtpadd"
            initialValues={initialValues}
            validationSchema={part3Schema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="paddlh2">
                <h2>Caste details help us find better matches</h2>
              </div>
              {/*-CASTE ---*/}
              <div className="paddt40">
                {/* <input
                  type="hidden"
                  defaultValue
                  name="SEOCASTE"
                  id="SEOCASTE"
                /> */}
                <div className="regis-col1 paddt5">Caste</div>
                <div
                  className="regis-col2 posrelative regis-select"
                  id="email-border"
                >
                  {/* <Field
                    type="text"
                    name="caste"
                    id="caste"
                    placeholder="Enter your caste"
                    maxLength={50}
                    className="regis-input"
                  /> */}
                  <Field
                    as="select"
                    name="caste"
                    id="caste"
                    size={1}
                    className="paddl5"
                  >
                    <option value="">Select</option>
                    {Constants.caste.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="clear" />
                {/* <div className="regis-errtxt" id="caste_err" /> */}
                <ErrorMessage name="caste" id="caste-err">
                  {(msg) => <div className="regis-errtxt">{msg}</div>}
                </ErrorMessage>
                <div className="clear" />
                <div className="regis-chktxt vmiddle">
                  <input
                    name="SAMECASTE"
                    id="SAMECASTE1"
                    type="checkbox"
                    className="vmiddle"
                    checked={marryAnotherCommunity}
                    onChange={() =>
                      setMarryAnotherCommunity(!marryAnotherCommunity)
                    }
                  />
                  <span>Willing to marry from other communities also</span>
                </div>
              </div>
              {/*-SUB CASTE ---*/}
              <div className="paddt20 h50" id="subcaste_div">
                <div className="regis-col1 paddt5">Subcaste - (Optional)</div>
                <div className="regis-col2 posrelative" id="email-border">
                  {/* <input
                    type="text"
                    name="subCaste"
                    id="caste"
                    placeholder="Enter your sub-caste"
                    maxLength={50}
                    className="regis-input "
                  /> */}
                  <Field
                    type="text"
                    name="subCaste"
                    placeholder="Enter your sub-caste"
                    maxLength={50}
                    className="regis-input"
                  />
                </div>
                <div className="clear" />
                <div className="regis-errtxt" id="subcaste_err" />
              </div>
              <div className="clear" />
              {/*-Gothra(m) ---*/}
              <div className="paddt20 h50" id="GOTHRA_BLOCK">
                <div className="regis-col1 paddt5">Gothra(m) - (Optional)</div>
                <div className="regis-col2 posrelative" id="email-border">
                  {/* <input
                    type="text"
                    name="gothra"
                    id="caste"
                    placeholder="Enter your gothra"
                    maxLength={50}
                    className="regis-input "
                  /> */}

                  <Field
                    type="text"
                    name="gothra"
                    placeholder="Enter your sub-caste"
                    maxLength={50}
                    className="regis-input"
                  />
                </div>
                {/* <div
                  className="regis-col3"
                  id="gooption"
                  style={{ display: "block" }}
                >
                  <div className="paddl25 paddt20">(Optional)</div>
                </div> */}
                <div className="clear" />
                <div className="regis-errtxt" id="gothra_err" />
              </div>
              {/*-DOSHAM ---*/}
              <div className="paddt30 h50" id="MANGLIKPART">
                <div className="regis-col1 paddt5">Dosh</div>
                <div className="regis-col2 regis-radio" id="domainmangilk">
                  <div id="manglik">
                    <label
                      htmlFor="MANGLIK2"
                      className={
                        ifDosh === "no" ? "margb10 checked" : "margb10"
                      }
                    >
                      <input
                        type="radio"
                        className="radio"
                        name="manglik"
                        id="MANGLIK2"
                        onClick={() => setIfDosh("no")}
                      />
                      No
                    </label>
                    <label
                      htmlFor="MANGLIK1"
                      className={
                        ifDosh === "yes" ? "margb10 checked" : "margb10"
                      }
                    >
                      <input
                        type="radio"
                        className="radio"
                        name="MANGLIK"
                        id="MANGLIK1"
                        onClick={() => setIfDosh("yes")}
                      />
                      Yes
                    </label>
                    <label
                      htmlFor="MANGLIK3"
                      className={
                        ifDosh === "dontKnow" ? "margb10 checked" : "margb10"
                      }
                    >
                      <input
                        type="radio"
                        className="radio"
                        name="MANGLIK"
                        id="MANGLIK3"
                        onClick={() => setIfDosh("dontKnow")}
                      />
                      Don't know
                    </label>
                  </div>
                </div>
                <div className="clear" />
              </div>
              <div
                className="h50"
                id="dosham_regdiv"
                style={{ display: ifDosh === "yes" ? "block" : "none" }}
              >
                <div className="regis-col1 paddt5" />
                <div className="regis-col4 regis-checkbx" id="manglik">
                  <div id="manglik">
                    <div id="doshamDiv">
                      <input
                        name="MANGLIK_M"
                        id="MANGLIK_M4"
                        type="checkbox"
                        value={manglik}
                        onChange={() => setManglik(!manglik)}
                      />
                      <label htmlFor="MANGLIK_M4" className="margb10">
                        Manglik
                      </label>
                      <input
                        name="MANGLIK_M"
                        id="MANGLIK_M5"
                        type="checkbox"
                        value={sarpaDosh}
                        onChange={() => setSarpaDosh(!sarpaDosh)}
                      />
                      <label htmlFor="MANGLIK_M5" className="margb10">
                        Sarpa Dosh
                      </label>
                      <input
                        name="MANGLIK_M"
                        id="MANGLIK_M10"
                        type="checkbox"
                        value={kalaSarpaDosh}
                        onChange={() => setKalaSarpaDosh(!kalaSarpaDosh)}
                      />
                      <label htmlFor="MANGLIK_M10" className="margb10">
                        Kala Sarpa Dosh
                      </label>
                      <input
                        name="MANGLIK_M"
                        id="MANGLIK_M20"
                        type="checkbox"
                        value={rahuDosh}
                        onChange={() => setRahuDosh(!rahuDosh)}
                      />
                      <label htmlFor="MANGLIK_M20" className="margb10">
                        Rahu Dosh
                      </label>
                      <input
                        name="MANGLIK_M"
                        id="MANGLIK_M40"
                        type="checkbox"
                        value={kethuDosh}
                        onChange={() => setKethuDosh(!kethuDosh)}
                      />
                      <label htmlFor="MANGLIK_M40" className="margb10">
                        Kethu Dosh
                      </label>
                      <input
                        name="MANGLIK_M"
                        id="MANGLIK_M80"
                        type="checkbox"
                        value={kalathraDosh}
                        onChange={() => setKalathraDosh(!kalathraDosh)}
                      />
                      <label htmlFor="MANGLIK_M80" className="margb10">
                        Kalathra Dosh
                      </label>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div
                  className="regis-errtxt"
                  style={{ display: "none", marginTop: 0 }}
                  id="errdoshacheck"
                />
              </div>
              {/*-DOSHAM END ---*/}
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
      {/*- FORM 1 END ---*/}
      {/* Container End*/}
      <div align="center" className="paddt20 paddb20">
        Copyright © 2021. All rights reserved.
      </div>
    </div>
  );
};

export default Reg3;
