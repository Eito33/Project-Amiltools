import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

import './TaskView.css'

import MenuLeftTask from '../TaskView/MenuLeftTask/MenuLeftTask';

const TaskView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeftTask />
                
                <section className="mainContent col-lg-10">
                    <p className="menuReportButton">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Task</button> 
                    </p>
                    <hr />
                
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Assigned to</th>
                                        <th scope="col">DeadLine</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                            <td>Organize CSS in APP</td>
                                            <td>Gabin Rimbault</td>
                                            <td className="taskRed">15/12/2018</td>
                                            <td className="taskGreen">In Progress</td>
                                            <td className="iconTask">
                                                <Link to="/task/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/task/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/task/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                            <td>Finish Squellete HTML in APP</td>
                                            <td>Gabin Rimbault</td>
                                            <td className="taskOrange">17/12/2018</td>
                                            <td className="taskRed">Not Start</td>
                                            <td className="iconTask">
                                                <Link to="/task/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/task/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/task/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                            <td>Dev Calendar with JS ES6</td>
                                            <td>Gabin Rimbault</td>
                                            <td className="taskGreen">21/12/2018</td>
                                            <td className="taskGreen">In Progress</td>
                                            <td className="iconTask">
                                                <Link to="/task/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/task/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/task/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                            </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default TaskView