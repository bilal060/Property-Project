import * as api from "../api";
import * as types from "../action-types";
import { toast } from "react-toastify";
import axios from "axios";
export const getWebConfigurationsAction = () => async (dispatch) => {
  const res = await api.getWebConfigurations();
  if (res.data.status === 1) {
    api.initializeWebConfs(res.data.data);
    dispatch({ type: types.GET_WEB_CONFIGURATIONS });
  }
};

/* Get All Categories Action  */
export const GetAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_ALL_CATEGORIES_REQUEST,
      loading: true,
    });

    const response = await api.getAllCategories();
    dispatch({
      type: types.GET_ALL_CATEGORIES_SUCCESS,
      payload: response.data,
      loading: false,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ALL_CATEGORIES_FAIL,
      payload: [],
      loading: false,
    });
  }
};

