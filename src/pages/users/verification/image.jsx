import "./style.scss";
import { Field, Form, Formik } from "formik";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Constants from "../../../constants";
import API from "../../../api";
import { imageUplaodSchema } from "../../../validations/yupSchemas";
import placeholderImage from "../../../assets/placeholder.jpg";
import { Spinner, Submit } from "../../../components";
import { useSelector } from "react-redux";
import { toaster } from "../../../utils";
import { useDispatch } from "react-redux";
import { initializeNewUser, logout } from "../../../redux/reducers";

export const ImageUpload = () => {
  const { user } = useSelector((state) => state.authState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [photo1, setPhoto1] = useState("");
  const [displayImage, setDisplayImage] = useState("");
  const initialValues = useMemo(() => ({ photo1: "" }), []);

  const handleSubmit = async () => {
    setLoading(true);
    const files = new FormData();
    files.append("userDetailId", user.UserDetail.userDetail_id);
    files.append("photo1", photo1);
    try {
      let uploadResponse = await API.post(
        Constants.apiEndpoint.photo.uploadProfilePic,
        files,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toaster("success", uploadResponse.status);
      dispatch(initializeNewUser());
      navigate("/", { replace: true });
    } catch (error) {
      toaster("error", error);
    }
    setLoading(false);
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDisplayImage(reader.result);
      }
    };
  };

  return (
    <div className="main reg2 p-4">
      <div className="d-flex flex-row-reverse flex__box"></div>
      <h1>Upload image</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={imageUplaodSchema}
        onSubmit={handleSubmit}
      >
        <Form className="image__form">
          <Field
            type="file"
            accept="image/*"
            className="image__upload"
            name="photo1"
            id="photo1"
            placeholder=""
          >
            {({ field, meta }) => (
              <>
                <div className="div">
                  <label
                    htmlFor="photo1"
                    className="upload__box"
                    style={{
                      background: displayImage
                        ? `url(${displayImage})`
                        : `url(${placeholderImage})`,
                      border: displayImage ? "none" : "4px dashed #239488",
                    }}
                  >
                    <input
                      type="file"
                      name="profile1"
                      className="image__selector"
                      accept="image/*"
                      multiple={false}
                      {...field}
                      onChange={(e) => {
                        imageHandler(e);
                        setPhoto1(e.target.files[0]);
                        field.onChange(e);
                      }}
                    />
                  </label>
                </div>
                {meta.touched && meta.error && (
                  <div className="text-danger text-center">{meta.error}</div>
                )}
              </>
            )}
          </Field>
          {loading ? <Spinner /> : <Submit text="Upload" />}
        </Form>
      </Formik>
      <span
        className="text-primary user-select-none mt-4"
        style={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
        onClick={() => {
          dispatch(logout());
          navigate("/", { replace: true });
        }}
      >
        Logout
      </span>
    </div>
  );
};
