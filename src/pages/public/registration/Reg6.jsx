import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { firebaseAuth } from "../../../firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import { generateRecaptcha } from "../../../firebase/recaptcha-generator";

import "./styles/RegCont.scss";

import { Spinner, Submit, Textarea } from "../../../components";
import { part6Schema } from "../../../validations/yupSchemas";
import API from "../../../api";
import Constants from "../../../constants";
import { authFailure, authPending, authSuccess } from "../../../redux/reducers";

export const Reg6 = () => {
  const { profile } = useSelector((state) => state.profile);
  const { isLoading } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      description: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: part6Schema,
    onSubmit: () => handleSubmit(formik.values),
  });

  // HANDLE FORM SUBMIT
  const handleSubmit = async (values) => {
    dispatch(authPending());
    await API.post(Constants.apiEndpoint.user.register, {
      ...profile,
      ...values,
    })
      .then(async (res) => {
        dispatch(authSuccess(res));
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        await signInWithPhoneNumber(
          firebaseAuth,
          profile.mobileNumber,
          appVerifier
        )
          .then((res) => {
            window.otpConfirmation = res;
            navigate("/verifyOTP");
          })
          .catch((err) => toast.error("Something went wrong."));
      })
      .catch((error) => {
        dispatch(authFailure());
        toast.error(
          error.response?.data?.message ??
            error.message ??
            "Internal server error."
        );
        navigate("/registration/retry");
      });
  };

  return (
    <div className="main reg2 p-4">
      <h2 style={{ textAlign: "end" }}>80% completed</h2>
      <div className="d-flex flex-row-reverse flex__box">
        <form
          onSubmit={formik.handleSubmit}
          className="m-4 p-4 container-lg rounded-3 flex__form"
        >
          {/* DESCRIPTION INPUT */}
          <Textarea
            name="description"
            label={`Tell about ${profile.firstName}`}
            placeholder="Write something interesting"
            value={formik.values.description}
            onChange={(value) => formik.setFieldValue("description", value)}
            error={formik.touched.description && formik.errors.description}
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
