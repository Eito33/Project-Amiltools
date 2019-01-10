import React, {Component, Fragment} from 'react';

import '../../styles/Home.css'

import CardBoard from './CardBoard/CardBoard';
import ReportBoard from './ReportBoard/ReportBoard';
import BugTrackerBoard from './BugTrackerBoard/BugTrackerBoard';

class Home extends Component{
    render(){
        return(
            <Fragment>
                <h2>DashBoard</h2>
                    <hr />
                <CardBoard />
                <hr />
                <div className="alert alert-success" role="alert">
                    <strong>Well done!</strong> You build is 1.0.0:005 - CALENDAR COMPONENT
                </div>
                <ReportBoard />
                <BugTrackerBoard />
            </Fragment>
        )
    }
}

export default Home;