export const SET_LOGIN = "SET_LOGIN";
export const GET_LOGIN_DETAIL = "GET_LOGIN_DETAIL";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADER = "SET_LOADER";
export const LOGOUT = "LOGOUT";

const setLogin = ({ login, username }) => ({
  type: SET_LOGIN,
  payload: { login, username }
});

const logout = () => ({
  type: LOGOUT
});
const getLoginDetail = ({ username, password }) => ({
  type: GET_LOGIN_DETAIL,
  payload: { password, username }
});

const setError = message => ({
  type: SET_ERROR,
  payload: { message }
});

const setLoader = loader => ({
  type: SET_LOADER,
  payload: { loader }
});

export default { setLogin, logout, getLoginDetail, setError, setLoader };
