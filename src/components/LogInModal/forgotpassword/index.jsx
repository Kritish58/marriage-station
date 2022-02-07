import { signInWithPhoneNumber } from "firebase/auth";
import { useFormik } from "formik";
import React, { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input, Label, Spinner, Submit, Toggle } from "../..";
import API from "../../../api";
import Constants from "../../../constants";
import { firebaseAuth } from "../../../firebase";
import { generateRecaptcha } from "../../../firebase/recaptcha-generator";
import {
  forgotPasswordEmailSchema,
  forgotPasswordMobileSchema,
} from "../../../validations/yupSchemas";
import { CountryCode } from "../../Form/MobileNumber";

const ResetPasswordForm = ({ handleLogInClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(true);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+977");

  const forgotPasswordValues = useMemo(
    () => ({
      email: "",
      mobileNumber: "",
    }),
    []
  );
  // HANDLE FORGOT PASSWORD SUBMIT
  const onForgotPassword = async (values) => {
    setForgotPasswordLoading(true);
    if (email) {
      await API.post(Constants.apiEndpoint.auth.forgotPassword, {
        email: values.email,
      })
        .then(async (res) => {
          await localStorage.setItem(Constants.keys.resetToken, res.resetToken);
          toast.success(res.status, {
            position: toast.POSITION.TOP_CENTER,
          });
          handleLogInClose();
        })
        .catch((error) => {
          toast.error(
            error.response?.data?.message ??
              error.message ??
              "Internal server error.",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        });
    } else {
      let number = `${countryCode}${values.mobileNumber}`;
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      await signInWithPhoneNumber(firebaseAuth, number, appVerifier)
        .then((res) => {
          window.otpConfirmation = res;
          navigate("/verifyOTP");
        })
        .catch((err) => toast.error(err));
    }
    setForgotPasswordLoading(false);
  };

  const forgotPasswordForm = useFormik({
    initialValues: forgotPasswordValues,
    validationSchema: email
      ? forgotPasswordEmailSchema
      : forgotPasswordMobileSchema,
    onSubmit: () => onForgotPassword(forgotPasswordForm.values),
  });

  return (
    <Modal.Body>
      <Toggle
        left="Email address"
        right="Mobile number"
        value={email}
        S
        onClick={() => setEmail(!email)}
      />
      <form onSubmit={forgotPasswordForm.handleSubmit}>
        {email ? (
          <Input
            type="test"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={forgotPasswordForm.values.email}
            onChange={(value) =>
              forgotPasswordForm.setFieldValue("email", value)
            }
            error={
              forgotPasswordForm.touched.email &&
              forgotPasswordForm.errors.email
            }
          />
        ) : (
          <div className="container-fluid mb-4">
            <Label name="mobileNumber" label="Mobile number" className="mt-4" />
            <div className="d-flex align-items-center justify-content-between">
              <CountryCode
                value={countryCode}
                options={Constants.countryCode}
                onChange={(value) => setCountryCode(value)}
              />
              <Input
                type="test"
                name="mobileNumber"
                placeholder="Enter your number"
                value={forgotPasswordForm.values.mobileNumber}
                onChange={(value) =>
                  forgotPasswordForm.setFieldValue("mobileNumber", value)
                }
                error={
                  forgotPasswordForm.touched.mobileNumber &&
                  forgotPasswordForm.errors.mobileNumber
                }
              />
            </div>
          </div>
        )}
        {forgotPasswordLoading ? (
          <Spinner />
        ) : (
          <div className="d-grid place-items-center">
            <Submit text="Reset password" />
          </div>
        )}
      </form>
      <div id="recaptcha"></div>
    </Modal.Body>
  );
};
export default ResetPasswordForm;
