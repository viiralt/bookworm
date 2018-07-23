import React, { Component } from 'react';

import Dashboard from './components/Dashboard';
import { AppWrapper } from './elements';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Dashboard />
      </AppWrapper>
    );
  }
}

export default App;
