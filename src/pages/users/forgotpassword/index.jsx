import { useFormik } from "formik";
import { useMemo, useState } from "react";
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
import { toaster } from "../../../utils";
import {
  forgotPasswordEmailSchema,
  forgotPasswordMobileSchema,
} from "../../../validations/yupSchemas";
import "./index.scss";

export const ForgotPasswordPage = () => {
  const [useEmail, setUseEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+977");

  const forgotPasswordValues = useMemo(
    () => ({
      email: "",
      mobileNumber: "",
    }),
    []
  );

  // HANDLE FORGOT PASSWORD SUBMIT
  // HANDLE FORGOT PASSWORD SUBMIT
  const onForgotPassword = async (values) => {
    setIsLoading(true);
    if (useEmail) {
      try {
        let res = await API.post(Constants.apiEndpoint.auth.forgotPassword, {
          email: values.email,
        });
        await localStorage.setItem(Constants.keys.resetToken, res.resetToken);
        toaster("success", "Mail sent.");
      } catch (error) {
        toaster("error", error);
      }
    } else {
      // let number = `${countryCode}${values.mobileNumber}`;
      // try {
      //   generateRecaptcha();
      //   let appVerifier = window.recaptchaVerifier;
      //   let res = await signInWithPhoneNumber(
      //     firebaseAuth,
      //     number,
      //     appVerifier
      //   );
      //   window.otpConfirmation = res;
      //   navigate("/verifyOTP", { replace: true });
      // } catch (err) {
      //   toast.error(err);
      // }
    }
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: forgotPasswordValues,
    validationSchema: useEmail
      ? forgotPasswordEmailSchema
      : forgotPasswordMobileSchema,
    onSubmit: () => onForgotPassword(formik.values),
  });

  return (
    <div className="main d-grid place-items-center">
      <form onSubmit={formik.handleSubmit} className="loginform m-auto">
        <h1 className="my-4">Forgot password</h1>
        <Toggle
          left="Email address"
          right="Mobile number"
          value={useEmail}
          onClick={() => setUseEmail(!useEmail)}
        />
        {useEmail ? (
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="Enter your email"
            values={formik.values.email}
            onChange={(value) => formik.setFieldValue("email", value)}
            error={formik.touched.email && formik.errors.email}
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
                className="flex-grow-1"
                // style={{ margin: "2px !important" }}
                placeholder="Enter your number"
                values={formik.values.mobileNumber}
                onChange={(value) =>
                  formik.setFieldValue("mobileNumber", value)
                }
              />
            </div>
            {formik.touched && formik.errors.mobileNumber && (
              <Error>{formik.errors.mobileNumber}</Error>
            )}
          </div>
        )}

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="d-grid place-items-center mt-4 mb-2">
              <Submit text="Send mail" />
            </div>
          </>
        )}
      </form>
    </div>
  );
};
