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
                        <p className="menuReportButton">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">New Report</button> 
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Edit Report</button> 
                            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Delete Report</button> 
                        </p>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="titleReportContent">
                                Report N°6 <span className="dateReport">: 12/12/2018</span>
                            </div>
                            <div className="cardReportContent">
                                Contenu du report
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </Fragment>
    )
}

export default ReportView