import { all } from "redux-saga/effects";
import watchSearchColors from "./define-color/search-color";

export default function* sagas() {
  yield all([
    //define-uom
    watchSearchColors(),
    // watchCreateColor(),
    // watchUpdateColor(),
    // watchDeleteColor(),
    // watchGetColorDetails(),
  ]);
}
