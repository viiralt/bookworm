import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as ActionTypes from '../actions/actionTypes';
import Api from '../../Api';

function* fetchBooks() {
  try {
    const response = yield call(axios.get, Api);
    yield put({
      type: ActionTypes.FETCH_BOOKS_SUCCEEDED,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_BOOKS_FAILED, message: error });
  }
}

export function* fetchBooksWatcher() {
  yield takeEvery(ActionTypes.FETCH_BOOKS_REQUESTED, fetchBooks);
}
