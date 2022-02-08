import { signInWithPhoneNumber } from "firebase/auth";
import { useFormik } from "formik";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../api";
import {
  Error,
  Input,
  Label,
  LogInModal,
  Spinner,
  Submit,
} from "../../../components";
import { CountryCode } from "../../../components/Form/MobileNumber";
import Constants from "../../../constants";
import { firebaseAuth } from "../../../firebase";
import { generateRecaptcha } from "../../../firebase/recaptcha-generator";
import { authFailure, authPending, authSuccess } from "../../../redux/reducers";
import { retrySchema } from "../../../validations/yupSchemas";

export const Retry = () => {
  const { profile } = useSelector((state) => state.profile);
  const { isLoading } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );

  // HANDLE FORM SUBMIT
  const handleSubmit = async ({ confirmPassword, mobileNumber, ...rest }) => {
    dispatch(authPending());
    try {
      let res = await API.post(Constants.apiEndpoint.user.register, {
        ...profile,
        mobileNumber: `${countryCode}${mobileNumber}`,
        ...rest,
      });
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      let fireRes = await signInWithPhoneNumber(
        firebaseAuth,
        profile.mobileNumber,
        appVerifier
      );
      window.otpConfirmation = fireRes;
      dispatch(authSuccess(res));
      navigate("/verifyNumber", { replace: true });
    } catch (error) {
      toast.error(
        error.response?.data?.message ??
          error.message ??
          "Internal server error."
      );
      dispatch(authFailure());
    }
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: retrySchema,
    onSubmit: () => handleSubmit(formik.values),
  });

  const [forgotPassword, setForgotPassword] = useState(false);

  const [showLogIn, setShowLogIn] = useState(false);

  const [countryCode, setCountryCode] = useState("+977");

  const handleLogInClose = () => setShowLogIn(false);
  const handleLogInShow = () => {
    setShowLogIn(true);
    setForgotPassword(false);
  };

  const handleForgotPassword = () => setForgotPassword(true);

  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Be Unique To Stand Out</h2> */}
      <div className="d-flex flex-row-reverse flex__box">
        <form
          onSubmit={formik.handleSubmit}
          className="m-4 p-4 container-lg rounded-3 flex__form"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h1>Try again</h1>
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={handleLogInShow}
            >
              Log in
            </span>
            <LogInModal
              forgotPassword={forgotPassword}
              handleForgotPassword={handleForgotPassword}
              showLogIn={showLogIn}
              handleLogInClose={handleLogInClose}
            />
          </div>

          {/* EMAIL FIELD */}
          <Input
            type="email"
            name="email"
            label="Email address"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={(value) => formik.setFieldValue("email", value)}
            error={formik.touched.email && formik.errors.email}
          />

          {/* MOBILE NUMBER FIELD */}
          <div className="my-4">
            <Label name="mobileNumber" label="Mobile number" />
            <div className="d-flex align-items-center justify-content-between">
              <CountryCode
                className="flex-shrink-1"
                value={countryCode}
                options={Constants.countryCode}
                onChange={(value) => setCountryCode(value)}
              />
              <Input
                className="flex-grow-1"
                type="text"
                name="mobileNumber"
                style={{ margin: "2px !important" }}
                placeholder="Enter your number"
                values={formik.values.mobileNumber}
                onChange={(value) =>
                  formik.setFieldValue("mobileNumber", value)
                }
                // error={
                //   formik.touched.mobileNumber && formik.errors.mobileNumber
                // }
              />
            </div>
            {formik.touched && formik.errors.mobileNumber && (
              <Error>{formik.errors.mobileNumber}</Error>
            )}
          </div>

          {/* PASSWORD FIELD */}
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={(value) => formik.setFieldValue("password", value)}
            error={formik.touched.password && formik.errors.password}
          />

          {/* CONFIRM PASSWORD FIELD */}
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Re-enter password"
            value={formik.values.confirmPassword}
            onChange={(value) => formik.setFieldValue("confirmPassword", value)}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          <div className="d-flex justify-content-center mt-4">
            {isLoading ? <Spinner /> : <Submit text="Continue" />}
          </div>
        </form>
        <div id="recaptcha"></div>
        <div className="adbox flex-grow-1 bg-success">ADVERTISEMENT</div>
      </div>
    </div>
  );
};
