import React, { Component, Fragment } from 'react';

//Import Router
import NavBar from './core/modules/NavBar/NavBar';
import Router from './core/Router';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Router />
      </Fragment>
    );
  }
}

export default App;
