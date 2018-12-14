import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

import './TaskView.css'

import MenuLeft from '../../core/modules/MenuLeft/MenuLeft';
import TaskViewPopup from '../TaskView/View/TaskViewPopup/TaskViewPopup'

const TaskView = ({receivedClic, sendFromDispatcher, contentTextarea}) => {
    //Methode qui permet l'envoie d'une information via un clic au composant parents
    const sendClick = information => {
        receivedClic(information)
        document.getElementById('divhidden').style.display ='block'
    }

    const selectDisplayPopup = information => {
        return <TaskViewPopup contentTextarea={contentTextarea} view={information} sendFromDispatcher={sendFromDispatcher} />
    }

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeft />
                
                <section className="mainContent col-lg-10">
                    <p className="menuReportButton">
                        <button onClick={event => sendClick('new')} className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Task</button> 
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
                                                <Link to="/task/"><i onClick={event => sendClick('archive')} className="iconCheck fas fa-check"></i></Link>
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
                        {selectDisplayPopup(sendFromDispatcher)}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TaskView