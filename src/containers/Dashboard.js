import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchBooks } from '../store/actions/actionCreators';
import { Heading, Text, Button } from '../elements';
import BookList from '../components/BookList';

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
          <Text>Revel in some of the most renowned stories ever to have been penned</Text>
          <Text>..or add your very own!</Text>
          <Link
            to={{
              pathname: `/create`,
            }}
          >
            <Button>Add a book</Button>
          </Link>
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
  margin-top: 4rem;
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
`;
