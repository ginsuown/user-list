import { combineReducers } from "redux";
import users from "./users";
import filter from "./filter";
import page from "./page";

const reducers = combineReducers({
  users,
  filter,
  page
});

export default reducers;
