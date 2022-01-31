import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import API from "../../../../api/API";
import { printResponseError } from "../../../../api/logger";
// import authRequests from "../../../../api/authRequests";
// import useAPI from "../../../../api/useAPI";
import Constants from "../../../../constants";
import "../styles/completeRegistration.scss";

const Reg6 = () => {
  const profile = useSelector((state) => state.profile.profile);
  const navigate = useNavigate();
  // const registerUser = useAPI(authRequests.registerUser);

  if (!profile) return <Navigate to="/" />;
  const onSubmit = () => {
    // registerUser.sendRequest(profile);
    // axios
    //   .post("http://localhost:4001/api/v1/user/register", profile)
    //   .then((res) => res.data.token && navigate("/loggedin"))
    //   .catch((err) => console.log(err.message));
    API.post(Constants.apiEndpoint.register, profile)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="rest__parts">
      <div className="regis-level aboutform">
        Great! You have completed <span className="fs30">90% </span>{" "}
      </div>
      <div className="regis-container aboutform">
        <div className="txt-center regis-left">ADVERTISEMENT</div>
        <div className="regis-right">
          <div className="paddl5 paddt35 mob-rgtpadd">
            <div className="paddlh2">
              <h2>
                Let's write something interesting about
                {profile.profileFor === "Myself"
                  ? " you"
                  : " your " + profile.profileFor.toLowerCase()}
                &nbsp;
              </h2>
            </div>
            <div className="paddt25">
              <div className="regis-col1 paddt5">
                About
                {profile.profileFor === "Myself"
                  ? " you"
                  : " your " + profile.profileFor.toLowerCase()}
              </div>
              <div className="regis-radiocol2 regis-radio">
                <textarea
                  className="regis-abttxtarea"
                  title="spellcheck"
                  accessKey="/spell_checker/spell_checker.php"
                  name="DESCDET"
                  id="DESCRIPTION1"
                  placeholder="Write something that stands out"
                />
              </div>
              <div className="clear" />
            </div>
            <div className="paddt10 regis-errtxt" id="descdet_err" />
            <div className="paddt30 paddb30 txt-center">
              <button
                className="hp-button"
                alt="Continue"
                type="submit"
                onClick={onSubmit}
              >
                Continue
              </button>
            </div>
          </div>
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

export default Reg6;
