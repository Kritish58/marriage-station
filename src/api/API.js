import Axios from "axios";

import Constants from "../constants";

import { printResponse, printResponseError } from "./logger";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const API = Axios.create({
  baseURL: Constants.env.APP_DOMAIN + "/api/v1",
  timeout: Constants.env.MAX_CONNECTION_TIMEOUT,
  headers: {
    // Connection: "close",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(requestInterceptor, (error) => {
  printResponseError(error);
  throw error;
});
API.interceptors.response.use(
  (response) => {
    printResponse(response);
    return response.data;
  },
  (error) => responseInterceptor(error, API)
);

export default API;
