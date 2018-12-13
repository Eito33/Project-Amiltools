import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

import './MenuLeftReport.css'

const MenuLeftReport = () => {

    return(
        <Fragment>
            <section className="navLeft col-lg-2">
                <ul className="list-unstyled navLeftContent">
                    <li><Link to='/'><i className="fas fa-tachometer-alt"></i> DashBoard</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-flag-checkered"></i> Report N°5</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-flag-checkered"></i> Report N°4</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-flag-checkered"></i> Report N°3</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-flag-checkered"></i> Report N°2</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-flag-checkered"></i> Report N°1</Link></li>
                </ul>
            </section>
        </Fragment>
    )
}

export default MenuLeftReport