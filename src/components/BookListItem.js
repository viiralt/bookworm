import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CoverSmall } from '../elements';

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
  margin: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  transition: box-shadow 0.3s;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;

const CoverContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

export default BookListItem;
