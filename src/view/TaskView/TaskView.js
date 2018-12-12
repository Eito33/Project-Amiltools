import React, { Fragment } from 'react'

import './TaskView';
import MenuLeftTask from '../TaskView/MenuLeftTask/MenuLeftTask';

const TaskView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeftTask />
                
                <section className="mainContent col-lg-10">
                <h2>Task</h2>
                    <hr />
                
                    <p>Voici la vue Task</p>
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default TaskView