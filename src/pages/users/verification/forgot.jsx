import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../api";
import { OtpBox, Submit } from "../../../components";
import Constants from "../../../constants";
import { authSuccess } from "../../../redux/reducers";
import "./style.scss";

export const FirebaseResetVerification = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    let result = window.otpConfirmation;
    await result
      .confirm(otp)
      .then(async (res) => {
        toast.success("Verified", { position: toast.POSITION.TOP_CENTER });
        console.log(res);
        await API.put(`${Constants.apiEndpoint.auth.resetPassword}/${_t}`)
          .then((res) => {
            toast.success(res);
            dispatch(authSuccess(res));
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) =>
        toast.error("Wrong OTP!", { position: toast.POSITION.TOP_CENTER })
      );
  };

  let _t = localStorage.getItem(Constants.keys.resetToken);
  if (!_t) return <Navigate replace to="/" />;
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div>
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
          <Submit text="Submit" onClick={handleSubmit} />
        </h5>
        <p className="text-muted text-center mt-4">
          Didn't get a code?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Resend?
          </span>
        </p>
      </div>
      <Link to="/" style={{ position: "fixed", bottom: "10%" }}>
        Skip
      </Link>
    </div>
  );
};
