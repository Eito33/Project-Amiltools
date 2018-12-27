import React, {Component, Fragment} from 'react';

import './BugTrackerBoard.css'

class BugTrackerBoard extends Component{
    render(){
        return(
            <Fragment>
                <hr />
                <section className="bugtracker">
                        <h2>BugTracker</h2>
                        <hr />
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Priority</th>
                                    <th>Category</th>
                                    <th>Project</th>
                                    <th>Created</th>
                                </tr> 
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Project New</td>
                                    <td>Low</td>
                                    <td>Web</td>
                                    <td>AmilTool</td>
                                    <td>27/07/2017</td>
                                </tr>
                                <tr>
                                    <td>Project New</td>
                                    <td>Low</td>
                                    <td>Web</td>
                                    <td>AmilTool</td>
                                    <td>27/07/2017</td>
                                </tr>
                                <tr>
                                    <td>Project New</td>
                                    <td>Low</td>
                                    <td>Web</td>
                                    <td>AmilTool</td>
                                    <td>27/07/2017</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </section>
            </Fragment>
        )
    }
}

export default BugTrackerBoard;