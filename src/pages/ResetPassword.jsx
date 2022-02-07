import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api";
import { Input, Submit } from "../components";
import Constants from "../constants";
import { resetPasswordSchema } from "../validations/yupSchemas";

export const ResetPassword = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate("");

  useEffect(() => {
    let _t = localStorage.getItem(Constants.keys.resetToken);
    if (_t) {
      setToken(_t);
    } else {
      navigate("/");
    }
  }, [token, navigate]);
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
    await API.patch(`${Constants.apiEndpoint.resetPassword}/${token}`, {
      password,
    })
      .then((res) => {
        localStorage.removeItem(Constants.keys.resetToken);
        toast.success(res.status, { position: toast.POSITION.TOP_CENTER });
        console.log(res);
        navigate("/");
      })
      .catch((err) =>
        toast.error(err, { position: toast.POSITION.TOP_CENTER })
      );
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
        className="m-4 p-4 w-25 container rounded-3"
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
        <Submit text="Submit" />
      </form>
    </div>
  );
};
