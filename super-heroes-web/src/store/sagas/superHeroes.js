import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  GET_HEROES_INIT,
  ADD_HERO_INIT,
  DELETE_HERO_INIT,
  EDIT_HERO_INIT,
  getHeroesSuccess,
  getHeroesError,
  addHeroSuccess,
  addHeroError,
  deleteHeroSuccess,
  deleteHeroFailure,
  editHeroSuccess,
  editHeroError,
} from "../reducers/superHeroes";
import {
  getHeroesRequest,
  addHeroRequest,
  deleteHeroRequest,
  editHeroRequest,
} from "api-client/superHeroes";

export function* watchGetHeroes() {
  yield takeLatest(GET_HEROES_INIT, getHeroesSaga);
}

export function* getHeroesSaga({ payload }) {
  try {
    const result = yield call(getHeroesRequest, payload);
    console.log(result);
    yield put(
      getHeroesSuccess(
        result.data.heroes,
        result.data.totalPages,
        result.data.currentPage
      )
    );
  } catch (err) {
    yield put(getHeroesError(err));
    console.warn(err);
  }
}

export function* watchAddHero() {
  yield takeLatest(ADD_HERO_INIT, addHeroSaga);
}

export function* addHeroSaga({ payload }) {
  try {
    yield call(addHeroRequest, payload);
    yield put(addHeroSuccess());
  } catch (err) {
    yield put(addHeroError(err));
    yield console.warn(err);
  }
}

export function* watchDeleteHero() {
  yield takeLatest(DELETE_HERO_INIT, deleteHeroSaga);
}

export function* deleteHeroSaga({ payload }) {
  try {
    yield call(deleteHeroRequest, payload);
    yield put(deleteHeroSuccess());
  } catch (err) {
    yield put(deleteHeroFailure(err));
    console.warn(err);
  }
}

export function* watchEditHero() {
  yield takeLatest(EDIT_HERO_INIT, editHeroSaga);
}

export function* editHeroSaga({ payload }) {
  try {
    yield call(editHeroRequest, payload);
    yield put(editHeroSuccess());
  } catch (err) {
    yield put(editHeroError(err));
    yield console.warn(err);
  }
}

export default function* superHeroes() {
  yield all([
    watchGetHeroes(),
    watchAddHero(),
    watchDeleteHero(),
    watchEditHero(),
  ]);
}
