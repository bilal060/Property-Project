import * as api from "../api";
import * as types from "../action-types";
import { toast } from "react-toastify";
import axios from "axios";


export const loginAction = (data) => async (dispatch) => {
  dispatch({
    type: types.USER_LOGIN_SUCCESS,
    payload: data,
    loading: false,
  });
};