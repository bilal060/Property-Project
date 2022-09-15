import { createSelector } from "reselect";

const detail = (state) => state.ProductDetails;

export const productDetail = createSelector(
    detail,
  (productDetail) => productDetail
);
