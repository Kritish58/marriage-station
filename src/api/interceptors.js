import { printRequest } from "./logger";
import Constants from "../constants";

export const StatusCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  RESOURCE_NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
};

async function responseInterceptor(error, API) {
  const originalRequest = error.request;
  if (
    error.response?.status === StatusCode.FORBIDDEN &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
    const _token = localStorage.getItem(Constants.keys.session) ?? "";
    if (_token) {
      API.defaults.headers = API.defaults.headers || {};
      API.defaults.headers.common = {
        ...(API.defaults.headers.common ?? {}),
        authorization: _token,
      };
      originalRequest.headers = {
        authorization: _token,
      };
      return API(originalRequest);
    }
  }
  return Promise.reject(error);
}

async function requestInterceptor(config) {
  const _token = localStorage.getItem(Constants.keys.session) ?? "";
  if (_token) {
    config.headers = {
      authorization: _token,
    };
  }
  printRequest(config);
  return config;
}

export { requestInterceptor, responseInterceptor };
