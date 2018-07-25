import { all } from 'redux-saga/effects';
import { fetchBooksWatcher } from './fetchBooksSaga';
<<<<<<< HEAD
/* import { createBookWatcher } from './createBookSaga'; */

export default function* rootSaga() {
  yield all([fetchBooksWatcher()]);
=======
import { createBookWatcher } from './createBookSaga';

export default function* rootSaga() {
  yield all([fetchBooksWatcher(), createBookWatcher()]);
>>>>>>> feat
}
