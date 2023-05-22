import { fork } from "redux-saga/effects";
import authSagas from "../modules/auth/redux/sagas";
import yoloSagas from "../modules/yolo/redux/sagas";
export default function* rootSagas() {
  yield fork(authSagas);
  yield fork(yoloSagas);
}
