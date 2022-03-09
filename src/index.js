import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { PartnerPreferences } from "./pages/users/verification/partner";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <PartnerPreferences /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
