import { useFormik } from "formik";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../api";
import { Input, Submit } from "../../../components";
import Constants from "../../../constants";
import { authSuccess } from "../../../redux/reducers";
import { toaster } from "../../../utils";
import { resetPasswordSchema } from "../../../validations/yupSchemas";
import "./style.scss";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      password: "",
      confirmPassword: "",
    }),
    []
  );

  // HANDLE FORM SUBMIT
  const handleSubmit = async ({ password, ...rest }) => {
    try {
      let res = await API.patch(
        `${Constants.apiEndpoint.auth.resetPassword}/${token}`,
        {
          password,
        }
      );
      toaster("success", res.status);
      // dispatch(authSuccess(res));
      navigate("/login", { replace: true });
    } catch (err) {
      toaster("fail", err);
    }
    localStorage.removeItem(Constants.keys.resetToken);
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: () => handleSubmit(formik.values),
  });

  return (
    <div className="main d-flex align-items-center justify-content-center">
      <form
        onSubmit={formik.handleSubmit}
        className="m-4 p-4 container rounded-3 reset__form"
      >
        <h2>Reset Password</h2>
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
          {/* {isLoading ? <Spinner /> : <Submit text="Continue" />} */}
          <Submit text="Submit" />
        </div>
      </form>
    </div>
  );
};
