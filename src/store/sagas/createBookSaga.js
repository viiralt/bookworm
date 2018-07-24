import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as ActionTypes from '../actions/actionTypes';
import Api from '../../Api';

function* createBook() {
  try {
    const response = yield call(axios.get, Api);
    yield put({
      method: 'POST',
      type: ActionTypes.CREATE_BOOK_SUCCEEDED,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: ActionTypes.CREATE_BOOK_FAILED, message: error });
  }
}

export function* createBookWatcher() {
  yield takeEvery(ActionTypes.CREATE_BOOK_REQUESTED, createBook);
}
