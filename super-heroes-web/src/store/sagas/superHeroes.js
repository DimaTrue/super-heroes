import { takeLatest, all } from "redux-saga/effects";

import { GET_HEROES_INIT } from "../reducers/superHeroes";

export function* watchGetHeroes() {
  yield takeLatest(GET_HEROES_INIT, getHeroesSaga);
}

export function* getHeroesSaga() {
  yield console.log("SAGA");
}

export default function* superHeroes() {
  yield all([watchGetHeroes()]);
}
