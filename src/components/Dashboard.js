import React, { Component } from 'react';

import { Wrapper, Heading, Text } from '../elements';

export default class Dashboard extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>Welcome to Bookworm!</Heading>
        <Text>Hello world!</Text>
      </Wrapper>
    );
  }
}
