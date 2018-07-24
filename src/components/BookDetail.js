import React, { Component } from 'react';
import styled from 'styled-components';

import { HeadingSmall, Text } from '../elements';

export default class BookDetail extends Component {
  render() {
    return (
      <Wrapper>
        <HeadingSmall>BookDetail</HeadingSmall>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
