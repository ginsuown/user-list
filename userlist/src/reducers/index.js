import { combineReducers } from "redux";
import users from "./users";
import filter from "./filter";

const reducers = combineReducers({
  users,
  filter
});

export default reducers;
