import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Submit } from "../../../components";
import { OtpBox } from "./OtpInput";
import "./style.scss";

export const MobileVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  // const handleChange = (element, index) => {
  //   console.log(element);
  //   // if (element.value === 8) {
  //   // }
  //   if (isNaN(element.value)) return false;
  //   setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
  //   if (element.nextSibling) {
  //     element.nextSibling.focus();
  //   }
  // };

  const handleSubmit = async () => {
    let result = window.otpConfirmation;
    console.log(result);
    await result
      .confirm(otp)
      .then((res) => {
        toast.success("Verified", { position: toast.POSITION.TOP_CENTER });
        navigate("/");
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
