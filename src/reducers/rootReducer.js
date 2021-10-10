import { combineReducers } from "redux";
import fetchingData from "./posterListingReducer";
import onSearchHandler from "./searchReducer";
export default combineReducers({
  fetchingData,
  onSearchHandler,
});
