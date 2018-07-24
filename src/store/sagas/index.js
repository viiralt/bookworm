import { all } from 'redux-saga/effects';
import { fetchBooksWatcher } from './fetchBooksSaga';
import { createBookWatcher } from './createBookSaga';

export default function* rootSaga() {
  yield all([fetchBooksWatcher(), createBookWatcher()]);
}
