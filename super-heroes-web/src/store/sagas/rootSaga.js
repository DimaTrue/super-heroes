import { all } from "redux-saga/effects";

import superHeroes from "./superHeroes";

export default function* rootSaga() {
  yield all([superHeroes()]);
}
