import { call, put, takeLatest } from "redux-saga/effects";

import {
  searchColorsFailed,
  searchColorsSuccess,
  SEARCH_COLORS_START,
} from "../../actions/define-color";
import { api } from "../../../../../services/api";

export const searhColorApi = (params) => {
  const uri = "v1/yolo/colors/list";
  return api.get(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doSearchColors(action) {
  try {
    const response = yield call(searhColorApi, action?.payload);
    if (response?.statusCode === 200) {
      const payload = {
        list: response.data,
        total: response.data?.meta?.total,
      };
      yield put(searchColorsSuccess(payload));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(searchColorsFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

export default function* watchSearchColors() {
  yield takeLatest(SEARCH_COLORS_START, doSearchColors);
}
