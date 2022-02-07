import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../api";
import { Submit } from "../../../components";
import { OtpBox } from "./OtpInput";
import "./style.scss";

export const MobileVerification = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authState);
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    let result = window.otpConfirmation;
    await result
      .confirm(otp)
      .then(async (res) => {
        toast.success("Verified", { position: toast.POSITION.TOP_CENTER });
        console.log(res);
        await API.patch(
          `Constants.apiEndpoint.user.otpVerified/${user && user.userDetail_id}`
        )
          .then((res) => {
            toast.success(res);
            navigate("/");
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) =>
        toast.error("Wrong OTP!", { position: toast.POSITION.TOP_CENTER })
      );
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
