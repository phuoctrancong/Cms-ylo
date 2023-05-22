import { combineReducers } from "redux";
import authReducers from "../modules/auth/redux/reducers";
import yoloReducers from "../modules/yolo/redux/reducers";
export default combineReducers({
  ...authReducers,
  yolo: yoloReducers,
});
