import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  books: [],
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
    default:
      return state;
  }
};

export default bookReducer;
