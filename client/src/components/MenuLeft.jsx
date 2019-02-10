import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import '../styles/MenuLeft.css'

class MenuLeft extends Component{

    render(){
        return(
            <Fragment>
                <section className="navLeft col-lg-2">
                    <ul className="list-unstyled navLeftContent">
                        <Link to='/'><li><i className="fas fa-tachometer-alt"></i> DashBoard</li></Link>
                        <Link to='/calendar'><li><i className="fas fa-calendar-alt"></i> Calendar</li></Link>
                        <Link to='/report'><li><i className="fas fa-newspaper"></i> Report</li></Link>
                        <Link to='/task'><li><i className="fas fa-tasks"></i> Task</li></Link>
                        <Link to='/bugtracker'><li><i className="fas fa-bug"></i> BugTracker</li></Link>
                    </ul>
                </section>
            </Fragment>
        )
    }
}

export default withRouter(MenuLeft);