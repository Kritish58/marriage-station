import { useFormik } from "formik";
import { useMemo } from "react";
import { Input, Submit } from "../../../components";
import "./styles/RegCont.scss";
import { part6Schema } from "../../../validations/yupSchemas";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import API from "../../../api";
import Constants from "../../../constants";
import { toast } from "react-toastify";

export const Reg6 = () => {
  const { profile } = useSelector((state) => state.profile);
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

  const handleSubmit = async (values) => {
    // try {
    await API.post(Constants.apiEndpoint.register, {
      ...profile,
      ...values,
    })
      .then((res) => console.log(res))
      .catch((error) => {
        toast.error(
          error.response?.data?.message ??
            error.message ??
            "Internal server error."
        );
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
          <Input
            type="textbox"
            name="description"
            label={`Tell about ${profile.firstName}`}
            placeholder="Write something interesting"
            value={formik.values.description}
            onChange={(value) => formik.setFieldValue("description", value)}
            error={formik.touched.description && formik.errors.description}
          />
          <div className="d-flex justify-content-center mt-4">
            <Submit text="Continue" />
          </div>
        </form>
        <div className="adbox flex-grow-1 bg-success">ADVERTISEMENT</div>
      </div>
    </div>
  );
};
