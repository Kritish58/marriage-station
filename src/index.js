import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hobbies } from "./pages/public/complete_profile/hobbies";
import { BasicInfo } from "./pages/public/complete_profile/basic";
import { LifestyleInfo } from "./pages/public/complete_profile/lifestyle";
import { ReligionInfo } from "./pages/public/complete_profile/religion";
import { FamilyInfo } from "./pages/public/complete_profile/family";
import { ImageUpload } from "./pages/public/complete_profile/image";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <Hobbies /> */}
      {/* <BasicInfo /> */}
      {/* <LifestyleInfo /> */}
      {/* <ReligionInfo /> */}
      {/* <FamilyInfo /> */}
      <ImageUpload />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
