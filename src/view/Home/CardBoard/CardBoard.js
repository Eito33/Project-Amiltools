import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

import './CardBoard.css'

const CardBoard = () => {

    return(
        <Fragment>
            <div className="row">
                    <div className="col-lg-4">
                        <div className="borderCardTop reportCardTop">
                            <p><i className="fas fa-newspaper"></i> <span>5 Reports</span></p>
                        </div>
                        <div className="borderCardBot reportCardBot">
                            <p><Link to='/report/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="borderCardTop bugCardTop">
                            <p><i className="fas fa-bug"></i> <span>2 Bugs</span></p>
                        </div>
                        <div className="borderCardBot bugCardBot">
                            <p><Link to='/bugtracker/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="borderCardTop taskCardTop">
                            <p><i className="fas fa-tasks"></i> <span>7 Tasks</span></p>
                        </div>
                        <div className="borderCardBot taskCardBot">
                            <p><Link to='/task/'>View Détails <i className="fas fa-angle-right"></i></Link></p>  
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default CardBoard