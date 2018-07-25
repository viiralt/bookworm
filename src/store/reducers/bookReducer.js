import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  books: [],
  createdBooks: [],
  isFetchingBooks: true,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BOOKS_SUCCEEDED: {
      return {
        ...state,
        books: action.payload,
        isFetchingBooks: false,
      };
    }
    case ActionTypes.CREATE_BOOK_SUCCEEDED: {
      return {
        ...state,
        createdBooks: action.payload,
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
