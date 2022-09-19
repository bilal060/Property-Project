import { api } from "./../interceptor/interceptor";
// var moment = require("moment-timezone");
export const API_URL = process.env.REACT_APP_API_URL;
export var countryInfo;
export var token;


if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

export const config = {};
if (token) {
  config.headers = { Authorization: `Bearer ${token}` };
}

// User Login API
export const userLoginApi = async (Data) => {
  const res = await api.post("/login", Data);
  return res;
};

// User Register API

export const userRegisterApi = async (Data) => {
  const res = await api.post("/register", Data);

  return res;
};

//  Forgot Password API
export const forgotPasswordApi = async (email) => {
  const res = await api.get(
    "/forgot-password-link?email=" + email
  );
  return res;
};
//  Reset Password Verification API
export const verifyForgotPasswordKey = async (Data) => {
  const res = await api.post(
    "/forgot-password-link-check",
    Data
  );
  return res;
};
// Reset Password API
export const resetPasswordApi = async (Data) => {
  const res = await api.put("/reset-password", Data);
  return res;
};