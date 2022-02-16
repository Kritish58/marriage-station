import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { LogInPage } from "./pages/users/login";
// import { FamilyInfo } from "./pages/users/complete_profile/family";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <LogInPage /> */}
      {/* <FamilyInfo /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
