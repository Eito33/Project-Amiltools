import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import Header from '../containers/Header';
import MenuLeft from './MenuLeft';

import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import Calendar from '../containers/Calendar';
import Report from '../containers/Report';
import Task from '../containers/Task';
import BugTracker from '../containers/BugTracker';
import Options from '../containers/Options';
import User from '../containers/User';
import NotFound from './NotFound'
import Connexion from '../containers/Connexion'


//Guards
import RequireisAuth from '../helpers/Require_isAuth'



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
          <MenuLeft />
            <section className="mainContent col-lg-10">
              <Switch>
                <Route exact path='/' component={RequireisAuth(Home)} />
                <Route exact path='/connexion' component={Connexion} />
                <Route exact path='/calendar' component={RequireisAuth(Calendar)} />
                <Route exact path='/report' component={RequireisAuth(Report)} />
                <Route exact path='/task' component={RequireisAuth(Task)} />
                <Route exact path='/bugtracker' component={RequireisAuth(BugTracker)} />
                <Route exact path='/options' component={RequireisAuth(Options)} />
                <Route exact path='/user' component={RequireisAuth(User)} />
                <Route component={NotFound} />
              </Switch>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
