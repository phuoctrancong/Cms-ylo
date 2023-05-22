import {
  CREATE_COLOR_FAILED,
  CREATE_COLOR_SUCCESS,
  CREATE_COLOR_START,
  DELETE_COLOR_FAILED,
  DELETE_COLOR_SUCCESS,
  DELETE_COLOR_START,
  SEARCH_COLORS_FAILED,
  SEARCH_COLORS_SUCCESS,
  SEARCH_COLORS_START,
  GET_COLOR_DETAILS_FAILED,
  GET_COLOR_DETAILS_SUCCESS,
  GET_COLOR_DETAILS_START,
  UPDATE_COLOR_START,
  UPDATE_COLOR_SUCCESS,
  UPDATE_COLOR_FAILED,
} from "../actions/define-color";

const initialState = {
  isLoading: false,
  colorList: [],
  colorDetails: {},
  total: null,
};

/**
 * Sample reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */

export default function defineColor(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COLORS_START:
    case CREATE_COLOR_START:
    case UPDATE_COLOR_START:
    case DELETE_COLOR_START:
    case GET_COLOR_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_COLORS_SUCCESS:
      return {
        ...state,
        colorList: action.payload.list,
        isLoading: false,
        total: action.payload?.total,
      };
    case DELETE_COLOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SEARCH_COLORS_FAILED:
    case CREATE_COLOR_SUCCESS:
    case CREATE_COLOR_FAILED:
    case UPDATE_COLOR_SUCCESS:
    case UPDATE_COLOR_FAILED:
    case DELETE_COLOR_FAILED:
    case GET_COLOR_DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_COLOR_DETAILS_SUCCESS:
      return {
        ...state,
        colorDetails: action.payload,
        isLoading: false,
      };
    // case RESET_UOM_DETAILS_STATE:
    //   return {
    //     ...state,
    //     uomDetails: {},
    //   }
    default:
      return state;
  }
}
