import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
// import { MobileVerification } from "./pages/public/verification/Mobile";
// import OtpVerification from "./pages/OtpVerification";
// import { Sidebar } from "./components/Sidebar";
// import Signin from "./Signin";
// import Main from "./pages/public/registration/Registration";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <OtpVerification /> */}
      {/* <MobileVerification /> */}
      <App />
      {/* <Sidebar /> */}
      {/* <Main /> */}
      {/* <Signin /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
