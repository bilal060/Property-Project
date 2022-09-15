import { api } from "./../interceptor/interceptor";
// var moment = require("moment-timezone");
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
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
  const res = await api.post(API_URL + "/customer/login", Data);
  return res;
};

// User Register API

export const userRegisterApi = async (Data) => {
  const res = await api.post(API_URL + "/customer/register", Data);

  return res;
};

//  Forgot Password API
export const forgotPasswordApi = async (email) => {
  const res = await api.get(
    API_URL + "/customer/forgot-password-link?email=" + email
  );
  return res;
};
//  Reset Password Verification API
export const verifyForgotPasswordKey = async (Data) => {
  const res = await api.post(
    API_URL + "/customer/forgot-password-link-check",
    Data
  );
  return res;
};
// Reset Password API
export const resetPasswordApi = async (Data) => {
  const res = await api.put(API_URL + "/customer/reset-password", Data);
  return res;
};