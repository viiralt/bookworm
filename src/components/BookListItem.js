import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Wrapper, Text, HeadingSmall, Image as BookImage } from '../elements';

const BookListItem = ({ book }) => (
  <Wrapper>
    <Link
      to={{
        pathname: `/${book.title}`,
        state: {
          book,
        },
      }}
    >
      <BookWrapper>
        <BookContent>
          <HeadingSmall>{book.title}</HeadingSmall>
          <Text>{book.author}</Text>
        </BookContent>
        <BookImage />
      </BookWrapper>
    </Link>
  </Wrapper>
);

const BookWrapper = styled.div``;

const BookContent = styled.div``;

export default BookListItem;
