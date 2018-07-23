import React from 'react';

import BookDetail from './BookDetail';

const BookList = ({ books }) => books.map(book => <BookDetail book={book} key={book.id} />);

export default BookList;
