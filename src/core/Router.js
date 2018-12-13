import React, { Component, Fragment } from 'react'
<<<<<<< HEAD

//Import All View
import Home from '../view/Home/Home';

//Import Router
import {Switch, Route} from 'react-router-dom';
import NotFound from './modules/NotFound/NotFound'
>>>>>>> master

//Import Component
import UserComponent from './components/UserComponent/UserComponent';
import ReportComponent from './components/ReportComponent/ReportComponent';
import BugTrackerComponent from './components/BugTrackerComponent/BugTrackerComponent';
import CalendarComponent from '../core/components/CalendarComponent/CalendarComponent';
import TaskComponent from '../core/components/TaskComponent/TaskComponent';

class Router extends Component {
    render() {
        return(
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/calendar/' component={CalendarComponent} />
                    <Route exact path='/report/' component={ReportComponent} />
                    <Route exact path='/task/' component={TaskComponent} />
                    <Route exact path='/bugtracker/' component={BugTrackerComponent} />
                    <Route exact path='/user/' component={UserComponent} />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        )
    }
}

export default Router