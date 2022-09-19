import axios from "axios";
import { toast } from "react-toastify";
export const API_URL = process.env.REACT_APP_API_URL;
export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((request) => {
  if (window.navigator.onLine) {
    return request;
  } else {
    toast.error("Please check your internet connection");
    return;
  }
});
api.interceptors.response.use(
  (response) => {
    switch (response.status) {
      case 200:
        return response;
        break;
      default:
      // code block
    }

    return response;
  },
  function (error) {
    switch (error?.response?.status) {
      case 403:
        //authenticationRoute();
        break;
      case 500:
        // code block
        break;
      default:
      // code block
    }
    return Promise.reject(error.response);
  }
);
