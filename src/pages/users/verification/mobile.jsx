import { signInWithPhoneNumber } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import { OtpBox, Submit } from "../../../components";
import Constants from "../../../constants";
import { firebaseAuth } from "../../../firebase";
import { generateRecaptcha } from "../../../firebase/recaptcha-generator";
import { authSuccess, logout } from "../../../redux/reducers";
import { toaster } from "../../../utils";
import "./style.scss";

export const RegisterVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authState);
  const [resend, setResend]  = useState(false);
  const [otp, setOtp] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp !== "") {
      try {
        let result = window.otpConfirmation;
        await result.confirm(otp);
        await API.put(
          `${Constants.apiEndpoint.user.otpVerified}/${user && user.user_id}`
        ).then((res) => {
          toaster("success", res);
          dispatch(authSuccess(res));
          navigate("/", {
            replace: true,
          });
        });
      } catch (err) {
        toaster("error", err);
      }
    }
  };

  useEffect(() => {
    const sendOTP = async () => {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      let fireRes = await signInWithPhoneNumber(
        firebaseAuth,
        user.mobileNumber,
        appVerifier
      );
      window.otpConfirmation = fireRes;
    };
    sendOTP();
  }, [user.mobileNumber, resend]);

  return (
    <div className="main d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Verify your mobile number</h2>
        <h5 className="text-center text-secondary">
          Please check OTP on your mobile
          <div className="m-4">
            <OtpBox
              autoFocus
              isNumberInput
              length={6}
              className="otpContainer"
              inputClassName="otpInput"
              onChangeOTP={(otp) => setOtp(otp)}
            />
          </div>
          <Submit text="Submit" />
        </h5>
        <p className="text-muted text-center mt-4  user-select-none">
          Didn't get a code?{" "}
          <span
            className="text-primary  user-select-none"
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => setResend(true)}
          >
            Resend?
          </span>
        </p>
      </form>
      <span
        className="text-primary  user-select-none"
        style={{ cursor: "pointer", position: "fixed", bottom: "10%" }}
        onClick={() => {
          dispatch(logout());
          navigate("/", { replace: true });
        }}
      >
        Logout
      </span>
    </div>
  );
};
