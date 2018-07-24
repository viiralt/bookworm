import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BookDetail from './components/BookDetail';
import BookCreate from './components/BookCreate';
import Dashboard from './components/Dashboard';
import ErrorPath from './components/ErrorPath';

import { AppWrapper } from './elements';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/create" exact component={BookCreate} />
            <Route path="/:book" component={BookDetail} />
            <Route component={ErrorPath} />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
