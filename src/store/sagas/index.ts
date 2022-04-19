import { call, fork, put, takeEvery, spawn } from "redux-saga/effects";

import { getCurrentUser, getJogs } from "../../services";
import { JogsActionTypes } from "../types/jogs";

export function* loadJogs(): any {
  yield put({ type: JogsActionTypes.SET_LOADING });
  const jogs = yield call(getJogs);
  yield put({ type: JogsActionTypes.FETCH_JOGS, payload: jogs.jogs });
}

export function* loadUser(): any {
  const user = yield call(getCurrentUser);
  yield put({ type: JogsActionTypes.FETCH_USER, payload: user });
}

export function* workerLoadDataSaga(): any {
  yield fork(loadJogs);
  yield fork(loadUser);
}

export function* watchLoadDataSaga() {
  yield takeEvery("LOAD_DATA", workerLoadDataSaga);
}

export default function* rootSaga() {
  yield spawn(watchLoadDataSaga);
}
