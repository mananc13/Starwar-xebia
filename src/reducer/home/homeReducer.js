import {
  SET_SEARCH_LIST,
  GET_SEARCH_LIST,
  SET_SELECTED_ITEM,
  SET_HOME_ERROR,
  SET_COUNT,
  RESET_COUNT,
} from "./../../action/home/homeAction";

const initialState = {
  searchList: [],
  loader: false,
  selectedItem: {},
  searchCounter: [],
  count: 0,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.payload.list,
        loader: false,
      };
    case GET_SEARCH_LIST:
      return {
        ...state,
        loader: true,
      };
    case SET_COUNT:
      return {
        ...state,

        count: action.payload.count + 1,
      };
    case RESET_COUNT:
      return {
        ...state,
        error: false,
        count: 0,
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload.item,
      };
    case SET_HOME_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loader: false,
      };
    default:
      return state;
  }
}

export default homeReducer;
