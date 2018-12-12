import React, { Component, Fragment } from 'react'

//Import All View
import Home from '../view/Home/Home';

//Import Router
import {Switch, Route} from 'react-router-dom';
import CalendarView from '../view/CalendarView/CalendarView';
import ReportView from '../view/ReportView/ReportView';
import TaskView from '../view/TaskView/TaskView';
import BugTrackerView from '../view/BugTrackerView/BugTrackerView';
import UserView from '../view/UserView/UserView';
import NotFound from './modules/NotFound/NotFound'

class Router extends Component {
    render() {
        return(
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/calendar/' component={CalendarView} />
                    <Route exact path='/report/' component={ReportView} />
                    <Route exact path='/task/' component={TaskView} />
                    <Route exact path='/bugtracker/' component={BugTrackerView} />
                    <Route exact path='/user/' component={UserView} />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        )
    }
}

export default Router