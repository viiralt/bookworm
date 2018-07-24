import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Heading, Text } from '../elements';
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
        <Heading>Welcome to Bookworm!</Heading>
        <Text>Hello world!</Text>
        <BookList books={books} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  isFetchingBooks: state.isFetchingBooks,
});

export default connect(mapStateToProps, { fetchBooks })(Dashboard);
