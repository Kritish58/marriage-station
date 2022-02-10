import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../../api";
import { OtpBox, Submit } from "../../../../components";
import Constants from "../../../../constants";
import { authSuccess, logout } from "../../../../redux/reducers";
import { toaster } from "../../../../utils";
import "./style.scss";

export const RegisterVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authState);
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
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
  };

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
        <p className="text-muted text-center mt-4  user-select-none">
          Didn't get a code?{" "}
          <span
            className="text-primary  user-select-none"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Resend?
          </span>
        </p>
      </div>
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
