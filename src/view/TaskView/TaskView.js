import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

import './TaskView.css'

import MenuLeftTask from '../TaskView/MenuLeftTask/MenuLeftTask';

const TaskView = ({receivedClic, sendFromDispatcher}) => {

    //Methode qui permet l'envoie d'une information via un clic au composant parents
    const sendClick = information => {
        receivedClic(information)
        document.getElementById('divhidden').style.display = 'block';
    }

    const closeDiv = () => {
        document.getElementById('divhidden').style.display = 'none';
    }

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeftTask />
                
                <section className="mainContent col-lg-10">
                    <p className="menuReportButton">
                        <button onClick={event => sendClick('view')} className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Task</button> 
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
                                        <th scope="col">Priority</th>
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
                                            <td className="lowPriority">Low</td>
                                            <td className="priorityRed">15/12/2018</td>
                                            <td className="priorityGreen">In Progress</td>
                                            <td className="iconTask">
                                                <Link to="/task/"><i onClick={event => sendClick('view')} className="iconView fas fa-eye"></i></Link>
                                                <Link to="/task/"><i onClick={event => sendClick('edit')} className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/task/"><i onClick={event => sendClick('del')} className="iconDelete fas fa-trash-alt"></i></Link> 
                                                <Link to="/task/"><i onClick={event => sendClick('archiver')} className="iconCheck fas fa-check"></i></Link>
                                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                            <td>Finish Squellete HTML in APP</td>
                                            <td>Gabin Rimbault</td>
                                            <td className="mediumPriority">Medium</td>
                                            <td className="priorityOrange">17/12/2018</td>
                                            <td className="priorityRed">Not Start</td>
                                            <td className="iconTask">
                                                <Link to="/task/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/task/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/task/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                                <Link to="/task/"><i className="iconCheck fas fa-check"></i></Link>
                                            </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                            <td>Dev Calendar with JS ES6</td>
                                            <td>Gabin Rimbault</td>
                                            <td className="highPriority">High</td>
                                            <td className="priorityGreen">21/12/2018</td>
                                            <td className="priorityGreen">In Progress</td>
                                            <td className="iconTask">
                                                <Link to="/task/"><i className="iconView fas fa-eye"></i></Link> 
                                                <Link to="/task/"><i className="iconEdit fas fa-edit"></i></Link>
                                                <Link to="/task/"><i className="iconDelete fas fa-trash-alt"></i></Link> 
                                                <Link to="/task/"><i className="iconCheck fas fa-check"></i></Link>
                                            </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <div id='divhidden'>
                    <div className="titleTask">
                        Organize CSS in APP <span onClick={closeDiv} className="closeItem"><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="contentTask">
                        <p>{sendFromDispatcher ? 'Voici le nom du module charger : ' + sendFromDispatcher : 'Aucun module charger...'}</p>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="title" placeholder="Organize CSS in APP" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="assignedto" className="col-sm-2 col-form-label">Assigned To</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="assignedto" placeholder="Gabin Rimbault" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="assignedto" className="col-sm-2 col-form-label">Assigned To</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="assignedto" placeholder="Gabin Rimbault" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="deadline" className="col-2 col-form-label">DeadLine</label>
                                <div className="col-10">
                                    <input className="form-control" type="date" defaultValue="2018-12-15" id="deadline" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="priority" className="col-sm-2 col-form-label">Priority</label>
                                <div className="col-sm-10">
                                    <select id="inputPriority" className="form-control">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="state" className="col-sm-2 col-form-label">State</label>
                                <div className="col-sm-10">
                                    <select id="inputState" className="form-control">
                                        <option>In Progress</option>
                                        <option>Not Start</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="taskFormButton col-sm-10">
                                    <button type="submit" className="btn btn-outline-success">Save</button>
                                    <button type="submit" className="btn btn-outline-danger">Delete</button>
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TaskView