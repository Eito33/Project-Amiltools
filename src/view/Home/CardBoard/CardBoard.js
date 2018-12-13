import React, { Fragment } from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
>>>>>>> master

import './CardBoard.css'

const CardBoard = () => {

    return(
        <Fragment>
            <div className="row">
                    <div className="col-lg-4">
                        <div className="borderCardTop reportCardTop">
<<<<<<< HEAD
                            <p><i className="fas fa-newspaper"></i> <span>5 Reports</span></p>
                        </div>
                        <div className="borderCardBot reportCardBot">
                            <p><Link to='/report/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
=======
                            <p><i className="fas fa-newspaper"></i> <span>Report</span></p>
                        </div>
                        <div className="borderCardBot reportCardBot">
                            <p><a href="lienachanger.html">View Détails <i className="fas fa-angle-right"></i></a></p>
>>>>>>> master
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="borderCardTop bugCardTop">
<<<<<<< HEAD
                            <p><i className="fas fa-bug"></i> <span>2 Bugs</span></p>
                        </div>
                        <div className="borderCardBot bugCardBot">
                            <p><Link to='/bugtracker/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
=======
                            <p><i className="fas fa-bug"></i> <span>Bug</span></p>
                        </div>
                        <div className="borderCardBot bugCardBot">
                            <p><a href="lienachanger.html">View Détails <i className="fas fa-angle-right"></i></a></p>
>>>>>>> master
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="borderCardTop taskCardTop">
<<<<<<< HEAD
                            <p><i className="fas fa-tasks"></i> <span>7 Tasks</span></p>
                        </div>
                        <div className="borderCardBot taskCardBot">
                            <p><Link to='/task/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
=======
                            <p><i className="fas fa-tasks"></i> <span>Task</span></p>
                        </div>
                        <div className="borderCardBot taskCardBot">
                            <p><a href="lienachanger.html">View Détails <i className="fas fa-angle-right"></i></a></p>
>>>>>>> master
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default CardBoard