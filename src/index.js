import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
// import Signin from "./Signin";
// import Main from "./pages/public/registration/Registration";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Main /> */}
      {/* <Signin /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
