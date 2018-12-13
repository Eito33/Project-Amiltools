import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

import './MenuLeftTask.css'

const MenuLeftTask = () => {

    return(
        <Fragment>
            <section className="navLeft col-lg-2">
                <ul className="list-unstyled navLeftContent">
                    <li><Link to='/'><i className="fas fa-tachometer-alt"></i> DashBoard</Link></li>
<<<<<<< HEAD
                    <li><Link to='/notfound/'><i className="fas fa-plus"></i> Add Task</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-edit"></i> Edit Task</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-trash-alt"></i> Delete Task</Link></li>
                    <li><Link to='/notfound/'><i className="fas fa-eye"></i> View Task</Link></li>
=======
                    <li><Link to='/notfound/'><i class="fas fa-plus"></i> Add Task</Link></li>
                    <li><Link to='/notfound/'><i class="fas fa-edit"></i> Edit Task</Link></li>
                    <li><Link to='/notfound/'><i class="fas fa-trash-alt"></i> Delete Task</Link></li>
                    <li><Link to='/notfound/'><i class="fas fa-eye"></i> View Task</Link></li>
>>>>>>> master
                </ul>
            </section>
        </Fragment>
    )
}

export default MenuLeftTask