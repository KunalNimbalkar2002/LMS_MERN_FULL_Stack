import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";

const reducers = combineReducers({
  admin: adminReducer,
});

export default reducers;
