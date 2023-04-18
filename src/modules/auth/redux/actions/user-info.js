export const GET_USER_INFO_START = "AUTH_GET_USER_INFO_START";
export const GET_USER_INFO_SUCCESS = "AUTH_GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "AUTH_GET_USER_INFO_FAILED";
export function getUserInfo(payload, onSuccess, onError) {
  return {
    type: GET_USER_INFO_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Get user permission details by id success action
 * @param {*} payload
 * @returns {object}
 */
export function getUserInfoSuccess(payload) {
  return {
    type: GET_USER_INFO_SUCCESS,
    payload: payload,
  };
}

/**
 * Get user permission details by id failed action
 * @returns {object}
 */
export function getUserInfoFailed() {
  return {
    type: GET_USER_INFO_FAILED,
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // updateUserInfo,
  // updateUserInfoSuccess,
  // updateUserInfoFailed,
  getUserInfo,
  getUserInfoSuccess,
  getUserInfoFailed,
  // changePassword,
  // changePasswordFailed,
  // changePasswordSuccess,
};
