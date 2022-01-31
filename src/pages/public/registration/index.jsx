import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import selectarw from "../../../assets/selectarw.png";
import "./styles/Main.scss";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../redux/reducers/profileSlice";
import Constants from "../../../constants";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileFor, setProfileFor] = useState("");
  const [profileForError, setProfileForError] = useState(null);
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [countryCode, setCountryCode] = useState("+977");
  const [mobileNumber, setMobileNumber] = useState("");
  const [noMobileNumberError, setNoMobileNumberError] = useState(null);
  const [mobileNumberLengthError, setMobileNumberLengthError] = useState(null);
  const [active, setActive] = useState(false);
  const [genDrpdwn, setGenDrpdwn] = useState(false);
  const handleProfileFor = (whomFor, sex) => {
    setProfileFor(whomFor);
    setProfileForError("");
    if (!sex) {
      setGenDrpdwn(true);
    } else {
      setGender(sex);
    }
    setActive(false);
  };

  const handleGenderDrpdwn = (sex) => {
    setGender(sex);
    setGenderError("");
    setGenDrpdwn(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    profileFor === ""
      ? setProfileForError(Constants.errorResponses.profileForError)
      : setProfileForError("");
    gender === ""
      ? setGenderError(Constants.errorResponses.genderError)
      : setGenderError("");
    name === ""
      ? setNameError(Constants.errorResponses.nameError)
      : setNameError("");
    mobileNumber === ""
      ? setNoMobileNumberError(Constants.errorResponses.noMobileNumberError)
      : setNoMobileNumberError("");
    mobileNumber.length !== 10
      ? setMobileNumberLengthError(
          Constants.errorResponses.mobileNumberLengthError
        )
      : setMobileNumberLengthError("");
    if (
      profileFor !== "" &&
      gender !== "" &&
      name !== "" &&
      countryCode !== "" &&
      mobileNumber !== "" &&
      mobileNumber.length === 10
    ) {
      let temp = name.split(" ");
      let firstName = temp[0];
      let lastName = temp[temp.length - 1];
      dispatch(
        setProfile({
          profileFor,
          gender,
          firstName,
          lastName,
          countryCode,
          mobileNumber,
        })
      );
      navigate("/completeRegistration");
    }
  };

  return (
    <div className="part1">
      <form
        className="dh-mainform"
        name="registrationform1"
        onSubmit={handleSubmit}
      >
        <div className="dh-frmbdr">
          <div style={{ position: "relative" }} className="fleft mob-wdth100">
            <div
              className="paddb10 regis-errtxt"
              id="profile-err"
              style={{
                width: 215,
                textAlign: "left",
              }}
            >
              {profileForError}
            </div>
            <div className="paddb10 regis-errtxt" id="gender-err">
              {profileForError === "" && genderError}
            </div>
            <div style={{ position: "relative" }} className="fleft mob-wdth100">
              <div
                className={
                  !profileForError ? "dh-frmfield1" : "dh-frmfield1 regis-err"
                }
                id="reg-border"
              >
                <div className="desp-label txt-left">
                  <label htmlFor="REGISTERED_BY_VALUE">
                    Matrimony Profile for
                  </label>
                </div>
                <div
                  id="dd"
                  className={
                    active
                      ? "desp-drpdwn paddt10 mob-prof active"
                      : "desp-drpdwn paddt10 mob-prof"
                  }
                  tabIndex={0}
                >
                  <span
                    style={{
                      color: "#333333",
                      fontFamily: "'Lato',sans-serif",
                      fontSize: 14,
                      letterSpacing: "0.8px",
                    }}
                    id="selprofile"
                    onClick={() => setActive(true)}
                  >
                    {profileFor === ""
                      ? "Select Profile"
                      : profileFor + " - " + gender}
                  </span>
                  <ul className="regdropdown" id="REGISTERED_BY_VALUE">
                    <li
                      className="setregisteredbyvalue"
                      id={1}
                      style={{ textAlign: "left" }}
                      onClick={() => handleProfileFor("Myself")}
                    >
                      <input type="radio" id="regpro2" defaultValue={1} />
                      <label htmlFor="regpro2">Myself</label>
                    </li>
                    <li
                      className="setregisteredbyvalue"
                      id={9}
                      onClick={() => handleProfileFor("Daughter", "Female")}
                    >
                      <input type="radio" defaultValue={9} />
                      <label htmlFor="regpro3">Daughter</label>
                    </li>
                    <li
                      className="setregisteredbyvalue"
                      id={8}
                      onClick={() => handleProfileFor("Son", "Male")}
                    >
                      <input type="radio" defaultValue={8} />
                      <label htmlFor="regpro3">Son</label>
                    </li>
                    <li
                      className="setregisteredbyvalue"
                      id={11}
                      style={{ textAlign: "left" }}
                      onClick={() => handleProfileFor("Sister", "Female")}
                    >
                      <input type="radio" defaultValue={11} />
                      <label htmlFor="regpro3">Sister</label>
                    </li>
                    <li
                      className="setregisteredbyvalue"
                      id={10}
                      onClick={() => handleProfileFor("Brother", "Male")}
                    >
                      <input type="radio" defaultValue={10} />
                      <label htmlFor="regpro3">Brother</label>
                    </li>
                    <li
                      className="setregisteredbyvalue"
                      id={4}
                      onClick={() => handleProfileFor("Relative")}
                    >
                      <input type="radio" defaultValue={4} />
                      <label htmlFor="regpro3">Relative</label>
                    </li>
                    <li
                      className="setregisteredbyvalue"
                      id={5}
                      onClick={() => handleProfileFor("Friend")}
                    >
                      <input type="radio" defaultValue={5} />
                      <label htmlFor="regpro3">Friend</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={
                  !genderError
                    ? "fleft gender-border"
                    : "fleft gender-border regis-err"
                }
                style={{
                  marginTop: "-5px",
                  display: genDrpdwn ? "block" : "none",
                  position: "absolute",
                  left: 0,
                }}
                id="gender-border"
              >
                <ul className="gendropdn" id="GENDER_VALUE">
                  <li
                    className="fleft"
                    style={{
                      padding: "18px 28px 20px 23px",
                      float: "left",
                      background: "#fff",
                      borderBottomLeftRadius: 10,
                    }}
                    onClick={() => handleGenderDrpdwn("Male")}
                  >
                    <input
                      type="radio"
                      id="gendermale"
                      name="GENDER"
                      defaultValue="M"
                    />
                    <label htmlFor="male">Male</label>
                  </li>
                  <li
                    className="fleft"
                    style={{
                      padding: "18px 64px 20px 23px",
                      float: "left",
                      background: "#fff",
                      borderBottomRightRadius: 10,
                    }}
                    onClick={() => handleGenderDrpdwn("Female")}
                  >
                    <input
                      type="radio"
                      id="genderfemale"
                      name="GENDER"
                      defaultValue="F"
                    />
                    <label htmlFor="female">Female</label>
                  </li>
                  <div className="clear" />
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ float: "left", width: 1, background: "#fff", height: 89 }}
            className="mob-none"
          >
            <div
              style={{
                borderRight: "1px solid #e3e3e3",
                display: "inline-block",
                position: "relative",
                height: 36,
                top: 35,
              }}
            />
          </div>
          <input type="hidden" name="REGISTERED_BY" id="REGISTERED_BY" />
          <div className="fleft mob-wdth100" style={{ position: "relative" }}>
            <div className="paddb10 regis-errtxt" id="name-err">
              {nameError}
            </div>
            <div
              className={
                !nameError
                  ? "fleft dh-frmfield2"
                  : "fleft dh-frmfield2 regis-err"
              }
              id="name-border"
            >
              <div className="desp-label" id="mpname">
                <label htmlFor="NAME">Name</label>
              </div>
              <div style={{ paddingTop: 10 }}>
                <input
                  type="text"
                  name="NAME"
                  id="NAME"
                  maxLength={40}
                  tabIndex={0}
                  className="hp-regform-txtfield-new regisplacehold dh-nametxt"
                  autoComplete="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                  }}
                />
              </div>
            </div>
            <div
              style={{
                float: "left",
                width: 1,
                background: "#fff",
                height: 89,
              }}
              className="mob-none"
            >
              <div
                style={{
                  borderRight: "1px solid #e3e3e3",
                  display: "inline-block",
                  position: "relative",
                  height: 36,
                  top: 35,
                }}
              />
            </div>
            <div style={{ position: "relative" }} className="fleft mob-wdth100">
              <div className="paddb10 regis-errtxt" id="mobile-err">
                {!noMobileNumberError
                  ? mobileNumberLengthError
                  : noMobileNumberError}
              </div>
              <div className="paddb10 regis-errtxt" id="countrycode-err" />
              <div
                className={
                  !noMobileNumberError || !mobileNumberLengthError
                    ? "fleft mobile-border dh-frmfield3"
                    : "fleft mobile-border dh-frmfield3 regis-err"
                }
                id="mobile-border"
              >
                <div className="desp-label">
                  <label htmlFor="M_COUNTRYCODE">Mobile Number</label>
                </div>
                <div style={{ paddingTop: 5 }} className="mobselect">
                  <select
                    className="bm-cntry dh-ctry-code"
                    name="M_COUNTRYCODE"
                    id="M_COUNTRYCODE"
                    style={{ color: "rgb(0, 0, 0)" }}
                    onChange={(e) => setCountryCode(e.target.value)}
                    value={countryCode}
                  >
                    <option style={{ fontWeight: 700 }} value="+977">
                      +977
                    </option>
                  </select>
                  <input
                    type="text"
                    tabIndex={0}
                    placeholder="Enter Number"
                    className="regisplacehold dh-mob-num"
                    name="MOBILENO"
                    id="MOBILENO"
                    maxLength={10}
                    autoComplete="tel"
                    onChange={(e) => {
                      !isNaN(e.target.value) && setMobileNumber(e.target.value);
                      setNoMobileNumberError("");
                    }}
                    value={mobileNumber}
                  />
                </div>
              </div>
            </div>
            <div className="fleft mob-wid100">
              <button
                type="submit"
                tabIndex={0}
                className="hp-button hp-regbtn dh-btn"
                alt="REGISTER FREE"
              >
                Register Free
              </button>
            </div>
            <div className="clear" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
