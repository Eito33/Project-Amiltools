import React, { Fragment } from 'react'

import './ReportView.css';
import MenuLeftReport from '../ReportView/MenuLeftReport/MenuLeftReport';

const ReportView = () => {

    return(
        <Fragment>
             <div className="container-fluid">
                <div className="row">
                <MenuLeftReport />
                
                <section className="mainContent col-lg-10">
                    <h2>Report</h2>
                    <hr />
                
                    <p>Voici la vue Report</p>
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default ReportView