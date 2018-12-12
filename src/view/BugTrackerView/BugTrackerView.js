import React, { Fragment } from 'react'

import './BugTrackerView';
import BugTrackerBoard from '../Home/BugTrackerBoard/BugTrackerBoard';
import MenuLeftBugTracker from '../BugTrackerView/MenuLeftBugTracker/MenuLeftBugTracker';

const BugTrackerView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeftBugTracker />
                
                <section className="mainContent col-lg-10">
                    <BugTrackerBoard />
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default BugTrackerView