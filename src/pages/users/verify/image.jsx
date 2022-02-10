import "./style.scss";
import { Field, Form, Formik } from "formik";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Constants from "../../../constants";
import API from "../../../api";
import { imageUplaodSchema } from "../../../validations/yupSchemas";
import placeholderImage from "../../../assets/placeholder.jpg";
import { Submit } from "../../../components";

export const ImageUpload = () => {
  const navigate = useNavigate();
  const [photo1, setPhoto1] = useState("");
  const [displayImage, setDisplayImage] = useState("");
  const initialValues = useMemo(() => ({ photo1: "" }), []);

  const handleSubmit = async (values) => {
    const files = new FormData();
    const userDetailId = "6fbc5237-914d-474a-86c0-e77474ebb9b3";
    files.append("userDetailId", userDetailId);
    files.append("photo1", photo1);
    await API.post(Constants.apiEndpoint.photo.uploadProfilePic, files, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        toast.success(res.status);
        navigate("/", { replace: true });
      })
      .catch((error) =>
        toast.error(
          error.response?.data?.message ??
            error.message ??
            "Internal server error."
        )
      );
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
            {/* TODO: COMPLETE IMAGE UPLOADER */}
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
                      border: displayImage ? "none" : "2px solid #239488",
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
          <Submit text="Upload" />
        </Form>
      </Formik>
    </div>
  );
};
