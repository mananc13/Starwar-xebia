import { put, debounce } from "redux-saga/effects";

import homeAction from "./../../action/home/homeAction";
import { GET_SEARCH_LIST } from "./../../action/home/homeAction";

import { PLANET_URL } from "./../../general/util/constant";

export function* getSearchList(action) {
  const { name, countFunction } = action.payload;
  let { count } = action.payload;
  const url = `${PLANET_URL}?search=${name}`;

  try {
    if (
      count > 14 &&
      countFunction > 0 &&
      sessionStorage.getItem("loggedInUser") !== "Luke Skywalker"
    ) {
      return yield put(
        homeAction.setError(
          "Max search count reached. Kindly Try After a minute."
        )
      );
    }

    const { results } = yield fetch(url).then((response) => response.json());
    yield put(homeAction.setSearchList({ list: results }));
    yield put(homeAction.setError(false));
    yield put(homeAction.setCount(count));
  } catch (e) {
    yield put(homeAction.setError("Internal server error"));
  }
}

function* watchHomeSaga() {
  yield debounce(500, GET_SEARCH_LIST, getSearchList);
}

export default watchHomeSaga;
