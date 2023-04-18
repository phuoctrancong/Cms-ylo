import { combineReducers } from "redux";
import authReducers from "../modules/auth/redux/reducers";

export default combineReducers({
  ...authReducers,
});
