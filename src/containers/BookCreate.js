import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { HeadingSmall, Button } from '../elements';
import { createBook } from '../store/actions/actionCreators';

class BookCreate extends Component {
  state = {
    id: '',
    image: '',
    title: '',
    author: '',
    price: '',
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  handleButtonClick = () => {
    const { id, image, title, author, price } = this.state;
    const { createBook } = this.props;
    createBook(this.state);
  };

  render() {
    const { id, image, title, author, price } = this.state;
    return (
      <FormContainer>
        <Form onSubmit={this.onSubmit}>
          <HeadingSmall>Id</HeadingSmall>
          <Input
            name="id"
            value={id}
            type="text"
            onChange={this.onChange}
            placeholder="psst...write '26'"
          />
          <HeadingSmall>Image</HeadingSmall>
          <Input
            name="image"
            value={image}
            type="text"
            onChange={this.onChange}
            placeholder="please enter image url"
          />
          <HeadingSmall>Title</HeadingSmall>
          <Input name="title" value={title} type="text" onChange={this.onChange} />
          <HeadingSmall>Author</HeadingSmall>
          <Input name="author" value={author} type="text" onChange={this.onChange} />
          <HeadingSmall>Price</HeadingSmall>
          <Input
            name="price"
            value={price}
            type="text"
            onChange={this.onChange}
            placeholder="e.g. 4.99"
          />
        </Form>
        <Button onClick={this.handleButtonClick} type="submit">
          Submit
        </Button>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => ({
  createdBooks: state.createdBooks,
});

export default connect(mapStateToProps, { createBook })(BookCreate);

const FormContainer = styled.div`
  display: flex;
  width: 60%;
  height: 85vh;
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: box-shadow 0.3s;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;

const Form = styled.form`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex: 1;
  height: 2.4rem;
  width: 15rem;
  cursor: text;
  margin: 1rem 0;
  border-style: none;
  font-family: Cardo;
  border-radius: 4px;
  padding-left: 1rem;
  transition: box-shadow 0.3s;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;
