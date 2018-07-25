import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import bookReducer from './reducers/bookReducer';
import fetchBooksSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(bookReducer, enhancers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchBooksSaga);

export default store;
