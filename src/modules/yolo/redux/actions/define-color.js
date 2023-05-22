export const SEARCH_COLORS_START = "SEARCH_COLORS_START";
export const SEARCH_COLORS_SUCCESS = "SEARCH_COLORS_SUCCESS";
export const SEARCH_COLORS_FAILED = "SEARCH_COLORS_FAILED";

export const CREATE_COLOR_START = "CREATE_COLOR_START";
export const CREATE_COLOR_SUCCESS = "CREATE_COLOR_SUCCESS";
export const CREATE_COLOR_FAILED = "CREATE_COLOR_FAILED";

export const UPDATE_COLOR_START = "UPDATE_COLOR_START";
export const UPDATE_COLOR_SUCCESS = "UPDATE_COLOR_SUCCESS";
export const UPDATE_COLOR_FAILED = "UPDATE_COLOR_FAILED";

export const DELETE_COLOR_START = "DELETE_COLOR_START";
export const DELETE_COLOR_SUCCESS = "DELETE_COLOR_SUCCESS";
export const DELETE_COLOR_FAILED = "DELETE_COLOR_FAILED";

export const CONFIRM_COLOR_START = "CONFIRM_COLOR_START";
export const CONFIRM_COLOR_SUCCESS = "CONFIRM_COLOR_SUCCESS";
export const CONFIRM_COLOR_FAILED = "CONFIRM_COLOR_FAILED";

export const REJECT_COLOR_START = "REJECT_COLOR_START";
export const REJECT_COLOR_SUCCESS = "REJECT_COLOR_SUCCESS";
export const REJECT_COLOR_FAILED = "REJECT_COLOR_FAILED";

export const GET_COLOR_DETAILS_START = "GET_COLOR_DETAILS_START";
export const GET_COLOR_DETAILS_SUCCESS = "GET_COLOR_DETAILS_SUCCESS";
export const GET_COLOR_DETAILS_FAILED = "GET_COLOR_DETAILS_FAILED";

export const RESET_COLOR_DETAILS_STATE = "RESET_COLOR_DETAILS_STATE";
export function seachColors(payload, onSuccess, onError) {
  return {
    type: SEARCH_COLORS_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}
export function searchColorsSuccess(payload) {
  return {
    type: SEARCH_COLORS_SUCCESS,
    payload: payload,
  };
}

export function searchColorsFailed() {
  return {
    type: SEARCH_COLORS_FAILED,
  };
}
export function createColor(payload, onSuccess, onError) {
  return {
    type: CREATE_COLOR_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

export function createColorSuccess(payload) {
  return {
    type: CREATE_COLOR_SUCCESS,
    payload: payload,
  };
}

export function createColorFailed() {
  return {
    type: CREATE_COLOR_FAILED,
  };
}

export function updateColor(payload, onSuccess, onError) {
  return {
    type: UPDATE_COLOR_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

export function updateColorSuccess(payload) {
  return {
    type: UPDATE_COLOR_SUCCESS,
    payload: payload,
  };
}

export function updateColorFailed() {
  return {
    type: UPDATE_COLOR_FAILED,
  };
}

export function deleteColor(payload, onSuccess, onError) {
  return {
    type: DELETE_COLOR_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

export function deleteColorSuccess(payload) {
  return {
    type: DELETE_COLOR_SUCCESS,
    payload: payload,
  };
}

export function deleteColorFailed() {
  return {
    type: DELETE_COLOR_FAILED,
  };
}
export default {
  seachColors,
  searchColorsFailed,
  searchColorsSuccess,
  createColor,
  createColorFailed,
  createColorSuccess,
  updateColor,
  updateColorFailed,
  updateColorSuccess,
  deleteColor,
  deleteColorFailed,
  deleteColorSuccess,
};
