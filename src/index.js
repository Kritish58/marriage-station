import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
// import { RegisterVerification } from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <RegisterVerification /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
