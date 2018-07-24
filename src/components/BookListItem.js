import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Text, HeadingSmall, CoverSmall } from '../elements';

const BookListItem = ({ book }) => (
  <ContentContainer>
    <Link
      to={{
        pathname: `/${book.title}`,
        state: {
          book,
        },
      }}
    >
      <CoverContainer>
        <CoverSmall src={book.image} />
      </CoverContainer>
    </Link>
  </ContentContainer>
);

const ContentContainer = styled.div`
  background-color: papayawhip;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CoverContainer = styled.div`
  display: flex;

  margin: 1rem;
`;

export default BookListItem;
