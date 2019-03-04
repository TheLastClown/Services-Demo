/**
 * Reducer
 */

import { combineReducers } from "redux";
import serviceReducer from "./serviceReducer";
import userReducer from "./userReducer";

export default combineReducers({
  service: serviceReducer,
  user: userReducer,
});
