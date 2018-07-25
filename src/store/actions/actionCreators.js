import * as ActionTypes from './actionTypes';

export const fetchBooks = () => ({
  type: ActionTypes.FETCH_BOOKS_REQUESTED,
});

export const createBook = book => ({
  type: ActionTypes.CREATE_BOOK_REQUESTED,
  payload: book,
});
