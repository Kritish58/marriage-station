import { useFormik } from "formik";
import React, { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Input, Label, Spinner, Submit, Toggle } from "../..";
import API from "../../../api";
import Constants from "../../../constants";
import { authFailure, authPending, authSuccess } from "../../../redux/reducers";
import {
  logInWithEmailSchema,
  logInWithMobileSchema,
} from "../../../validations/yupSchemas";
import { CountryCode } from "../../Form/MobileNumber";

const LoginForm = ({ handleForgotPassword }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authState);
  const [useEmail, setUseEmail] = useState(true);
  const [countryCode, setCountryCode] = useState("+977");

  const logInValues = useMemo(
    () => ({
      email: "",
      mobileNumber: "",
      password: "",
    }),
    []
  );

  // HANDLE LOG IN SUBMIT
  const onLogIn = async (values) => {
    dispatch(authPending());
    let data = useEmail
      ? { email: values.email, password: values.password }
      : {
          mobileNumber: `${countryCode}${values.mobileNumber}`,
          password: values.password,
        };

    await API.post(Constants.apiEndpoint.auth.login, data)
      .then((res) => {
        console.log(res);
        dispatch(authSuccess(res));
      })
      .catch((error) => {
        dispatch(authFailure());
        toast.error(
          error.response?.data?.message ??
            error.message ??
            "Internal server error.",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
  };

  // USE FORMIK
  const logInForm = useFormik({
    initialValues: logInValues,
    validationSchema: useEmail ? logInWithEmailSchema : logInWithMobileSchema,
    onSubmit: () => onLogIn(logInForm.values),
  });

  return (
    <Modal.Body>
      <Toggle
        left="Email address"
        right="Mobile number"
        value={useEmail}
        onClick={() => setUseEmail(!useEmail)}
      />
      <form onSubmit={logInForm.handleSubmit}>
        {useEmail ? (
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="Enter your email"
            values={logInForm.values.email}
            onChange={(value) => logInForm.setFieldValue("email", value)}
            error={logInForm.touched.email && logInForm.errors.email}
          />
        ) : (
          <div className="container-fluid p-0">
            <Label name="mobileNumber" label="Mobile number" className="mt-4" />
            <div className="d-flex align-items-center justify-content-between">
              <CountryCode
                value={countryCode}
                options={Constants.countryCode}
                onChange={(value) => setCountryCode(value)}
              />
              <Input
                type="text"
                name="mobileNumber"
                style={{ margin: "2px !important" }}
                placeholder="Enter your number"
                values={logInForm.values.mobileNumber}
                onChange={(value) =>
                  logInForm.setFieldValue("mobileNumber", value)
                }
                error={
                  logInForm.touched.mobileNumber &&
                  logInForm.errors.mobileNumber
                }
              />
            </div>
          </div>
        )}
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          values={logInForm.values.password}
          onChange={(value) => logInForm.setFieldValue("password", value)}
          error={logInForm.touched.password && logInForm.errors.password}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="d-grid place-items-center m-2">
              <Submit text="Log in" />
            </div>
            <span
              className="text-primary d-flex justify-content-center"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={handleForgotPassword}
            >
              Forgot password?
            </span>
          </>
        )}
      </form>
    </Modal.Body>
  );
};
export default LoginForm;
