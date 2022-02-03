import { Formik, ErrorMessage, Field, Form } from "formik";
// import { Button } from "react-bootstrap";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import API from "./api/API";
import Constants from "./constants";

export default function Signin() {
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );
  const validationSchema = yup.object().shape({
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  const trySignin = async (values) => {
    console.log(values);
    // let data = values.email;
    // const yupObj = yup.object().shape({
    //   data: yup.string().email(),
    // });
    // await yupObj.validateSyncAt({ data });
    await API.post(Constants.apiEndpoint.login, { ...values })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={trySignin}
      validationSchema={validationSchema}
    >
      <Form style={{ maxWidth: "400px", margin: "auto" }}>
        {/* <Form */}
        {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
        <div style={{ margin: "20px" }}>
          <label style={{ display: "block" }}>Email / Mobile no.</label>
          <Field type="text" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" id="dob-err">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
        </div>
        {/* </Form.Group> */}

        {/* <Form.Group className="mb-3" controlId="formBasicPassword"> */}
        <div style={{ margin: "20px" }}>
          <label style={{ display: "block" }}>Password</label>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" id="dob-err">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
        </div>
        {/* </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox"> */}
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
        {/* </Form.Group> */}
        <button variant="primary" type="submit">
          Sign In
        </button>
        {/* </Form> */}
      </Form>
    </Formik>
  );
}
