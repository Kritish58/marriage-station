import { useFormik } from "formik";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import {
  Error,
  Input,
  Label,
  Spinner,
  Submit,
  Toggle,
} from "../../../components";
import { CountryCode } from "../../../components/Form/MobileNumber";
import Constants from "../../../constants";
import {
  authFailure,
  authPending,
  authSuccess,
  setMobileNumber,
} from "../../../redux/reducers";
import { toaster } from "../../../utils";
import {
  logInWithEmailSchema,
  logInWithMobileSchema,
} from "../../../validations/yupSchemas";
import "./login.scss";

export default function AdminLogInPage({
  forgotPassword,
  showLogIn,
  handleLogInClose,
  handleForgotPassword,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authState);

  const logInValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  // HANDLE LOG IN SUBMIT
  const onLogIn = async (values) => {
    dispatch(authPending());
    try {
      let res = await API.post(Constants.apiEndpoint.auth.login, values);
      dispatch(authSuccess(res));
      navigate("/", { replace: true });
    } catch (error) {
      toaster("error", error);
      dispatch(authFailure());
    }
  };

  // USE FORMIK
  const logInForm = useFormik({
    initialValues: logInValues,
    validationSchema: logInWithEmailSchema,
    onSubmit: () => onLogIn(logInForm.values),
  });
  return (
    <div className="main d-grid place-items-center">
      <form onSubmit={logInForm.handleSubmit} className="loginform m-auto">
        <h1 className="my-4">Log In</h1>
        <Input
          type="text"
          name="email"
          label="Email"
          placeholder="Enter your email"
          values={logInForm.values.email}
          onChange={(value) => logInForm.setFieldValue("email", value)}
          error={logInForm.touched.email && logInForm.errors.email}
        />
        <Input
          className="mt-4"
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
            <div className="d-grid place-items-center mt-4 mb-2">
              <Submit text="Log in" />
            </div>
            <span
              className="text-primary d-flex justify-content-center"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => navigate("/forgot")}
            >
              Forgot password?
            </span>
          </>
        )}
      </form>
    </div>
  );
}
