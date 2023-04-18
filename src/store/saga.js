import { fork } from "redux-saga/effects";
import authSagas from "../modules/auth/redux/sagas";

export default function* rootSagas() {
  yield fork(authSagas);
}
