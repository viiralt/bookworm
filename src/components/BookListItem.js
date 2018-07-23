import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Wrapper, Text, HeadingSmall, Image as BookImage } from '../elements';

const BookDetail = ({ book }) => (
  <Wrapper>
    <Link
      to={{
        pathname: `/${book.name}`,
        state: {
          book,
        },
      }}
    >
      <BookWrapper>
        <BookContent>
          <HeadingSmall>Book title</HeadingSmall>
          <Text>Author</Text>
        </BookContent>
        <BookImage />
      </BookWrapper>
    </Link>
  </Wrapper>
);

const BookWrapper = styled.div``;

const BookContent = styled.div``;
