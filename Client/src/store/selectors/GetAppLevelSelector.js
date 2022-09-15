import { createSelector } from "reselect";

const config = (state) => state.appLevel;

export const getBrowserIDSelector = createSelector(
  config,
  (config) => config.browserId
);
 