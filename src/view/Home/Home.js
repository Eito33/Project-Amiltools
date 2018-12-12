import React, { Fragment } from 'react'

import './Home.css'

//Import view for Home
import CardBoard from '../Home/CardBoard/CardBoard';
import MenuLeft from '../../core/modules/MenuLeft/MenuLeft';
import ReportBoard from '../Home/ReportBoard/ReportBoard';
import BugTrackerBoard from '../Home/BugTrackerBoard/BugTrackerBoard';

const Home = () => {

    return(
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                <MenuLeft />
                
                <section className="mainContent col-lg-10">
                    <h2>DashBoard</h2>
                    <hr />
                
                <CardBoard />
                <ReportBoard />
                <BugTrackerBoard />
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default Home