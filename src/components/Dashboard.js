import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Heading, Text } from '../elements';
import { fetchBooks } from '../store/actions/actionCreators';
import BookList from './BookList';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { isFetchingBooks, books } = this.props;

    if (isFetchingBooks) {
      return <p>Loading...</p>;
    }
    return (
      <Wrapper>
        <DashWrapper>
          <Heading>Welcome to Bookworm!</Heading>
          <Text>Hello world!</Text>
        </DashWrapper>
        <BookListWrapper>
          <BookList books={books} />
        </BookListWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  isFetchingBooks: state.isFetchingBooks,
});

export default connect(mapStateToProps, { fetchBooks })(Dashboard);

const Wrapper = styled.div`
  flex: 1;
`;
const DashWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 15rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const BookListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: pink;
`;
