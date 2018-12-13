import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

import './MenuLeftBugTracker.css'

const MenuLeftBugTracker = () => {

    return(
        <Fragment>
            <section className="navLeft col-lg-2">
                <ul className="list-unstyled navLeftContent">
                    <li><Link to='/'><i className="fas fa-tachometer-alt"></i> DashBoard</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-plus"></i> Add Bug</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-edit"></i> Edit Bug</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-trash-alt"></i> Delete bug</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-eye"></i> View Bug</Link></li>
                </ul>
            </section>
        </Fragment>
    )
}

export default MenuLeftBugTracker