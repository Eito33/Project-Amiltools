import React, { Fragment } from 'react'

import './CardBoard.css'

const CardBoard = () => {

    return(
        <Fragment>
            <div className="row">
                    <div className="col-lg-4">
                        <div className="borderCardTop reportCardTop">
                            <p><i className="fas fa-newspaper"></i> <span>Report</span></p>
                        </div>
                        <div className="borderCardBot reportCardBot">
                            <p><a href="lienachanger.html">View Détails <i className="fas fa-angle-right"></i></a></p>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="borderCardTop bugCardTop">
                            <p><i className="fas fa-bug"></i> <span>Bug</span></p>
                        </div>
                        <div className="borderCardBot bugCardBot">
                            <p><a href="lienachanger.html">View Détails <i className="fas fa-angle-right"></i></a></p>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="borderCardTop taskCardTop">
                            <p><i className="fas fa-tasks"></i> <span>Task</span></p>
                        </div>
                        <div className="borderCardBot taskCardBot">
                            <p><a href="lienachanger.html">View Détails <i className="fas fa-angle-right"></i></a></p>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default CardBoard