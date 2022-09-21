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
  config.headers = { Authorization: token };
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

// Society Api
export const addNewSocietyApi = async (Data) => {
  const res = await api.post("/society/create", Data, config);
  return res;
};


export const editSocietyApi = async (id, Data) => {
  console.log(id, Data)
  const res = await api.patch(`/society/update/${id}`, Data, config);
  return res;
};



export const getAllSocietiesApi = async () => {
  const res = await api.get("/society/list");
  return res;
};


export const deleteSocietyApi = async (id) => {
  const res = api.delete(`society/delete/${id}`, config);
  return res;
}



// Phase Api
export const addNewPhaseApi = async (Data) => {
  const res = await api.post("/phase/create", Data, config);
  return res;
};


export const editPhaseApi = async (id, Data) => {
  console.log(id, Data)
  const res = await api.patch(`/phase/update/${id}`, Data, config);
  return res;
};



export const getAllPhasesApi = async () => {
  const res = await api.get("/phase/list");
  return res;
};


export const deletePhaseApi = async (id) => {
  const res = api.delete(`phase/delete/${id}`, config);
  return res;
}