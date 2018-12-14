import React, { Fragment } from 'react'

import './TaskViewPopup.css';

const TaskViewPopup = ({view, sendFromDispatcher, contentTextarea}) => {

    const closeDiv = () => {
        document.getElementById('divhidden').style.display = 'none';
    }

    const handleChange = event => {
        const test = event.target.value
        console.log('Result : ', test);
        contentTextarea(test)

    }

    const selectViewTaskPopup = view => {
        if(view === 'View'){ //Vue Task
            return(
                <div>
                    <div className="titleTask">
                        Organize CSS in APP <span onClick={closeDiv} className="closeItem"><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="contentTask">
                        <p>{sendFromDispatcher ? 'Voici le nom du module charger par le dispatcher : ' + sendFromDispatcher : 'Aucun module charger...'}</p>
                        <hr />
                        <form>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input disabled type="text" className="form-control" id="title" placeholder="Organize CSS in APP" />
                                </div>
                            </div> 

                            <div className="form-group row">
                                <label htmlFor="assignedto" className="col-sm-2 col-form-label">Assigned To</label>
                                <div className="col-sm-10">
                                    <input disabled type="text" className="form-control" id="assignedto" placeholder="Gabin Rimbault" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="deadline" className="col-2 col-form-label">DeadLine</label>
                                <div className="col-10">
                                    <input disabled className="form-control" type="date" defaultValue="2018-12-15" id="deadline" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="priority" className="col-sm-2 col-form-label">Priority</label>
                                <div className="col-sm-10">
                                    <select disabled id="inputPriority" className="form-control">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="state" className="col-sm-2 col-form-label">State</label>
                                <div className="col-sm-10">
                                    <select disabled id="inputState" className="form-control">
                                        <option>In Progress</option>
                                        <option>Not Start</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="state" className="col-sm-2 col-form-label">Content</label>
                                <div className="contentAreaZone col-sm-10">
                                    <textarea disabled value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis tristique velit vitae iaculis. Nulla quis posuere sapien, id rhoncus sapien. Maecenas euismod lectus a consequat luctus. Donec tincidunt ex sit amet tristique efficitur. Pellentesque hendrerit imperdiet mi, ut aliquam quam lobortis eu. Integer nec lectus sit amet tellus porttitor faucibus. Nam mattis vestibulum lacus ut elementum. Etiam vitae interdum tortor, sit amet consectetur ipsum. Nam metus diam, porttitor eu tellus id, consectetur sollicitudin quam. Fusce lobortis arcu ac dolor cursus tincidunt. Proin sollicitudin dolor quis lorem pharetra vulputate." className="form-control"></textarea>
                                </div>
                            </div>

                            <hr/>
                            <div className="form-group row">
                                <div className="taskFormButton col-sm-10">
                                    <button type="submit" className="btn btn-outline-warning">Edit</button>
                                    <button type="submit" className="btn btn-outline-danger">Delete</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }else if(view === 'Edit'){ //Edition Task
            return(
                <div>
                    <div className="titleTask">
                        Organize CSS in APP <span onClick={closeDiv} className="closeItem"><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="contentTask">
                        <p>{sendFromDispatcher ? 'Voici le nom du module charger par le dispatcher : ' + sendFromDispatcher : 'Aucun module charger...'}</p>
                        <hr />
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
                                <label htmlFor="state" className="col-sm-2 col-form-label">Content</label>
                                <div className="contentAreaZone col-sm-10">
                                    <textarea onChange={handleChange} value={handleChange} className="form-control"></textarea>
                                </div>
                            </div>

                            <hr/>
                            <div className="form-group row">
                                <div className="taskFormButton col-sm-10">
                                    <button type="submit" className="btn btn-outline-success">Save</button>
                                    <button type="submit" className="btn btn-outline-danger">Delete</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }else if(view === 'Delete'){ //Suppresion Task
            return(
                <div>
                    <div className="titleDeleteTask">
                        Organize CSS in APP <span onClick={closeDiv} className="closeItem"><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="contentDeleteTask">

                        <p className="paragrapheDanger">Do you want to permanently delete : Organize CSS in APP </p>
                        <hr/>
                        <div className="form-group row">
                                <div className="taskFormButton col-sm-10">
                                    <button type="submit" className="btn btn-outline-danger">YES, DELETE</button>
                                    <button type="submit" className="btn btn-outline-info">NO, Go back</button>
                                </div>
                        </div>
                    </div>
                </div>
            )
        }else if(view === 'Archive'){ //Archive Task
            return(
                <div>
                    <div className="titleDeleteTask">
                        Organize CSS in APP <span onClick={closeDiv} className="closeItem"><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="contentDeleteTask">

                        <p className="paragrapheArchive">Do you want to archive : Organize CSS in APP </p>
                        <hr/>
                        <div className="form-group row">
                                <div className="taskFormButton col-sm-10">
                                    <button type="submit" className="btn btn-outline-success">YES, GOGO</button>
                                    <button type="submit" className="btn btn-outline-info">NO, please no ...</button>
                                </div>
                        </div>
                    </div>
                </div>
            )
        }else if(view === 'New'){ //New task
            return(
                <div>
                    <div className="titleTask">
                        Your Title <span onClick={closeDiv} className="closeItem"><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="contentTask">
                        <p>{sendFromDispatcher ? 'Voici le nom du module charger par le dispatcher : ' + sendFromDispatcher : 'Aucun module charger...'}</p>
                        <hr />
                        <form>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="title" placeholder="Enter your title" />
                                </div>
                            </div> 

                            <div className="form-group row">
                                <label htmlFor="assignedto" className="col-sm-2 col-form-label">Assigned To</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="assignedto" placeholder="Who is assigned to the task?" />
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
                                <label htmlFor="state" className="col-sm-2 col-form-label">Content</label>
                                <div className="contentAreaZone col-sm-10">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row">
                                <div className="taskFormButton col-sm-10">
                                    <button type="submit" className="btn btn-outline-success">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }


    return(
        <Fragment>
            {
                selectViewTaskPopup(view)
            }
        </Fragment>
    )
}

export default TaskViewPopup


/*




                */