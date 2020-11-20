export const GET_SEARCH_LIST = "GET_SEARCH_LIST";
export const SET_SEARCH_LIST = "SET_SEARCH_LIST";
export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
export const SET_HOME_ERROR = "SET_HOME_ERROR";
export const SET_COUNT = "SET_COUNT";
export const RESET_COUNT = "RESET_COUNT";

const getSearchList = (name, count, countFunction) => ({
  type: GET_SEARCH_LIST,
  payload: { name, count, countFunction }
});

const resetCount = () => ({
  type: RESET_COUNT
});
const setSearchList = ({ list }) => ({
  type: SET_SEARCH_LIST,
  payload: { list }
});

const setSelectedItem = item => ({
  type: SET_SELECTED_ITEM,
  payload: { item }
});

const setError = message => ({
  type: SET_HOME_ERROR,
  payload: { message }
});

const setCount = count => ({
  type: SET_COUNT,
  payload: { count }
});

export default {
  getSearchList,
  setCount,
  resetCount,
  setSearchList,
  setSelectedItem,
  setError
};
