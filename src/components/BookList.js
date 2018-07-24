import React from 'react';

import BookListItem from './BookListItem';

const BookList = ({ books }) => books.map(book => <BookListItem book={book} key={book.id} />);

export default BookList;
