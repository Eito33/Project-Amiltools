import React, { Component, Fragment } from 'react'
<<<<<<< HEAD

//Import All View
import Home from '../view/Home/Home';

//Import Router
import {Switch, Route} from 'react-router-dom';
import NotFound from './modules/NotFound/NotFound'

//Import Component
import UserComponent from './components/UserComponent/UserComponent';
import ReportComponent from './components/ReportComponent/ReportComponent';
import BugTrackerComponent from './components/BugTrackerComponent/BugTrackerComponent';
import CalendarComponent from '../core/components/CalendarComponent/CalendarComponent';
import TaskComponent from '../core/components/TaskComponent/TaskComponent';
=======

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
>>>>>>> master

class Router extends Component {
    render() {
        return(
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
<<<<<<< HEAD
                    <Route exact path='/calendar/' component={CalendarComponent} />
                    <Route exact path='/report/' component={ReportComponent} />
                    <Route exact path='/task/' component={TaskComponent} />
                    <Route exact path='/bugtracker/' component={BugTrackerComponent} />
                    <Route exact path='/user/' component={UserComponent} />
=======
                    <Route exact path='/calendar/' component={CalendarView} />
                    <Route exact path='/report/' component={ReportView} />
                    <Route exact path='/task/' component={TaskView} />
                    <Route exact path='/bugtracker/' component={BugTrackerView} />
                    <Route exact path='/user/' component={UserView} />
>>>>>>> master
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        )
    }
}

export default Router