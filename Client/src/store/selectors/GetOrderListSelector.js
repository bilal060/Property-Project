import { createSelector } from "reselect";

const getOrderList = (state) => state.OrderList;

export const getOrderListSelector = createSelector(
  [getOrderList],
  (OrderList) => OrderList.OrderListItems
);
