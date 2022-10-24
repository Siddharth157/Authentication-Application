import { combineReducers } from "redux";
import auth from "./authReducer";
import token from "./tokenReducer";
import users from "./usersReducer";
import todos from "./todosReducer";

export default combineReducers({
  auth,
  token,
  users,
  todos
});
