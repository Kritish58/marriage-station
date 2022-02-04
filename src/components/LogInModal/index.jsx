import { useFormik } from "formik";
import { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Input, Spinner, Submit } from "..";
import { authFailure, authPending, authSuccess } from "../../redux/reducers";
import API from "../../api";
import { toast } from "react-toastify";
import {
  forgotPasswordSchema,
  logInSchema,
} from "../../validations/yupSchemas";
import "./index.scss";
import Constants from "../../constants";

export const LogInModal = ({
  forgotPassword,
  showLogIn,
  handleLogInClose,
  handleForgotPassword,
}) => {
  // FORM INITIAL VALUES
  const logInValues = useMemo(
    () => ({
      userID: "",
      password: "",
    }),
    []
  );

  const forgotPasswordValue = useMemo(
    () => ({
      userID: "",
    }),
    []
  );

  //   const checkEmailOrNumber=(value)=>return

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authState);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);

  // HANDLE LOG IN SUBMIT
  const onLogIn = async (values) => {
    console.log(values);
    dispatch(authPending());
    await API.post(Constants.apiEndpoint.login, {
      email: values.userID,
      password: values.password,
    })
      .then((res) => {
        console.log(res);
        dispatch(authSuccess(res.user));
      })
      .catch((error) => {
        dispatch(
          authFailure(
            error.response?.data?.message ??
              error.message ??
              "Internal server error."
          )
        );
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

  // HANDLE FORGOT PASSWORD SUBMIT
  const onForgotPassword = async (values) => {
    setForgotPasswordLoading(true);
    await API.post(Constants.apiEndpoint.forgotPassword, {
      email: values.userID,
    })
      .then((res) => {
        toast.success("Reset link has been sent.", {
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
    setForgotPasswordLoading(false);
  };

  // USE FORMIK
  const logInForm = useFormik({
    initialValues: logInValues,
    validationSchema: logInSchema,
    onSubmit: () => onLogIn(logInForm.values),
  });

  const forgotPasswordForm = useFormik({
    initialValues: forgotPasswordValue,
    validationSchema: forgotPasswordSchema,
    onSubmit: () => onForgotPassword(forgotPasswordForm.values),
  });

  return (
    <Modal show={showLogIn} onHide={handleLogInClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {forgotPassword ? "Reset password" : <>Log In</>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!forgotPassword ? (
          <form onSubmit={logInForm.handleSubmit}>
            <Input
              type="test"
              name="userID"
              label="Email / Mobile No."
              placeholder="Enter email or number"
              values={logInForm.values.userID}
              onChange={(value) => logInForm.setFieldValue("userID", value)}
              error={logInForm.touched.userID && logInForm.errors.userID}
            />
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
        ) : (
          <form onSubmit={forgotPasswordForm.handleSubmit}>
            <Input
              focus
              type="test"
              name="userID"
              label="Email or mobile no."
              placeholder="Enter email or number"
              value={forgotPasswordForm.values.userID}
              onChange={(value) =>
                forgotPasswordForm.setFieldValue("userID", value)
              }
              error={
                forgotPasswordForm.touched.userID &&
                forgotPasswordForm.errors.userID
              }
            />
            {forgotPasswordLoading ? (
              <Spinner />
            ) : (
              <div className="d-grid place-items-center">
                <Submit text="Reset password" />
              </div>
            )}
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
};
