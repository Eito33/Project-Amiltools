import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

import '../styles/MenuLeft.css'

class MenuLeft extends Component{
    render(){
        return(
            <Fragment>
                <section className="navLeft col-lg-2">
                    <ul className="list-unstyled navLeftContent">
                        <li><Link to='/'><i className="fas fa-tachometer-alt"></i> DashBoard</Link></li>
                        <li><Link to='/calendar'><i className="fas fa-calendar-alt"></i> Calendar</Link></li>
                        <li><Link to='/report'><i className="fas fa-newspaper"></i> Report</Link></li>
                        <li><Link to='/task'><i className="fas fa-tasks"></i> Task <i className="icon-nav-right fas fa-angle-right"></i></Link></li>
                        <li><Link to='/bugtracker'><i className="fas fa-bug"></i> BugTracker <i className="icon-nav-right fas fa-angle-right"></i></Link></li>
                    </ul>
                </section>
            </Fragment>
        )
    }
}

export default MenuLeft;