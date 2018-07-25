import React, { Component } from 'react';
import styled from 'styled-components';

import { HeadingSmall, Text, Cover } from '../elements';

export default class BookDetail extends Component {
  render() {
    const { location } = this.props;
    const { book } = location.state;
    return (
      <Wrapper>
        <CoverContainer>
          <Cover src={book.image} />
        </CoverContainer>
        <ContentContainer>
          <HeadingSmall>{book.title}</HeadingSmall>
          <Text>{book.author}</Text>
          <Text>€{book.price}</Text>
        </ContentContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  height: 600px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 40%;
  margin-left: 1rem;
`;

const CoverContainer = styled.div``;
