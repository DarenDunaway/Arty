import postReducer from "./postReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  postReducer: postReducer,
  userReducer: userReducer,
});

export default rootReducer;
