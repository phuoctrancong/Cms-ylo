import { all } from "redux-saga/effects";

import watchLogin from "./login";
// import watchLogout from "./logout";
import watchGetUserInfo from "./get-user-info";
/**
 * Root saga
 */
export default function* sagas() {
  yield all([
    watchLogin(),
    watchGetUserInfo(),
    //  watchLogout()
  ]);
}
