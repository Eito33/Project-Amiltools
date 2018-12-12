import React, { Fragment } from 'react'

import './CalendarView.css';
import MenuLeft from '../../core/modules/MenuLeft/MenuLeft'

const CalendarView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeft />
                
                <section className="mainContent col-lg-10">
                    <h2>Calendar</h2>
                    <hr />
                
                    <p>Voici la vue Calendar</p>
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default CalendarView