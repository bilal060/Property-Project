import { createSelector } from "reselect";

const review = (state) => state.ProductDetails;

export const productReview = createSelector(
    review,
  (productReview) => productReview.productReview
);
