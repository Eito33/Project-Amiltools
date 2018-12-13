import React, { Component, Fragment } from 'react'

import TaskView from '../../../view/TaskView/TaskView';

class TaskComponent extends Component {
    render() {
        return(
            <Fragment>
                <TaskView />
            </Fragment>
        )
    }
}

export default TaskComponent