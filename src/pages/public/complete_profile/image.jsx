import { Field, Form, Formik } from "formik";
import { useMemo } from "react";
import { Submit } from "../../../components";
import "./style.scss";
import illustration from "../../../assets/illustration1.svg";

export const ImageUpload = () => {
  //   const [photo1, setPhoto1] = useState();
  const initialValues = useMemo(() => ({ photo1: "" }), []);
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="main reg2 p-4">
      {/* <h2 style={{ textAlign: "end" }}>Let's know more about you</h2> */}
      <div className="d-flex flex-row-reverse flex__box"></div>
      <h1>Upload image</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="file"
            accept="image/*"
            className="image__upload"
            name="photo1"
            id="photo1"
            placeholder=""
          >
            {({ field, meta }) => (
              <div>
                <label
                  for="photo1"
                  htmlFor="photo1"
                  className="upload__box"
                  style={{
                    background: `url(${illustration})`,
                  }}
                >
                  Select image
                  <input
                    type="file"
                    className="image__selector"
                    accept="image/*"
                    {...field}
                    onChange={(e) => {
                      // setPhoto1(e.target.files[0]);
                      field.onChange(e);
                    }}
                    // hidden
                  />
                </label>
                {/* <span className="ms-2">{photo1?.name}</span> */}
                {meta.touched && meta.error && (
                  <div className="text-danger">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <Submit text="Upload" />
        </Form>
      </Formik>
    </div>
  );
};
