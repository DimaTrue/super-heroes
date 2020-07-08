import { takeLatest, put, all } from "redux-saga/effects";

import {
  GET_HEROES_INIT,
  getHeroesSuccess,
  getHeroesError,
} from "../reducers/superHeroes";
import { getHeroesRequest } from "../../api-client/superHeroes";

export function* watchGetHeroes() {
  yield takeLatest(GET_HEROES_INIT, getHeroesSaga);
}

export function* getHeroesSaga({ payload }) {
  try {
    const result = yield getHeroesRequest(payload);
    console.log(result);
    yield put(getHeroesSuccess(result.data.heroes, result.data.totalPages));
  } catch (err) {
    yield put(getHeroesError(err));
    console.warn(err);
  }
}

export default function* superHeroes() {
  yield all([watchGetHeroes()]);
}
