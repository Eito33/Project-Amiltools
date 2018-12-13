import React, { Fragment } from 'react'

import '../TaskView/TaskView.css'
import './BugTrackerView.css'
import {Link} from 'react-router-dom';
import MenuLeftBugTracker from '../BugTrackerView/MenuLeftBugTracker/MenuLeftBugTracker';

const BugTrackerView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeftBugTracker />
                
                <section className="mainContent col-lg-10">
                    <p className="menuReportButton">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Bug</button> 
                    </p>
                    <hr />
                
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Assigned to</th>
                                        <th scope="col">Priority</th>
                                        <th scope="col">Context</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                            <td>Gabin Rimbault</td>
                                            <td className="priorityGreen">Low</td>
                                            <td>Web</td>
                                            <td>15/12/2018</td>
                                            <td className="iconTask">
                                                <Link to="/bugtracker/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/bugtracker/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/bugtracker/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                                <Link to="/bugtracker/"><i className="iconCheck fas fa-check"></i></Link>
                                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                            <td>Gabin Rimbault</td>
                                            <td className="priorityOrange">Medium</td>
                                            <td>Web</td>
                                            <td>15/12/2018</td>
                                            <td className="iconTask">
                                                <Link to="/bugtracker/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/bugtracker/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/bugtracker/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                                <Link to="/bugtracker/"><i className="iconCheck fas fa-check"></i></Link>
                                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                            <td>Gabin Rimbault</td>
                                            <td className="priorityRed">High</td>
                                            <td>Web</td>
                                            <td>15/12/2018</td>
                                            <td className="iconTask">
                                                <Link to="/bugtracker/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/bugtracker/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/bugtracker/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                                <Link to="/bugtracker/"><i className="iconCheck fas fa-check"></i></Link>
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

export default BugTrackerView