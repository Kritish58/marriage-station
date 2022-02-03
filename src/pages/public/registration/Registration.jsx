import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/RegMain.scss";
import Constants from "../../../constants";
import { setProfile } from "../../../redux/reducers";

const labelStyle = {
  display: "block",
  fontSize: "20px",
  marginBottom: "1px",
};

const inputStyle = {
  border: "none",
  outline: "none",
  appearance: "none",
};

const divStyle = {
  display: "inline",
  margin: "1rem",
  borderRadius: "12px",
  padding: "12px",
};

const spacer = {
  background: "rgba(0,0,0, .1)",
  width: "2px",
  alignSelf: "stretch",
  margin: ".5rem 0",
};

const buttonStyle = {
  background: "#239488",
  alignSelf: "stretch",
  display: "flex",
  alignItems: "center",
  color: "white",
  padding: "0 2rem",
  outline: "none",
  border: "none",
  cursor: "pointer",
  borderRadius: "0 12px 12px 0",
  fontWeight: "500",
  boxShadow: "0 0 40px rgba(0,0,0, .1),0 4px 8px -4px rgba(0,0,0, .2)",
};

const formStyle = {
  display: "flex",
  height: "5rem",
  alignItems: "center",
  boxShadow: "0 0 40px rgba(0,0,0, .1),0 4px 8px -4px rgba(0,0,0, .2)",
  borderRadius: "12px",
  background: "white",
};

const dropdownStyle = {
  cursor: "pointer",
};

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileFor, setProfileFor] = useState("");
  const [profileForError, setProfileForError] = useState(null);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [countryCode, setCountryCode] = useState("+977");
  const [mobileNumber, setMobileNumber] = useState("");
  const [noMobileNumberError, setNoMobileNumberError] = useState(null);
  const [genDrpdwn, setGenDrpdwn] = useState(false);

  const handleProfileFor = (whomFor, sex) => {
    setProfileFor(whomFor);
    setProfileForError("");
    if (!sex) {
      setGenDrpdwn(true);
    } else {
      setGender(sex);
    }
  };

  const handleGenderDrpdwn = (sex) => {
    setGender(sex);
    setGenDrpdwn(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    profileFor === ""
      ? setProfileForError(Constants.errorResponses.profileForError)
      : setProfileForError("");
    name === ""
      ? setNameError(Constants.errorResponses.nameError)
      : setNameError("");
    mobileNumber === ""
      ? setNoMobileNumberError(Constants.errorResponses.noMobileNumberError)
      : setNoMobileNumberError("");
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
          firstName,
          lastName,
          gender,
          mobileNumber: `${countryCode}${mobileNumber}`,
        })
      );
      navigate("/registration/20");
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        pointerEvents: genDrpdwn ? "none" : "",
      }}
      className="main reg__main"
    >
      <span
        className="logInHeader"
        style={{ position: "fixed", top: 40, right: 450, fontWeight: "500" }}
      >
        Already a member?
        <button className="logInButton" style={{ marginLeft: "20px" }}>
          Log In
        </button>
      </span>
      <div>
        <h5 className="msTitle" style={{ marginBottom: "4rem" }}>
          Find your perfect match at <br />
          <span className="display-5 fw-bold">Marriage Station</span>
        </h5>
        <form onSubmit={handleSubmit} className="formStyle" style={formStyle}>
          <div className="divStyle" style={divStyle}>
            <label style={labelStyle}>Profile for</label>
            <Dropdown className="profileFor">
              <Dropdown.Toggle
                as="label"
                id="dropdown-autoclose-true"
                style={dropdownStyle}
              >
                {profileFor === ""
                  ? "Select Profile"
                  : profileFor + " - " + gender}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleProfileFor("myself")}>
                  Myself
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleProfileFor("daughter", "female")}
                >
                  Daughter
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleProfileFor("son", "male")}>
                  Son
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleProfileFor("sister", "female")}
                >
                  Sister
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleProfileFor("brother", "male")}
                >
                  Brother
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleProfileFor("relative")}>
                  Relative
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleProfileFor("friend")}>
                  Friend
                </Dropdown.Item>
              </Dropdown.Menu>
              {genDrpdwn && (
                <div
                  className={genDrpdwn ? "dropdown-menu show genDrpdwn" : ""}
                >
                  <Dropdown.Item
                    onClick={() => handleGenderDrpdwn("male")}
                    style={{ pointerEvents: "initial" }}
                  >
                    Male
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleGenderDrpdwn("female")}
                    style={{ pointerEvents: "initial" }}
                  >
                    Female
                  </Dropdown.Item>
                </div>
              )}
            </Dropdown>
            <div className="errorStyle text-danger">{profileForError}</div>
          </div>
          <div style={spacer} />
          <div className="divStyle" style={divStyle}>
            <label style={labelStyle}>Name</label>
            <input
              type="text"
              className="inputStyle"
              style={inputStyle}
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
            />
            <div className="errorStyle text-danger">{nameError}</div>
          </div>
          <div style={spacer} />
          <div className="divStyle" style={divStyle}>
            <label style={labelStyle}>Mobile Number</label>
            <div className="mobileDiv">
              <Dropdown className="d-inline mx-2 numberDropdown">
                <Dropdown.Toggle
                  as="label"
                  id="dropdown-autoclose-true"
                  className="ctryStyle"
                  style={dropdownStyle}
                >
                  <span>{countryCode}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setCountryCode("+977")}>
                    <img
                      src="https://flagcdn.com/16x12/np.png"
                      srcSet="https://flagcdn.com/32x24/np.png 2x,https://flagcdn.com/48x36/np.png 3x"
                      width="16"
                      height="12"
                      alt="Nepal"
                    />
                    +977
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => setCountryCode("+91")}>
                    <img
                      src="https://flagcdn.com/16x12/in.png"
                      srcSet="https://flagcdn.com/32x24/in.png 2x,https://flagcdn.com/48x36/in.png 3x"
                      width="16"
                      height="12"
                      alt="Nepal"
                    />
                    +91
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => setCountryCode("+61")}>
                    <img
                      src="https://flagcdn.com/16x12/au.png"
                      srcSet="https://flagcdn.com/32x24/au.png 2x,https://flagcdn.com/48x36/au.png 3x"
                      width="16"
                      height="12"
                      alt="Australia"
                    />
                    +61
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                type="text"
                className="inputStyle mobileInput"
                style={inputStyle}
                maxLength={10}
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => {
                  !isNaN(e.target.value) && setMobileNumber(e.target.value);
                  setNoMobileNumberError("");
                }}
              />
            </div>
            <div className="errorStyle text-danger">{noMobileNumberError}</div>
          </div>

          <input
            type="submit"
            style={buttonStyle}
            className="buttonStyle"
            value="Register Now"
          />
        </form>
      </div>
    </div>
  );
};
